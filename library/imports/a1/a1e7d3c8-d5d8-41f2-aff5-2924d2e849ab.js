"use strict";
cc._RF.push(module, 'a1e7dPI1dhB8q/1KSTS6Emr', 'Index');
// Script/Index.ts

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
var Consts_1 = require("./consts/Consts");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.bgm = null;
        // 常驻节点
        _this.rootNode = null;
        return _this;
        // update (dt) {}
    }
    Index.prototype.start = function () {
        cc.game.addPersistRootNode(this.rootNode);
        if (Consts_1.MusicState.musicState === Consts_1.eType.ON) {
            if (!cc.audioEngine.isMusicPlaying()) {
                cc.audioEngine.playMusic(this.bgm, true);
            }
        }
    };
    Index.prototype.btnEvent = function (e, data) {
        if (data === "game") {
            cc.director.loadScene("Game");
        }
        else if (data === "setting") {
            // cc.director.loadScene("");
            var sceneManager = cc.find("Controller").getComponent("SceneManager");
            sceneManager.LS = Consts_1.LayerState.SETTING;
            // cc.find("Controller")
        }
        else if (data === "level") {
            cc.director.loadScene("level");
        }
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], Index.prototype, "bgm", void 0);
    __decorate([
        property(cc.Node)
    ], Index.prototype, "rootNode", void 0);
    Index = __decorate([
        ccclass
    ], Index);
    return Index;
}(cc.Component));
exports.default = Index;

cc._RF.pop();