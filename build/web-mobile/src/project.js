window.__require=function t(e,o,r){function n(i,a){if(!o[i]){if(!e[i]){var p=i.split("/");if(p=p[p.length-1],!e[p]){var s="function"==typeof __require&&__require;if(!a&&s)return s(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+i+"'")}}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){return n(e[i][1][t]||t)},l,l.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({Ball:[function(t,e,o){"use strict";cc._RF.push(e,"5c5c7vTidFOgJOYuDHG5Hjc","Ball");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},e.prototype.onCollisionEnter=function(t,e){console.log("on collision enter"),console.log("self is "+e,e),console.log("other is "+t,t);var o=e.world;cc.director.emit("ballToBoard",{other:t,self:e});o.aabb,o.preAabb,o.transform,o.radius,o.position,o.points},e.prototype.start=function(){},e.prototype.update=function(t){},e=n([i],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"2ab68262T1HnILnUlh/fo7g","Game");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c,i=cc._decorator,a=i.ccclass,p=i.property;(function(t){t[t.LEFT=0]="LEFT",t[t.UP=1]="UP",t[t.RIGHT=2]="RIGHT",t[t.DOWN=3]="DOWN",t[t.NONE=4]="NONE"})(c||(c={}));var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.board=null,e.ball=null,e.ballp=null,e.dir=c.NONE,e}return r(e,t),e.prototype.onLoad=function(){var t=this;cc.macro.ENABLE_WEBGL_ANTIALIAS=!0,cc.director.getPhysicsManager().enabled=!0;cc.director.on("ballToBoard",function(){console.log("in Game \u7403\u78b0\u5230\u677f\u5b50"),t.ballp.active=!1},this)},e.prototype.start=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},Object.defineProperty(e.prototype,"Dir",{set:function(t){switch(t){case c.LEFT:this.dir=c.LEFT;break;case c.RIGHT:this.dir=c.RIGHT;break;case c.UP:this.dir=c.UP;break;case c.DOWN:this.dir=c.DOWN;break;case c.NONE:this.dir=c.NONE}},enumerable:!0,configurable:!0}),e.prototype.onKeyDown=function(t){switch(console.log(t.keyCode),t.keyCode){case 37:console.log("\u5de6"),this.Dir=c.LEFT;break;case 38:console.log("\u4e0a"),this.Dir=c.UP;break;case 39:console.log("\u53f3"),this.Dir=c.RIGHT;break;case 40:console.log("\u4e0b"),this.Dir=c.DOWN}},e.prototype.onKeyUp=function(t){this.Dir=c.NONE},e.prototype.onDestroy=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)},e.prototype.update=function(t){switch(this.dir){case c.LEFT:this.board.angle+=5*t;break;case c.RIGHT:this.board.angle-=5*t;break;case c.UP:this.board.y+=100*t;break;case c.DOWN:this.board.y-=100*t}},n([p({type:cc.Node})],e.prototype,"board",void 0),n([p({type:cc.Node})],e.prototype,"ball",void 0),n([p({type:cc.Node})],e.prototype,"ballp",void 0),e=n([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){},e=n([i],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],Hole:[function(t,e,o){"use strict";cc._RF.push(e,"8d86a4Cy1FGh4LDiltr3Y2v","Hole");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){var t=this;this.node.active=!1,cc.director.on("ballToBoard",function(){console.log("\u7403\u78b0\u5230\u4e86\u677f\u5b50"),t.node.active=!0,t.node.getComponent(cc.Animation).play("down")},this)},e.prototype.downOver=function(){var t=this.node.getComponent(cc.Animation).getClips()[0];if(t){var e=t.name;this.node.getComponent(cc.Animation).play(e)}},e=n([i],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],Index:[function(t,e,o){"use strict";cc._RF.push(e,"a1e7dPI1dhB8q/1KSTS6Emr","Index");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bgm=null,e}return r(e,t),e.prototype.start=function(){},e.prototype.btnEvent=function(t,e){"game"===e&&(cc.director.loadScene("Game"),cc.audioEngine.playMusic(this.bgm,!0))},n([a({type:cc.AudioClip})],e.prototype,"bgm",void 0),e=n([i],e)}(cc.Component);o.default=p,cc._RF.pop()},{}]},{},["Ball","Game","Helloworld","Hole","Index"]);