let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){

    if(assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    }
    else{
        callback();
    }

}

function loadAssets(callback){//load all assets of game

    function loadSprite(fileName){ //load sprite
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;//filename-which image to load

        spriteImage.onload = function(){//decrease number if loaded
            assetsStillLoading--;
        }

        return spriteImage;
    }

    sprites.background = loadSprite('spr_background.png');//we send name of file as argument
    sprites.stick = loadSprite('spr_stick.png');
    sprites.whiteBall = loadSprite('spr_whiteBall.png');
    sprites.redBall = loadSprite('spr_redBall.png');
    sprites.yellowBall = loadSprite('spr_yellowBall.png');
    sprites.blackBall = loadSprite('spr_blackBall.png');
    
    
    
    

    assetsLoadingLoop(callback);
}

function getBallSpriteByColor(color){

    switch(color){

        case COLOR.RED:
            return sprites.redBall;
        case COLOR.YELLOW:
            return sprites.yellowBall;
        case COLOR.BLACK:
            return sprites.blackBall;
        case COLOR.WHITE:
            return sprites.whiteBall;
    }
}