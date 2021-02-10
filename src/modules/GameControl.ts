import Food from './Food'
import ScorePanel from "./ScorePanel"
import Snake from "./Snake"
export default class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    direction: string = ""
    isLive: boolean = true;
    allDirection: Array<string> = []
    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        this.init()
    }
    //初始化
    init() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        this.food.change()
        this.run()
    }

    //键盘控制蛇的移动方向
    handleKeyDown(e: KeyboardEvent) {
        this.direction = e.key;
        if (this.direction === "ArrowUp" || this.direction === "ArrowDown" || this.direction === "ArrowLeft" || this.direction === "ArrowRight") {
            this.allDirection.push(e.key)
        }
    }
    //控制蛇的移动
    run() {
        const preDirection = this.allDirection[this.allDirection.length - 2]
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        if (this.direction === "ArrowUp") {
            Y -= 10;
        } else if (this.direction === "ArrowDown") {
            Y += 10
        } else if (this.direction === "ArrowLeft") {
            X -= 10
        } else if (this.direction === "ArrowRight") {
            X += 10
        }
        // switch (this.direction) {
        //     case "ArrowUp":
        //         Y -= 10
        //         break;
        //     case "ArrowDown":
        //         Y += 10
        //         break;
        //     case "ArrowLeft":
        //         X -= 10
        //         break;
        //     case "ArrowRight":
        //         X += 10
        //         break;
        // }
        //吃到食物时的处理
        if (this.food.X === X && this.food.Y === Y) {
            this.snake.addBody();
            this.food.change();
            this.scorePanel.addScore();
        }
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (error) {
            this.isLive = false;
            alert(error + " GAME OVER!")
        }




        this.isLive && setTimeout(this.run.bind(this), 100 - (+this.scorePanel.level.innerHTML - 1) * 20)
    }
}


