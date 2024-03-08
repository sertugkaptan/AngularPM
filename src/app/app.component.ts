import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';


@Component({
  selector: 'pm-root',
  animations: [slideInAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ADD_PRODUCT_CONST: number = 0;
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }
  getIsDialogDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
    console.log('Log out');
  }

  toggleMessagesDialog(): void {
    if (!this.messageService.isDisplayed) {
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    } else {
      this.router.navigate([{ outlets: { popup: null } }]);
    }
    this.messageService.isDisplayed = !this.messageService.isDisplayed;
  }
}
