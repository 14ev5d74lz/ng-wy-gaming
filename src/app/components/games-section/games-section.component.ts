import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game, GameCategory, GamesConstant } from 'src/app/interfaces/games.interface';

@Component({
  selector: 'games-section',
  templateUrl: './games-section.component.html',
  styleUrls: ['./games-section.component.css']
})
export class GamesSectionComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() limit: number | undefined;
  @Input() browserAll: boolean | undefined;
  public gameCategories: GameCategory[] | undefined;
  public games: Game[] | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.gameCategories = GamesConstant.GAME_CATEGORIES;

    let selected = this.gameCategories.find((category) => category.selected);
    if (!selected) {
      let _default = this.gameCategories.find((category) => category.default);
      if (_default)
        _default.selected = true;
    }

    this.filterData();
  }

  filterData() {
    let selected = this.gameCategories?.find((category) => category.selected);
    if (selected) {
      let code = selected.code;
      if (code == "ALL")
        this.games = GamesConstant.GAMES;
      else
        this.games = GamesConstant.GAMES.filter((game) => game.categoryCode == code);

      if (this.limit)
        this.games = this.games.slice(0, this.limit);
    }
  }

  clickCategory(selected: GameCategory) {
    this.gameCategories?.forEach((category) => {
      category.selected = category.code == selected.code;
    })

    this.filterData();
  }

  async clickBrowseAll() {
    await this.router.navigate(["/games"]);
  }

}
