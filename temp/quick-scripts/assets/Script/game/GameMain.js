(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/GameMain.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '07f21gLVFBGb7M08vZaqlCS', 'GameMain', __filename);
// Script/game/GameMain.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SceneManager_1 = require("../SceneManager");
var ResourceManager_1 = require("../managers/ResourceManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 摄像机移动方向
var Dir;
(function (Dir) {
    Dir[Dir["UP"] = 0] = "UP";
    Dir[Dir["DOWN"] = 1] = "DOWN";
    Dir[Dir["NONE"] = 2] = "NONE";
})(Dir || (Dir = {}));
var GameMain = /** @class */ (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.rootNode = null;
        _this.gamePrefab = null;
        _this.levelLabel = null;
        _this.mainCamera = null;
        // private ballIsDown
        _this.level = 0;
        _this.ballIsDown = false;
        _this.startTime = false;
        _this.timeUsed = 0;
        _this._curDir = Dir.NONE;
        _this.levelData = null;
        return _this;
    }
    GameMain.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var levelData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SceneManager_1.default.getInstance().setRoot(this.rootNode);
                        SceneManager_1.default.getInstance().runScene(this.gamePrefab);
                        return [4 /*yield*/, ResourceManager_1.default.getInstance().loadResourceByUrl("level" + SceneManager_1.default.getInstance().getLevel(), cc.JsonAsset)];
                    case 1:
                        levelData = _a.sent();
                        this.levelData = levelData.json;
                        console.log("levelData is ", this.levelData);
                        cc.director.on("ballToHole", this.overHandle);
                        cc.director.on("ballToBoard", this.ballToBoardHandle, this);
                        cc.director.on("ballToLand", this.ballToLandHandle, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.ballToLandHandle = function () {
        this.startTime = false;
    };
    GameMain.prototype.ballToBoardHandle = function () {
        if (!this.ballIsDown) {
            this.ballIsDown = true;
            this.startTime = true;
            this.levelLabel.string = "00:00";
            var scaleAnim = this.levelLabel.node.getComponent(cc.Animation).getClips()[1];
            if (scaleAnim) {
                this.levelLabel.node.getComponent(cc.Animation).play(scaleAnim.name);
            }
        }
    };
    // 游戏结束
    GameMain.prototype.overHandle = function () {
        this.startTime = false;
    };
    GameMain.prototype.start = function () {
        cc.director.on("up", this.upCamera, this);
        cc.director.on("down", this.downCamera, this);
        cc.director.on("none", this.cameraStop, this);
    };
    Object.defineProperty(GameMain.prototype, "CurDir", {
        set: function (dir) {
            switch (dir) {
                case Dir.UP:
                    this._curDir = Dir.UP;
                    break;
                case Dir.DOWN:
                    this._curDir = Dir.DOWN;
                    break;
                case Dir.NONE:
                    this._curDir = Dir.NONE;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    GameMain.prototype.upCamera = function () {
        this.CurDir = Dir.UP;
    };
    GameMain.prototype.downCamera = function () {
        this.CurDir = Dir.DOWN;
    };
    GameMain.prototype.cameraStop = function () {
        this.CurDir = Dir.NONE;
    };
    GameMain.prototype.updateLevelOrTime = function (dt) {
        var self = this;
        if (self.startTime) {
            self.timeUsed += dt;
            // self.timeUsed = Math.floor(self.timeUsed);
            var minutes = Math.floor(self.timeUsed / 60);
            var seconds = Math.floor(self.timeUsed % 60);
            if (minutes < 10) {
                if (seconds < 10) {
                    self.levelLabel.string = "0" + minutes + ":0" + seconds;
                }
                else {
                    self.levelLabel.string = "0" + minutes + ":" + seconds;
                }
            }
            else {
                if (seconds < 10) {
                    self.levelLabel.string = minutes + ":0" + seconds;
                }
                else {
                    self.levelLabel.string = minutes + ":" + seconds;
                }
            }
        }
    };
    GameMain.prototype.onDestroy = function () {
        cc.director.off("over", this.overHandle);
        cc.director.off("ballToBoard", this.ballToBoardHandle, this);
        cc.director.off("ballToLand", this.ballToLandHandle, this);
        cc.director.off("up", this.upCamera, this);
        cc.director.off("down", this.downCamera, this);
        cc.director.off("none", this.cameraStop, this);
    };
    GameMain.prototype.update = function (dt) {
        this.updateLevelOrTime(dt);
        switch (this._curDir) {
            case Dir.UP:
                this.mainCamera.node.y += dt * 200;
                break;
            case Dir.DOWN:
                this.mainCamera.node.y -= dt * 200;
                break;
            case Dir.NONE:
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], GameMain.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMain.prototype, "gamePrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameMain.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Camera)
    ], GameMain.prototype, "mainCamera", void 0);
    GameMain = __decorate([
        ccclass
    ], GameMain);
    return GameMain;
}(cc.Component));
exports.default = GameMain;

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
        //# sourceMappingURL=GameMain.js.map
        