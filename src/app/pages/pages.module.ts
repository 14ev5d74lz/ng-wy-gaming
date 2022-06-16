import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AboutUsComponent,
    GamesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    ComponentsModule
  ]
})
export class PagesModule { }
