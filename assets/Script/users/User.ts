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
interface BestRecore {
    level: number,
    time: string
}
@ccclass
export default class User extends cc.Component {
    // 当前玩家所在的关卡
    private level: number = 1;
    // 当前玩家的最好成绩记录
    private bestRecord: BestRecore[] = [{level: 1,time: "00:00"}];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }
    public setBestRecord(level: number,time: string): void {
        // this.bestRecord.level = level;
        // this.level = level;
        // this.bestRecord.time = time;
        if(level >= 1 && !this.bestRecord[level - 1]) {
            // 新加记录
            this.bestRecord.push({level: level,time: time});
        } else {
            if(this.bestRecord[level - 1].level === level) {
                // 更新记录（如果新传递进来的时间大于记录的时间不用更新否则更新）
                let curTimeString = this.bestRecord[level - 1].time;
                if(curTimeString === "00:00") {
                    // 还没有最好成绩直接存储最后成绩
                    this.bestRecord[level - 1].time = time;
                    // 存储到计算机中去
                    // cc.sys.localStorage.setItem();
                } else {
                    // 有最好成绩检查是否替换最好成绩
                    if(this.convertTimeStringToNumber(curTimeString) > this.convertTimeStringToNumber(time)) {
                        // 更新
                        this.bestRecord[level - 1].time = time;
                    } 
                }
            }
        }
        cc.sys.localStorage.setItem("my",JSON.stringify(this.bestRecord));
    }
    // 将字符串类型的时间转换为数字以便进行比较
    private convertTimeStringToNumber(timestring: string): number {
        let res: number = 0;
        let stringArr: string[] = timestring.split(":");
        let minutes: number = Number(stringArr[0]);
        let seconds: number = Number(stringArr[1]);
        res = minutes * 60 + seconds;
        return res;

    }
    public getBestRecord(level: number): BestRecore {
        let res: BestRecore[];
        if(!cc.sys.localStorage.getItem("my")) {
            res = null;
        } else {
            res = <BestRecore[]>JSON.parse(cc.sys.localStorage.getItem("my"));
        }
        for(let i = 0; i < res.length; i++) {
            if(this.bestRecord[i].level === level) {
                return this.bestRecord[i];
            }
        }
    }
    public setLevel(level: number): void {
        this.level = level;
    }
    public getLevel(): number {
        return this.level;
    }
    start () {

    }

    // update (dt) {}
}
