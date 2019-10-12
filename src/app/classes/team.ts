import {Pokemon} from './pokemon';
import {TypeChart} from './type-chart';
import {Type} from './type.enum';

export class Team {
  TeamList: Array<Pokemon>;
  typeChart: TypeChart;

  static combineStrength(array1: Array<number>, array2: Array<number>, type2: boolean) {
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] === 2) {
        if (type2 === false || array1[i] !== 1) {
          array1[i]++;
        }
      }
      if (array2[i] === 0.5 || array2[i] === 0) {
        if (type2 === false || array1[i] !== -1) {
          array1[i]--;
        }
      }
    }
    return array1;
  }
  static combineWeakness(array1: Array<number>, array2: Array<number>, type2: boolean) {
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] === 2) {
        if (type2 === false || array1[i] !== -1) {
          array1[i]--;
        }
      }
      if (array2[i] === 0.5 || array2[i] === 0) {
        if (type2 === false || array1[i] !== 1) {
          array1[i]++;
        }
      }
    }
    return array1;
  }

  static combineArrays(array1: Array<number>, array2: Array<number>) {
    for (let i = 0; i < array1.length; i++) {
      array1[i] += array2[i];
    }
    return array1;
  }

  constructor() {
    this.TeamList = [new Pokemon(), new Pokemon(), new Pokemon(), new Pokemon(), new Pokemon(), new Pokemon()];
    this.typeChart = new TypeChart();
  }

  CalculateElemental() {
    let CombinedElementalStrength = Array<number>(18).fill(0);
    let CombineElementalWeakness = Array<number>(18).fill(0);

    for (const pokemon of this.TeamList) {
      let elementalStrength = Array<number>(18).fill(0);
      let elementalWeakness = Array<number>(18).fill(0);
      if (pokemon.Type1 !== 'none') {
        elementalStrength = Team.combineStrength(elementalStrength, this.typeChart.returnStrenght(Type[pokemon.Type1]), false);
        elementalWeakness = Team.combineWeakness(elementalWeakness, this.typeChart.returnWeakness(Type[pokemon.Type1]), false);
      }
      if (pokemon.Type2 !== 'none' && pokemon.Type2 !== pokemon.Type1) {
        elementalStrength = Team.combineStrength(elementalStrength, this.typeChart.returnStrenght(Type[pokemon.Type2]), true);
        elementalWeakness = Team.combineWeakness(elementalWeakness, this.typeChart.returnWeakness(Type[pokemon.Type2]), true);
      }
      CombinedElementalStrength = Team.combineArrays(CombinedElementalStrength, elementalStrength);
      CombineElementalWeakness = Team.combineArrays(CombineElementalWeakness, elementalWeakness);
    }
    return new Array<Array<number>>(CombinedElementalStrength, CombineElementalWeakness);
  }
}
