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
var btn_1 = require('./btn');
var AppComponent = (function () {
    function AppComponent() {
        this.clickMessage = '';
        this.times = 0;
        this.values = '';
        this.btn = [
            new btn_1.Boton(1, 'Botón 1'),
            new btn_1.Boton(2, 'Botón 2'),
            new btn_1.Boton(3, 'Botón 3'),
            new btn_1.Boton(4, 'Botón 4')
        ];
    }
    AppComponent.prototype.onClickMe = function () {
        this.clickMessage = 'Oh you´re bad, I like it!';
        if (this.times > 0) {
            switch (this.times) {
                case 10:
                    this.clickMessage = 'Stop it Damn it  >:v';
                    this.times = -1;
                    break;
                default:
                    this.clickMessage = 'You pressed again ' + this.times;
                    +'!';
                    break;
            }
        }
        this.times++;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<header>\n\n  \t</header>\n  \t<div>\n  \t\t<button *ngFor=\"let values of btn\">{{values.name}}</button>\n      <p *ngIf=\"btn.length > 3\">There're many buttons...</p>\n      <button id=\"redBtn\" (click)=\"onClickMe()\">Don't press the button</button>\n      <label>{{clickMessage}}</label><br>\n      <input #data (keyup)=\"0\">\n      <label>Current Text: <label>{{data.value}}</label></label><br>\n      <input #enterData (keyup.enter)=\"values = enterData.value\" (blur) = \"values = enterData.value\">\n      <label>Press enter to insert text: <label>{{values}}</label></label>\n  \t</div>\n  ",
            styles: ["\n  \theader{\n  \t\twidth: 100%;\n  \t\theight: 70px;\n  \t\tbackground-color: rgb(0, 134, 179);\n  \t\tposition: fixed;\n      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);  \t\t\n  \t}\n  \tbutton{\n  \t\t margin: 80px 10px 10px 10px;\n  \t\t width: 180px;\n  \t\t height: 50px;\n  \t\t position: static;\n  \t\t border-radius: 6px;\n  \t\t border: none;\n  \t\t font-family: Arial;\n  \t\t font-size: 17px;\n  \t\t color: white;\n       pointer: cusor;\n  \t}\n  \tbutton:hover{\n  \t\tbackground-color: rgba(153, 0, 0, 1);\n  \t}\n  \tbutton:active{\n  \t\tbackground-color: rgb(255, 0, 0);\n  \t}\n    #redBtn{\n      background-color: red;\n      margin: 10px;\n    }\n    #redBtn:active{\n      background-color: rgb(153, 0, 0);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map