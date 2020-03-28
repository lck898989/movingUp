(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/setting/Settings.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '240a0XaUzdNeq1jR4f1e6m3', 'Settings', __filename);
// Script/setting/Settings.ts

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
var Consts_1 = require("../consts/Consts");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.effectCon = null;
        _this.musicCon = null;
        return _this;
        // update (dt) {}
    }
    Settings.prototype.onLoad = function () {
    };
    Settings.prototype.start = function () {
        this.effectCon.on(cc.Node.EventType.TOUCH_START, this.tapEffect, this);
        this.musicCon.on(cc.Node.EventType.TOUCH_START, this.tapMusic, this);
        if (Consts_1.MusicState.musicState === Consts_1.eType.ON) {
            this.musicCon.getChildByName("musicOn").active = true;
            this.musicCon.getChildByName("musicOff").active = false;
        }
        else {
            this.musicCon.getChildByName("musicOn").active = false;
            this.musicCon.getChildByName("musicOff").active = true;
            cc.audioEngine.stopMusic();
        }
        if (Consts_1.MusicState.effectState === Consts_1.eType.ON) {
            this.effectCon.getChildByName("effectOn").active = true;
            this.effectCon.getChildByName("effectOff").active = false;
        }
        else {
            this.effectCon.getChildByName("effectOn").active = false;
            this.effectCon.getChildByName("effectOff").active = true;
        }
    };
    Settings.prototype.btnEvent = function (e, data) {
        if (data === "back") {
            this.node.getComponent(cc.Animation).play("settingOut");
        }
    };
    Settings.prototype.tapEffect = function () {
        if (Consts_1.MusicState.effectState === Consts_1.eType.ON) {
            this.effectCon.getChildByName("effectOff").active = true;
            this.effectCon.getChildByName("effectOn").active = false;
            Consts_1.MusicState.effectState = Consts_1.eType.OFF;
        }
        else {
            this.effectCon.getChildByName("effectOff").active = false;
            this.effectCon.getChildByName("effectOn").active = true;
            Consts_1.MusicState.effectState = Consts_1.eType.ON;
        }
        console.log("音效开关状态", Consts_1.MusicState.effectState);
    };
    Settings.prototype.tapMusic = function () {
        if (Consts_1.MusicState.musicState === Consts_1.eType.ON) {
            this.musicCon.getChildByName("musicOff").active = true;
            this.musicCon.getChildByName("musicOn").active = false;
            Consts_1.MusicState.musicState = Consts_1.eType.OFF;
            // cc.audioEngine.stopAll();
            cc.audioEngine.pauseMusic();
        }
        else {
            this.musicCon.getChildByName("musicOff").active = false;
            this.musicCon.getChildByName("musicOn").active = true;
            Consts_1.MusicState.musicState = Consts_1.eType.ON;
            // cc.audioEngine.resumeAll();
            // cc.audioEngine.resumeMusic();
            cc.audioEngine.resumeMusic();
        }
        console.log("背景音乐开关状态", Consts_1.MusicState.musicState);
    };
    Settings.prototype.onDestroy = function () {
        this.effectCon.off(cc.Node.EventType.TOUCH_START, this.tapEffect, this);
        this.musicCon.off(cc.Node.EventType.TOUCH_START, this.tapMusic, this);
    };
    __decorate([
        property(cc.Node)
    ], Settings.prototype, "effectCon", void 0);
    __decorate([
        property(cc.Node)
    ], Settings.prototype, "musicCon", void 0);
    Settings = __decorate([
        ccclass
    ], Settings);
    return Settings;
}(cc.Component));
exports.default = Settings;

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
        //# sourceMappingURL=Settings.js.map
        