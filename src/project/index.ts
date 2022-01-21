import {Game} from "./Game";
import * as PIXI from 'pixi.js';

new class Main {
    private game: Game;

    constructor() {
        window.PIXI = PIXI;
        this.game = new Game();
        this.game.startGame();
    };
};
