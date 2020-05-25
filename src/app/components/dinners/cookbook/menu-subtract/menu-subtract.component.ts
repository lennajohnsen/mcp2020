import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu-subtract',
  templateUrl: './menu-subtract.component.html',
  styleUrls: ['./menu-subtract.component.scss']
})
export class MenuSubtractComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() item

  valueChanged(){
    this.valueChange.emit(this.item);
    console.log(this.item)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
