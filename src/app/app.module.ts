import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamTypesComponent } from './teamTypes/teamTypes.component';
import { TypeDropDownComponent } from './teamTypes/modules/type-drop-down/type-drop-down.component';
import { ElementalStatComponent } from './teamTypes/modules/elemental-stat/elemental-stat.component';
import { AppRoutingModule } from './app-routing.module';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamTypesComponent,
    TypeDropDownComponent,
    ElementalStatComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
