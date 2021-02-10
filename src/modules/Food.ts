import Snake from './Snake'
//创建food类
export default class Food {
    private element: HTMLElement;
    snake: Snake
    constructor() {
        this.snake = new Snake()
        //获取页面中的food元素
        this.element = document.querySelector("#food") as HTMLElement
    }
    //获取食物的横坐标
    get X() {
        return this.element.offsetLeft;
    };
    //获取食物的纵坐标
    get Y() {
        return this.element.offsetTop;
    };
    //随机改变食物的位置
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        //防止食物出现在蛇上
        for (let i = 0; i < this.snake.bodies.length; i++) {
            if ((this.snake.bodies[i] as HTMLElement).offsetTop === top && (this.snake.bodies[i] as HTMLElement).offsetLeft === left) {
                top = Math.round(Math.random() * 29) * 10;
                left = Math.round(Math.random() * 29) * 10;
                i = -1
            }
        }
        this.element.style.left = left + "px";
        this.element.style.top = top + "px"
    }
};