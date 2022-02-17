import { Container, Graphics } from "pixi.js";

export class Cell extends Container {
    public onClick: Function;
    private indexCell: number;
    private graphics:Graphics;
    constructor(index: number) {
        super();
        this.indexCell = index;
        this.createCellGraphics();
    }

    public setCellDetails(contentCell:string) {
        const basicText = new PIXI.Text(contentCell, {fontSize: 100,});
            basicText.x = (this.width - basicText.width)/2.5;
            basicText.y = 0;
            this.addChild(basicText);
    }

    private createCellGraphics():void {
        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(2, 0xFFE890, 1);
        this.graphics.beginFill(0x777777);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
        this.graphics.interactive = true;
        this.graphics.on("pointerdown", () => {

            this.onClick.call(this, this.indexCell);
            this.graphics.interactive = false;
            
        })
        this.addChild(this.graphics);
    }
}