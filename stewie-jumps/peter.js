class Peter {
    constructor(posX, posY) {
        this.peter = new Image ();
        this.peter.src = "./img/peter.png";
        this.width = 105;
        this.height = 55;
        this.x = posX;
        this.y = posY;

    }
    //methods


    spawnPeter = () => {
        ctx.drawImage(this.peter, this.x,
            this.y, this.width, this.height);
    }

    peterMove() {
        this.y += 4

    }




}