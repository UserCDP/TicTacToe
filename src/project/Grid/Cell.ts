import { Container } from "pixi.js";
import { Game } from "../Game";

export class Cell extends Container {
    public onClick: Function;
    //public cell_index: number;

    constructor(index) {
        super();
        const graphics = new PIXI.Graphics();
        
        // Rectangle

        // TODO: contour, disable cell on click
        graphics.lineStyle(2, 0xFFE890, 1);
        graphics.beginFill(0x777777);  // 0x881748 - pink/X     e6dd07 - yellow/O
        graphics.drawRect(0, 0, 100, 100);
        graphics.endFill();
        graphics.interactive = true;
        graphics.on("pointerdown", () => {
            console.log("Click on cell");

            let turnNumber: number = Game.getTurnNumber();
            console.log(typeof(turnNumber));
            const basicText = new PIXI.Text(turnNumber % 2 === 1 ? 'X' : 'O', {fontSize: 100,});
            Game.setGridPositions(index, turnNumber % 2 === 1 ? 'X' : 'O');
            basicText.x = 0;
            basicText.y = 0;
            this.addChild(basicText);
            Game.setTurnNumber();

            this.onClick.call(this);
            graphics.interactive = false;
        })
        this.addChild(graphics);
    }

    setCellDetails() {
        console.log("Details from cell");
    }
}