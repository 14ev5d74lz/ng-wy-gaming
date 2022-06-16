import { Component, Input, OnInit } from '@angular/core';
import { Game, GamesConstant } from 'src/app/interfaces/games.interface';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() game: Game | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.game) {
      let code = this.game.categoryCode;
      this.game.category = this.game.category
        ? this.game.category
        : GamesConstant.GAME_CATEGORIES.find((category) => category.code == code);

      if (!this.game.category) {
        this.game.category = GamesConstant.GAME_CATEGORIES.find((category) => category.code == "OTHER");
      }
    } else {
      throw new Error("Game object not found.")
    }
  }

  clickPlayNow() {
    /** TODO: Open games link */
  }

}
