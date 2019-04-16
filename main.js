(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tt-stopwatch></tt-stopwatch>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stopwatch/stopwatch.component */ "./src/app/components/stopwatch/stopwatch.component.ts");
/* harmony import */ var _components_stopwatch_stopwatch_actions_stopwatch_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stopwatch/stopwatch-actions/stopwatch-actions.component */ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.ts");
/* harmony import */ var _components_stopwatch_stopwatch_laps_stopwatch_laps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stopwatch/stopwatch-laps/stopwatch-laps.component */ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _services_stopwatch_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/stopwatch.service */ "./src/app/services/stopwatch.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_5__["StopwatchComponent"],
                _components_stopwatch_stopwatch_actions_stopwatch_actions_component__WEBPACK_IMPORTED_MODULE_6__["StopwatchActionsComponent"],
                _components_stopwatch_stopwatch_laps_stopwatch_laps_component__WEBPACK_IMPORTED_MODULE_7__["StopwatchLapsComponent"],
                _components_stopwatch_stopwatch_actions_stopwatch_actions_component__WEBPACK_IMPORTED_MODULE_6__["StopwatchActionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
            ],
            providers: [_services_stopwatch_service__WEBPACK_IMPORTED_MODULE_10__["StopwatchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/lap/lap.ts":
/*!************************************!*\
  !*** ./src/app/classes/lap/lap.ts ***!
  \************************************/
/*! exports provided: Lap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lap", function() { return Lap; });
var Lap = /** @class */ (function () {
    function Lap() {
        this.id = +new Date();
        this._start = 0;
        this._end = 0;
        this._finalTime = null;
    }
    Lap.prototype.unixTime = function () {
        if (this._finalTime !== null)
            return this._finalTime;
        var now = Math.floor(+new Date() / 1000);
        var start = this._start || now;
        return now - start;
    };
    Lap.prototype.isEnded = function () {
        return this._finalTime !== null;
    };
    Lap.prototype.start = function () {
        if (!this.isEnded()) {
            this._start = Math.floor(+new Date() / 1000);
        }
        return this;
    };
    Lap.prototype.stop = function () {
        this._end = Math.floor(+new Date() / 1000);
        this._finalTime = this.unixTime();
        return this;
    };
    Lap.prototype.toJSON = function () {
        return {
            id: this.id,
            start: this._start,
            end: this._end,
            finalTime: this._finalTime
        };
    };
    Lap.prototype.restore = function (configuration) {
        this.id = configuration.id;
        this._start = configuration.start;
        this._end = configuration.end;
        this._finalTime = configuration.finalTime;
        return this;
    };
    return Lap;
}());



/***/ }),

/***/ "./src/app/classes/stopwatch-lap/stopwatch-lap.ts":
/*!********************************************************!*\
  !*** ./src/app/classes/stopwatch-lap/stopwatch-lap.ts ***!
  \********************************************************/
/*! exports provided: StopwatchLap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchLap", function() { return StopwatchLap; });
/* harmony import */ var _lap_lap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lap/lap */ "./src/app/classes/lap/lap.ts");

var StopwatchLap = /** @class */ (function () {
    function StopwatchLap() {
        this.id = +new Date();
        this.laps = [];
    }
    StopwatchLap.prototype.start = function () {
        if (this.activeLap && !this.activeLap.isEnded()) {
            this.stop();
        }
        var lap = new _lap_lap__WEBPACK_IMPORTED_MODULE_0__["Lap"]().start();
        this.activeLap = lap;
        this.laps.push(lap);
        return this;
    };
    StopwatchLap.prototype.stop = function () {
        if (this.activeLap) {
            this.activeLap.stop();
            this.activeLap = null;
        }
    };
    StopwatchLap.prototype.unixTime = function () {
        return this.laps.reduce(function (actual, lap) { return actual + lap.unixTime(); }, 0);
    };
    StopwatchLap.prototype.formatedTime = function () {
        var unix_sec = this.unixTime();
        var hours = Math.floor(unix_sec / 3600);
        var minutes = Math.floor((unix_sec - (hours * 3600)) / 60);
        var seconds = unix_sec - (hours * 3600) - (minutes * 60);
        var hours_str = (hours < 10 ? "0" : "") + hours;
        var minutes_str = (minutes < 10 ? "0" : "") + minutes + "";
        var seconds_str = (seconds < 10 ? "0" : "") + seconds + "";
        return hours_str + ':' + minutes_str + ':' + seconds_str;
    };
    StopwatchLap.prototype.toJSON = function () {
        return {
            id: this.id,
            laps: this.laps,
            activeLapId: this.activeLap && this.activeLap.id,
            comment: this.comment
        };
    };
    StopwatchLap.prototype.restore = function (configuration) {
        this.id = configuration.id;
        this.laps = configuration.laps.map(function (lap) { return new _lap_lap__WEBPACK_IMPORTED_MODULE_0__["Lap"]().restore(lap); });
        this.activeLap = this.laps.find(function (lap) { return lap.id === configuration.activeLapId; });
        this.comment = configuration.comment;
        return this;
    };
    return StopwatchLap;
}());



/***/ }),

/***/ "./src/app/classes/stopwatch/stopwatch.ts":
/*!************************************************!*\
  !*** ./src/app/classes/stopwatch/stopwatch.ts ***!
  \************************************************/
/*! exports provided: Stopwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stopwatch", function() { return Stopwatch; });
/* harmony import */ var _stopwatch_lap_stopwatch_lap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stopwatch-lap/stopwatch-lap */ "./src/app/classes/stopwatch-lap/stopwatch-lap.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var Stopwatch = /** @class */ (function () {
    function Stopwatch() {
        var _this = this;
        this.id = +new Date();
        this.laps = [];
        this.lapsMap = {};
        this.inProgress = false;
        this.time = "";
        this.timeObserverFunc = function (observer) {
            var interval = setInterval(function () {
                var stopwatchTime = _this.formatedTime();
                if (_this.time !== stopwatchTime.str) {
                    _this.time = stopwatchTime.str;
                    observer.next(stopwatchTime);
                }
            }, 200);
        };
        this.time$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](this.timeObserverFunc);
    }
    Stopwatch.prototype.start = function () {
        if (this.activeLap) {
            this.activeLap.start();
        }
        else {
            var lap = new _stopwatch_lap_stopwatch_lap__WEBPACK_IMPORTED_MODULE_0__["StopwatchLap"]().start();
            this.lapsMap[lap.id] = lap;
            this.activeLap = lap;
            this.laps.unshift(lap);
        }
        this.inProgress = true;
        return this;
    };
    Stopwatch.prototype.stop = function () {
        if (this.activeLap) {
            this.activeLap.stop();
        }
        this.inProgress = false;
        return this;
    };
    Stopwatch.prototype.newLap = function () {
        this.stop();
        this.activeLap = null;
        return this.start();
    };
    Stopwatch.prototype.continiueLap = function (id) {
        this.stop();
        if (this.lapsMap[id])
            this.activeLap = this.lapsMap[id];
        return this.start();
    };
    Stopwatch.prototype.reset = function () {
        this.stop();
        this.laps.length = 0;
        this.activeLap = null;
        return this;
    };
    Stopwatch.prototype.unixTime = function () {
        return this.laps.reduce(function (actual, lap) { return actual + lap.unixTime(); }, 0);
    };
    Stopwatch.prototype.formatedTime = function () {
        var unix_sec = this.unixTime();
        var hours = Math.floor(unix_sec / 3600);
        var minutes = Math.floor((unix_sec - (hours * 3600)) / 60);
        var seconds = unix_sec - (hours * 3600) - (minutes * 60);
        var hours_str = (hours < 10 ? "0" : "") + hours;
        var minutes_str = (minutes < 10 ? "0" : "") + minutes + "";
        var seconds_str = (seconds < 10 ? "0" : "") + seconds + "";
        return {
            h: hours_str,
            m: minutes_str,
            s: seconds_str,
            str: hours_str + ':' + minutes_str + ':' + seconds_str
        };
    };
    Stopwatch.prototype.toJSON = function () {
        return {
            id: this.id,
            laps: this.laps,
            activeLapId: this.activeLap && this.activeLap.id
        };
    };
    Stopwatch.prototype.restore = function (configuration) {
        var parcedConfiguration = JSON.parse(configuration);
        this.id = parcedConfiguration.id;
        this.laps = parcedConfiguration.laps.map(function (lap) { return new _stopwatch_lap_stopwatch_lap__WEBPACK_IMPORTED_MODULE_0__["StopwatchLap"]().restore(lap); });
        this.lapsMap = this.laps.reduce(function (laps, lap) { return (laps[lap.id] = lap) && laps; }, {});
        this.activeLap = this.lapsMap[parcedConfiguration.activeLapId];
        this.inProgress = !!this.activeLap;
    };
    return Stopwatch;
}());



/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"stopwatch-actions\">\r\n  <mat-card-content class=\"stopwatch-actions-wrapper\">\r\n    <button *ngIf=\"stopwatch.inProgress\" class=\"stopwatch-actions-button\" mat-button (click)=\"stop()\" color=\"accent\">Stop</button>\r\n    <button *ngIf=\"!stopwatch.inProgress\" class=\"stopwatch-actions-button\" mat-button (click)=\"start()\" color=\"primary\">Start</button>\r\n    <button *ngIf=\"stopwatch.inProgress\" class=\"stopwatch-actions-button\" mat-button (click)=\"stopwatch.newLap()\" color=\"primary\">Lap</button>\r\n    <button *ngIf=\"stopwatch.laps.length\" class=\"stopwatch-actions-button\" mat-button (click)=\"reset()\" color=\"warn\">Reset</button>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stopwatch-actions {\n  padding: 0; }\n  .stopwatch-actions-wrapper {\n    display: flex;\n    justify-content: space-around; }\n  .stopwatch-actions-button {\n    flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9wd2F0Y2gvc3RvcHdhdGNoLWFjdGlvbnMvRjpcXHByb2plY3RzXFx0aW1lLXRyYWNrZXJfZGV2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdG9wd2F0Y2hcXHN0b3B3YXRjaC1hY3Rpb25zXFxzdG9wd2F0Y2gtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVUsRUFBQTtFQUVWO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QixFQUFBO0VBRS9CO0lBQ0UsT0FDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9wd2F0Y2gvc3RvcHdhdGNoLWFjdGlvbnMvc3RvcHdhdGNoLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcHdhdGNoLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gICYtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gICYtYnV0dG9uIHtcclxuICAgIGZsZXg6IDFcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StopwatchActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchActionsComponent", function() { return StopwatchActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stopwatch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stopwatch.service */ "./src/app/services/stopwatch.service.ts");



var StopwatchActionsComponent = /** @class */ (function () {
    function StopwatchActionsComponent(stopwatchService) {
        this.stopwatchService = stopwatchService;
        this.inProggres = false;
        this.stopwatch = stopwatchService.stopwatch;
    }
    StopwatchActionsComponent.prototype.ngOnInit = function () {
    };
    StopwatchActionsComponent.prototype.start = function () {
        this.stopwatch.start();
    };
    StopwatchActionsComponent.prototype.stop = function () {
        this.stopwatch.stop();
    };
    StopwatchActionsComponent.prototype.reset = function () {
        this.stopwatch.reset();
    };
    StopwatchActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-stopwatch-actions',
            template: __webpack_require__(/*! ./stopwatch-actions.component.html */ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch-actions.component.scss */ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stopwatch_service__WEBPACK_IMPORTED_MODULE_2__["StopwatchService"]])
    ], StopwatchActionsComponent);
    return StopwatchActionsComponent;
}());



/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel #stopwatchLap class=\"stopwatch-lap\" *ngFor=\"let lap of stopwatch.laps\" mat-elevation-z1>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title class=\"stopwatch-lap-time\" [ngClass]=\"{'stopwatch-lap-time__active': stopwatch.activeLap.id === lap.id}\">\r\n      {{ lap.formatedTime() }}\r\n    </mat-panel-title>\r\n    <mat-panel-description class=\"stopwatch-lap-comment\">\r\n      {{ lap.comment }}\r\n    </mat-panel-description>\r\n  </mat-expansion-panel-header>\r\n\r\n  <mat-form-field class=\"stopwatch-lap-comment-input\">\r\n    <input matInput placeholder=\"Your comment\" [(ngModel)]=\"lap.comment\">\r\n  </mat-form-field>\r\n\r\n  <mat-action-row class=\"stopwatch-lap-actions\">\r\n    <button mat-button color=\"primary\" *ngIf=\"stopwatch.activeLap.id === lap.id\" (click)=\"startNewLap(stopwatchLap)\">Start new track</button>\r\n    <button mat-button color=\"primary\" *ngIf=\"stopwatch.activeLap.id !== lap.id\" (click)=\"startThisLap(stopwatchLap, lap)\">Continiue this track</button>\r\n  </mat-action-row>\r\n</mat-expansion-panel>\r\n\r\n<span *ngIf=\"!stopwatch.laps.length\" class=\"stopwatch-hint\">Here will be your tracker history</span>\r\n"

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stopwatch-lap {\n  margin: 10px 0;\n  padding: 0; }\n  .stopwatch-lap-time {\n    flex: 0; }\n  .stopwatch-lap-time__active {\n      color: #f44336; }\n  .stopwatch-lap-comment {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block; }\n  .stopwatch-lap-content {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center; }\n  .stopwatch-lap-actions {\n    padding: 0; }\n  .stopwatch-lap-comment-input {\n    width: 100%; }\n  .stopwatch-hint {\n  text-align: center;\n  display: block;\n  margin: 15px 0;\n  color: #808080; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9wd2F0Y2gvc3RvcHdhdGNoLWxhcHMvRjpcXHByb2plY3RzXFx0aW1lLXRyYWNrZXJfZGV2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdG9wd2F0Y2hcXHN0b3B3YXRjaC1sYXBzXFxzdG9wd2F0Y2gtbGFwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxVQUFVLEVBQUE7RUFFVjtJQUNFLE9BQU8sRUFBQTtFQUNQO01BQ0UsY0FBYyxFQUFBO0VBSWxCO0lBQ0UsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0VBR2hCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLFdBQVcsRUFBQTtFQUlmO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9wd2F0Y2gvc3RvcHdhdGNoLWxhcHMvc3RvcHdhdGNoLWxhcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcHdhdGNoLWxhcCB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgJi10aW1lIHtcclxuICAgIGZsZXg6IDA7XHJcbiAgICAmX19hY3RpdmUge1xyXG4gICAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtY29tbWVudCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAmLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAmLWNvbW1lbnQtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RvcHdhdGNoLWhpbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDE1cHggMDtcclxuICBjb2xvcjogIzgwODA4MDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StopwatchLapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchLapsComponent", function() { return StopwatchLapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stopwatch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stopwatch.service */ "./src/app/services/stopwatch.service.ts");



var StopwatchLapsComponent = /** @class */ (function () {
    function StopwatchLapsComponent(stopwatchService) {
        this.stopwatchService = stopwatchService;
        this.stopwatch = stopwatchService.stopwatch;
    }
    StopwatchLapsComponent.prototype.ngOnInit = function () {
    };
    StopwatchLapsComponent.prototype.startNewLap = function (matExpansionPanel) {
        matExpansionPanel.close();
        this.stopwatch.newLap();
    };
    StopwatchLapsComponent.prototype.startThisLap = function (matExpansionPanel, stopwatchLap) {
        matExpansionPanel.close();
        this.stopwatch
            .stop()
            .continiueLap(stopwatchLap.id);
    };
    StopwatchLapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-stopwatch-laps',
            template: __webpack_require__(/*! ./stopwatch-laps.component.html */ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch-laps.component.scss */ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stopwatch_service__WEBPACK_IMPORTED_MODULE_2__["StopwatchService"]])
    ], StopwatchLapsComponent);
    return StopwatchLapsComponent;
}());



/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"stopwatch\">\r\n    <mat-card class=\"stopwatch-card\">\r\n        <mat-card-content> \r\n          <span class=\"stopwatch-time\"> {{ hours }} </span>\r\n          <span class=\"stopwatch-time\"> {{ minutes }} </span>\r\n          <span class=\"stopwatch-time stopwatch-time__half\"> {{ seconds }} </span>\r\n         </mat-card-content>\r\n      </mat-card>\r\n      \r\n      <tt-stopwatch-actions></tt-stopwatch-actions>\r\n      <tt-stopwatch-laps></tt-stopwatch-laps>\r\n</div>"

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stopwatch {\n  width: 800px;\n  margin: auto; }\n  .stopwatch-card {\n    margin: 10px 0;\n    text-align: center;\n    font-size: 16vh; }\n  .stopwatch-time {\n    font-size: 1em; }\n  .stopwatch-time__half {\n      font-size: 0.5em; }\n  @media only screen and (max-width: 801px) {\n  .stopwatch {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9wd2F0Y2gvRjpcXHByb2plY3RzXFx0aW1lLXRyYWNrZXJfZGV2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdG9wd2F0Y2hcXHN0b3B3YXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFJWjtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsY0FBYyxFQUFBO0VBRWQ7TUFDRSxnQkFBZ0IsRUFBQTtFQVV0QjtFQUNFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0b3B3YXRjaC9zdG9wd2F0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcHdhdGNoIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuXHJcblxyXG4gICYtY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZ2aDtcclxuICB9XHJcblxyXG4gICYtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuXHJcbiAgICAmX19oYWxmIHtcclxuICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjgwMXB4KSAgeyBcclxuICBcclxuIH1cclxuXHJcbiBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDFweCkge1xyXG4gIC5zdG9wd2F0Y2gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch.component.ts ***!
  \*************************************************************/
/*! exports provided: StopwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchComponent", function() { return StopwatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_stopwatch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stopwatch.service */ "./src/app/services/stopwatch.service.ts");



var StopwatchComponent = /** @class */ (function () {
    function StopwatchComponent(stopwatchService) {
        this.stopwatchService = stopwatchService;
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
        this.stopwatch = stopwatchService.stopwatch;
    }
    StopwatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stopwatch.time$.subscribe({
            next: function (time) {
                _this.hours = time.h;
                _this.minutes = time.m;
                _this.seconds = time.s;
            }
        });
    };
    StopwatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-stopwatch',
            template: __webpack_require__(/*! ./stopwatch.component.html */ "./src/app/components/stopwatch/stopwatch.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch.component.scss */ "./src/app/components/stopwatch/stopwatch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stopwatch_service__WEBPACK_IMPORTED_MODULE_2__["StopwatchService"]])
    ], StopwatchComponent);
    return StopwatchComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
            ],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.save = function (stopwatch) {
        localStorage.setItem("stopwatch", JSON.stringify(stopwatch));
    };
    LocalStorageService.prototype.get = function () {
        return localStorage.getItem("stopwatch");
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/stopwatch.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/stopwatch.service.ts ***!
  \***********************************************/
/*! exports provided: StopwatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchService", function() { return StopwatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/stopwatch/stopwatch */ "./src/app/classes/stopwatch/stopwatch.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");




var StopwatchService = /** @class */ (function () {
    function StopwatchService(localStorageService) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.stopwatch = new _classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__["Stopwatch"]();
        window.onbeforeunload = function (e) {
            _this.localStorageService.save(_this.stopwatch);
        };
        var stopwatchConfiguration = this.localStorageService.get();
        this.stopwatch.restore(stopwatchConfiguration);
    }
    StopwatchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], StopwatchService);
    return StopwatchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\projects\time-tracker_dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map