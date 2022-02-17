import {Application, Graphics} from "pixi.js";
import { Grid } from "./Grid/Grid";

export class Game {

    public app: Application;
    /** 
     * nextMove = true -> X will be the content of the cell
     * nextMove = false -> O will be the content of the cell
     */
    private nextMoveContent:boolean = true;
    private results:Array<string> = ["", "", "", "", "", "", "", "", ""];
    private winCases:Array<Array<number>> = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

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
            if (this.nextMoveContent) {
                grid.setCellContent(indexCell, "x");
                this.results[indexCell] = "x";
            }
            else {
                grid.setCellContent(indexCell, "o");
                this.results[indexCell] = "o";
            }
            if(this.isGameFinished(this.nextMoveContent ? "x" : "o")) {
                console.log("Refresh to play again");
            }
            else {
                console.log("Next move " + this.nextMoveContent ? "x" : "o")
            }
            this.nextMoveContent = !this.nextMoveContent;
        }
        
    }

    private isGameFinished(currentMoveContent:string):boolean {
        if (this.isPlayerWin(currentMoveContent) || this.isTie()) {
            this.createRestartButton();
            this.createFinishMessage(this.isTie() ? "Game finished! Tie!" : "Game finished! Winner " + currentMoveContent + "!");
            return true;
        }
        return false;
    }
    private isTie():boolean {
        if (!this.results.includes('')) {
            return true;
        }
        return false;
    }

    private isPlayerWin(currentMoveContent:string):boolean {
        return this.winCases.reduce((acc, item) => {
            if (this.results[item[0]] === currentMoveContent &&
                this.results[item[1]] === currentMoveContent &&
                this.results[item[2]] === currentMoveContent) {
                    return true;
            }
            return acc;
        }, false);;
    }

    private createRestartButton():void {
        const restartText = new PIXI.Text('Restart game');
        restartText.x = 500;
        restartText.y = 150;
        restartText.interactive = true;
        restartText.buttonMode = true;
        restartText.on('pointerdown', () => {location.reload()});
        this.app.stage.addChild(restartText);
    }

    private createFinishMessage(text:string):void {
        const basicText = new PIXI.Text(text);
        basicText.x = 500;
        basicText.y = 100;
        this.app.stage.addChild(basicText);
    }

}

