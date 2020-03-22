const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneManager {
    // static getInstance() {
    //     throw new Error("Method not implemented.");
    // }


    // LIFE-CYCLE CALLBACKS:
    private static _instance: SceneManager = null;
    private level: number = 2;
    private _root: cc.Node = null;
    public static getInstance(): SceneManager {
        if(!this._instance) {
            this._instance = new SceneManager();
        }
        return this._instance;
    }
    public setRoot(rootNode: cc.Node) {
        this._root = rootNode;
    }
    public setLevel(level: number): void {
        this.level = level;
    }
    public getLevel(): number {
        return this.level;
    }
    public runScene(sceneNodePrefab: cc.Prefab): void {
        if(this._root) {
            if(this._root.childrenCount > 0) {
                this._root.removeAllChildren();
            }
            // 添加新的场景
            let sceneNode: cc.Node = cc.instantiate(sceneNodePrefab);
            this._root.addChild(sceneNode);
        }
    }
}
