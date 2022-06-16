import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant, Language, NavItem } from 'src/app/interfaces/app.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navItems: NavItem[] | undefined;
  public supportedLanguages: Language[] | undefined;

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.navItems = AppConstant.NAV_ITEMS.filter((item) => item.showInHeader);
    this.supportedLanguages = AppConstant.SUPPORTED_LANGUAGES;

    this.translateService.onLangChange.subscribe((value) => {
      let selected = AppConstant.SUPPORTED_LANGUAGES.find((language) => language.code == value.lang);

      if (selected)
        this.clickLanguage(selected);
    })
  }

  clickNavItem(selected: NavItem) {
    this.navItems?.forEach((item) => {
      item.selected = item.code == selected.code;
    })
  }

  clickLanguage(selected: Language, event?: Event) {
    event?.preventDefault();
    event?.stopImmediatePropagation();

    this.supportedLanguages?.forEach((language) => {
      language.selected = language.code == selected.code;

      if (language.selected)
        this.translateService.use(language.code);
    })
  }

}
