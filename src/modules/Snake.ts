
export default class Snake {
    element: HTMLElement
    header: HTMLElement
    //HTMLCollection 是一个接口，表示 HTML 元素的集合，它提供了可以遍历列表的方法和属性。
    bodies: HTMLCollection
    constructor() {
        this.element = document.getElementById("snake") as HTMLElement
        this.header = document.querySelector('.snake_header') as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div")
    }
    //获取蛇头的横坐标
    get X() {
        return this.header.offsetLeft;
    }
    //获取蛇头的纵坐标
    get Y() {
        return this.header.offsetTop;
    }
    //设置蛇头的横坐标
    set X(value: number) {
        if (value === this.X) return;
        //判断是否掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (this.X > value) {
                //原本向右走，左掉头
                value += 20
            } else {
                //原本向左走，右掉头
                value -= 20
            }
        }
        //判断是否撞墙
        if (value < 0 || value > 290) throw new Error("撞墙了")
        this.moveBody()
        this.header.style.left = value + "px";
        this.checkEatSelf()
    }
    //设置蛇头的纵坐标
    set Y(value: number) {
        if (value === this.Y) return;
        //判断是否掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (this.Y > value) {
                value += 20
            } else {
                value -= 20
            }
        }
        //判断是否撞墙
        if (value < 0 || value > 290) throw new Error("撞墙了");
        this.moveBody()
        this.header.style.top = value + "px";
        this.checkEatSelf()
    }
    //蛇增加身体长度的方法
    addBody() {
        const div = document.createElement("div");
        div.className = "sanke_body"
        this.element.append(div)
    }
    //蛇移动身体的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            const X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + "px"
        }
    }
    //判断蛇头是否碰到自己
    checkEatSelf() {
        for (let i = 1; i < this.bodies.length; i++) {
            if ((this.bodies[i] as HTMLElement).offsetLeft === this.X && (this.bodies[i] as HTMLElement).offsetTop === this.Y) {
                throw new Error("撞到了自己")
            }
        }
    }
}

