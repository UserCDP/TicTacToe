import { Container } from "pixi.js";
import { Game } from "../Game";
import { Cell } from "./Cell";

export class Grid extends Container {
    public userMove: Function;
    private cell:Cell;

    constructor() {
        super();
        for (let i=1; i<=3; i++) {
            for (let j=1; j<=3; j++) {
                this.cell = new Cell(j*160 + 70, i*160);
                this.cell.onClick = () => {
                    console.log("Closure from grid");

                    this.userMove.call(this);
                }
                this.addChild(this.cell);
            }
        }
    }

    public setCellContent() {
        this.cell.setCellDetails();
        console.log("Set cell content from grid")
    }
}