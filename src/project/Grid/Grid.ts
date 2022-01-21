import { Container } from "pixi.js";
import { Cell } from "./Cell";

export class Grid extends Container {
    public userMove: Function;
    private cell:Cell;

    constructor() {
        super();
        this.cell = new Cell();
        this.cell.onClick = () => {
            console.log("Closure from grid");
            this.userMove.call(this);
        }
        this.addChild(this.cell);
    }

    public setCellContent() {
        this.cell.setCellDetails();
        console.log("Set cell content from grid")
    }
}