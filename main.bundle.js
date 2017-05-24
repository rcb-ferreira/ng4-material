webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requisition_requisition_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_companies_my_companies_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'requisition', component: __WEBPACK_IMPORTED_MODULE_2__requisition_requisition_component__["a" /* RequisitionComponent */] },
    { path: 'my-companies', component: __WEBPACK_IMPORTED_MODULE_4__my_companies_my_companies_component__["a" /* MyCompaniesComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(171),
        styles: [__webpack_require__(166)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__requisition_requisition_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_companies_my_companies_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__requisition_requisition_component__["a" /* RequisitionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__my_companies_my_companies_component__["a" /* MyCompaniesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_11__angular_common__["a" /* APP_BASE_HREF */], useValue: '/ng4-material/' }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "/*body {\n    padding: 2em 23em;\n    background:lightgray;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".demo-basic {\n  padding: 0;\n}\n.demo-basic .mat-card-content {\n  padding: 16px;\n}\n.demo-full-width {\n  width: 100%;\n}\n\n.demo-card {\n  margin: 16px;\n}\n\n.md-button-full {\n    width: 100%;\n    display: block;\n    text-transform: uppercase;\n    margin: 30px 0;\n}\n\nsection,\nmd-radio-button,\nmd-input-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    margin-bottom: 15px;\n}\n\n.mat-select {\n    width: 100%;\n    margin-bottom: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      <a routerLink=\"/requisition\" routerLinkActive=\"active\">Requisition</a>\n      <a routerLink=\"/my-companies\" routerLinkActive=\"active\">My Companies</a>\n    </nav>\n    <router-outlet></router-outlet>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"demo-card demo-basic\">\n  <md-toolbar>Blu</md-toolbar>\n  <md-card-content>\n\n    <form novalidate>\n      <h4>Requisition type</h4>\n      <section>\n        <md-radio-group>\n          <md-radio-button *ngFor=\"let type of types\" [value]=\"type\">\n            {{type}}\n          </md-radio-button>\n        </md-radio-group>\n      </section>\n\n      <section>\n        <md-input-container>\n          <input mdInput name=\"end\" placeholder=\"End date\"\n            [(ngModel)]=\"errorMessageExample3\" required>\n          <md-error>This field is required</md-error>\n        </md-input-container>\n      </section>\n\n      <section>\n        <md-input-container>\n          <input mdInput name=\"start\" placeholder=\"Start date\"\n            [(ngModel)]=\"errorMessageExample3\" required>\n          <md-error>This field is required</md-error>\n        </md-input-container>\n      </section>\n\n      <section>\n        <md-select placeholder=\"Site\" required>\n          <md-option *ngFor=\"let site of sites\" [value]=\"site\">\n            {{site.viewValue}}\n          </md-option>\n          <md-error>This field is required</md-error>\n        </md-select>\n      </section>\n\n      <section>\n        <md-select placeholder=\"Site type\" required>\n          <md-option *ngFor=\"let site of sites\" [value]=\"site\">\n            {{site.viewValue}}\n          </md-option>\n        </md-select>\n      </section>\n\n      <section>\n        <md-select placeholder=\"Department\" required>\n          <md-option *ngFor=\"let site of sites\" [value]=\"site\">\n            {{site.viewValue}}\n          </md-option>\n        </md-select>\n      </section>\n\n      <section>\n        <md-select placeholder=\"Shift\" required>\n          <md-option *ngFor=\"let site of sites\" [value]=\"site\">\n            {{site.viewValue}}\n          </md-option>\n        </md-select>\n      </section>\n\n      <button class=\"md-button-full\" color=\"primary\" md-raised-button>Submit for Approval</button>\n    </form>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<p>\n  my-companies works!\n</p>\n\n<md-toolbar color=\"primary\">\n    <span>GameViewer</span>\n    <span class=\"spacer\"></span>\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n    <md-menu #menu=\"mdMenu\">\n      <button md-menu-item>\n        <md-icon>fingerprint</md-icon>\n        <span>Login</span>\n      </button>\n      <button md-menu-item disabled>\n        <md-icon>announcement</md-icon>\n        <span>Issues</span>\n      </button>\n      <button md-menu-item>\n        <md-icon>notifications_off</md-icon>\n        <span>Disable alerts</span>\n      </button>\n    </md-menu>\n</md-toolbar>\n\n<md-tab-group>\n  <md-tab label=\"Gallery\">\n    <md-card *ngFor=\"let spaceScreen of (spaceScreens ? spaceScreens.slice(0,10): []); let i = index\">\n      <img md-card-image src=\"{{ spaceScreen.url }}\">\n      <md-card-content>\n        <p>{{ spaceScreen.title }}</p>\n      </md-card-content>\n      <md-card-actions>\n        <button md-button (click)=\"likeMe(i)\">\n            <i class=\"material-icons md-18\" [class.red-color]=\"spaceScreen.liked == '1'\">favorite</i> LIKE\n        </button>\n        <button md-button (click)=\"deleteMe(i)\">\n            <i class=\"material-icons md-18\">delete</i> DELETE \n        </button>\n      </md-card-actions>\n    </md-card>\n  </md-tab>\n  <md-tab label=\"Settings\">\n    <div id=\"page-padding\">\n      <h1>Settings</h1>\n      <p>Here you can control the various settings associated with your app. There's no need to hit a save button, as the values are updated automatically.</p>\n      <label>Number of Thumbnails</label>\n      <md-slider\n          showTicks=\"true\" max=\"100\" min=\"0\" step=\"1\" thumbLabel=\"true\" value=\"18\">\n      </md-slider>\n      <md-slide-toggle>Some setting</md-slide-toggle>\n    </div>\n  </md-tab>\n</md-tab-group>\n\n<!--<md-toolbar color=\"primary\">\n    <span>MyCompany</span>\n    <span class=\"example-spacer\"></span>\n    <button md-button [mdMenuTriggerFor]=\"appMenu\"><md-icon>menu</md-icon> Menu</button>\n\n    <md-menu #appMenu=\"mdMenu\">\n      <button md-menu-item> Settings </button>\n      <button md-menu-item> Help </button>\n    </md-menu>\n</md-toolbar>\n\n\n<md-card *ngFor=\"let data of (myData ? myData.slice(0,10): []); let i = index\">\n\n  <img md-card-image src=\"{{ data.url }}\">\n  <md-card-header>\n    <md-card-title>{{ data.title }}</md-card-title>\n  </md-card-header>\n\n  <md-card-actions>\n    <button md-button>LIKE</button>\n    <button md-button>SHARE</button>\n  </md-card-actions>\n  \n</md-card>-->"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"example-card\">\n  <md-card-content>\n    <div *ngIf=\"!post; else forminfo\">\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\">\n        <md-radio-group class=\"example-radio-group\" formControlName=\"type\">\n          <md-radio-button class=\"example-radio-button\" *ngFor=\"let type of types\" [value]=\"type\">\n            {{type}}\n          </md-radio-button>\n          \n        </md-radio-group>\n        <md-hint align=\"end\" *ngIf=\"!rForm.controls['type'].valid && rForm.controls['type'].touched\">Please indicate the requisition type</md-hint>\n        \n        <br>\n        <md-select placeholder=\"Site\" formControlName=\"site\">\n          <md-option *ngFor=\"let site of sites\" [value]=\"site\">\n            {{site.viewValue}}\n          </md-option>\n        </md-select>\n        <md-hint align=\"end\" *ngIf=\"!rForm.controls['site'].valid && rForm.controls['site'].touched\">Please indicate the requisition site</md-hint>\n\n        <br>\n        <md-input-container class=\"example-full-width\">\n          <input mdInput  type=\"text\" formControlName=\"name\" placeholder=\"name\">\n          <md-hint  align=\"end\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">Name Please</md-hint>\n        </md-input-container>\n\n        <br>\n        <button md-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!rForm.valid\">Raised button</button>\n      </form>\n    </div>\n\n    <ng-template #forminfo>\n      <div class=\"form-container\">\n        <div class=\"row columns\">\n            <h1>{{ post | json }}</h1>\n        </div>\n      </div>\n    </ng-template>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var max = 5;
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var LoginComponent = (function () {
    function LoginComponent() {
        this.types = [
            'Ad-hoc',
            'Weekly schedule'
        ];
        this.sites = [
            { value: 'site-0', viewValue: 'Site One' },
            { value: 'site-1', viewValue: 'Site Two' },
            { value: 'site-2', viewValue: 'Site Three' }
        ];
        this.site = '';
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]('hello', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(EMAIL_REGEX)]);
        this.model = 'hello';
    }
    LoginComponent.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(172),
        styles: [__webpack_require__(167)]
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCompaniesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyCompaniesComponent = (function () {
    function MyCompaniesComponent(http) {
        var _this = this;
        this.http = http;
        this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.spaceScreens = res; });
        // this.http.get('https://jsonplaceholder.typicode.com/photos')
        //   .map(response => response.json())
        //   .subscribe(res => this.myData = res);
    }
    MyCompaniesComponent.prototype.likeMe = function (i) {
        if (this.spaceScreens[i].liked == 0)
            this.spaceScreens[i].liked = 1;
        else
            this.spaceScreens[i].liked = 0;
    };
    MyCompaniesComponent.prototype.deleteMe = function (i) {
        this.spaceScreens.splice(i, 1);
        console.log(i);
    };
    return MyCompaniesComponent;
}());
MyCompaniesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-my-companies',
        template: __webpack_require__(173),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MyCompaniesComponent);

var _a;
//# sourceMappingURL=my-companies.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequisitionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequisitionComponent = (function () {
    function RequisitionComponent(fb) {
        this.fb = fb;
        this.types = [
            'Ad-hoc',
            'Weekly schedule'
        ];
        this.sites = [
            { value: 'site-0', viewValue: 'Site One' },
            { value: 'site-1', viewValue: 'Site Two' },
            { value: 'site-2', viewValue: 'Site Three' }
        ];
        this.type = '';
        this.site = '';
        this.name = '';
        this.titleAlert = 'This field is required';
        this.rForm = fb.group({
            'type': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            'site': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
    }
    RequisitionComponent.prototype.addPost = function (post) {
        console.log(post);
        this.post = post;
    };
    return RequisitionComponent;
}());
RequisitionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-requisition',
        template: __webpack_require__(174),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object])
], RequisitionComponent);

var _a;
//# sourceMappingURL=requisition.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(111);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.bundle.js.map