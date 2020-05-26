function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_desk_desk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/desk/desk.component */
    "./src/app/components/desk/desk.component.ts");
    /* harmony import */


    var _components_karaoke_karaoke_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/karaoke/karaoke.component */
    "./src/app/components/karaoke/karaoke.component.ts");
    /* harmony import */


    var _components_paper_plate_paper_plate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/paper-plate/paper-plate.component */
    "./src/app/components/paper-plate/paper-plate.component.ts");
    /* harmony import */


    var _components_power_hour_power_hour_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/power-hour/power-hour.component */
    "./src/app/components/power-hour/power-hour.component.ts");
    /* harmony import */


    var _components_dinners_dinners_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/dinners/dinners.component */
    "./src/app/components/dinners/dinners.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/desk',
      pathMatch: 'full'
    }, {
      path: 'desk',
      component: _components_desk_desk_component__WEBPACK_IMPORTED_MODULE_2__["DeskComponent"]
    }, {
      path: 'speaker',
      component: _components_karaoke_karaoke_component__WEBPACK_IMPORTED_MODULE_3__["KaraokeComponent"]
    }, {
      path: 'award',
      component: _components_paper_plate_paper_plate_component__WEBPACK_IMPORTED_MODULE_4__["PaperPlateComponent"]
    }, {
      path: 'clock',
      component: _components_power_hour_power_hour_component__WEBPACK_IMPORTED_MODULE_5__["PowerHourComponent"]
    }, {
      path: 'snack',
      component: _components_dinners_dinners_component__WEBPACK_IMPORTED_MODULE_6__["DinnersComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mcp2020';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 15,
      vars: 0,
      consts: [[1, "nav-bar"], [1, "title"], ["routerLink", "/desk", 1, "nav-button"], ["routerLink", "/snack", 1, "nav-button"], ["routerLink", "/speaker", "disabled", "", 1, "nav-button"], ["routerLink", "/clock", "disabled", "", 1, "nav-button"], ["routerLink", "/award", "disabled", "", 1, "nav-button"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " MCP2020 Celebrates !! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Your DUSP from Home Desk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Monday Dinner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tuesday Karaoke ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Wednesday Power Hour ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Thursday Paper Plate Awards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".nav-bar[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  width: 99%;\n  height: 7vh;\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n  background-color: darkgrey;\n  border-radius: 3px;\n  margin: 5px 10px 5px 10px;\n  width: 20%;\n  border-style: none;\n  box-shadow: 0 3px #999;\n  font-family: \"Jost\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.nav-button[_ngcontent-%COMP%]:hover {\n  background-color: teal;\n  color: white;\n}\n\n.nav-button[_ngcontent-%COMP%]:active {\n  background-color: teal;\n  box-shadow: 0 1px #666;\n  transform: translateY(4px);\n}\n\n.title[_ngcontent-%COMP%] {\n  margin: 5px 10px 5px 10px;\n  width: 20%;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0M6XFxVc2Vyc1xcbGVubmFcXERvY3VtZW50c1xcR2l0SHViXFxtY3AyMDIwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlubmVyc1xcY29va2Jvb2svLi5cXC4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6Ii4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4ICM5OTk7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm5hdi1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbjphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggIzY2NjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuIiwiLm5hdi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogN3ZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5uYXYtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3gtc2hhZG93OiAwIDNweCAjOTk5O1xuICBmb250LWZhbWlseTogXCJKb3N0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5hdi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gIGJveC1zaGFkb3c6IDAgMXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xuICB3aWR0aDogMjAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_desk_desk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/desk/desk.component */
    "./src/app/components/desk/desk.component.ts");
    /* harmony import */


    var _components_power_hour_power_hour_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/power-hour/power-hour.component */
    "./src/app/components/power-hour/power-hour.component.ts");
    /* harmony import */


    var _components_karaoke_karaoke_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/karaoke/karaoke.component */
    "./src/app/components/karaoke/karaoke.component.ts");
    /* harmony import */


    var _components_paper_plate_paper_plate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/paper-plate/paper-plate.component */
    "./src/app/components/paper-plate/paper-plate.component.ts");
    /* harmony import */


    var _components_dinners_dinner_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/dinners/dinner.module */
    "./src/app/components/dinners/dinner.module.ts");
    /* harmony import */


    var _components_karaoke_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/karaoke/playlist/playlist.component */
    "./src/app/components/karaoke/playlist/playlist.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _components_dinners_dinner_module__WEBPACK_IMPORTED_MODULE_9__["DinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_desk_desk_component__WEBPACK_IMPORTED_MODULE_5__["DeskComponent"], _components_power_hour_power_hour_component__WEBPACK_IMPORTED_MODULE_6__["PowerHourComponent"], _components_karaoke_karaoke_component__WEBPACK_IMPORTED_MODULE_7__["KaraokeComponent"], _components_paper_plate_paper_plate_component__WEBPACK_IMPORTED_MODULE_8__["PaperPlateComponent"], _components_karaoke_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _components_dinners_dinner_module__WEBPACK_IMPORTED_MODULE_9__["DinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_desk_desk_component__WEBPACK_IMPORTED_MODULE_5__["DeskComponent"], _components_power_hour_power_hour_component__WEBPACK_IMPORTED_MODULE_6__["PowerHourComponent"], _components_karaoke_karaoke_component__WEBPACK_IMPORTED_MODULE_7__["KaraokeComponent"], _components_paper_plate_paper_plate_component__WEBPACK_IMPORTED_MODULE_8__["PaperPlateComponent"], _components_karaoke_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _components_dinners_dinner_module__WEBPACK_IMPORTED_MODULE_9__["DinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/desk/desk.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/desk/desk.component.ts ***!
    \***************************************************/

  /*! exports provided: DeskComponent */

  /***/
  function srcAppComponentsDeskDeskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeskComponent", function () {
      return DeskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DeskComponent =
    /*#__PURE__*/
    function () {
      function DeskComponent() {
        _classCallCheck(this, DeskComponent);
      }

      _createClass(DeskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeskComponent;
    }();

    DeskComponent.ɵfac = function DeskComponent_Factory(t) {
      return new (t || DeskComponent)();
    };

    DeskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeskComponent,
      selectors: [["app-desk"]],
      decls: 2,
      vars: 0,
      consts: [[1, "body"], ["routerLink", "/clock", 1, "desk"]],
      template: function DeskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".body[_ngcontent-%COMP%] {\n  width: 99%;\n  height: 85vh;\n  padding: 5px;\n  display: flex;\n  margin: 10px 0 0 0;\n}\n\n.desk[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 200px;\n  background: url('sprite-test.jpg');\n  background-repeat: no-repeat;\n  border: solid;\n}\n\n.desk[_ngcontent-%COMP%]:hover {\n  background: url('sprite-test.jpg') 0 -300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Rlc2svQzpcXFVzZXJzXFxsZW5uYVxcRG9jdW1lbnRzXFxHaXRIdWJcXG1jcDIwMjBcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkaW5uZXJzXFxjb29rYm9vay8uLlxcLi5cXGRlc2tcXGRlc2suY29tcG9uZW50LnNjc3MiLCIuLi8uLi9kZXNrL2Rlc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO0FDQ0oiLCJmaWxlIjoiLi4vLi4vZGVzay9kZXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5kZXNrIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Nwcml0ZS10ZXN0LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxufVxyXG5cclxuLmRlc2s6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Nwcml0ZS10ZXN0LmpwZykgMCAtMzAwcHg7XHJcbn0iLCIuYm9keSB7XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogODV2aDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5cbi5kZXNrIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Nwcml0ZS10ZXN0LmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlcjogc29saWQ7XG59XG5cbi5kZXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9zcHJpdGUtdGVzdC5qcGcpIDAgLTMwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-desk',
          templateUrl: './desk.component.html',
          styleUrls: ['./desk.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dinners/cookbook/cookbook.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/dinners/cookbook/cookbook.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CookbookComponent */

  /***/
  function srcAppComponentsDinnersCookbookCookbookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookbookComponent", function () {
      return CookbookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../recipes/recipes */
    "./src/app/components/dinners/recipes/recipes.ts");
    /* harmony import */


    var _menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu-add/menu-add.component */
    "./src/app/components/dinners/cookbook/menu-add/menu-add.component.ts");
    /* harmony import */


    var _recipes_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../recipes/recipe/recipe.component */
    "./src/app/components/dinners/recipes/recipe/recipe.component.ts");

    var CookbookComponent =
    /*#__PURE__*/
    function () {
      function CookbookComponent() {
        _classCallCheck(this, CookbookComponent);

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // breakfast = "";

        this.menu = [];
        this.breakfast_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["BREKKIE"];
        this.appetizer_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["APP"];
        this.soup_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["SOUP"];
        this.entree_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["ENTREE"];
        this.salad_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["SALAD"];
        this.sidedish_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["SIDE"];
        this.snack_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["SNACK"];
        this.dessert_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["DESSERT"];
        this.beverage_recipes = _recipes_recipes__WEBPACK_IMPORTED_MODULE_1__["BEVVIE"];
      } // valueChanged(){
      //   this.menu = this.random_brekkie;
      //   this.menuChange.emit(this.menu);
      // }


      _createClass(CookbookComponent, [{
        key: "addChoice",
        value: function addChoice(choice) {
          this.menu.push(choice);
          this.valueChange.emit(this.menu);
        }
      }, {
        key: "selectRandomBrekkie",
        value: function selectRandomBrekkie(recipes) {
          this.random_brekkie = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomApp",
        value: function selectRandomApp(recipes) {
          this.random_app = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomSoup",
        value: function selectRandomSoup(recipes) {
          this.random_soup = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomEntree",
        value: function selectRandomEntree(recipes) {
          this.random_entree = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomSalad",
        value: function selectRandomSalad(recipes) {
          this.random_salad = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomSide",
        value: function selectRandomSide(recipes) {
          this.random_side = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomSnack",
        value: function selectRandomSnack(recipes) {
          this.random_snack = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomDessert",
        value: function selectRandomDessert(recipes) {
          this.random_dessert = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "selectRandomBevvie",
        value: function selectRandomBevvie(recipes) {
          this.random_bevvie = recipes[Math.floor(Math.random() * recipes.length)];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CookbookComponent;
    }();

    CookbookComponent.ɵfac = function CookbookComponent_Factory(t) {
      return new (t || CookbookComponent)();
    };

    CookbookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CookbookComponent,
      selectors: [["app-cookbook"]],
      outputs: {
        valueChange: "valueChange"
      },
      decls: 46,
      vars: 18,
      consts: [[1, "cookbook"], [1, "randomizer"], [1, "randomized", 3, "click"], [3, "random_item", "valueChange"], [3, "details"]],
      template: function CookbookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_2_listener() {
            return ctx.selectRandomBrekkie(ctx.breakfast_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BREAKFAST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_4_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_7_listener() {
            return ctx.selectRandomApp(ctx.appetizer_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "APPETIZER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_9_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_12_listener() {
            return ctx.selectRandomSoup(ctx.soup_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SOUP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_14_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_17_listener() {
            return ctx.selectRandomEntree(ctx.entree_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ENTREE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_19_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_22_listener() {
            return ctx.selectRandomSalad(ctx.salad_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SALAD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_24_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_27_listener() {
            return ctx.selectRandomSide(ctx.sidedish_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "SIDE DISH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_29_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_32_listener() {
            return ctx.selectRandomSnack(ctx.snack_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SNACK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_34_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_37_listener() {
            return ctx.selectRandomDessert(ctx.dessert_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "DESSERT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_39_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookbookComponent_Template_button_click_42_listener() {
            return ctx.selectRandomBevvie(ctx.beverage_recipes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "BEVERAGE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-menu-add", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CookbookComponent_Template_app_menu_add_valueChange_44_listener($event) {
            return ctx.addChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-recipe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_brekkie);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_brekkie);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_app);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_app);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_soup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_soup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_entree);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_entree);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_salad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_salad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_side);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_side);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_snack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_snack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_dessert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_dessert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("random_item", ctx.random_bevvie);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx.random_bevvie);
        }
      },
      directives: [_menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_2__["MenuAddComponent"], _recipes_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__["RecipeComponent"]],
      styles: [".cookbook[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 30vh;\n}\n\n.randomizer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.randomized[_ngcontent-%COMP%] {\n  background-color: lightsteelblue;\n  border-radius: 3px;\n  margin: 10px 25px 10px 0px;\n  border-style: none;\n  box-shadow: 0 3px #999;\n  padding: 10px;\n}\n\n.randomized[_ngcontent-%COMP%]:hover {\n  background-color: slategray;\n  color: white;\n}\n\n.randomized[_ngcontent-%COMP%]:active {\n  background-color: black;\n  box-shadow: 0 1px #666;\n  transform: translateY(4px);\n}\n\n.result[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGVubmFcXERvY3VtZW50c1xcR2l0SHViXFxtY3AyMDIwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlubmVyc1xcY29va2Jvb2svY29va2Jvb2suY29tcG9uZW50LnNjc3MiLCJjb29rYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FET0E7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE9BO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNKSjs7QURPQTtFQUNJLHVCQUFBO0FDSkoiLCJmaWxlIjoiY29va2Jvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29va2Jvb2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIC8vIHdpZHRoOiA2MCU7XHJcbiAgICAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogbGVmdDtcclxufVxyXG5cclxuLnJhbmRvbWl6ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gd2lkdGg6MjAlO1xyXG4gICAgLy8gaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5yYW5kb21pemVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDI1cHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAjOTk5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnJhbmRvbWl6ZWQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yYW5kb21pemVkOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggIzY2NjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG59XHJcblxyXG4ucmVzdWx0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiLmNvb2tib29rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAzMHZoO1xufVxuXG4ucmFuZG9taXplciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yYW5kb21pemVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAxMHB4IDI1cHggMTBweCAwcHg7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAzcHggIzk5OTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnJhbmRvbWl6ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJhbmRvbWl6ZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgMXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4ucmVzdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookbookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cookbook',
          templateUrl: './cookbook.component.html',
          styleUrls: ['./cookbook.component.scss']
        }]
      }], function () {
        return [];
      }, {
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/dinners/cookbook/menu-add/menu-add.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/dinners/cookbook/menu-add/menu-add.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MenuAddComponent */

  /***/
  function srcAppComponentsDinnersCookbookMenuAddMenuAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuAddComponent", function () {
      return MenuAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuAddComponent =
    /*#__PURE__*/
    function () {
      function MenuAddComponent() {
        _classCallCheck(this, MenuAddComponent);

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.item = [];
      }

      _createClass(MenuAddComponent, [{
        key: "valueChanged",
        value: function valueChanged() {
          this.item = this.random_item;
          this.valueChange.emit(this.item);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuAddComponent;
    }();

    MenuAddComponent.ɵfac = function MenuAddComponent_Factory(t) {
      return new (t || MenuAddComponent)();
    };

    MenuAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuAddComponent,
      selectors: [["app-menu-add"]],
      inputs: {
        random_item: "random_item"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "add", 3, "click"]],
      template: function MenuAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAddComponent_Template_button_click_0_listener() {
            return ctx.valueChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".add[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: none;\n}\n\n.add[_ngcontent-%COMP%]:hover {\n  background-color: darkseagreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYWRkL0M6XFxVc2Vyc1xcbGVubmFcXERvY3VtZW50c1xcR2l0SHViXFxtY3AyMDIwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlubmVyc1xcY29va2Jvb2svbWVudS1hZGRcXG1lbnUtYWRkLmNvbXBvbmVudC5zY3NzIiwibWVudS1hZGQvbWVudS1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKIiwiZmlsZSI6Im1lbnUtYWRkL21lbnUtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmFkZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcclxufSIsIi5hZGQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYWRkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-add',
          templateUrl: './menu-add.component.html',
          styleUrls: ['./menu-add.component.scss']
        }]
      }], function () {
        return [];
      }, {
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        random_item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/dinners/cookbook/menu-subtract/menu-subtract.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/dinners/cookbook/menu-subtract/menu-subtract.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: MenuSubtractComponent */

  /***/
  function srcAppComponentsDinnersCookbookMenuSubtractMenuSubtractComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuSubtractComponent", function () {
      return MenuSubtractComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuSubtractComponent =
    /*#__PURE__*/
    function () {
      function MenuSubtractComponent() {
        _classCallCheck(this, MenuSubtractComponent);

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MenuSubtractComponent, [{
        key: "valueChanged",
        value: function valueChanged() {
          this.valueChange.emit(this.item);
          console.log(this.item);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuSubtractComponent;
    }();

    MenuSubtractComponent.ɵfac = function MenuSubtractComponent_Factory(t) {
      return new (t || MenuSubtractComponent)();
    };

    MenuSubtractComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuSubtractComponent,
      selectors: [["app-menu-subtract"]],
      inputs: {
        item: "item"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "subtract", 3, "click"]],
      template: function MenuSubtractComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSubtractComponent_Template_button_click_0_listener() {
            return ctx.valueChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".subtract[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: none;\n}\n\n.subtract[_ngcontent-%COMP%]:hover {\n  background-color: lightsalmon;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtc3VidHJhY3QvQzpcXFVzZXJzXFxsZW5uYVxcRG9jdW1lbnRzXFxHaXRIdWJcXG1jcDIwMjBcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkaW5uZXJzXFxjb29rYm9vay9tZW51LXN1YnRyYWN0XFxtZW51LXN1YnRyYWN0LmNvbXBvbmVudC5zY3NzIiwibWVudS1zdWJ0cmFjdC9tZW51LXN1YnRyYWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSiIsImZpbGUiOiJtZW51LXN1YnRyYWN0L21lbnUtc3VidHJhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidHJhY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJ0cmFjdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xyXG59IiwiLnN1YnRyYWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnN1YnRyYWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSubtractComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-subtract',
          templateUrl: './menu-subtract.component.html',
          styleUrls: ['./menu-subtract.component.scss']
        }]
      }], function () {
        return [];
      }, {
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/dinners/dinner.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/dinners/dinner.module.ts ***!
    \*****************************************************/

  /*! exports provided: DinnerModule */

  /***/
  function srcAppComponentsDinnersDinnerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DinnerModule", function () {
      return DinnerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _dinners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dinners.component */
    "./src/app/components/dinners/dinners.component.ts");
    /* harmony import */


    var _recipes_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./recipes/recipe/recipe.component */
    "./src/app/components/dinners/recipes/recipe/recipe.component.ts");
    /* harmony import */


    var _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cookbook/cookbook.component */
    "./src/app/components/dinners/cookbook/cookbook.component.ts");
    /* harmony import */


    var _cookbook_menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cookbook/menu-add/menu-add.component */
    "./src/app/components/dinners/cookbook/menu-add/menu-add.component.ts");
    /* harmony import */


    var _cookbook_menu_subtract_menu_subtract_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cookbook/menu-subtract/menu-subtract.component */
    "./src/app/components/dinners/cookbook/menu-subtract/menu-subtract.component.ts");

    var DinnerModule = function DinnerModule() {
      _classCallCheck(this, DinnerModule);
    };

    DinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DinnerModule
    });
    DinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DinnerModule_Factory(t) {
        return new (t || DinnerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DinnerModule, {
        declarations: [_dinners_component__WEBPACK_IMPORTED_MODULE_3__["DinnersComponent"], _recipes_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_4__["RecipeComponent"], _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_5__["CookbookComponent"], _cookbook_menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_6__["MenuAddComponent"], _cookbook_menu_subtract_menu_subtract_component__WEBPACK_IMPORTED_MODULE_7__["MenuSubtractComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dinners_component__WEBPACK_IMPORTED_MODULE_3__["DinnersComponent"], _recipes_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_4__["RecipeComponent"], _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_5__["CookbookComponent"], _cookbook_menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_6__["MenuAddComponent"], _cookbook_menu_subtract_menu_subtract_component__WEBPACK_IMPORTED_MODULE_7__["MenuSubtractComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dinners/dinners.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/dinners/dinners.component.ts ***!
    \*********************************************************/

  /*! exports provided: DinnersComponent */

  /***/
  function srcAppComponentsDinnersDinnersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DinnersComponent", function () {
      return DinnersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _cookbook_menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cookbook/menu-add/menu-add.component */
    "./src/app/components/dinners/cookbook/menu-add/menu-add.component.ts");
    /* harmony import */


    var _cookbook_menu_subtract_menu_subtract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cookbook/menu-subtract/menu-subtract.component */
    "./src/app/components/dinners/cookbook/menu-subtract/menu-subtract.component.ts");
    /* harmony import */


    var _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cookbook/cookbook.component */
    "./src/app/components/dinners/cookbook/cookbook.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _recipes_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipes/recipe/recipe.component */
    "./src/app/components/dinners/recipes/recipe/recipe.component.ts");

    function DinnersComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-menu-subtract", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DinnersComponent_div_38_Template_app_menu_subtract_valueChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.removeChoice($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recipe", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", item_r1);
      }
    }

    var DinnersComponent =
    /*#__PURE__*/
    function () {
      function DinnersComponent(fb) {
        _classCallCheck(this, DinnersComponent);

        this.fb = fb; // profileForm = this.fb.group({
        //   firstName: ['', Validators.required],
        //   lastName: [''],
        // });

        this.menu = [];
        this.newmenu = [];
      }

      _createClass(DinnersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayChoice",
        value: function displayChoice(choice) {
          this.menu = choice;
        }
      }, {
        key: "removeChoice",
        value: function removeChoice(choice) {
          this.to_remove = this.menu.indexOf(choice);
          console.log(this.to_remove);

          if (this.to_remove > -1) {
            this.newmenu = this.menu.splice(this.to_remove, 1);
            console.log(this.newmenu);
          }
        }
      }]);

      return DinnersComponent;
    }();

    DinnersComponent.ɵfac = function DinnersComponent_Factory(t) {
      return new (t || DinnersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    DinnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DinnersComponent,
      selectors: [["app-dinners"]],
      decls: 39,
      vars: 1,
      consts: [[1, "body"], [1, "final-third"], [1, "recipes"], [1, "blank"], [3, "valueChange"], [1, "menu"], [1, "selected"], ["class", "menu-content", 4, "ngFor", "ngForOf"], [1, "menu-content"], [1, "action", 3, "item", "valueChange"], [1, "item", 3, "details"]],
      template: function DinnersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DIGIDINS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Not sure what to cook?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Use this menu generator to phone a MCP friend! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Click each button to the left to get a random recipe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-menu-add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " to add a recipe to your selections ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " And feel free to use the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-menu-subtract");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " to remove them from your list ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Then grab your MCP2020 cookbook or PDF and start cooking! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " **Warning, your selections will ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "not");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " save if you navigate away from this page so make a note, use a post-it, or take a screenshot if you want to check out the other tabs! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " bu bye");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Menu Generator: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-cookbook", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DinnersComponent_Template_app_cookbook_valueChange_31_listener($event) {
            return ctx.displayChoice($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " bu bye");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Your Selections: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DinnersComponent_div_38_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
        }
      },
      directives: [_cookbook_menu_add_menu_add_component__WEBPACK_IMPORTED_MODULE_2__["MenuAddComponent"], _cookbook_menu_subtract_menu_subtract_component__WEBPACK_IMPORTED_MODULE_3__["MenuSubtractComponent"], _cookbook_cookbook_component__WEBPACK_IMPORTED_MODULE_4__["CookbookComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _recipes_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_6__["RecipeComponent"]],
      styles: [".body[_ngcontent-%COMP%] {\n  width: 99%;\n  height: 85vh;\n  padding: 5px;\n  display: flex;\n  margin: 10px 0 0 0;\n  display: flex;\n  flex-direction: row;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 23%;\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: lightsteelblue;\n  border-radius: 5px;\n  margin: 5px 0 5px 0;\n  padding: 0 15px 0 15px;\n}\n\n.action[_ngcontent-%COMP%] {\n  width: 10%;\n  align-self: center;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.recipes[_ngcontent-%COMP%] {\n  width: 43%;\n}\n\n.final-third[_ngcontent-%COMP%] {\n  width: 33%;\n  margin: 0 40px 0 10px;\n}\n\n.blank[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0M6XFxVc2Vyc1xcbGVubmFcXERvY3VtZW50c1xcR2l0SHViXFxtY3AyMDIwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlubmVyc1xcY29va2Jvb2svLi5cXGRpbm5lcnMuY29tcG9uZW50LnNjc3MiLCIuLi9kaW5uZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoiLi4vZGlubmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiAyMyU7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcclxufVxyXG5cclxuLmFjdGlvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5yZWNpcGVzIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbn1cclxuXHJcbi5maW5hbC10aGlyZHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBtYXJnaW46IDAgNDBweCAwIDEwcHggO1xyXG59XHJcblxyXG4uYmxhbmt7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSIsIi5ib2R5IHtcbiAgd2lkdGg6IDk5JTtcbiAgaGVpZ2h0OiA4NXZoO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm1lbnUge1xuICB3aWR0aDogMjMlO1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHggMCA1cHggMDtcbiAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbn1cblxuLmFjdGlvbiB7XG4gIHdpZHRoOiAxMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLml0ZW0ge1xuICB3aWR0aDogOTAlO1xufVxuXG4ucmVjaXBlcyB7XG4gIHdpZHRoOiA0MyU7XG59XG5cbi5maW5hbC10aGlyZCB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbjogMCA0MHB4IDAgMTBweDtcbn1cblxuLmJsYW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DinnersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dinners',
          templateUrl: './dinners.component.html',
          styleUrls: ['./dinners.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dinners/recipes/recipe/recipe.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/dinners/recipes/recipe/recipe.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RecipeComponent */

  /***/
  function srcAppComponentsDinnersRecipesRecipeRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeComponent", function () {
      return RecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RecipeComponent =
    /*#__PURE__*/
    function () {
      function RecipeComponent() {
        _classCallCheck(this, RecipeComponent);
      }

      _createClass(RecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipeComponent;
    }();

    RecipeComponent.ɵfac = function RecipeComponent_Factory(t) {
      return new (t || RecipeComponent)();
    };

    RecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeComponent,
      selectors: [["app-recipe"]],
      inputs: {
        details: "details"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "recipe"]],
      template: function RecipeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.details == null ? null : ctx.details.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.details == null ? null : ctx.details.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.page, " ");
        }
      },
      styles: [".recipe[_ngcontent-%COMP%] {\n  margin: 0 5px 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JlY2lwZXMvcmVjaXBlL0M6XFxVc2Vyc1xcbGVubmFcXERvY3VtZW50c1xcR2l0SHViXFxtY3AyMDIwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlubmVyc1xcY29va2Jvb2svLi5cXHJlY2lwZXNcXHJlY2lwZVxccmVjaXBlLmNvbXBvbmVudC5zY3NzIiwiLi4vcmVjaXBlcy9yZWNpcGUvcmVjaXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiIuLi9yZWNpcGVzL3JlY2lwZS9yZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBlIHtcclxuICAgIG1hcmdpbjogMCA1cHggMCAxMHB4O1xyXG59IiwiLnJlY2lwZSB7XG4gIG1hcmdpbjogMCA1cHggMCAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe',
          templateUrl: './recipe.component.html',
          styleUrls: ['./recipe.component.scss']
        }]
      }], function () {
        return [];
      }, {
        details: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/dinners/recipes/recipes.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/dinners/recipes/recipes.ts ***!
    \*******************************************************/

  /*! exports provided: BREKKIE, APP, SOUP, ENTREE, SALAD, SIDE, SNACK, DESSERT, BEVVIE */

  /***/
  function srcAppComponentsDinnersRecipesRecipesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BREKKIE", function () {
      return BREKKIE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP", function () {
      return APP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SOUP", function () {
      return SOUP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENTREE", function () {
      return ENTREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SALAD", function () {
      return SALAD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIDE", function () {
      return SIDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SNACK", function () {
      return SNACK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DESSERT", function () {
      return DESSERT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BEVVIE", function () {
      return BEVVIE;
    });

    var BREKKIE = [{
      page: "(page 08)",
      name: "Zack's ",
      title: 'Cornmeal Buttermilk Hotcakes w/ the Works'
    }, {
      page: "(page 11)",
      name: "Stephanie's ",
      title: 'Childhood in the Morning: Almond Butter + Jelly Toast'
    }, {
      page: "(page 13)",
      name: "Dan's ",
      title: 'Overnight Oats'
    }, {
      page: "(page 15)",
      name: "Bridget's ",
      title: 'Very Berry Breakfast on the go!'
    }, {
      page: "(page 17)",
      name: "Yichun's ",
      title: 'Egg Hugs Everything'
    }];
    var APP = [{
      page: "(page 21)",
      name: "Meesh's ",
      title: "Jan's Bruschetta"
    }, {
      page: "(page 23)",
      name: "Julia C's ",
      title: "Mai's Gazpacho"
    }, {
      page: "(page 25)",
      name: "Jenny's ",
      title: "Mom's Eggrolls"
    }];
    var SOUP = [{
      page: "(page 29)",
      name: "Zoë's",
      title: "Spicy Peanut Soup with Sweet Potato & Kale"
    }, {
      page: "(page 31)",
      name: "Emmett's",
      title: "Red Lentil Soup with Lemon"
    }, {
      page: "(page 33)",
      name: "Tanaya's",
      title: "'It Takes Stew 2 Tango' Famous Winter Stew"
    }, {
      page: "(page 35)",
      name: "John's",
      title: "New England Clam Chowder"
    }, {
      page: "(page 37)",
      name: "Wonyoung's",
      title: "Galbi Jjim"
    }, {
      page: "(page 39)",
      name: "Natalia's",
      title: "Brazilian Feijoada"
    }, {
      page: "(page 41)",
      name: "Dylan's",
      title: "Gnocchi Chicken and Dumplings"
    }, {
      page: "(page 43)",
      name: "Braxton's",
      title: "Sweet Potato Chili! (inspired by John Legend)"
    }];
    var ENTREE = [{
      page: "(page 49)",
      name: "Tianyu's",
      title: "Soft Fried Shrimp"
    }, {
      page: "(page 51)",
      name: "Ruichen's",
      title: "Green Tea Shrimp"
    }, {
      page: "(page 53)",
      name: "Jialu's",
      title: "the Easiest Chinese Recipe"
    }, {
      page: "(page 57)",
      name: "Shail's",
      title: "Paneer (Cottage Cheese) Masala"
    }, {
      page: "(page 59)",
      name: "Nina's",
      title: "Chicken Korma"
    }, {
      page: "(page 61)",
      name: "Adham's",
      title: "Egyptian Vegan Moussaka"
    }, {
      page: "(page 63)",
      name: "Carolyn's",
      title: "An Homage to My Grandfather's Pork Belly"
    }, {
      page: "(page 65)",
      name: "Carl's",
      title: "Beer Brats"
    }, {
      page: "(page 67)",
      name: "Kenyatta's",
      title: "Salmon Croquettes"
    }, {
      page: "(page 69)",
      name: "Daniela's",
      title: "Risotto e Patate (Potato Risotto)"
    }, {
      page: "(page 71)",
      name: "Drew's",
      title: "Balsamic Cream Pasta"
    }, {
      page: "(page 73)",
      name: "Mario's",
      title: "Pasta Dish for Daily Satisfaction"
    }, {
      page: "(page 77)",
      name: "Aiyah's",
      title: "Pastelón (Basically Dominican Lasagna)"
    }, {
      page: "(page 79)",
      name: "Vanessa's",
      title: "Tagliatelle Acorn Squash & Portabello Mushroom Pasta"
    }];
    var SALAD = [{
      page: "(page 85)",
      name: "Griffin's",
      title: "Korean Bibimbap"
    }, {
      page: "(page 89)",
      name: "Neha's",
      title: "California Barley Bowl"
    }, {
      page: "(page 91)",
      name: "Radhika's",
      title: "Tofu Sesame Salad"
    }, {
      page: "(page 93)",
      name: "David's",
      title: "Robinson Family Coleslaw"
    }];
    var SIDE = [{
      page: "(page 97)",
      name: "Yuan's",
      title: "Scrambled Eggs with Tomato"
    }, {
      page: "(page 99)",
      name: "Yunhan's",
      title: "Pumpkin Porridge"
    }, {
      page: "(page 101)",
      name: "Diego's",
      title: "Pastelera de Choclo"
    }, {
      page: "(page 103)",
      name: "Dani's",
      title: "Lomo Saltado"
    }];
    var SNACK = [{
      page: "(page 105)",
      name: "Sarah's",
      title: "Harry's Monstrosity"
    }, {
      page: "(page 109)",
      name: "Daudi's",
      title: "Mandazi"
    }, {
      page: "(page 111)",
      name: "Annie's",
      title: "Spam Musubi"
    }];
    var DESSERT = [{
      page: "(page 117)",
      name: "Augustín's",
      title: "Banana Bread"
    }, {
      page: "(page 119)",
      name: "Samra's",
      title: "Banana Bread"
    }, {
      page: "(page 121)",
      name: "Yair's",
      title: "Jerusalem Kugel"
    }, {
      page: "(page 123)",
      name: "Mary Hannah's",
      title: "Lemon Bars"
    }, {
      page: "(page 125)",
      name: "Ian's",
      title: "Milk Tart (It's a Pie)"
    }, {
      page: "(page 127)",
      name: "Marisa's",
      title: "Cranberyy-Lime Pie"
    }, {
      page: "(page 131)",
      name: "Abigail's",
      title: "Apple Cake"
    }, {
      page: "(page 133)",
      name: "Jonathan's",
      title: "Crazy Cake"
    }, {
      page: "(page 135)",
      name: "Julia F's",
      title: "THAT Chocolate Cake"
    }, {
      page: "(page 139)",
      name: "Hannah-Hunt's",
      title: "Flourless Chocolate Birthday Cake"
    }, {
      page: "(page 141)",
      name: "Rachel's",
      title: "Flourless Chocolate Cake"
    }, {
      page: "(page 143)",
      name: "Stephen's",
      title: "Italian Chocolate Ravoili"
    }];
    var BEVVIE = [{
      page: "(page 149)",
      name: "Gary's",
      title: "Vietnamese Iced Coffee (Ca phe sua da)"
    }, {
      page: "(page 151)",
      name: "Fiona's",
      title: "Soda Gembira (Happy Soda)"
    }, {
      page: "(page 153)",
      name: "Sarabrent's",
      title: "Chuck's Milk Punch"
    }, {
      page: "(page 155)",
      name: "Lenna's",
      title: "Spiked Spiced Apple Cider"
    }];
    /***/
  },

  /***/
  "./src/app/components/karaoke/karaoke.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/karaoke/karaoke.component.ts ***!
    \*********************************************************/

  /*! exports provided: KaraokeComponent */

  /***/
  function srcAppComponentsKaraokeKaraokeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KaraokeComponent", function () {
      return KaraokeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./playlist/playlist.component */
    "./src/app/components/karaoke/playlist/playlist.component.ts");

    var KaraokeComponent =
    /*#__PURE__*/
    function () {
      function KaraokeComponent() {
        _classCallCheck(this, KaraokeComponent);
      }

      _createClass(KaraokeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KaraokeComponent;
    }();

    KaraokeComponent.ɵfac = function KaraokeComponent_Factory(t) {
      return new (t || KaraokeComponent)();
    };

    KaraokeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KaraokeComponent,
      selectors: [["app-karaoke"]],
      decls: 23,
      vars: 0,
      consts: [[1, "body"], [1, "information"], [1, "playlists"]],
      template: function KaraokeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " hosted by dan powers !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " there's likely some rules ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " maybe some tips and tricks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " karaoke hall of fame ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " dj cahl, duh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " collect all playlists ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " what information is needed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " is there a song playing on this page?? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " previous party playlists ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-playlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_1__["PlaylistComponent"]],
      styles: [".body[_ngcontent-%COMP%] {\n  width: 99%;\n  height: 85vh;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  margin: 10px 0 0 0;\n}\n\n.playlists[_ngcontent-%COMP%] {\n  width: 66%;\n}\n\n.information[_ngcontent-%COMP%] {\n  width: 33%;\n  margin: 0 0 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2thcmFva2UvQzpcXFVzZXJzXFxsZW5uYVxcRG9jdW1lbnRzXFxHaXRIdWJcXG1jcDIwMjBcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkaW5uZXJzXFxjb29rYm9vay8uLlxcLi5cXGthcmFva2VcXGthcmFva2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9rYXJhb2tlL2thcmFva2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoiLi4vLi4va2FyYW9rZS9rYXJhb2tlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG59XHJcblxyXG4ucGxheWxpc3Rze1xyXG4gICAgd2lkdGg6IDY2JTtcclxufVxyXG5cclxuLmluZm9ybWF0aW9ue1xyXG4gICAgd2lkdGg6MzMlO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4IDtcclxufSIsIi5ib2R5IHtcbiAgd2lkdGg6IDk5JTtcbiAgaGVpZ2h0OiA4NXZoO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cblxuLnBsYXlsaXN0cyB7XG4gIHdpZHRoOiA2NiU7XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbjogMCAwIDAgMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KaraokeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-karaoke',
          templateUrl: './karaoke.component.html',
          styleUrls: ['./karaoke.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/karaoke/playlist/playlist.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/karaoke/playlist/playlist.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PlaylistComponent */

  /***/
  function srcAppComponentsKaraokePlaylistPlaylistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function () {
      return PlaylistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PlaylistComponent =
    /*#__PURE__*/
    function () {
      function PlaylistComponent() {
        _classCallCheck(this, PlaylistComponent);
      }

      _createClass(PlaylistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlaylistComponent;
    }();

    PlaylistComponent.ɵfac = function PlaylistComponent_Factory(t) {
      return new (t || PlaylistComponent)();
    };

    PlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaylistComponent,
      selectors: [["app-playlist"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"], ["src", "https://open.spotify.com/embed/playlist/1Kp8tgcWHhRkikOWtYSEHu", "width", "300", "height", "380", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"], ["src", "https://open.spotify.com/embed/playlist/6X5uNpLaFtuKBxloxYe8CW", "width", "300", "height", "380", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"], ["src", "https://open.spotify.com/embed/playlist/2UstfYfK1Db2pA7eyVuV3a", "width", "300", "height", "380", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"]],
      template: function PlaylistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\niframe[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2thcmFva2UvcGxheWxpc3QvQzpcXFVzZXJzXFxsZW5uYVxcRG9jdW1lbnRzXFxHaXRIdWJcXG1jcDIwMjBcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkaW5uZXJzXFxjb29rYm9vay8uLlxcLi5cXGthcmFva2VcXHBsYXlsaXN0XFxwbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2thcmFva2UvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiIuLi8uLi9rYXJhb2tlL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbmlmcmFtZXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbmlmcmFtZSB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-playlist',
          templateUrl: './playlist.component.html',
          styleUrls: ['./playlist.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/paper-plate/paper-plate.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/paper-plate/paper-plate.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PaperPlateComponent */

  /***/
  function srcAppComponentsPaperPlatePaperPlateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaperPlateComponent", function () {
      return PaperPlateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaperPlateComponent =
    /*#__PURE__*/
    function () {
      function PaperPlateComponent() {
        _classCallCheck(this, PaperPlateComponent);
      }

      _createClass(PaperPlateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaperPlateComponent;
    }();

    PaperPlateComponent.ɵfac = function PaperPlateComponent_Factory(t) {
      return new (t || PaperPlateComponent)();
    };

    PaperPlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaperPlateComponent,
      selectors: [["app-paper-plate"]],
      decls: 3,
      vars: 0,
      consts: [[1, "body"]],
      template: function PaperPlateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "paper-plate works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".body[_ngcontent-%COMP%] {\n  width: 99%;\n  height: 85vh;\n  padding: 5px;\n  display: flex;\n  margin: 10px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3BhcGVyLXBsYXRlL0M6XFxVc2Vyc1xcbGVubmFcXERvY3VtZW50c1xcR2l0SHViXFxtY3AyMDIwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlubmVyc1xcY29va2Jvb2svLi5cXC4uXFxwYXBlci1wbGF0ZVxccGFwZXItcGxhdGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9wYXBlci1wbGF0ZS9wYXBlci1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6Ii4uLy4uL3BhcGVyLXBsYXRlL3BhcGVyLXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbn0iLCIuYm9keSB7XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogODV2aDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaperPlateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-paper-plate',
          templateUrl: './paper-plate.component.html',
          styleUrls: ['./paper-plate.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/power-hour/power-hour.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/power-hour/power-hour.component.ts ***!
    \***************************************************************/

  /*! exports provided: PowerHourComponent */

  /***/
  function srcAppComponentsPowerHourPowerHourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PowerHourComponent", function () {
      return PowerHourComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import from '../../js/randomizer.js'


    var PowerHourComponent =
    /*#__PURE__*/
    function () {
      function PowerHourComponent() {
        _classCallCheck(this, PowerHourComponent);
      }

      _createClass(PowerHourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delayedAlert",
        value: function delayedAlert() {
          this.timeoutID = window.setTimeout(window.alert, 2 * 1000, 'That was really slow!');
        }
      }]);

      return PowerHourComponent;
    }();

    PowerHourComponent.ɵfac = function PowerHourComponent_Factory(t) {
      return new (t || PowerHourComponent)();
    };

    PowerHourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PowerHourComponent,
      selectors: [["app-power-hour"]],
      decls: 9,
      vars: 1,
      consts: [[1, "body"], [3, "click"]],
      template: function PowerHourComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "power-hour works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Live Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PowerHourComponent_Template_button_click_5_listener() {
            return ctx.delayedAlert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Show an alert box after two seconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeoutID);
        }
      },
      styles: [".body[_ngcontent-%COMP%] {\n  width: 99%;\n  height: 85vh;\n  padding: 5px;\n  margin: 10px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Bvd2VyLWhvdXIvQzpcXFVzZXJzXFxsZW5uYVxcRG9jdW1lbnRzXFxHaXRIdWJcXG1jcDIwMjBcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkaW5uZXJzXFxjb29rYm9vay8uLlxcLi5cXHBvd2VyLWhvdXJcXHBvd2VyLWhvdXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9wb3dlci1ob3VyL3Bvd2VyLWhvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ0FKIiwiZmlsZSI6Ii4uLy4uL3Bvd2VyLWhvdXIvcG93ZXItaG91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG59IiwiLmJvZHkge1xuICB3aWR0aDogOTklO1xuICBoZWlnaHQ6IDg1dmg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PowerHourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-power-hour',
          templateUrl: './power-hour.component.html',
          styleUrls: ['./power-hour.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\lenna\Documents\GitHub\mcp2020\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map