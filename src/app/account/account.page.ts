import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  signOut() {
    this.dataService.signOut();
    this.router.navigate(['/login']);
  }
}
