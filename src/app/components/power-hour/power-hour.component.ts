import { Component, OnInit } from '@angular/core';
// import from '../../js/randomizer.js'

@Component({
  selector: 'app-power-hour',
  templateUrl: './power-hour.component.html',
  styleUrls: ['./power-hour.component.scss']
})
export class PowerHourComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  timeoutID
  delayedAlert() {
    this.timeoutID = window.setTimeout(window.alert, 2*1000, 'That was really slow!');
  }

}
