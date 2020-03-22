(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/managers/AudioManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '442dcYsejhL0pzVZlG+jjrw', 'AudioManager', __filename);
// Script/managers/AudioManager.ts

"use strict";
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
// 声音管理类
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.currentBgMusic = -1;
        // 背景音乐缓冲
        this.bgCache = {};
        // 音效缓存
        this.effectCache = {};
        // 音量
        this.volume = 1;
        // 默认是开启音效的
        this.musicOn = true;
    }
    AudioManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new AudioManager();
        }
        if (!cc.sys.localStorage.getItem("music")) {
            // 默认开启音效
            cc.sys.localStorage.setItem("music", 1);
        }
        return this._instance;
    };
    // 播放背景音乐
    AudioManager.prototype.playBg = function (url, loop, volume) {
        return __awaiter(this, void 0, void 0, function () {
            var that, clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("url is ", typeof url);
                        if (!(typeof url === "string")) return [3 /*break*/, 3];
                        that = this;
                        if (typeof volume === 'number') {
                            if (volume > 1) {
                                volume = 1;
                            }
                            else if (volume < 0) {
                                volume = 0;
                            }
                        }
                        else {
                            volume = this.volume;
                        }
                        console.log("bgCache is ", this.bgCache[url]);
                        if (!!this.bgCache[url]) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                cc.loader.loadRes(url, function (err, clip) {
                                    if (err) {
                                        console.log("err is ", err);
                                        reject(err);
                                        return;
                                    }
                                    resolve(clip);
                                });
                            })];
                    case 1:
                        clip = _a.sent();
                        this.bgCache[url] = clip;
                        if (this.musicOn) {
                            this.currentBgMusic = cc.audioEngine.play(this.bgCache[url], loop, volume);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (this.musicOn) {
                            this.currentBgMusic = cc.audioEngine.play(this.bgCache[url], loop, volume);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AudioManager.prototype.stopBg = function () {
        // 暂停音乐
        cc.audioEngine.pause(this.currentBgMusic);
    };
    AudioManager.prototype.isPlaying = function () {
        if (this.currentBgMusic !== -1 && this.musicOn) {
            return true;
        }
        else {
            return false;
        }
    };
    // 播放音效
    AudioManager.prototype.playEffect = function (url) {
        if (!this.musicOn) {
            return;
        }
        if (typeof url === "string") {
            var self_1 = this;
            if (!this.effectCache[url]) {
                cc.loader.loadRes(url, function (err, clip) {
                    if (err) {
                        return;
                    }
                    self_1.effectCache[url] = clip;
                });
            }
            cc.audioEngine.play(this.effectCache[url], false, this.volume);
        }
    };
    // 开启音效(1为开启，0为关闭)
    AudioManager.prototype.turnOnMusic = function () {
        if (this.currentBgMusic !== -1) {
            cc.audioEngine.resume(this.currentBgMusic);
        }
        cc.sys.localStorage.setItem("music", 1);
        this.musicOn = true;
    };
    // 关闭音效
    AudioManager.prototype.turnOffMusic = function () {
        // 关闭音效
        this.stopBg();
        cc.sys.localStorage.setItem("music", 0);
        this.musicOn = false;
    };
    // 获取音效状态（是开启还是关闭）
    AudioManager.prototype.getMusicState = function () {
        var musicState = cc.sys.localStorage.getItem("music");
        return musicState == 1 ? true : false;
    };
    // 设置音效
    AudioManager.prototype.setVolume = function (volume) {
        if (volume > 1 || volume < 0) {
            if (volume > 1) {
                this.volume = 1;
            }
            else {
                this.volume = 0;
            }
        }
        else {
            this.volume = volume;
        }
    };
    return AudioManager;
}());
exports.default = AudioManager;

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
        //# sourceMappingURL=AudioManager.js.map
        