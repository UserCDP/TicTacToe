import {Application, Graphics} from "pixi.js";
import { Grid } from "./Grid/Grid";

export class Game {

    public app: Application;
    /** 
     * nextMove = true -> X will be the content of the cell
     * nextMove = false -> O will be the content of the cell
     */
    private nextMoveContent:boolean = true;
    private results:Array<string> = [];

    constructor() {
        this.app = new Application({width: 1000, height: 800, backgroundColor: 0x83a399, antialias: true});
        document.body.appendChild(this.app.view);
    }

    public startGame():void {
        let grid:Grid = new Grid();
        grid.x = 100;
        grid.y = 100;
        this.app.stage.addChild(grid);
        grid.userMove = (indexCell:number) => {
            console.log("Closure from game" + indexCell);
            if (this.isGameFinished()) {
                
            }
            else {
                if (this.nextMoveContent) {
                    grid.setCellContent(indexCell, "x");
                    this.results.push("x");
                }
                else {
                    grid.setCellContent(indexCell, "o");
                    this.results.push("o");
                }
                this.nextMoveContent = !this.nextMoveContent;
            }
            this.isGameFinished();
        }
        
    }

    private isGameFinished():boolean {
        if (this.results.length == 9) {
            console.log("Game finished!");
            const basicText = new PIXI.Text('Game finished!');
            basicText.x = 500;
            basicText.y = 100;
            this.app.stage.addChild(basicText);
            return true;
        }
        return false;
    }

}
