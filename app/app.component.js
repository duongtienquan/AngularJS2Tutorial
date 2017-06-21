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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var my_tutorial_component_1 = require("./MyComponent/my-tutorial.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "ANGULARJS 2 tutorial";
        this.agree = 0;
        this.disgree = 0;
        this.names = ["Mr A", "Mr B", "Mr C", "Mr D"];
    }
    AppComponent.prototype.parentVote = function (agree) {
        if (agree) {
            this.agree++;
        }
        else {
            this.disgree++;
        }
    };
    AppComponent.prototype.changeName = function (value) {
        console.log('test');
        this.tutorialComponent.setName(value);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(my_tutorial_component_1.MyTutorialComponent),
    __metadata("design:type", my_tutorial_component_1.MyTutorialComponent)
], AppComponent.prototype, "tutorialComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styles: ['h1 {color:blue;}']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map