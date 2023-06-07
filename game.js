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
    }
};

//loop animation
const loop = () => {
    if (controller.up && square.jumping == false) {
        
    }
}