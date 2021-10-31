const canvas = document.querySelector("#my-canvas");
canvas.style.backgroundColor = "black";

canvas.width = 650;
canvas.height = 750;


const ctx = canvas.getContext("2d");
// * GLOBAL VARIABLES

let ballX = 50
let ballY = 50
let ballXDirection = 1;
let ballYDirection = 1;
let ballSpeed = 5;
let ballRadius = 15;
let paddleX = canvas.width / 3 ;
let paddleY = canvas.height - 40;
let paddleWidth = 150;
let paddleHeight = 30;
let isGameRunning = true;
let score = 0;
const scoreBoard = document.querySelector("span");
let gameOver = document.createElement("h1");
gameOver.innerText = "Game over(To Play again press Y)";






// * FUNCTIONS

function paddleDraw() {
    ctx.fillStyle = "white";
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
}

const ballWallCollision = () => {
    // if x o fhte ball is higher than width of canvas
    if(ballX > canvas.width - ballRadius){
        ballXDirection = -1;
    }
    if(ballY > canvas.height - ballRadius){
        body = document.querySelector("h1")
        let insertedNode = body.insertBefore(gameOver, null)
        isGameRunning = false;
    }

    if(ballX < 0 + ballRadius){
        ballXDirection = 1;
    }
    if(ballY < 0 + ballRadius){
        ballYDirection = 1;
    }

}

const ballPaddleCollison = () => {
    if(ballY + ballRadius > paddleY && ballX > paddleX && ballX < paddleX + paddleWidth){
        ballYDirection = -1
        score = score + 1
        scoreBoard.innerText = score
        if(score % 5 == 0){
            ballSpeed++
        }
    }
}

const ballDraw = () => {
 
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white"
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


const ballMovement = () => {
    ballX = ballX + (ballSpeed * ballXDirection);
    ballY = ballY + (ballSpeed * ballYDirection);

}

const gameLoop = () => {

    // 1. clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 2. elements moving or changing
    ballMovement();
    ballWallCollision();

    // 3. draw elements
    ballDraw();
    paddleDraw();



    // 4. animation frame and game logic
    ballPaddleCollison()
    if(isGameRunning) {
        requestAnimationFrame(gameLoop)
    }

}

// * ADDEVENTLISTENERS 
window.addEventListener("keydown", (event) => {
    let arrowRight = "ArrowRight";
    let arrowLeft = "ArrowLeft";
    let buttonBeingClicked = event.code;
    if(buttonBeingClicked === arrowRight && paddleX + paddleWidth < canvas.width){
        paddleX = paddleX + 40
    }else if(buttonBeingClicked === arrowLeft && paddleX >= 0){
        paddleX = paddleX - 40
    }
    if(buttonBeingClicked === "KeyY"){
        location.reload();
    }  
})

gameLoop()
