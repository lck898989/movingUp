"use strict";
cc._RF.push(module, 'c99adP6KEBNDZ5AwDKuuSX2', 'ResourceManager');
// Script/managers/ResourceManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: mikey.zhaopeng
 * @Date: 2020-02-26 13:31:55
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-02-26 16:38:26
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        // 资源缓存
        this.resCache = {};
    }
    ResourceManager_1 = ResourceManager;
    ResourceManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new ResourceManager_1();
        }
        return this._instance;
    };
    /**
     * 加载资源对象
     * @param  {string} url resources 路径下的资源路径字符串
     * @returns Promise 返回的promise对象
     */
    ResourceManager.prototype.loadResourceByUrl = function (url, type) {
        var _this = this;
        if (!this.resCache[url]) {
            return new Promise(function (resolve, reject) {
                cc.loader.loadRes(url, type, function (err, res) {
                    if (err) {
                        reject();
                    }
                    // 加入到缓存列表
                    _this.resCache[url] = res;
                    resolve(res);
                });
            });
        }
        return this.resCache[url];
    };
    ResourceManager.prototype.removeResourceByUrl = function (url) {
        if (this.resCache[url]) {
            this.resCache[url] = null;
        }
    };
    var ResourceManager_1;
    // onLoad () {}
    ResourceManager._instance = null;
    ResourceManager = ResourceManager_1 = __decorate([
        ccclass
    ], ResourceManager);
    return ResourceManager;
}());
exports.default = ResourceManager;

cc._RF.pop();