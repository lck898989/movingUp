// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import SceneManager from "../SceneManager";
import ResourceManager from "../managers/ResourceManager";

const {ccclass, property} = cc._decorator;
// 摄像机移动方向
enum Dir {
    UP,
    DOWN,
    NONE
}
@ccclass
export default class GameMain extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    rootNode: cc.Node = null;
    @property(cc.Prefab)
    gamePrefab: cc.Prefab = null;
    @property(cc.Label)
    levelLabel: cc.Label = null;
    @property(cc.Camera)
    mainCamera: cc.Camera = null;

    // private ballIsDown
    public level: number = 0;
    private ballIsDown: boolean = false;
    private startTime: boolean = false;
    private timeUsed: number = 0;

    private _curDir: Dir = Dir.NONE;

    private levelData: any = null;
    async onLoad () {
        SceneManager.getInstance().setRoot(this.rootNode);
        SceneManager.getInstance().runScene(this.gamePrefab);
        // 加载关卡数据
        let levelData: cc.JsonAsset = await ResourceManager.getInstance().loadResourceByUrl(`level${SceneManager.getInstance().getLevel()}`,cc.JsonAsset);
        this.levelData = levelData.json;
        console.log("levelData is ",this.levelData);
        cc.director.on("ballToHole",this.overHandle);
        cc.director.on("ballToBoard",this.ballToBoardHandle,this);
        cc.director.on("ballToLand",this.ballToLandHandle,this);
    }
    private ballToLandHandle(): void {
        this.startTime = false;
    }
    private ballToBoardHandle(): void {
        if(!this.ballIsDown) {
            this.ballIsDown = true;
            this.startTime = true;
            this.levelLabel.string = "00:00";
            
            let scaleAnim: cc.AnimationClip = this.levelLabel.node.getComponent(cc.Animation).getClips()[1];
            if(scaleAnim) {
                this.levelLabel.node.getComponent(cc.Animation).play(scaleAnim.name);
            }
        }
    }
    // 游戏结束
    private overHandle(): void {
        this.startTime = false;
    }
    start () {
        cc.director.on("up",this.upCamera,this);
        cc.director.on("down",this.downCamera,this);
        cc.director.on("none",this.cameraStop,this);
    }
    set CurDir(dir: Dir) {
        switch(dir) {
            case Dir.UP:
                this._curDir = Dir.UP;
                break;
            case Dir.DOWN:
                this._curDir = Dir.DOWN;
                break;
            case Dir.NONE:
                this._curDir = Dir.NONE;
                break;
        }
    }
    private upCamera(): void {
        this.CurDir = Dir.UP;
    }
    private downCamera(): void {
        this.CurDir = Dir.DOWN;
    }
    private cameraStop(): void {
        this.CurDir = Dir.NONE;
    }
    private updateLevelOrTime(dt: number): void {
        let self = this;
        if(self.startTime) {
            self.timeUsed += dt;
            // self.timeUsed = Math.floor(self.timeUsed);
            let minutes: number = Math.floor(self.timeUsed / 60);
            let seconds: number = Math.floor(self.timeUsed % 60);
            if(minutes < 10) {
                if(seconds < 10) {
                    self.levelLabel.string = `0${minutes}:0${seconds}`;
                } else {
                    self.levelLabel.string = `0${minutes}:${seconds}`;
                }
            } else {
                if(seconds < 10) {
                    self.levelLabel.string = `${minutes}:0${seconds}`;
                } else {
                    self.levelLabel.string = `${minutes}:${seconds}`;
                }
            }
        }
    }
    onDestroy(): void {
        cc.director.off("over",this.overHandle);
        cc.director.off("ballToBoard",this.ballToBoardHandle,this);
        cc.director.off("ballToLand",this.ballToLandHandle,this);
        cc.director.off("up",this.upCamera,this);
        cc.director.off("down",this.downCamera,this);
        cc.director.off("none",this.cameraStop,this);
    }
    update (dt) {
        this.updateLevelOrTime(dt);
        switch(this._curDir) {
            case Dir.UP:
                this.mainCamera.node.y += dt * 200;
                break;
            case Dir.DOWN:
                this.mainCamera.node.y -= dt * 200;
                break;
            case Dir.NONE:
                break;    
        }
    }
}
