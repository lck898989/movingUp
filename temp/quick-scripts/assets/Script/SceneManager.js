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
var Consts_1 = require("./consts/Consts");
// enum LayerState {
// };
var SceneManager = /** @class */ (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 2;
        _this._root = null;
        // 设置层
        _this.settingNode = null;
        // 特效层
        _this.effecLayer = null;
        // 数据加载中层
        _this.loadingLayer = null;
        // 遮罩层
        _this.maskLayer = null;
        _this.layerState = Consts_1.LayerState.NONE;
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
        this.LS = Consts_1.LayerState.NONE;
    };
    Object.defineProperty(SceneManager.prototype, "LS", {
        set: function (state) {
            this.layerState = state;
            switch (state) {
                case Consts_1.LayerState.NONE:
                    this.node.active = false;
                    break;
                case Consts_1.LayerState.EFFECT:
                    this.setLayerVisible([state]);
                    break;
                case Consts_1.LayerState.SETTING:
                    this.setLayerVisible([state]);
                    this.settingNode.getComponent(cc.Animation).play("settingIn");
                    break;
                case Consts_1.LayerState.MASK:
                    this.setLayerVisible([state]);
                    break;
                case Consts_1.LayerState.LOADING:
                    this.setLayerVisible([state]);
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.prototype.setLayerVisible = function (index) {
        this.node.active = true;
        var rootNodeLen = this.node.childrenCount;
        var showNodeArr = [];
        for (var i = 0; i < rootNodeLen; i++) {
            for (var j = 0; j < index.length; j++) {
                if (index[j] - 1 === i) {
                    showNodeArr.push(this.node.children[i]);
                }
                else {
                    this.node.children[i].active = false;
                }
            }
        }
        for (var i = 0; i < showNodeArr.length; i++) {
            showNodeArr[i].active = true;
        }
    };
    SceneManager.prototype.chooseLevel = function (data) {
        console.log("选择关卡传递过来的数据data is ", data);
        this.setLevel(data.level);
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
    __decorate([
        property(cc.Node)
    ], SceneManager.prototype, "settingNode", void 0);
    __decorate([
        property(cc.Node)
    ], SceneManager.prototype, "effecLayer", void 0);
    __decorate([
        property(cc.Node)
    ], SceneManager.prototype, "loadingLayer", void 0);
    __decorate([
        property(cc.Node)
    ], SceneManager.prototype, "maskLayer", void 0);
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
        