"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shared_1 = require('../shared');
var Navbar = (function () {
    function Navbar(routerService) {
        this.routerService = routerService;
    }
    Navbar.prototype.ngOnInit = function () {
        this.menuItems = this.routerService.getRoutes().filter(function (menuItem) { return menuItem.menuType != null; });
    };
    Navbar.prototype.getMenuItemClasses = function (menuItem) {
        var menuItemClass = {
            "nav-item": menuItem.menuType === shared_1.MenuType.LEFT || menuItem.menuType === shared_1.MenuType.RIGHT,
            "pull-xs-right": menuItem.menuType === shared_1.MenuType.RIGHT
        };
        return menuItemClass;
    };
    Navbar.prototype.getMenuItemAnchorClasses = function (menuItem) {
        var menuItemAnchorClass = {
            "navbar-brand": menuItem.menuType === shared_1.MenuType.BRAND,
            "nav-link": menuItem.menuType === shared_1.MenuType.LEFT || menuItem.menuType === shared_1.MenuType.RIGHT
        };
        return menuItemAnchorClass;
    };
    Navbar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            properties: ['routes'],
            templateUrl: 'navbar.component.html',
            styles: [
                "\n    .nav-link {\n      color: #eee !important;\n    }\n    "
            ],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [shared_1.RouterService])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;

//# sourceMappingURL=navbar.component.js.map
