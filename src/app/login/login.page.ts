import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  googleLogin() {
    this.dataService.googleLogin().then((result) => {
      this.router.navigate(['']);
    });
  }

  async signIn() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.dataService.signIn(this.credentialForm.value).then(
      (user) => {
        loading.dismiss();
        this.router.navigate(['']);
      },
      async (err) => {
        loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Sign up failed',
          message: err.message,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  get email() {
    return this.credentialForm.get('email');
  }

  get password() {
    return this.credentialForm.get('password');
  }
}
