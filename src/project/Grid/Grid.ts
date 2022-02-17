import { Container } from "pixi.js";
import { Cell } from "./Cell";

export class Grid extends Container {
    public userMove: Function;
    private cell:Cell;
    private cells:Array<Cell> = [];

    constructor() {
        super();
        for (let i=0; i<9; i++) {
            this.cell = new Cell(i);
            this.cell.x = (i % 3) * 100;
            this.cell.y = Math.floor(i / 3) * 100;
            this.cell.onClick = (indexCell) => {
                this.userMove.call(this, indexCell);
            }
            this.addChild(this.cell);
            this.cells.push(this.cell);
        }
    }

    public setCellContent(cellID:number, contentCell:string) {
        this.cells[cellID].setCellDetails(contentCell);
    }
}