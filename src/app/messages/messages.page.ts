import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  signOut() {
    this.dataService.signOut();
    this.router.navigate(['/login']);
  }
}
