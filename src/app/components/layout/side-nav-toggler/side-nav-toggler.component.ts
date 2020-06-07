import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthorizedSideNavService } from '../authorized-side-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav-toggler',
  templateUrl: './side-nav-toggler.component.html',
  styleUrls: ['./side-nav-toggler.component.scss']
})
export class SideNavTogglerComponent implements OnInit {

  view: string;
  subscription: Subscription;

  constructor( public sideNavService: AuthorizedSideNavService) { }

  sendView(view): void {
    // send message to subscribers via observable subject
    this.sideNavService.sendView(view);
    this.sideNavService.toggleSideNav()
  }

  clearView(): void {
      // clear message
    this.sideNavService.clearView();
  }

  ngOnInit(): void {
  }


}
