

class Character {
    constructor() {
        this.charImage = new Image();
        this.charImage.src = "img/stewie/stewie_main.png";
        this.width = 65;
        this.height = 75;
        this.x = 100;
        this.y = 600;
        this.isJumping = false
        this.userpull = 0
    }
    

    // methods
    drawCharacter = () => {
        ctx.drawImage(this.charImage, this.x,
             this.y, this.width, this.height);
    }

    characterMoveRight = () => {
        this.x += 5
    }

    characterMoveleft = () => {
        this.x -= 5
    }

    characterGravity() {
        this.y = this.y + 4.5 
    }
    characterJump(){
        this.y = this.y - 180
    }



        
    characterPlatformCollision = (singlePlatform) => {
        if (this.x + 20 < singlePlatform.x + singlePlatform.width  &&
            this.x + this.width  > singlePlatform.x + 20 &&
            this.y < singlePlatform.y + singlePlatform.height  &&
            this.height + this.y - 15 > singlePlatform.y) {
                return true
            }else{
                return false
            }
    }

    characterToyCollision = (singleRupert) => {
        if (this.x  <= singleRupert.x + singleRupert.width &&
            this.x + this.width >= singleRupert.x &&
            this.y <= singleRupert.y + singleRupert.height  &&
            this.height + this.y>= singleRupert.y) {
                return true
            }else{
                return false
            }
    }


    
}