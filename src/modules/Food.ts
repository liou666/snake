//创建food类
export default class Food {
    private element: HTMLElement;
    constructor() {
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
        const top = Math.round(Math.random() * 29) * 10;
        const left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px"
    }
};