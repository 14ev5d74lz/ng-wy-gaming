import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { GamesSectionComponent } from './games-section/games-section.component';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  GameCardComponent,
  GamesSectionComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: components
})
export class ComponentsModule { }
