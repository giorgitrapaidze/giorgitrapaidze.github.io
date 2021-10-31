class Bird {

    // properties
    constructor() {
        this.birdImage = new Image();
        this.birdImage.src = "./images/flappy.png";
        this.width = 50;
        this.height = 50;
        this.x = canvas.width / 6;
        this.y = canvas.height / 2;
        this.birdSpeed = 38;
    }

    // methods
    drawBird = () => {
        ctx.drawImage(this.birdImage, this.x,
             this.y, this.width, this.height);
    }


    birdGravity = () => {
        this.y = this.y + 2.2
        
    }
    
    birdJump = () => {
            this.y -= this.birdSpeed;
    }

    birdPipeCollision = (singlePipe) => {
        if (this.x < singlePipe.x + singlePipe.width &&
            this.x + this.width > singlePipe.x &&
            this.y < singlePipe.y + singlePipe.height &&
            this.height + this.y > singlePipe.y) {
                return true
            }else{
                return false
            }
    }


}