"use strict";
cc._RF.push(module, '30f92TNjMZE4K1az+tCWNBL', 'User');
// Script/users/User.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 当前玩家所在的关卡
        _this.level = 1;
        // 当前玩家的最好成绩记录
        _this.bestRecord = [{ level: 1, time: "00:00" }];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    User.prototype.onLoad = function () {
    };
    User.prototype.setBestRecord = function (level, time) {
        var localDataString = cc.sys.localStorage.getItem("my");
        var localData;
        // 取出游戏记录
        if (localDataString && localDataString !== "" && localDataString !== "undefined") {
            localData = JSON.parse(localDataString);
        }
        else {
            var firstData = [];
            firstData.push({ level: level, time: time });
            // 创建一个记录
            cc.sys.localStorage.setItem("my", JSON.stringify(firstData));
        }
        if (level > 1 && localData && localData.length > 0 && !localData[level - 1]) {
            // 新加记录
            // this.bestRecord.push({level: level,time: time});
            localData.push({ level: level, time: time });
            cc.sys.localStorage.setItem("my", JSON.stringify(localData));
        }
        else {
            if (level >= 1 && localData.length > 0 && localData[level - 1].level === level) {
                // 更新记录（如果新传递进来的时间大于记录的时间不用更新否则更新）
                var curTimeString = localData[level - 1].time;
                if (curTimeString === "00:00") {
                    // 还没有最好成绩直接存储最后成绩
                    localData[level - 1].time = time;
                }
                else {
                    // 有最好成绩检查是否替换最好成绩
                    if (this.convertTimeStringToNumber(curTimeString) > this.convertTimeStringToNumber(time)) {
                        // 更新
                        localData[level - 1].time = time;
                    }
                }
            }
            cc.sys.localStorage.setItem("my", JSON.stringify(localData));
        }
    };
    // 将字符串类型的时间转换为数字以便进行比较
    User.prototype.convertTimeStringToNumber = function (timestring) {
        var res = 0;
        var stringArr = timestring.split(":");
        var minutes = Number(stringArr[0]);
        var seconds = Number(stringArr[1]);
        res = minutes * 60 + seconds;
        return res;
    };
    User.prototype.getBestRecord = function (level) {
        var res;
        if (cc.sys.localStorage.getItem("my") === "undefined" || !cc.sys.localStorage.getItem("my")) {
            res = null;
            return null;
        }
        else {
            res = JSON.parse(cc.sys.localStorage.getItem("my"));
            for (var i = 0; i < res.length; i++) {
                if (res[i].level === level) {
                    return res[i];
                }
            }
        }
    };
    User.prototype.setLevel = function (level) {
        this.level = level;
    };
    User.prototype.getLevel = function () {
        return this.level;
    };
    User.prototype.start = function () {
    };
    User = __decorate([
        ccclass
    ], User);
    return User;
}(cc.Component));
exports.default = User;

cc._RF.pop();