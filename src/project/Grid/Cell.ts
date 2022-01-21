import { Container } from "pixi.js";

export class Cell extends Container {
    public onClick: Function;

    constructor() {
        super();
        const graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0xDE3249);
        graphics.drawRect(50, 50, 100, 100);
        graphics.endFill();
        graphics.interactive = true;
        graphics.on("pointerdown", () => {
            console.log("Click on cell");
            this.onClick.call(this);
        })
        this.addChild(graphics);
    }

    setCellDetails() {
        console.log("Details from cell");
    }
}