//创建积分面板的类
export default class ScorePanel {
    element: HTMLElement
    score: HTMLElement
    level: HTMLElement
    contronalBtn: HTMLElement
    maxLevel: number
    updataLevel: number
    isPuash: boolean = false
    constructor(maxLevel: number = 10, updataLevel: number = 10) {
        this.element = document.querySelector("#score_panel") as HTMLElement;
        this.score = this.element.querySelector(".score") as HTMLElement;
        this.level = this.element.querySelector(".level") as HTMLElement
        this.contronalBtn = this.element.querySelector(".btn_open") as HTMLElement
        this.maxLevel = maxLevel;
        this.updataLevel = updataLevel;
        // this.init()
    }
    init() {
        this.contronalBtn.addEventListener("click", this.btnHandle.bind(this))
    }
    //增加score值
    addScore() {
        const score = +this.score.innerHTML + 1;
        if (score % this.updataLevel === 0) this.addLevel();
        this.score.innerHTML = score + ""
    }
    //增加level值
    addLevel() {
        const level = +this.level.innerHTML + 1;
        if (level > this.maxLevel) return;
        this.level.innerHTML = level + ""
    };
    btnHandle(e: MouseEvent) {
        if (this.contronalBtn.innerText === "start") {
            this.contronalBtn.innerText = "puash"
            this.isPuash = false
        } else {
            this.contronalBtn.innerText = "start"
            this.isPuash = true
        }

    }
}