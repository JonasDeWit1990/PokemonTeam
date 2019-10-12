import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TypeDropDownComponent } from './type-drop-down/type-drop-down.component';
import { ElementalStatComponent } from './elemental-stat/elemental-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TypeDropDownComponent,
    ElementalStatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
