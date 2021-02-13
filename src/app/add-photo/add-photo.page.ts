import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.page.html',
  styleUrls: ['./add-photo.page.scss'],
})
export class AddPhotoPage implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {}

  signOut() {
    this.dataService.signOut();
    this.router.navigate(['/login']);
  }
}
