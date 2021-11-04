
class Rupert {
    constructor(posX, posY) {
        this.rupert = new Image ();
        this.rupert.src = "./img/stewie/rupert.png";
        this.width = 35;
        this.height = 45;
        this.x = posX;
        this.y = posY;

    }
    //methods


    spawnRupert = () => {
        ctx.drawImage(this.rupert, this.x,
            this.y, this.width, this.height);
    }

    rupertMove() {
        this.y += 4

    }




}
    