import {Application, Graphics} from "pixi.js";
import { Grid } from "./Grid/Grid";

export class Game {

    public app: Application;
    static turn: number = 1;
    static x_positions: number[];
    static o_positions: number[];

    constructor() {
        this.app = new Application({width: 1000, height: 800, backgroundColor: 0x83a399, antialias: true});
        document.body.appendChild(this.app.view);
    }

    public startGame():void {
        let grid:Grid = new Grid();
        grid.x = 100;
        grid.y = 100;
        this.app.stage.addChild(grid);
        grid.userMove = () => {
            console.log("Closure from game");
        }
        grid.setCellContent();
    }

    static getTurnNumber():number {
        return this.turn;
    }

    static setTurnNumber():void {
        this.turn ++;
    }

    static setGridPositions(index:number, value:string):void {
        if (value === 'X') {
            Game.x_positions.push(index);
        }
        else {
            Game.o_positions.push(index);
        }
    }

    static thereIsWinner():boolean {
        if (this.x_positions.includes(0) && this.x_positions.includes(1) && this.x_positions.includes(2) || /* horizontal */
            this.x_positions.includes(3) && this.x_positions.includes(4) && this.x_positions.includes(5) ||
            this.x_positions.includes(6) && this.x_positions.includes(7) && this.x_positions.includes(8) ||
            this.x_positions.includes(0) && this.x_positions.includes(3) && this.x_positions.includes(6) || /* vertical */
            this.x_positions.includes(1) && this.x_positions.includes(4) && this.x_positions.includes(7) ||
            this.x_positions.includes(2) && this.x_positions.includes(5) && this.x_positions.includes(8) ||
            this.x_positions.includes(0) && this.x_positions.includes(4) && this.x_positions.includes(8) || /* diagoal */
            this.x_positions.includes(2) && this.x_positions.includes(4) && this.x_positions.includes(6))
            return true;

        if (this.x_positions.includes(0) && this.x_positions.includes(1) && this.x_positions.includes(2) || /*horizontal*/
            this.x_positions.includes(3) && this.x_positions.includes(4) && this.x_positions.includes(5) ||
            this.x_positions.includes(6) && this.x_positions.includes(7) && this.x_positions.includes(8) ||
            this.x_positions.includes(0) && this.x_positions.includes(3) && this.x_positions.includes(6) || /*vertical*/
            this.x_positions.includes(1) && this.x_positions.includes(4) && this.x_positions.includes(7) ||
            this.x_positions.includes(2) && this.x_positions.includes(5) && this.x_positions.includes(8) ||
            this.x_positions.includes(0) && this.x_positions.includes(4) && this.x_positions.includes(8) || /*diagonal*/
            this.x_positions.includes(2) && this.x_positions.includes(4) && this.x_positions.includes(6))
            return true;

        return false;
    }

}
