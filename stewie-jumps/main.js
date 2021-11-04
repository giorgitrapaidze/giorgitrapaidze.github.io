// * GLOBAL VARIABLES
// canvas setup
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d");

// dom elements
const startBtn = document.querySelector("#start-btn")
const restartBtn = document.querySelector("#restart-btn")
const restartBtn1 = document.querySelector("#restart-btn1")
const splashScreen = document.querySelector("#splash-screen")
const gameoverSceen = document.querySelector("#gameover-screen")
const winScreen = document.querySelector("#win-screen")
let score = 2000
let h1Score = document.querySelector("#score")
let scoreBoard = document.querySelector("span")



const startGame = () => {
    // hide splash screen
    splashScreen.style.display = "none"
    // show canvas screen
    canvas.style.display = "flex"
    // start the game
    h1Score.style.display = "block"
    
    
    // we will have a class for the Game that when I click this button, we will create one element of that class
    game = new Game();
    //console.log(score)
    game.addPlatforms()
    game.addRuperts()
    game.addPeters()
    game.gameLoop()
    


}; 

const restartGame = () => {
    gameoverSceen.style.display = "none"
    winScreen.style.display = "none"
    canvas.style.display = "flex"
    h1Score.style.display = "block"
    // you will need to create a new instance oof the game
    game = new Game()
    game.addPlatforms()
    game.addRuperts()
    game.addPeters()
    game.gameLoop()
       
    

}


startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", restartGame)
restartBtn1.addEventListener("click", restartGame)
window.addEventListener("keydown", (event) => {
    let arrowRight = "ArrowRight";
    let arrowLeft = "ArrowLeft";
    let buttonBeingClicked = event.code;
    if(buttonBeingClicked === arrowRight){
        game.character.x += 25
        if(game.character.x + game.character.width > canvas.width+1){
            game.character.x = 5
        }
    }else if(buttonBeingClicked === arrowLeft){
        game.character.x -= 25
        if(game.character.x < -1){
            game.character.x = canvas.width - 10
        }
    }else if(buttonBeingClicked === "ArrowDown"){
        game.character.y += 10
    }else if(buttonBeingClicked === "Space" && game.canJump === true){
        game.character.y -= 80
        score -= 100
    }
})



