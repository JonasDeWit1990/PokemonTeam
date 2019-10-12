import { Component, OnInit } from '@angular/core';
import {Team} from '../classes/team';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
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
