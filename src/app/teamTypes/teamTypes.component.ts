import { Component, OnInit } from '@angular/core';
import {Team} from './classes/team';

@Component({
  selector: 'app-team-types',
  templateUrl: './teamTypes.component.html',
  styleUrls: ['./teamTypes.component.css']
})
export class TeamTypesComponent implements OnInit {
  team: Team;
  elementalArray: Array<Array<number>>;

  constructor() {
    this.team = new Team();
  }

  ngOnInit() {
    this.elementalArray = Array<Array<number>>(Array<number>(18).fill(0), Array<number>(18).fill(0));
  }

  Type1Selection(pokemon: number, Type: string): void {
    this.team.TeamList[pokemon].Type1 = Type;
    this.elementalArray = this.team.CalculateElemental();
  }

  Type2Selection(pokemon: number, Type: string): void {
    this.team.TeamList[pokemon].Type2 = Type;
    this.elementalArray = this.team.CalculateElemental();
  }
}
