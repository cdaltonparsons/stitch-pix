import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  segment = 'shopper';
  measurementsForm: FormGroup;
  currentUser;

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.currentUser = this.dataService.currentUser;
    this.measurementsForm = this.fb.group({
      hips: ['', Validators.required],
      waist: ['', Validators.required],
      chest: ['', Validators.required],
      feet: ['', Validators.required],
      inches: ['', Validators.required],
      userId: [this.currentUser.uid],
    });
  }

  signOut() {
    this.dataService.signOut();
    this.router.navigate(['/login']);
  }

  async saveMeasurements() {
    const loader = await this.loadingCtrl.create();
    await loader.present();

    if (this.segment == 'shopper') {
      this.dataService.addMeasurementsShopper(this.measurementsForm.value).then(
        async (result) => {
          loader.dismiss();
          const alert = await this.alertCtrl.create({
            header: 'Thank You!',
            message: `Our company is just launching and it looks like we don't have your exact fit right now.  Check back soon!`,
            buttons: ['OK'],
          });
          alert.onDidDismiss().then((data) => {
            this.router.navigate(['/tabs/explore']);
          });

          await alert.present();
        },
        async (err) => {
          loader.dismiss();
          const alert = await this.alertCtrl.create({
            header: 'Woops!',
            message: err.message,
            buttons: ['OK'],
          });

          await alert.present();
        }
      );
    }
    if (this.segment == 'model') {
      this.dataService.addMeasurementsModel(this.measurementsForm.value).then(
        async (result) => {
          loader.dismiss();
          const alert = await this.alertCtrl.create({
            header: 'Thank You!',
            message: `Now hit that + below to start creating!`,
            buttons: ['OK'],
          });
          alert.onDidDismiss().then((data) => {
            this.router.navigate(['/tabs/add-photo']);
          });

          await alert.present();
        },
        async (err) => {
          loader.dismiss();
          const alert = await this.alertCtrl.create({
            header: 'Woops!',
            message: err.message,
            buttons: ['OK'],
          });

          await alert.present();
        }
      );
    }
  }
}
