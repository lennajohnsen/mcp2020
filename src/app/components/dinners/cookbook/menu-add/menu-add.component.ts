import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() random_item: any;
  item = [];

  valueChanged(){
    this.item = this.random_item;
    this.valueChange.emit(this.item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
