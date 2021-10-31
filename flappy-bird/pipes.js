class Pipe {
    //properties
    constructor(srcImage, posY, height) {
        this.image = new Image();
        this.image.src = srcImage
        this.width = 80;
        this.height = height;
        this.x = canvas.width
        this.y = posY;
    }

    // methods

    drawPipe = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    };

    pipeMove = () => {
        this.x -= 2;
    }

}