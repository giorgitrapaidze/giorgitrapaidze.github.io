// * GLOBAL VARIABLES
// canvas setup
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d");


// dom elements
const startBtn = document.querySelector("#start-btn")
const restartBtn = document.querySelector("#restart-btn")
const splashScreen = document.querySelector("#splash-screen")
const gameoverSceen = document.querySelector("#gameover-screen")


// game object
let game;


// * FUNCTIONS

const startGame = () => {
    // hide splash screen
    splashScreen.style.display = "none"
    // show canvas screen
    canvas.style.display ="flex"
    // start the game

    // we will have a class for the Game that when I click this button, we will create one element of that class
    game = new Game();
    game.gameLoop()

}; 

const restartGame = () => {
    gameoverSceen.style.display = "none"
    canvas.style.display = "flex"
    // you will need to create a new instance oof the game
    game = new Game()
    game.gameLoop()
}


// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", restartGame)


canvas.addEventListener("click", () => {
    //here I wanna make the bird jump
    game.bird.birdJump()
})