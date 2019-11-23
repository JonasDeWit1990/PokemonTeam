import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-type-drop-down',
  templateUrl: './type-drop-down.component.html',
  styleUrls: ['./type-drop-down.component.css']
})
export class TypeDropDownComponent implements OnInit {
  @Output() selectedType = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(deviceValue) {
    this.selectedType.emit(deviceValue);
  }
}
