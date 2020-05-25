import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinners',
  templateUrl: './dinners.component.html',
  styleUrls: ['./dinners.component.scss']
})
export class DinnersComponent implements OnInit {

  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  // });
  menu = []
  newmenu = []
  to_remove

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  displayChoice(choice){
    this.menu = choice;
  }

  removeChoice(choice){
    this.to_remove = this.menu.indexOf(choice)
    console.log(this.to_remove)
    if (this.to_remove > -1){
      this.newmenu = this.menu.splice(this.to_remove, 1)
      console.log (this.newmenu)
    }
  }

  // onSubmit() {
  //   //TODOL Use EventEmitter with form value
  //   console.warn(this.profileForm.value)
  // }
}
