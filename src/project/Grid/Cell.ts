import { Container } from "pixi.js";
import { Game } from "../Game";

export class Cell extends Container {
    public onClick: Function;
    private indexCell: number;

    constructor(index: number) {
        super();
        const graphics = new PIXI.Graphics();
        this.indexCell = index;

        // TODO: contour, disable cell on click
        graphics.lineStyle(2, 0xFFE890, 1);
        graphics.beginFill(0x777777);  // 0x881748 - pink/X     e6dd07 - yellow/O
        graphics.drawRect(0, 0, 100, 100);
        graphics.endFill();
        graphics.interactive = true;
        graphics.on("pointerdown", () => {
            console.log("Click on cell");

            this.onClick.call(this, this.indexCell);
            graphics.interactive = false;
            
        })
        this.addChild(graphics);
    }

    setCellDetails(contentCell:string) {
        console.log("Details from cell");
        const basicText = new PIXI.Text(contentCell, {fontSize: 100,});
            basicText.x = (this.width - basicText.width)/2.5;
            basicText.y = 0;
            this.addChild(basicText);
    }
}