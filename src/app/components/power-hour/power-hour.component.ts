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
  value

  delayedAlert() {
    this.timeoutID = setTimeout(this.setValue, 5000);
  };

  setValue() {
    this.value = this.timeoutID + 1
    console.log(this.value)
  };


  //every 5 minutes, produce 5 thesis titles w/ blanks (+ validation for form fill)

}
