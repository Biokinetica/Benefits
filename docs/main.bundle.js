webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_reimburse_reimburse_component__ = __webpack_require__("./src/app/components/reimburse/reimburse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_view_view_component__ = __webpack_require__("./src/app/components/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_benco_benco_component__ = __webpack_require__("./src/app/components/benco/benco.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_4__components_view_view_component__["a" /* ViewComponent */] },
    { path: 'benco', component: __WEBPACK_IMPORTED_MODULE_5__components_benco_benco_component__["a" /* BencoComponent */] },
    { path: 'reimburse', component: __WEBPACK_IMPORTED_MODULE_3__components_reimburse_reimburse_component__["a" /* ReimburseComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"bg\">\n\n<router-outlet></router-outlet>\n</div>\n<!-- <app-benco></app-benco> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_service__ = __webpack_require__("./src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_reimburse_reimburse_component__ = __webpack_require__("./src/app/components/reimburse/reimburse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_reimburse_reimburse_service__ = __webpack_require__("./src/app/components/reimburse/reimburse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_view_view_component__ = __webpack_require__("./src/app/components/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_view_view_service__ = __webpack_require__("./src/app/components/view/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_benco_benco_component__ = __webpack_require__("./src/app/components/benco/benco.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_benco_benco_service__ = __webpack_require__("./src/app/components/benco/benco.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_reimburse_reimburse_component__["a" /* ReimburseComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_benco_benco_component__["a" /* BencoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_jwt__["AuthModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatRippleModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__components_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_10__components_reimburse_reimburse_service__["a" /* ReimburseService */],
                __WEBPACK_IMPORTED_MODULE_14__components_view_view_service__["a" /* ViewService */],
                __WEBPACK_IMPORTED_MODULE_16__components_benco_benco_service__["a" /* BencoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/benco/benco.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-table {\n    overflow: auto;\n    max-height: 700px;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n  }\n\n.reimbursement-view{\n\n    display: -webkit-box;\n\n    display: -ms-flexbox;\n\n    display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 200px;\n    height: 100vh;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n\n.mat-header-cell.mat-sort-header-sorted {\n    color: ThemePalette;\n  }\n\n.mat-column-select {\n    overflow: visible;\n    \n  }"

/***/ }),

/***/ "./src/app/components/benco/benco.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reimbursement-view\">\n  <mat-table color=\"accent\" #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef>\n              <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n              <mat-checkbox (click)=\"$event.stopPropagation()\"\n                            (change)=\"$event ? selection.toggle(row) : null\"\n                            [checked]=\"selection.isSelected(row)\">\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n    <!-- Position Column -->\n    <ng-container class=\"column\" matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.email}} </mat-cell>\n    </ng-container>\n\n    <ng-container class=\"column\" matColumnDef=\"reimburse_amt\">\n      <mat-header-cell *matHeaderCellDef> Reimbursment Request </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.reimburse_amt}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container class=\"column\" matColumnDef=\"approval\">\n      <mat-header-cell *matHeaderCellDef> Approval </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.approval}} </mat-cell>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container class=\"column\" matColumnDef=\"class_start\">\n      <mat-header-cell *matHeaderCellDef> Class Start </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.class_start | date:'mediumDate'}} </mat-cell>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container class=\"column\" matColumnDef=\"class_end\">\n      <mat-header-cell *matHeaderCellDef> Class End </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.class_end | date:'mediumDate' }} </mat-cell>\n    </ng-container>\n\n    <ng-container class=\"column\" matColumnDef=\"desc\">\n      <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.desc}} </mat-cell>\n    </ng-container>\n\n    <ng-container class=\"column\" matColumnDef=\"dated\">\n      <mat-header-cell *matHeaderCellDef> Last Acted On </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.dated | date:'mediumDate' }} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\n  </mat-table>\n  <form>\n  <button mat-raised-button color=\"primary\" (click)=\"approveClaims()\">Approve Requests</button>\n  <button mat-raised-button color=\"primary\" (click)=\"denyClaims()\">Deny Requests</button>\n  <button mat-raised-button color=\"warn\" (click)=\"signOut(); openSnackBar();\">Logout</button>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/benco/benco.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BencoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_view_service__ = __webpack_require__("./src/app/components/view/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__benco_service__ = __webpack_require__("./src/app/components/benco/benco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_service__ = __webpack_require__("./src/app/components/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BencoComponent = /** @class */ (function () {
    function BencoComponent(snackBar, reimburseList, router, approve, logout) {
        this.snackBar = snackBar;
        this.reimburseList = reimburseList;
        this.router = router;
        this.approve = approve;
        this.logout = logout;
        this.displayedColumns = ['select', 'email', 'reimburse_amt', 'approval', 'class_start', 'class_end', 'desc', 'dated'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatTableDataSource */]();
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["b" /* SelectionModel */](true, []);
    }
    BencoComponent.prototype.ngOnInit = function () {
        this.viewEmployeeClaims();
    };
    BencoComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Successfully Logged Out', 'Undo', {
            duration: 2000
        });
    };
    BencoComponent.prototype.approveClaims = function () {
        this.approve.approveClaimService(this.selection, this.dataSource.data);
    };
    BencoComponent.prototype.denyClaims = function () {
        this.approve.denyClaimsService(this.selection, this.dataSource.data);
    };
    BencoComponent.prototype.viewEmployeeClaims = function () {
        var _this = this;
        this.reimburseList.viewAllService().subscribe(function (res) {
            // console.log(res);
            _this.dataSource.data = res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    BencoComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    BencoComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    BencoComponent.prototype.signOut = function () {
        this.logout.logout();
    };
    BencoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-benco',
            template: __webpack_require__("./src/app/components/benco/benco.component.html"),
            styles: [__webpack_require__("./src/app/components/benco/benco.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__view_view_service__["a" /* ViewService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__benco_service__["a" /* BencoService */], __WEBPACK_IMPORTED_MODULE_6__login_login_service__["a" /* LoginService */]])
    ], BencoComponent);
    return BencoComponent;
}());



/***/ }),

/***/ "./src/app/components/benco/benco.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BencoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BencoService = /** @class */ (function () {
    function BencoService(router, http) {
        this.router = router;
        this.http = http;
        this.selection = new __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["b" /* SelectionModel */](true, []);
        this.Url = 'https://benefits-app.herokuapp.com/adminpanel';
    }
    BencoService.prototype.approveClaimService = function (selected, dataSource) {
        var _this = this;
        var storage = localStorage.getItem('currentUser');
        this.selection = selected;
        this.data = dataSource;
        for (var i = 0; i < this.selection.selected.length; i++) {
            if (this.selection.isSelected) {
                this.selection.selected[i].token = JSON.parse(storage);
            }
        }
        console.log(this.selection.selected);
        this.http.post(this.Url, this.selection.selected).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/benco');
        }, function (err) {
            console.log('Error occured');
        });
    };
    BencoService.prototype.denyClaimsService = function (selected, dataSource) {
        var _this = this;
        var storage = localStorage.getItem('currentUser');
        this.selection = selected;
        this.data = dataSource;
        for (var i = 0; i < this.selection.selected.length; i++) {
            if (this.selection.isSelected) {
                this.selection.selected[i].token = JSON.parse(storage);
            }
        }
        this.http.put(this.Url, this.selection.selected).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/benco');
        }, function (err) {
            console.log('Error occured');
        });
    };
    BencoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], BencoService);
    return BencoService;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.login-form {\n  min-width: 150px;\n  max-width: 400px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.login-full-width {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.main-div{\n  height: 80vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n/* \n.login-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.login-full-width {\n  width: 100%;\n} */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-div\">\n<form form=\"ngForm\" id=\"login\" class=\"login-form\" >\n  <mat-form-field class=\"login-full-width\">\n    <input matInput type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\"/>\n  </mat-form-field>\n <br/>\n  <mat-form-field class=\"login-full-width\">\n    <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\"/>\n  </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" (click)=\"signIn()\" >Login</button>\n  \n</form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("./src/app/components/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Basic Inputs
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(login) {
        this.login = login;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function (event) {
        var jsonObject = JSON.stringify({
            'email': this.email,
            'pswd': this.password
        });
        this.login.login(jsonObject);
        console.log(jsonObject);
    };
    LoginComponent.prototype.signOut = function () {
        this.login.logout();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            styles: [__webpack_require__("./src/app/components/login/login.component.css")],
            template: __webpack_require__("./src/app/components/login/login.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.Url = 'https://benefits-app.herokuapp.com/user';
    }
    LoginService.prototype.login = function (jsonObject) {
        var _this = this;
        return this.http.post(this.Url, jsonObject).subscribe(function (res) {
            localStorage.setItem('currentUser', JSON.stringify(res));
            if (res.admin) {
                _this.router.navigateByUrl('/benco');
            }
            else {
                _this.router.navigateByUrl('/view');
            }
        }, function (err) {
            console.log('Error occured');
        });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/components/reimburse/reimburse.component.css":
/***/ (function(module, exports) {

module.exports = " .reimburse-form {\n  min-width: 150px;\n  max-width: 500px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* align-items: center; */\n  width: 100%;\n  \n}\n.reimburse-form.button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.reimburse-form-full {\n  \n  -webkit-box-align: center;\n  \n      -ms-flex-align: center;\n  \n          align-items: center;\n  width: 100%;\n}\n.reimburse-form-half {\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 32%;\n  \n}\n.main-div{\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}"

/***/ }),

/***/ "./src/app/components/reimburse/reimburse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\n    <form form=\"ngForm\" id=\"reimburse-form\" class=\"reimburse-form\" >\n  <mat-form-field class=\"reimburse-form-full\">\n    <input matInput type=\"number\" placeholder=\"Reimbursement Amount\" name=\"reimb\" [(ngModel)]=\"reimb\">\n  </mat-form-field>\n\n  <mat-form-field class=\"reimburse-form-full\" >\n    <input matInput type=\"text\" placeholder=\"Description\" name=\"desc\" [(ngModel)]=\"desc\">\n  </mat-form-field>\n  <mat-form-field class=\"reimburse-form-half\" >\n      <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"startdate\" placeholder=\"Enter start date\" \n      name=\"start\" [(ngModel)]=\"start\">\n      <mat-datepicker-toggle matSuffix [for]=\"startdate\"></mat-datepicker-toggle>\n      <mat-datepicker #startdate></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field class=\"reimburse-form-half\" >\n    <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"enddate\" placeholder=\"Enter end date\" \n      name=\"end\" [(ngModel)]=\"end\">\n      <mat-datepicker-toggle matSuffix [for]=\"enddate\"></mat-datepicker-toggle>\n      <mat-datepicker #enddate></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field class=\"reimburse-form-half\">\n      <mat-select placeholder=\"Type of Training\" [(ngModel)]=\"training_id\" name=\"type\">\n        <mat-option *ngFor=\"let type of types\" [value]=\"type.value\" >\n          {{ type.viewValue }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <br>\n    <button mat-raised-button color=\"primary\" class=\"button\" (click)=\"add()\" >Submit</button>\n    <button mat-raised-button color=\"warn\" class=\"button\" (click)=\"signOut(); openSnackBar();\">Logout</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reimburse/reimburse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimburseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reimburse_service__ = __webpack_require__("./src/app/components/reimburse/reimburse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/components/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReimburseComponent = /** @class */ (function () {
    function ReimburseComponent(snackBar, reimbursement, logout) {
        this.snackBar = snackBar;
        this.reimbursement = reimbursement;
        this.logout = logout;
        this.types = [
            { value: 1, viewValue: 'Certification' },
            { value: 2, viewValue: 'University Course' },
            { value: 3, viewValue: 'Seminar' },
            { value: 4, viewValue: 'Certification Prep Course' },
            { value: 5, viewValue: 'Technical Training' },
            { value: 6, viewValue: 'Other' }
        ];
    }
    ReimburseComponent.prototype.ngOnInit = function () {
        this.token = JSON.parse(localStorage.getItem('currentUser'));
    };
    ReimburseComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Successfully Logged Out', 'Undo', {
            duration: 2000
        });
    };
    ReimburseComponent.prototype.add = function (event) {
        this.address_id = 1;
        var jsonObject = JSON.stringify({
            token: this.token,
            desc: this.desc,
            class_start: this.start,
            class_end: this.end,
            address_id: this.address_id,
            reimburse_amt: this.reimb,
            training_id: this.training_id,
            dated: this.dated
        });
        this.reimbursement.addReimbursement(jsonObject);
    };
    ReimburseComponent.prototype.signOut = function () {
        this.logout.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDatepicker */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDatepicker */])
    ], ReimburseComponent.prototype, "datepicker", void 0);
    ReimburseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reimburse',
            template: __webpack_require__("./src/app/components/reimburse/reimburse.component.html"),
            styles: [__webpack_require__("./src/app/components/reimburse/reimburse.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__reimburse_service__["a" /* ReimburseService */], __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ReimburseComponent);
    return ReimburseComponent;
}());



/***/ }),

/***/ "./src/app/components/reimburse/reimburse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimburseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReimburseService = /** @class */ (function () {
    function ReimburseService(http, router) {
        this.http = http;
        this.router = router;
        this.Url = 'https://benefits-app.herokuapp.com/my-benefits';
    }
    ReimburseService.prototype.addReimbursement = function (jsonObject) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'auth': currentUser });
        console.log(currentUser, headers);
        return this.http.post(this.Url, jsonObject).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/view');
        }, function (err) {
            console.log('Error occured');
        });
    };
    ReimburseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ReimburseService);
    return ReimburseService;
}());



/***/ }),

/***/ "./src/app/components/view/view.component.css":
/***/ (function(module, exports) {

module.exports = "  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n  }\n\n.reimbursement-view{\n\n    display: -webkit-box;\n\n    display: -ms-flexbox;\n\n    display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 200px;\n    height: 100vh;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n\n.reimbursement-view.button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  }\n\n.mat-header-cell.mat-sort-header-sorted {\n    color: black;\n  }\n  "

/***/ }),

/***/ "./src/app/components/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reimbursement-view\">\n  <mat-table color=\"accent\" #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- reimbursement Column -->\n    \n    \n    <ng-container class=\"column\" matColumnDef=\"reimburse_amt\">\n      <mat-header-cell *matHeaderCellDef> Reimbursment Request </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.reimburse_amt}} </mat-cell>\n      \n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container class=\"column\" matColumnDef=\"approval\">\n      <mat-header-cell *matHeaderCellDef> Approval </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.approval}} </mat-cell>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container class=\"column\" matColumnDef=\"class_start\">\n      <mat-header-cell *matHeaderCellDef> Class Start </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.class_start | date:'mediumDate'}} </mat-cell>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container class=\"column\" matColumnDef=\"class_end\">\n      <mat-header-cell *matHeaderCellDef> Class End </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.class_end | date:'mediumDate' }} </mat-cell>\n    </ng-container>\n\n    <ng-container class=\"column\" matColumnDef=\"desc\">\n      <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.desc}} </mat-cell>\n    </ng-container>\n\n    <ng-container class=\"column\" matColumnDef=\"dated\">\n      <mat-header-cell *matHeaderCellDef> Last Acted On </mat-header-cell>\n      <mat-cell *matCellDef=\"let reimbursement\"> {{reimbursement.dated | date:'mediumDate' }} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n  <form>\n  <button mat-raised-button color=\"primary\" class=\"button\" (click)=\"addReimbursementButton()\">Add Reimbursment Request</button>\n  <button mat-raised-button color=\"warn\" class=\"button\" (click)=\"signOut(); openSnackBar();\">Logout</button>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_service__ = __webpack_require__("./src/app/components/view/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("./src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewComponent = /** @class */ (function () {
    function ViewComponent(snackBar, reimburseList, router, logout) {
        this.snackBar = snackBar;
        this.reimburseList = reimburseList;
        this.router = router;
        this.logout = logout;
        this.displayedColumns = ['reimburse_amt', 'approval', 'class_start', 'class_end', 'desc', 'dated'];
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.viewReimbursements();
    };
    ViewComponent.prototype.openSnackBar = function () {
        this.snackBar.open('Successfully Logged Out', 'Undo', {
            duration: 2000
        });
    };
    ViewComponent.prototype.viewReimbursements = function () {
        var _this = this;
        this.reimburseList.viewReimburseService().subscribe(function (res) {
            // console.log(res);
            _this.dataSource = res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    ViewComponent.prototype.addReimbursementButton = function () {
        this.router.navigateByUrl('/reimburse');
    };
    ViewComponent.prototype.signOut = function () {
        this.logout.logout();
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view',
            template: __webpack_require__("./src/app/components/view/view.component.html"),
            styles: [__webpack_require__("./src/app/components/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__view_service__["a" /* ViewService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/components/view/view.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewService = /** @class */ (function () {
    function ViewService(http) {
        this.http = http;
        this.Url = 'https://benefits-app.herokuapp.com/retrieve';
        this.admin = 'https://benefits-app.herokuapp.com/adminpanel';
    }
    ViewService.prototype.viewReimburseService = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);
        return this.http.post(this.Url, currentUser);
    };
    ViewService.prototype.viewAllService = function () {
        // const header = new HttpHeaders({ 'Content-Type': 'application/json' })
        //     .set('authorization', JSON.stringify(localStorage.getItem('currentUser')));
        return this.http.get(this.admin);
    };
    ViewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ViewService);
    return ViewService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map