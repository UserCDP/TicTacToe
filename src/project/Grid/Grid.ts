import { Container } from "pixi.js";
import { Game } from "../Game";
import { Cell } from "./Cell";

export class Grid extends Container {
    public userMove: Function;
    private cell:Cell;

    constructor() {
        super();
        for (let i=0; i<9; i++) {
            this.cell = new Cell(i);
            this.cell.x = (i % 3) * 100;
            this.cell.y = Math.floor(i / 3) * 100;
            this.cell.onClick = () => {
                console.log("Closure from grid");

                this.userMove.call(this);
                //Game.thereIsWinner();
            }
            this.addChild(this.cell);
        }
    }

    public setCellContent() {
        this.cell.setCellDetails();
        console.log("Set cell content from grid")
    }
}