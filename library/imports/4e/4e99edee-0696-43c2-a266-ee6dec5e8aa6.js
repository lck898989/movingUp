"use strict";
cc._RF.push(module, '4e99e3uBpZDwqJm7m3sXoqm', 'OverController');
// Script/OverController.ts

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
var Consts_1 = require("./consts/Consts");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverController = /** @class */ (function (_super) {
    __extends(OverController, _super);
    function OverController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    OverController.prototype.onLoad = function () {
    };
    OverController.prototype.start = function () {
    };
    OverController.prototype.btnEvent = function (e, data) {
        var _this = this;
        if (data === "restart") {
            // 重新开始游戏
            var animName = this.node.getComponent(cc.Animation).getClips[1];
            this.node.getComponent(cc.Animation).play(animName);
            cc.director.loadScene("Game");
        }
        else if (data === "level") {
            // 回到关卡选择界面
            cc.director.loadScene("level");
        }
        else if (data === "next") {
            // 下一关游戏
            var sceneManager_1 = cc.find("Controller").getComponent("SceneManager");
            // 设置遮罩层和loading层显示
            sceneManager_1.setLayerVisible([Consts_1.LayerState.MASK, Consts_1.LayerState.LOADING]);
            setTimeout(function () {
                sceneManager_1.LS = Consts_1.LayerState.NONE;
                var curLevel = Number(sceneManager_1.getLevel());
                if (curLevel + 1 < 6) {
                    sceneManager_1.setLevel(curLevel + 1);
                    var animName = _this.node.getComponent(cc.Animation).getClips[1];
                    _this.node.getComponent(cc.Animation).play(animName);
                    cc.director.loadScene("Game");
                }
            }, 500);
        }
    };
    OverController.prototype.update = function (dt) {
    };
    OverController = __decorate([
        ccclass
    ], OverController);
    return OverController;
}(cc.Component));
exports.default = OverController;

cc._RF.pop();