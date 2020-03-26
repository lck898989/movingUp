"use strict";
cc._RF.push(module, '02748RfmJZFLaBUlbYIXD8P', 'Level');
// Script/Level.ts

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
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.levelBtnsCon = null;
        _this.levetBtn = null;
        _this.row = 4;
        _this.col = 5;
        _this.spaceX = 25;
        _this.spaceY = 40;
        _this.startX = 0;
        _this.startY = 0;
        _this.btnWidth = 120;
        _this.btnHeight = 145;
        _this.clickAudio = null;
        return _this;
        // update (dt) {}
    }
    Level.prototype.onLoad = function () {
        this.startX = -this.levelBtnsCon.width / 2 + this.btnWidth / 2;
        this.startY = this.levelBtnsCon.height / 2 - this.btnHeight / 2;
    };
    Level.prototype.initLevelBtn = function () {
        var levelNum = 0;
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                levelNum++;
                var levelItemNode = cc.instantiate(this.levetBtn);
                levelItemNode.setPosition(cc.v2(this.startX + j * (this.btnWidth + this.spaceX), this.startY - i * (this.btnHeight + this.spaceY)));
                this.levelBtnsCon.addChild(levelItemNode);
                levelItemNode.name = i.toString();
                levelItemNode.getChildByName("bg").getChildByName("level").getComponent(cc.Label).string = levelNum.toString();
                var btn = levelItemNode.getComponent(cc.Button);
                btn.node.on("click", this.clickBtn, this);
            }
        }
    };
    Level.prototype.clickBtn = function (e) {
        cc.audioEngine.play(this.clickAudio, false, 1);
    };
    Level.prototype.start = function () {
        this.initLevelBtn();
    };
    Level.prototype.btnEvent = function (e, data) {
        cc.audioEngine.play(this.clickAudio, false, 1);
        if (data === "index") {
            cc.director.loadScene("index");
        }
        else if (data === "setting") {
            // cc.director.loadScene();
        }
    };
    __decorate([
        property(cc.Node)
    ], Level.prototype, "levelBtnsCon", void 0);
    __decorate([
        property(cc.Prefab)
    ], Level.prototype, "levetBtn", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Level.prototype, "clickAudio", void 0);
    Level = __decorate([
        ccclass
    ], Level);
    return Level;
}(cc.Component));
exports.default = Level;

cc._RF.pop();