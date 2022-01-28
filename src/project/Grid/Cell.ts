import { Container } from "pixi.js";
import { Game } from "../Game";

export class Cell extends Container {
    public onClick: Function;

    constructor(x_coord:number, y_coord:number) {
        super();
        const graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0x777777);  // 0x881748 - pink/X     e6dd07 - yellow/O
        graphics.drawRect(x_coord, y_coord, 150, 150);
        graphics.endFill();
        graphics.interactive = true;
        graphics.on("pointerdown", () => {
            console.log("Click on cell");

            let turnNumber: number = Game.getTurnNumber();
            console.log(typeof(turnNumber));
            const basicText = new PIXI.Text(turnNumber % 2 === 1 ? 'X' : 'O', {fontSize: 160,});
            basicText.x = x_coord;
            basicText.y = y_coord;
            this.addChild(basicText);
            Game.setTurnNumber();

            this.onClick.call(this);
        })
        this.addChild(graphics);
    }

    setCellDetails() {
        console.log("Details from cell");
    }
}