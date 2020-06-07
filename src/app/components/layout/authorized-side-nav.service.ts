import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedSideNavService {

  hideSideNav: boolean = true
  private subject = new Subject<string>();

  constructor() { }

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav
  }

  sendView(view: string) {
      this.subject.next(view);
  }

  clearView() {
      this.subject.next();
  }

  getView(): Observable<any> {
      return this.subject.asObservable();
  }
}
