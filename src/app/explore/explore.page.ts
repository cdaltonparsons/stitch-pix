import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  signOut() {
    this.dataService.signOut();
    this.router.navigate(['/login']);
  }
}
