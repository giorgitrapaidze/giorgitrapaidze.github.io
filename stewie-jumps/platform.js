class Platform {
    
    //properties
    constructor(posX,posY) {
        this.image = new Image();
        this.image.src = "img/platform.png"
        this.width = 100;
        this.height = 20;
        this.x = posX;
        this.y = posY;
        this.canColide = true;
    }

    // methods

    drawPlatform = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    };

    platformMove = () => {
        this.y += 3.5;
    }
    checkColide = () => {
        if(this.y > canvas.height){
            this.canColide = false
            score++
        }
    }
    
    
}