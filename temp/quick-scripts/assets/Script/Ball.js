(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Ball.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5c5c7vTidFOgJOYuDHG5Hjc', 'Ball', __filename);
// Script/Ball.ts

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
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    Ball.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    Ball.prototype.onCollisionEnter = function (other, self) {
        // console.log('on collision enter');
        // console.log(`self is ${self}`,self);
        // console.log(`other is ${other}`,other);
        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        // var world = self.world;
        if (other.name.indexOf("board") >= 0) {
            cc.director.emit("ballToBoard", { other: other, self: self });
        }
        console.log("other.name is ", other.name);
        if (other.node.group === "holewin") {
            console.log("碰到黑洞了");
            cc.director.emit("ballToHole", { over: "win" });
        }
        if (other.node.group === "holelose") {
            console.log("游戏结束碰到了假的黑洞");
            cc.director.emit("ballToHole", { over: "lose", node: other.node });
        }
        if (other.name.indexOf("cp") >= 0) {
            cc.director.emit("ballToLand", { other: other, self: self });
        }
    };
    Ball.prototype.start = function () {
    };
    Ball.prototype.update = function (dt) {
        // console.log("物理系统状态",cc.director.getPhysicsManager().enabled);
        console.log("ball.y is ", this.node.y);
    };
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
        //# sourceMappingURL=Ball.js.map
        