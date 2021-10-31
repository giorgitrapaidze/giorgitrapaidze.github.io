class Game {
    // properties
    constructor() {
        this.bg = new Image();
        this.bg.src = "./images/bg.png";
        this.bird = new Bird();
        this.pipeArr = [new Pipe("./images/obstacle_top.png", 0, 125), new Pipe("./images/obstacle_bottom.png", canvas.height - 125, 125)]
        this.isGameOver = false;
    }

    // methods
    addPipes = () => {
        let x = this.pipeArr.length - 1
        let lastPipe = this.pipeArr[x]
        let random1 = Math.random() 
        let random2 = 1 - Math.random() 
        let heightTop = Math.floor(250 * random1)
        let heightBottom = 250 - heightTop

        if(lastPipe.x == 300) {
            this.pipeArr.push(new Pipe("./images/obstacle_top.png", 0, heightTop))
            this.pipeArr.push(new Pipe("./images/obstacle_bottom.png", canvas.height - heightBottom, heightBottom))
        }

    }

    gameLoop = () => {
        // console.log("Yay! game running!")

        // * CLEAR THE CANVAS
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // * MOVEMENT AND CHANGE ON ELEMENTS
        this.bird.birdGravity();

        this.pipeArr.forEach( (eachPipe) => {
            eachPipe.pipeMove();
        } )

        this.addPipes();
        

        this.pipeArr.forEach((eachPipe) => {
            if(this.bird.birdPipeCollision(eachPipe) || this.bird.y > canvas.height - 25) {
                this.isGameOver = true;
                canvas.style.display = "none"
                gameoverSceen.style.display = "flex"
            }
        })
        

        // * DRAWING THE ELEMENTS
        ctx.drawImage( this.bg, 0, 0, canvas.width, canvas.height);
        this.bird.drawBird();
        this.pipeArr.forEach( (eachPipe) => {
            eachPipe.drawPipe();
        } )
        

        // * ANIMATION FRAME AND GAME LOGIC CHANGES
        if(!this.isGameOver){
            requestAnimationFrame(this.gameLoop)
        }
        
    }
}