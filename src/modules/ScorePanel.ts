//创建积分面板的类
export default class ScorePanel {
    element: HTMLElement
    score: HTMLElement
    level: HTMLElement
    maxLevel: number
    updataLevel: number
    constructor(maxLevel: number = 10, updataLevel: number = 10) {
        this.element = document.querySelector("#score_panel") as HTMLElement;
        this.score = this.element.querySelector(".score") as HTMLElement;
        this.level = this.element.querySelector(".level") as HTMLElement
        this.maxLevel = maxLevel;
        this.updataLevel = updataLevel
    }

    //增加score值
    addScore() {
        const score = +this.score.innerHTML + 1;
        if (score % this.updataLevel === 0) {
            this.addLevel()
        }
        this.score.innerHTML = score + ""
    }
    //增加level值
    addLevel() {
        const level = +this.level.innerHTML + 1;
        if (level > this.maxLevel) return;
        this.level.innerHTML = level + ""
    }
}