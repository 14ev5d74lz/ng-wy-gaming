import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AppConstant } from './interfaces/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-wy-gaming';

  constructor(
    private translateService: TranslateService
  ) {
    this.initLanguage();
  }

  initLanguage() {
    this.translateService.setDefaultLang(environment.language);
    let lang = environment.language;
    let supportedLangs = AppConstant.SUPPORTED_LANGUAGES.map((language) => language.code);

    let systemLang = this.translateService.getBrowserLang();
    if (systemLang && supportedLangs.includes(systemLang)) {
      lang = systemLang;
    }

    lang = "zh";

    this.translateService.use(lang);
  }
}
