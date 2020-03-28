(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/consts/Consts.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9c10aKQHs1K37R1eohyTY+r', 'Consts', __filename);
// Script/consts/Consts.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayerState;
(function (LayerState) {
    LayerState[LayerState["NONE"] = 0] = "NONE";
    LayerState[LayerState["EFFECT"] = 1] = "EFFECT";
    LayerState[LayerState["SETTING"] = 2] = "SETTING";
    LayerState[LayerState["MASK"] = 3] = "MASK";
    LayerState[LayerState["LOADING"] = 4] = "LOADING";
})(LayerState = exports.LayerState || (exports.LayerState = {}));
var eType;
(function (eType) {
    eType[eType["OFF"] = 0] = "OFF";
    eType[eType["ON"] = 1] = "ON";
})(eType = exports.eType || (exports.eType = {}));
var MusicState = /** @class */ (function () {
    function MusicState() {
    }
    MusicState.effectState = eType.ON;
    MusicState.musicState = eType.ON;
    return MusicState;
}());
exports.MusicState = MusicState;

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
        //# sourceMappingURL=Consts.js.map
        