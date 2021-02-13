(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-photo-add-photo-module"],{

/***/ "4I45":
/*!***********************************************!*\
  !*** ./src/app/add-photo/add-photo.module.ts ***!
  \***********************************************/
/*! exports provided: AddPhotoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPhotoPageModule", function() { return AddPhotoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-photo-routing.module */ "Ce/1");
/* harmony import */ var _add_photo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-photo.page */ "nAIX");







let AddPhotoPageModule = class AddPhotoPageModule {
};
AddPhotoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPhotoPageRoutingModule"]
        ],
        declarations: [_add_photo_page__WEBPACK_IMPORTED_MODULE_6__["AddPhotoPage"]]
    })
], AddPhotoPageModule);



/***/ }),

/***/ "C/d8":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-photo/add-photo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Pix</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"signOut()\">\n        Log Out\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-align-self-center\">\n        <ion-img src=\"./assets/construction.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Ce/1":
/*!*******************************************************!*\
  !*** ./src/app/add-photo/add-photo-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddPhotoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPhotoPageRoutingModule", function() { return AddPhotoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_photo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-photo.page */ "nAIX");




const routes = [
    {
        path: '',
        component: _add_photo_page__WEBPACK_IMPORTED_MODULE_3__["AddPhotoPage"]
    }
];
let AddPhotoPageRoutingModule = class AddPhotoPageRoutingModule {
};
AddPhotoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPhotoPageRoutingModule);



/***/ }),

/***/ "ZoQ2":
/*!***********************************************!*\
  !*** ./src/app/add-photo/add-photo.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGhvdG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "nAIX":
/*!*********************************************!*\
  !*** ./src/app/add-photo/add-photo.page.ts ***!
  \*********************************************/
/*! exports provided: AddPhotoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPhotoPage", function() { return AddPhotoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_photo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-photo.page.html */ "C/d8");
/* harmony import */ var _add_photo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-photo.page.scss */ "ZoQ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");






let AddPhotoPage = class AddPhotoPage {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() { }
    signOut() {
        this.dataService.signOut();
        this.router.navigate(['/login']);
    }
};
AddPhotoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
AddPhotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-photo',
        template: _raw_loader_add_photo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_photo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddPhotoPage);



/***/ })

}]);
//# sourceMappingURL=add-photo-add-photo-module.js.map