const context = document.querySelector("canvas").getContext('2d');

context.canvas.height = 400;
context.canvas.width = 1220;

//rep player in game
//stored as an object
const square = {
    height: 32,
    jumping: true,
    width: 32,
    x: 0,
    xVelocity: 0,
    y: 0,
    yVelocity: 0
};

//player's controller
//which keys are being pressed to determine action with canvas
const controller = {
    left: false,
    right: false,
    up: false,

    keyListener: function (event) {
        let key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {
            case 37: //left arrow
            controller.left = key.state;
            break;
            case 38: //up arrow
            controller.up = key_state;
            break;
            case 39: //right arrow
            controller.right = key_state;
            break;
        }
    },

    //event listeners
    window.addEventListener("keydown", controller.keyListener),
    window.addEventListener("keyup", controller.keyListener);

    window.requestAnimationFrame(loop);
};

//loop animation
const loop = () => {
    if (controller.up && square.jumping == false) {
        square.yVelocity -= 20;
        square.jumping = true;
    }
    if (controller.left) {
        square.xVelocity -= 0.5;
    }
    if (controller.right) {
        square.xVelocity += 0.5;
    }

    square.yVelocity += 1.5; //gravity
    square.x += square.xVelocity;
    square.y += square.yVelocity;
    square.xVelocity *= 0.9; //friction
    square.yVelocity *= 0.9; //friction

    //if square below floor line
    if (square.y > 386 - 16 - 32) {
        square.jumping = false;
        square.y = 386 - 16 - 32;
        square.yVelocity = 0;
    }

    if (square.x < -20) {
        square.x = 1220;
    } else if (square.x > 1220) { //if square goes off to right
        square.x = -20;
    }

    //backdrop for each frame
    context.fillStyle = "#201A23";
    context.fillRect(0, 0, 1220, 400); //x, y, width, height
    //creates and fills cude for each frame
    context.fillStyle = "#8DAA9D"; //hex for cube color
    context.beginPath();
    context.rect(square.x, square.y, square.width, square.height);
    context.fill();
    //ground for frames
    context.strokeStyle = "#2E2532";
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(0, 385);
    context.lineTo(1220, 385);
    context.stroke();

    //updates to tell browser its ready to draw again
    window.requestAnimationFrame(loop);
}