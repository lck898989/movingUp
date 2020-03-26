(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SceneManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6d64aAOOChMAa3V1hSCrm1W', 'SceneManager', __filename);
// Script/SceneManager.ts

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
var SceneManager = /** @class */ (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        // static getInstance() {
        //     throw new Error("Method not implemented.");
        // }
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 2;
        _this._root = null;
        return _this;
    }
    SceneManager_1 = SceneManager;
    SceneManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new SceneManager_1();
        }
        return this._instance;
    };
    SceneManager.prototype.start = function () {
        cc.director.on("levelChoose", this.chooseLevel, this);
    };
    SceneManager.prototype.chooseLevel = function (data) {
        console.log("选择关卡传递过来的数据data is ", data);
        this.level = data.level;
    };
    SceneManager.prototype.setRoot = function (rootNode) {
        this._root = rootNode;
    };
    SceneManager.prototype.setLevel = function (level) {
        this.level = level;
    };
    SceneManager.prototype.getLevel = function () {
        return this.level;
    };
    SceneManager.prototype.runScene = function (sceneNodePrefab) {
        if (this._root) {
            if (this._root.childrenCount > 0) {
                this._root.removeAllChildren();
            }
            // 添加新的场景
            var sceneNode = cc.instantiate(sceneNodePrefab);
            this._root.addChild(sceneNode);
        }
    };
    var SceneManager_1;
    // LIFE-CYCLE CALLBACKS:
    SceneManager._instance = null;
    SceneManager = SceneManager_1 = __decorate([
        ccclass
    ], SceneManager);
    return SceneManager;
}(cc.Component));
exports.default = SceneManager;

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
        //# sourceMappingURL=SceneManager.js.map
        