(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2ab68262T1HnILnUlh/fo7g', 'Game', __filename);
// Script/Game.ts

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
var ResourceManager_1 = require("./managers/ResourceManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
    Direction[Direction["DOWN"] = 3] = "DOWN";
    Direction[Direction["NONE"] = 4] = "NONE";
})(Direction || (Direction = {}));
var GameState;
(function (GameState) {
    GameState[GameState["INIT"] = 0] = "INIT";
    GameState[GameState["BEGIN"] = 1] = "BEGIN";
    GameState[GameState["END"] = 2] = "END";
})(GameState || (GameState = {}));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.board = null;
        _this.ball = null;
        _this.ballp = null;
        _this.hole = null;
        _this.ballFallAudio = null;
        _this.bg = null;
        _this.levelLabel = null;
        _this.mainCamera = null;
        _this.holeWin = null;
        _this.holeLose = null;
        _this.holeCon = null;
        _this.overMenu = null;
        _this.speed = 1;
        _this.canMove = true;
        _this.dir = Direction.NONE;
        _this.over = false;
        _this.curState = GameState.INIT;
        // 小球是否下落完毕
        _this.ballIsDown = false;
        _this.levelData = null;
        _this.startTime = false;
        _this.timeUsed = 0;
        _this.gridWidth = 70;
        _this.gridHeight = 70;
        _this.loseHolePool = null;
        _this.poolDeep = 40;
        _this.holeWinNode = null;
        return _this;
    }
    Game.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, sceneManager, levelStr, levelData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.overMenu.active = false;
                        this.gridMap = [];
                        cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
                        cc.director.getPhysicsManager().enabled = true;
                        self = this;
                        console.log("bg is ", this.bg);
                        sceneManager = cc.find("Controller").getComponent("SceneManager");
                        levelStr = sceneManager.getLevel().toString();
                        this.levelLabel.string = "level" + levelStr;
                        return [4 /*yield*/, ResourceManager_1.default.getInstance().loadResourceByUrl("level" + levelStr, cc.JsonAsset)];
                    case 1:
                        levelData = _a.sent();
                        this.levelData = levelData.json;
                        console.log("levelData is ", this.levelData);
                        cc.director.on("ballToHole", this.overHandle, this);
                        cc.director.on("ballToBoard", this.ballToBoardHandle, this);
                        cc.director.on("ballToLand", this.ballToLandHandle, this);
                        // 初始化相关代码
                        this.initHoleGrid();
                        this.initHolePoolForLose();
                        this.initHole();
                        console.log("gridMap is ", this.gridMap);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 初始化洞穴网格
    Game.prototype.initHoleGrid = function () {
        if (this.levelData) {
            // 列
            var col = this.levelData.col;
            // 行
            var row = this.levelData.row;
            for (var i = 0; i < row; i++) {
                this.gridMap[i] = [];
                for (var j = 0; j < col; j++) {
                    var pos = new cc.Vec2();
                    pos.x = this.gridWidth / 2 + j * this.gridWidth;
                    pos.y = this.gridHeight / 2 + i * this.gridHeight;
                    this.gridMap[i].push(pos);
                    // this.gridMap[i][j] = pos;
                }
            }
        }
    };
    // 初始化失败洞穴节点池
    Game.prototype.initHolePoolForLose = function () {
        this.loseHolePool = new cc.NodePool();
        for (var i = 0; i < this.poolDeep; i++) {
            var loseNode = cc.instantiate(this.holeLose);
            this.loseHolePool.put(loseNode);
            // this.holeCon.addChild(loseNode);
        }
    };
    // 初始化终点洞穴,障碍洞穴
    Game.prototype.initHole = function () {
        if (this.levelData) {
            var objects = this.levelData.objects;
            for (var i = 0; i < objects.length; i++) {
                if (i === 0) {
                    // 初始化终点洞穴
                    var posObj = objects[i].pos;
                    this.holeWinNode = cc.instantiate(this.holeWin);
                    this.holeCon.addChild(this.holeWinNode);
                    this.holeWinNode.setPosition(this.gridMap[posObj.row][posObj.col]);
                    this.holeWinNode.scale = Number(objects[i].scaleMultiplier);
                }
                else {
                    var posObj = objects[i].pos;
                    var loseHoleNode = this.loseHolePool.get();
                    console.log("从节点池中获取的节点是：", loseHoleNode);
                    if (loseHoleNode) {
                        loseHoleNode.setPosition(this.gridMap[posObj.row][posObj.col]);
                        this.holeCon.addChild(loseHoleNode);
                    }
                }
            }
        }
        // this.ball.zIndex = this.ball.parent
    };
    // 球碰到地板了说明是掉下去了游戏结束
    Game.prototype.ballToLandHandle = function () {
        this.startTime = false;
        this.overMenu.getChildByName("tryLabel").getComponent(cc.Label).string = "TRY AGAIN";
        var inName = this.overMenu.getComponent(cc.Animation).getClips()[0].name;
        this.overMenu.getComponent(cc.Animation).play(inName);
        this.over = true;
    };
    // 游戏结束
    Game.prototype.overHandle = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var successLabel, bestTimeString, inName, userCom, inName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.startTime = false;
                        if (!(data.over === "win")) return [3 /*break*/, 2];
                        console.log("开始播放游戏场景动画");
                        return [4 /*yield*/, this.ballToHoleHandle(this.holeWinNode)];
                    case 1:
                        _a.sent();
                        console.log("游戏场景动画播放完毕");
                        console.log("开始播放结束菜单动画");
                        if (this.over) {
                            this.overMenu.getChildByName("tryLabel").getComponent(cc.Label).string = "SUCCESS";
                            this.overMenu.getChildByName("successCon").active = true;
                            successLabel = this.overMenu.getChildByName("successCon").getChildByName("time").getComponent(cc.Label);
                            bestTimeString = this.updateTimeByTotalTime(this.timeUsed, successLabel);
                            inName = this.overMenu.getComponent(cc.Animation).getClips()[0].name;
                            this.overMenu.getComponent(cc.Animation).play(inName);
                            userCom = cc.find("Controller").getComponent("User");
                            userCom.setBestRecord(Number(cc.find("Controller").getComponent("SceneManager").getLevel().toString()), bestTimeString);
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(data.over === "lose")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.ballToHoleHandle(data.node)];
                    case 3:
                        _a.sent();
                        console.log("游戏失败");
                        // this.overMenu.active = true;
                        this.overMenu.getChildByName("tryLabel").getComponent(cc.Label).string = "TRY AGAIN";
                        inName = this.overMenu.getComponent(cc.Animation).getClips()[0].name;
                        this.overMenu.getComponent(cc.Animation).play(inName);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.ballToBoardHandle = function () {
        var self = this;
        if (!self.ballIsDown) {
            self.ballIsDown = true;
            self.levelLabel.string = "00:00";
            cc.tween(this.ballp).to(0.5, {
                opacity: 0
            }).start();
            var scaleAnim = self.levelLabel.node.getComponent(cc.Animation).getClips()[1];
            self.levelLabel.node.getComponent(cc.Animation).play(scaleAnim.name);
            cc.audioEngine.play(self.ballFallAudio, false, 0.5);
        }
    };
    Object.defineProperty(Game.prototype, "CurState", {
        set: function (state) {
            switch (state) {
                case GameState.INIT:
                    this.curState = GameState.INIT;
                    break;
                case GameState.BEGIN:
                    this.curState = GameState.BEGIN;
                    break;
                case GameState.END:
                    this.curState = GameState.END;
                    this.gameOver();
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.gameOver = function () {
        this.canMove = false;
        this.over = true;
        this.Dir = Direction.NONE;
        this.startTime = false;
    };
    // start 函数
    Game.prototype.start = function () {
        // cc.audioEngine.playMusic(this.bgm,true);
        var self = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Game.prototype.ballToHoleHandle = function (targetNode) {
        return __awaiter(this, void 0, Promise, function () {
            var self, worldPosition, localPosition_1;
            return __generator(this, function (_a) {
                self = this;
                if (!self.over) {
                    // 关闭物理系统
                    this.ball.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                    cc.director.getPhysicsManager().enabled = false;
                    worldPosition = self.holeCon.convertToWorldSpace(cc.v2(targetNode.x, targetNode.y));
                    localPosition_1 = self.node.convertToNodeSpaceAR(worldPosition);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            cc.tween(self.ball).to(0.3, {
                                x: localPosition_1.x,
                                y: localPosition_1.y
                            }).call(function () {
                                console.log("游戏结束");
                                cc.tween(self.ball).to(0.2, {
                                    scale: 0
                                }).call(function () {
                                    self.CurState = GameState.END;
                                    resolve();
                                }).start();
                            }).start();
                            self.board.getComponent(cc.Animation).play("boardW");
                            if (targetNode.group === "holewin") {
                                var winAnimName = self.holeWinNode.getComponent(cc.Animation).getClips()[2].name;
                                self.holeWinNode.getComponent(cc.Animation).play(winAnimName);
                            }
                        })];
                    // cc.director.emit("over");
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(Game.prototype, "Dir", {
        set: function (dir) {
            switch (dir) {
                case Direction.LEFT:
                    this.dir = Direction.LEFT;
                    break;
                case Direction.RIGHT:
                    this.dir = Direction.RIGHT;
                    break;
                case Direction.UP:
                    this.dir = Direction.UP;
                    break;
                case Direction.DOWN:
                    this.dir = Direction.DOWN;
                    break;
                case Direction.NONE:
                    this.dir = Direction.NONE;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        if (this.canMove) {
            this.startTime = true;
            switch (e.keyCode) {
                case 37:
                    this.Dir = Direction.LEFT;
                    cc.director.emit("none");
                    break;
                case 38:
                    this.Dir = Direction.UP;
                    cc.director.emit("up");
                    break;
                case 39:
                    this.Dir = Direction.RIGHT;
                    cc.director.emit("none");
                    // this.board.angle -= 
                    break;
                case 40:
                    cc.director.emit("down");
                    this.Dir = Direction.DOWN;
                    break;
            }
        }
    };
    Game.prototype.onKeyUp = function (e) {
        this.Dir = Direction.NONE;
        cc.director.emit("none");
    };
    Game.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.director.off("ballToHole", this.ballToHoleHandle, this);
        cc.director.off("ballToBoard", this.ballToBoardHandle, this);
    };
    Game.prototype.updateLevelOrTime = function (dt) {
        var self = this;
        if (self.startTime) {
            self.timeUsed += dt;
            // self.timeUsed = Math.floor(self.timeUsed);
            this.updateTimeByTotalTime(self.timeUsed, self.levelLabel);
        }
    };
    Game.prototype.updateTimeByTotalTime = function (totalTime, targetLabel) {
        var self = this;
        var resString = "";
        var minutes = Math.floor(totalTime / 60);
        var seconds = Math.floor(totalTime % 60);
        if (minutes < 10) {
            if (seconds < 10) {
                targetLabel.string = "0" + minutes + ":0" + seconds;
            }
            else {
                targetLabel.string = "0" + minutes + ":" + seconds;
            }
        }
        else {
            if (seconds < 10) {
                targetLabel.string = minutes + ":0" + seconds;
            }
            else {
                targetLabel.string = minutes + ":" + seconds;
            }
        }
        resString = targetLabel.string;
        return resString;
    };
    Game.prototype.update = function (dt) {
        var self = this;
        this.updateLevelOrTime(dt);
        switch (this.dir) {
            case Direction.LEFT:
                if (this.board.angle <= 20) {
                    this.board.angle += this.speed;
                }
                break;
            case Direction.RIGHT:
                if (this.board.angle >= -20) {
                    this.board.angle -= this.speed;
                }
                break;
            case Direction.UP:
                this.board.y += dt * 200;
                this.mainCamera.node.y += dt * 200;
                break;
            case Direction.DOWN:
                this.board.y -= dt * 200;
                this.mainCamera.node.y -= dt * 200;
                break;
        }
    };
    __decorate([
        property({ type: cc.Node })
    ], Game.prototype, "board", void 0);
    __decorate([
        property({ type: cc.Node })
    ], Game.prototype, "ball", void 0);
    __decorate([
        property({ type: cc.Node })
    ], Game.prototype, "ballp", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Game.prototype, "hole", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Game.prototype, "ballFallAudio", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "bg", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Camera)
    ], Game.prototype, "mainCamera", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "holeWin", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "holeLose", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "holeCon", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "overMenu", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
        //# sourceMappingURL=Game.js.map
        