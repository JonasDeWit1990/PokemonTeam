import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamTypesComponent } from './teamTypes/teamTypes.component';
import {BattleComponent} from './battle/battle.component';

const routes: Routes = [
  { path: 'teamTypes', component: TeamTypesComponent },
  { path: 'battle', component: BattleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
