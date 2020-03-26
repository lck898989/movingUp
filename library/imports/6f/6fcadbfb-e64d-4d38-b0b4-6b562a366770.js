"use strict";
cc._RF.push(module, '6fcadv75k1NOLC0a1YqNmdw', 'LevelItem');
// Script/level/LevelItem.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelItem = /** @class */ (function (_super) {
    __extends(LevelItem, _super);
    function LevelItem() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        // private level: string = "1";
        // private best: string = "00:00";
        _this.levelLabel = null;
        _this.bestLabel = null;
        return _this;
    }
    LevelItem.prototype.start = function () {
        // this.level = this.levelLabel.string;
        // this.best = this.bestLabel.string;
    };
    LevelItem.prototype.getLevel = function () {
        return this.levelLabel.string;
    };
    LevelItem.prototype.setLevel = function (str) {
        this.levelLabel.string = str.toString();
    };
    LevelItem.prototype.getBest = function () {
        return this.bestLabel.string;
    };
    LevelItem.prototype.setBest = function (best) {
        this.bestLabel.string = best.toString();
    };
    LevelItem.prototype.btnEvent = function (e, data) {
        console.log("点击的第几关", this.levelLabel.string);
        cc.director.emit("levelChoose", { level: Number(this.levelLabel.string) });
        cc.director.loadScene("Game");
    };
    LevelItem.prototype.update = function (dt) { };
    LevelItem.prototype.onDestroy = function () {
    };
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "bestLabel", void 0);
    LevelItem = __decorate([
        ccclass
    ], LevelItem);
    return LevelItem;
}(cc.Component));
exports.default = LevelItem;

cc._RF.pop();