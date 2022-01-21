import {Application, Graphics} from "pixi.js";
import { Grid } from "./Grid/Grid";

export class Game {
    public app: Application;
    constructor() {
        this.app = new Application({width: 800, height: 600, backgroundColor: 0xFFBBCC, antialias: true});
        document.body.appendChild(this.app.view);
    }

    public startGame():void {
        let grid:Grid = new Grid();
        this.app.stage.addChild(grid);
        grid.userMove = () => {
            console.log("Closure from game")
        }
        grid.setCellContent();
    }
}
