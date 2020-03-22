(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/managers/EventManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ce712fBB1BAWqPhLd6XEYoB', 'EventManager', __filename);
// Script/managers/EventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 事件监听类（自定义）
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listenerObj = {};
    }
    EventManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new EventManager();
        }
        return this._instance;
    };
    // 添加一个监听
    EventManager.prototype.addEventListener = function (type, handler, target) {
        if (typeof type === "string" && typeof handler === "function") {
            // handler.bind(target);
            this.target = target;
            if (typeof this.listenerObj[type] === "undefined") {
                this.listenerObj[type] = [handler];
            }
            else {
                this.listenerObj[type].push(handler);
            }
        }
    };
    // 删除对应的监听
    EventManager.prototype.removeEventListener = function (type, handler, target) {
        if (typeof type !== "string" && typeof handler !== "function") {
            return;
        }
        if (this.listenerObj[type] && this.listenerObj[type].length > 0) {
            for (var i = 0, len = this.listenerObj[type].length; i < len; i++) {
                if (this.listenerObj[type][i] == handler) {
                    this.listenerObj[type][i] = null;
                    break;
                }
            }
            this.listenerObj[type].splice(i, 1);
            // this.listenerObj[type] = [];
        }
    };
    EventManager.prototype.dispatchEvent = function (event) {
        if (!event.target) {
            event.target = this.target;
        }
        if (this.listenerObj[event.type].length > 0) {
            var typeLen = this.listenerObj[event.type].length;
            var handlers = this.listenerObj[event.type];
            for (var i = 0; i < handlers.length; i++) {
                if (typeof handlers[i] === "function") {
                    // handlers[i](event).bind(event.target);
                    handlers[i].call(event.target, event);
                }
            }
        }
    };
    EventManager._instance = null;
    return EventManager;
}());
exports.default = EventManager;

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
        //# sourceMappingURL=EventManager.js.map
        