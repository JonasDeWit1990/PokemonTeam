import {Stats} from './stats';

export class Pokemon {
  Type1: string;
  Type2: string;
  level: number;
  baseStats: Stats;
  actualStats: Stats;
  private iv: Stats;
  private ev: Stats;

  private static calculateStat(baseStat: number, iv: number, ev: number, level: number, nature: number, hpStat: boolean) {
    if (hpStat) {
      return ((2 * baseStat + iv + (ev / 4)) * level / 100) + level + 10;
    }
    return (((2 * baseStat + iv + (ev / 4)) * level / 100) + 5) * nature;
  }

  constructor() {
    this.Type1 = 'none';
    this.Type2 = 'none';
    this.level = 1;
    this.baseStats = new Stats();
    this.actualStats = new Stats();
    this.iv = new Stats();
    this.ev = new Stats();
  }

  AdjustBaseStat(stat: string, value: number) {
    return this.alterStat(this.baseStats, stat, value);
  }

  AdjustIVStat(stat: string, value: number) {
    if (value > 31 || value < 0) {
      return false;
    }
    return this.alterStat(this.iv, stat, value);
  }

  AdjustEVStat(stat: string, value: number) {
    if (value > 255 || value < 0) {
      return false;
    }
    return this.alterStat(this.ev, stat, value);
  }

  alterStat(stats: Stats, stat: string, value: number) {
    switch (stat) {
      case 'hp': {
        stats.hp = value;
        break;
      }
      case 'attack': {
        stats.attack = value;
        break;
      }
      case 'defense': {
        stats.defense = value;
        break;
      }
      case 'specialAttack': {
        stats.specialAttack = value;
        break;
      }
      case 'specialDefense': {
        stats.specialDefense = value;
        break;
      }
      case 'speed': {
        stats.speed = value;
        break;
      }
      default: {
        return false;
      }
    }
    return true;
  }
}
