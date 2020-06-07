import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthorizedSideNavService } from '../authorized-side-nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnDestroy {

  view: string;
  subscription: Subscription;

  //add API call to sub-component?

  constructor( public sideNavService: AuthorizedSideNavService) {
    this.subscription = this.sideNavService.getView().subscribe(view => { this.view = view; });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
