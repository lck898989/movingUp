// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Index extends cc.Component {

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property({type: cc.AudioClip})
    bgm: cc.AudioClip = null;
    // 常驻节点
    @property(cc.Node)
    rootNode: cc.Node = null;
    start () {
        cc.game.addPersistRootNode(this.rootNode);
    }
    btnEvent(e: cc.Event,data: any): void {
        if(data === "game") {
            cc.director.loadScene("Game");
            cc.audioEngine.playMusic(this.bgm,true);
        } else if(data === "setting"){
            // cc.director.loadScene("");
            
        } else if(data === "level") {
            cc.director.loadScene("level");
        }
    }
    // update (dt) {}
}
