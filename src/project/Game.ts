import {Application, Graphics} from "pixi.js";
import { Grid } from "./Grid/Grid";

export class Game {

    public app: Application;
    static turn: number = 1;

    constructor() {
        this.app = new Application({width: 1000, height: 800, backgroundColor: 0x83a399, antialias: true});
        document.body.appendChild(this.app.view);
    }

    public startGame():void {
        let grid:Grid = new Grid();
        this.app.stage.addChild(grid);
        grid.userMove = () => {
            console.log("Closure from game");

            // const basicText = new PIXI.Text(Game.turn % 2 === 1 ? 'X' : 'O', {fontSize: 50,});
            // basicText.x = Game.turn * 40;
            // basicText.y = 20;
            // this.app.stage.addChild(basicText);Current turn:
        }
        grid.setCellContent();
    }

    static getTurnNumber():number {
        return this.turn;
    }

    static setTurnNumber():void {
        this.turn ++;
    }
}
