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
export default class LevelItem extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    // private level: string = "1";
    // private best: string = "00:00";

    @property(cc.Label)
    levelLabel: cc.Label = null;
    @property(cc.Label)
    bestLabel: cc.Label = null;

    start () {
        // this.level = this.levelLabel.string;
        // this.best = this.bestLabel.string;
    }
    public getLevel(): string {
        return this.levelLabel.string;
    }
    public setLevel(str: string|number): void {
        this.levelLabel.string = str.toString();
    }
    public getBest(): string {
        return this.bestLabel.string;
    }
    public setBest(best: string|number): void {
        this.bestLabel.string = best.toString();
    }
    btnEvent(e: cc.Event,data: any): void {
        console.log("点击的第几关",this.levelLabel.string);
        cc.director.emit("levelChoose",{level: Number(this.levelLabel.string)});
        cc.director.loadScene("Game");
    }
    update (dt) {}
    onDestroy(): void {

    }
}
