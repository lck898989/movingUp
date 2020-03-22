"use strict";
cc._RF.push(module, '6d64aAOOChMAa3V1hSCrm1W', 'SceneManager');
// Script/SceneManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        // static getInstance() {
        //     throw new Error("Method not implemented.");
        // }
        this.level = 2;
        this._root = null;
    }
    SceneManager_1 = SceneManager;
    SceneManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new SceneManager_1();
        }
        return this._instance;
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
}());
exports.default = SceneManager;

cc._RF.pop();