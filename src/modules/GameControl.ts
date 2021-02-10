import Food from './Food'
import ScorePanel from "./ScorePanel"
import Snake from "./Snake"
export default class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    direction: string = ""
    isLive: boolean = true;
    isPuash: boolean = false;

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
        this.run();
    }

    //键盘控制蛇的移动方向
    handleKeyDown(e: KeyboardEvent) {
        this.direction = e.key;
    }
    //控制蛇的移动
    run() {
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp": Y -= 10; break;
            case "ArrowDown": Y += 10; break;
            case "ArrowLeft": X -= 10; break;
            case "ArrowRight": X += 10; break;
            case " ": console.log(1); break;
        }
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
            alert(error.message + " GAME OVER!")
        }

        if (this.isLive && !this.isPuash) {
            setTimeout(() => {
                this.run()
            }, 180 - (+this.scorePanel.level.innerHTML - 1) * 20);
        }



    }
}


