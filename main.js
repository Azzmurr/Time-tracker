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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _components_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stopwatch/stopwatch.component */ "./src/app/components/stopwatch/stopwatch.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _components_stopwatch_stopwatch_actions_stopwatch_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stopwatch/stopwatch-actions/stopwatch-actions.component */ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.ts");
/* harmony import */ var _components_stopwatch_stopwatch_laps_stopwatch_laps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/stopwatch/stopwatch-laps/stopwatch-laps.component */ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_6__["StopwatchComponent"],
                _components_stopwatch_stopwatch_actions_stopwatch_actions_component__WEBPACK_IMPORTED_MODULE_8__["StopwatchActionsComponent"],
                _components_stopwatch_stopwatch_laps_stopwatch_laps_component__WEBPACK_IMPORTED_MODULE_9__["StopwatchLapsComponent"],
                _components_stopwatch_stopwatch_actions_stopwatch_actions_component__WEBPACK_IMPORTED_MODULE_8__["StopwatchActionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
            ],
            providers: [],
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
        this.formated = "00:00:00";
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
        this.timeObserverFunc = function (observer) {
            var interval = setInterval(function () {
                var stopwatchTime = _this.formatedTime();
                if (_this.oldFormatedTime !== stopwatchTime.str) {
                    _this.oldFormatedTime = stopwatchTime.str;
                    observer.next(stopwatchTime);
                }
            }, 200);
        };
        this.timeObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](this.timeObserverFunc);
    }
    Stopwatch.prototype.start = function () {
        if (this.activeLap) {
            this.activeLap.start();
        }
        else {
            var lap = new _stopwatch_lap_stopwatch_lap__WEBPACK_IMPORTED_MODULE_0__["StopwatchLap"]().start();
            this.activeLap = lap;
            this.laps.push(lap);
        }
        return this.activeLap;
    };
    Stopwatch.prototype.stop = function () {
        if (this.activeLap) {
            this.activeLap.stop();
        }
    };
    Stopwatch.prototype.newLap = function () {
        this.stop();
        this.activeLap = null;
        console.log(this.laps);
        return this.start();
    };
    Stopwatch.prototype.reset = function () {
        this.laps.length = 0;
        this.activeLap = null;
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
    Stopwatch.prototype.time = function () {
        return this.timeObservable;
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

module.exports = "<mat-card class=\"stopwatch-actions\">\r\n  <mat-card-content class=\"stopwatch-actions-wrapper\">\r\n    <button *ngIf=\"inProggres\" class=\"stopwatch-actions-button\" mat-button (click)=\"stop()\" color=\"accent\">Stop</button>\r\n    <button *ngIf=\"!inProggres\" class=\"stopwatch-actions-button\" mat-button (click)=\"start()\" color=\"primary\">Start</button>\r\n    <button *ngIf=\"inProggres\" class=\"stopwatch-actions-button\" mat-button (click)=\"stopwatch.newLap()\" color=\"primary\">Lap</button>\r\n    <button *ngIf=\"stopwatch.laps.length\" class=\"stopwatch-actions-button\" mat-button (click)=\"reset()\" color=\"warn\">Reset</button>\r\n  </mat-card-content>\r\n</mat-card>"

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
/* harmony import */ var src_app_classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/stopwatch/stopwatch */ "./src/app/classes/stopwatch/stopwatch.ts");



var StopwatchActionsComponent = /** @class */ (function () {
    function StopwatchActionsComponent() {
        this.inProggres = false;
    }
    StopwatchActionsComponent.prototype.ngOnInit = function () {
    };
    StopwatchActionsComponent.prototype.start = function () {
        this.stopwatch.start();
        this.inProggres = true;
    };
    StopwatchActionsComponent.prototype.stop = function () {
        this.stopwatch.stop();
        this.inProggres = false;
    };
    StopwatchActionsComponent.prototype.reset = function () {
        this.stopwatch.reset();
        this.inProggres = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__["Stopwatch"])
    ], StopwatchActionsComponent.prototype, "stopwatch", void 0);
    StopwatchActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-stopwatch-actions',
            template: __webpack_require__(/*! ./stopwatch-actions.component.html */ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch-actions.component.scss */ "./src/app/components/stopwatch/stopwatch-actions/stopwatch-actions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<mat-card class=\"stopwatch-lap\" *ngFor=\"let lap of stopwatch.laps\">\r\n  <mat-card-content>\r\n    {{ lap.formatedTime() }}\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<span *ngIf=\"!stopwatch.laps.length\" class=\"stopwatch-hint\">Here will be your tracker history</span>\r\n"

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stopwatch-lap {\n  margin: 10px 0; }\n\n.stopwatch-hint {\n  text-align: center;\n  display: block;\n  margin: 15px 0;\n  color: #808080; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9wd2F0Y2gvc3RvcHdhdGNoLWxhcHMvRjpcXHByb2plY3RzXFx0aW1lLXRyYWNrZXJfZGV2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdG9wd2F0Y2hcXHN0b3B3YXRjaC1sYXBzXFxzdG9wd2F0Y2gtbGFwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0b3B3YXRjaC9zdG9wd2F0Y2gtbGFwcy9zdG9wd2F0Y2gtbGFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9wd2F0Y2gtbGFwIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnN0b3B3YXRjaC1oaW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcbn0iXX0= */"

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
/* harmony import */ var src_app_classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/stopwatch/stopwatch */ "./src/app/classes/stopwatch/stopwatch.ts");



var StopwatchLapsComponent = /** @class */ (function () {
    function StopwatchLapsComponent() {
    }
    StopwatchLapsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__["Stopwatch"])
    ], StopwatchLapsComponent.prototype, "stopwatch", void 0);
    StopwatchLapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tt-stopwatch-laps',
            template: __webpack_require__(/*! ./stopwatch-laps.component.html */ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.html"),
            styles: [__webpack_require__(/*! ./stopwatch-laps.component.scss */ "./src/app/components/stopwatch/stopwatch-laps/stopwatch-laps.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\r\n<div class=\"stopwatch\">\r\n    <mat-card class=\"stopwatch-card\">\r\n        <mat-card-content> \r\n          <span class=\"stopwatch-time\"> {{ hours }} </span>\r\n          <span class=\"stopwatch-time\"> {{ minutes }} </span>\r\n          <span class=\"stopwatch-time stopwatch-time__half\"> {{ seconds }} </span>\r\n         </mat-card-content>\r\n      </mat-card>\r\n      \r\n      <tt-stopwatch-actions [stopwatch]=\"stopwatch\"></tt-stopwatch-actions>\r\n      <tt-stopwatch-laps [stopwatch]=\"stopwatch\"></tt-stopwatch-laps>\r\n</div>"

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
/* harmony import */ var src_app_classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/stopwatch/stopwatch */ "./src/app/classes/stopwatch/stopwatch.ts");



var StopwatchComponent = /** @class */ (function () {
    function StopwatchComponent() {
        this.stopwatch = new src_app_classes_stopwatch_stopwatch__WEBPACK_IMPORTED_MODULE_2__["Stopwatch"]();
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
    }
    StopwatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stopwatch.time().subscribe({
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StopwatchComponent);
    return StopwatchComponent;
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