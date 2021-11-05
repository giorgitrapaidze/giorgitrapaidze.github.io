class Game {
    // properties
    constructor() {
        this.bg = new Image();
        this.bg.src = "./img/background.jpeg";
        this.character = new Character();
        this.platformArr = [new Platform(100, 700), new Platform(150, 600), new Platform(200, 500), new Platform(250, 400), new Platform(300, 300), new Platform(350, 200), new Platform(350, 100)];
        this.isGameOver = false;
        this.rupertArr = [new Rupert(350, -700), new Rupert(250, -1500), new Rupert(300, -1000)];
        this.peterArr = [new Peter(200, -700)]
        this.moveIntervalId = undefined;
        this.rupertIntervalId = undefined;
        this.peterIntervalId = undefined;
        this.canJump = true;
    }
    // methods
    addPlatforms(){    
        for (let i = 0; i < 100; i++){
            let random2 = Math.floor(Math.random() * 380)
            this.platformArr.push(new Platform(random2, this.platformArr[this.platformArr.length - 1].y - 100))
        }
                 
    }

    addRuperts(){    
        for (let i = 0; i < 20; i++){
            let random2 = Math.floor(Math.random() * 380)
            this.rupertArr.push(new Rupert(random2, this.rupertArr[this.rupertArr.length - 1].y - 700))
        }
                 
    }

    addPeters(){    
        for (let i = 0; i < 15; i++){
            let random2 = Math.floor(Math.random() * 380)
            this.peterArr.push(new Peter(random2, this.peterArr[this.peterArr.length - 1].y - 700))
        }
                 
    }







    // Fall
    // Fall(){
    //     this.character.isJumping = false
    //     clearInterval(isJump)
    //     isFall = setInterval(function(){
    //         this.game.character.y += 5  
    //         if(this.game.character.y > canvas.height){
    //             this.game.isGameOver = true;
    //         }
    //         this.game.platformArr.forEach((eachPlatform) => {
    //         if(this.game.character.characterPlatformCollision(eachPlatform) && !this.game.character.isJumping) {
    //             console.log('tick')
    //             startPoint = this.game.character.y
    //             this.game.Jump()
    //             this.game.character.isJumping = true
    //         }  
    //         })        
    //     }, 40) 
    // }

    // // Jump   
    // Jump(){
    //     clearInterval(isFall)
    //     this.character.isJumping = true
    //     isJump = setInterval(function(){
    //         this.game.character.y -= 7  
    //         if(this.game.character.y < 400){
    //             this.game.Fall()
    //             this.game.character.isJumping = false
    //         }     
    //     }, 30)         

    // }


    // Move Platforms
    movePlatforms(){
        this.platformArr.forEach(i => i.platformMove())
    }
    moveRuperts(){
        this.rupertArr.forEach(i => i.rupertMove())
    }

    movePeters(){
        this.peterArr.forEach(i => i.peterMove())
    }




    gameLoop = () => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.character.characterGravity()

        if(score < 500){  
            h1Score.style.color = "red"
        }else if(score < 0){
            this.canJump = false
        }
        else{
            this.canJump = true
            h1Score.style.color = "white"
        }

        if(this.character.y < 400){
            this.moveIntevalId = setInterval(this.movePlatforms(), 30)
        }
        this.rupertIntervalId = setInterval(this.moveRuperts(), 2500)
        this.peterIntervalId = setInterval(this.movePeters(), 2000)
        

        // if(score && score % 37 == 0){
        //     this.rupertArr[1].spawnRupert()
        // }
        
        if(this.character.y > canvas.height || score < -500){
            this.isGameOver = true
            clearInterval(this.moveIntervalId)
            clearInterval(this.rupertIntervalId)
            clearInterval(this.peterIntervalId)
            canvas.style.display = "none"
            gameoverSceen.style.display = "flex"
            h1Score.style.display ="none"
        }

        if(this.character.y < this.platformArr[this.platformArr.length - 1].y - 300){
            this.isGameOver = true
            clearInterval(this.moveIntervalId)
            clearInterval(this.rupertIntervalId)
            clearInterval(this.peterIntervalId)
            canvas.style.display = "none"
            winScreen.style.display = "flex"
            h1Score.style.display ="none"
        }

        // if(this.platformArr.length % 12 === 0){
        //     this.rupertArr.push(new Rupert)
        //     // this.rupertArr.forEach(i => i.spawnRupert, i.rupertMove)
        // }


        this.rupertArr.forEach((eachRupert, index, arr) => {
            if(this.character.characterToyCollision(eachRupert)){
                arr.splice(index, 1)
                score += 600
            }
        })

        this.peterArr.forEach((eachPeter, index, arr) => {
            if(this.character.characterToyCollision(eachPeter)){
                arr.splice(index, 1)
                score -= 800
            }
        })

        

        this.platformArr.forEach((eachPlatform) => {
            if(eachPlatform.y + eachPlatform.height < this.character.y + this.character.height){
                eachPlatform.canColide = false
            }else{    
                eachPlatform.canColide = true
            }
            if(this.character.characterPlatformCollision(eachPlatform) && eachPlatform.canColide === true) {
                this.character.characterJump()
            }
        })

        // this.platformArr.forEach((eachPlatform) => {
        //     if(eachPlatform.y = canvas.height){
        //         this.score++
        //         console.log(this.score)
        //     }


        // })
    
        // * DRAWING THE ELEMENTS
        ctx.drawImage( this.bg, 0, 0, canvas.width, canvas.height);
        this.character.drawCharacter();
        this.platformArr.forEach( (eachPlatform) => {
            eachPlatform.drawPlatform();
        } )
        this.rupertArr.forEach( (eachRupert) => {
            eachRupert.spawnRupert();
        } )

        this.peterArr.forEach( (eachPeter) => {
            eachPeter.spawnPeter();
        } )

        scoreBoard.innerText = score

        

        // * ANIMATION FRAME AND GAME LOGIC CHANGES
        if(!this.isGameOver){
            requestAnimationFrame(this.gameLoop)
        }
        
    }
}