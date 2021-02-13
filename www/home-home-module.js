(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"signOut()\">\n        Log Out\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"secondary\">\n    <ion-segment [(ngModel)]=\"segment\">\n      <ion-segment-button value=\"shopper\">\n        <ion-label>Shoppers</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"model\">\n        <ion-label>Models</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"background\">\n    <ng-container *ngIf=\"measurementsForm\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-start\">\n          <ion-col size-lg=\"4\" offset-lg=\"4\">\n            <ion-card>\n              <ion-card-header class=\"ion-text-center\">\n                <ion-card-title class=\"light\">Hold Up!</ion-card-title>\n              </ion-card-header>\n              <ion-card-content class=\"ion-text-center\">\n                <ion-grid>\n                  <div [ngSwitch]=\"segment\">\n                    <div *ngSwitchCase=\"'shopper'\">\n                      <ion-row class=\"ion-align-items-start\">\n                        <ion-col>\n                          <ion-text color=\"light\">We're here to help women find fashion that looks great on their\n                            body\n                            type!\n                          </ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"ion-align-items-start\">\n                        <ion-col>\n                          <ion-text color=\"light\">Input your information below to see real women with your\n                            measurements wearing\n                            clothes you'll look great in!</ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class=\"ion-align-items-start\">\n                        <ion-col>\n                          <ion-text color=\"light\">Don't worry--our lips are sealed!</ion-text>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </div>\n                  <div [ngSwitch]=\"segment\">\n                    <div *ngSwitchCase=\"'model'\">\n                      <ion-row>\n                        <ion-col>\n                          <ion-text class=\"light\">We're here to help women find fashion that looks great on their\n                            body\n                            type!\n                          </ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-text class=\"light\">Input your information below so real women with your measurements\n                            can\n                            see your style!\n                          </ion-text>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-text class=\"light\">We're all about body positivity here!</ion-text>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </div>\n                  <div >\n                    <form [formGroup]=\"measurementsForm\">\n                      <ion-item>\n                        <ion-input formControlName=\"hips\" placeholder=\"Hip Measurement\" type=\"number\"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input formControlName=\"waist\" placeholder=\"Waist Measurement\" type=\"number\"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input formControlName=\"chest\" placeholder=\"Chest Measurement\" type=\"number\"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-grid>\n                          <ion-row>\n                            <ion-label position=\"floating\">Height</ion-label>\n                          </ion-row>\n                          <ion-row>\n                            <ion-col>\n                              <ion-input formControlName=\"feet\" type=\"number\" placeholder=\"feet\"></ion-input>\n                            </ion-col>\n                            <ion-col>\n                              <ion-input formControlName=\"inches\" type=\"number\" placeholder=\"inches\"></ion-input>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </ion-item>\n                    </form>\n                    <ion-button expand=\"block\" size=\"small\" (click)=\"saveMeasurements()\">Submit</ion-button>\n                  </div>\n                </ion-grid>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ng-container>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background-image: url('fashion-model.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100%;\n}\n\nion-card {\n  background: rgba(148, 124, 176, 0.5);\n  margin-top: 30%;\n  height: 75%;\n}\n\nform {\n  opacity: 0.8;\n}\n\n.light {\n  color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb24vZmFzaGlvbi1tb2RlbC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQ4LCAxMjQsIDE3NiwgMC41KTtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBoZWlnaHQ6IDc1JTtcbn1cblxuZm9ybSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmxpZ2h0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");








let HomePage = class HomePage {
    constructor(dataService, router, fb, loadingCtrl, alertCtrl) {
        this.dataService = dataService;
        this.router = router;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.segment = 'shopper';
    }
    ionViewWillEnter() {
        this.currentUser = this.dataService.currentUser;
        this.measurementsForm = this.fb.group({
            hips: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            waist: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            chest: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            feet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            inches: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            userId: [this.currentUser.uid],
        });
    }
    signOut() {
        this.dataService.signOut();
        this.router.navigate(['/login']);
    }
    saveMeasurements() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create();
            yield loader.present();
            if (this.segment == 'shopper') {
                this.dataService.addMeasurementsShopper(this.measurementsForm.value).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    loader.dismiss();
                    const alert = yield this.alertCtrl.create({
                        header: 'Thank You!',
                        message: `Our company is just launching and it looks like we don't have your exact fit right now.  Check back soon!`,
                        buttons: ['OK'],
                    });
                    alert.onDidDismiss().then((data) => {
                        this.router.navigate(['/tabs/explore']);
                    });
                    yield alert.present();
                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    loader.dismiss();
                    const alert = yield this.alertCtrl.create({
                        header: 'Woops!',
                        message: err.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }
            if (this.segment == 'model') {
                this.dataService.addMeasurementsModel(this.measurementsForm.value).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    loader.dismiss();
                    const alert = yield this.alertCtrl.create({
                        header: 'Thank You!',
                        message: `Now hit that + below to start creating!`,
                        buttons: ['OK'],
                    });
                    alert.onDidDismiss().then((data) => {
                        this.router.navigate(['/tabs/add-photo']);
                    });
                    yield alert.present();
                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    loader.dismiss();
                    const alert = yield this.alertCtrl.create({
                        header: 'Woops!',
                        message: err.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map