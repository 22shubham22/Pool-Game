function Game(){

}

Game.prototype.init = function(){//initialise the game

    this.gameWorld = new GameWorld();
}

Game.prototype.start = function(){//start the game

    PoolGame.init();//do not use this

    PoolGame.mainLoop();

}

Game.prototype.mainLoop = function(){//animation

    Canvas.clear();//to clear cvs
    PoolGame.gameWorld.update();
    PoolGame.gameWorld.draw();
    Mouse.reset();

    requestAnimationFrame(PoolGame.mainLoop);

}

let PoolGame = new Game();