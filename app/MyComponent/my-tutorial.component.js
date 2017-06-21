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
var MyTutorialComponent = (function () {
    function MyTutorialComponent() {
        this.onVote = new core_1.EventEmitter();
        this.voted = false;
    }
    MyTutorialComponent.prototype.setName = function (name) {
        this.name = name;
    };
    MyTutorialComponent.prototype.vote = function (agree) {
        this.voted = true;
        this.onVote.emit();
    };
    return MyTutorialComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyTutorialComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MyTutorialComponent.prototype, "onVote", void 0);
MyTutorialComponent = __decorate([
    core_1.Component({
        selector: "my-tutorial",
        template: "\n        <h1>{{name}}</h1>\n        <button [disabled]=\"voted\" (click)=\"vote(true)\">Agree</button>\n        <button [disabled]=\"voted\" (click)=\"vote(false)\">Disgree</button>\n        Result of vote: {{voted}}\n    "
    })
], MyTutorialComponent);
exports.MyTutorialComponent = MyTutorialComponent;
//# sourceMappingURL=my-tutorial.component.js.map