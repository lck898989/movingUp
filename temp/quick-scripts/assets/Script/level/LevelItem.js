(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/level/LevelItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6fcadv75k1NOLC0a1YqNmdw', 'LevelItem', __filename);
// Script/level/LevelItem.ts

"use strict";
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.bestLabel = null;
        return _this;
    }
    LevelItem.prototype.start = function () {
        var userCom = cc.find("Controller").getComponent("User");
        var bestRecord = userCom.getBestRecord(Number(this.levelLabel.string));
        this.bestLabel.string = bestRecord.time;
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=LevelItem.js.map
        