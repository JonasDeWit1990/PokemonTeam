import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-elemental-stat',
  templateUrl: './elemental-stat.component.html',
  styleUrls: ['./elemental-stat.component.css']
})
export class ElementalStatComponent implements OnInit {
  @Input() elementalArray: Array<Array<number>>;

  constructor() { }

  ngOnInit() {
  }

}
