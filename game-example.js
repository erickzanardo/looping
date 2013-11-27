var renderCar = function() {
    var rendered = document.createElement('canvas');
    rendered.width = 100;
    rendered.height = 70;
    
    var renderedCtx = rendered.getContext('2d');
    renderedCtx.fillStyle = '#E5E5E5';
    renderedCtx.fillRect(5, 30, 90, 30); // Lateral
    renderedCtx.fillRect(30, 5, 40, 30); // Lateral
    
    renderedCtx.fillStyle = '#000';
    
    // Roda 1
    renderedCtx.beginPath();
    renderedCtx.arc(30, 60, 10, 0, Math.PI*2, true); 
    renderedCtx.closePath();
    renderedCtx.fill();
    
    // Roda 2
    renderedCtx.beginPath();
    renderedCtx.arc(75, 60, 10, 0, Math.PI*2, true); 
    renderedCtx.closePath();
    renderedCtx.fill();
    return rendered;
}

var car = renderCar();

document.body.onkeypress = function(e) {
    processInput(e.keyCode || e.which);
}

// KEYS
var A = 97
var D = 100
var S = 115
var W = 119


var lastKeyPressed;
var processInput = function(keyCode) {
    lastKeyPressed = keyCode;
};

var calcSpeed = function(delta, pixelsPerSec) {
    return ((pixelsPerSec * delta) / 1000);
};

var x = 0, y = 0;

var loop = new Looping('game')
.onupdate(
    function(delta) {
        if (lastKeyPressed == A) {
            x -= calcSpeed(delta, 100);
        } else if (lastKeyPressed == D) {
            x += calcSpeed(delta, 100);
        } else if (lastKeyPressed == W) {
            y -= calcSpeed(delta, 100);
        } else if (lastKeyPressed == S) {
            y += calcSpeed(delta, 100);
        }
        lastKeyPressed = null;
    })
.onrender(
    function(ctx) {
        ctx.clearRect(0, 0, 300, 300);
        ctx.drawImage(car, this.x, this.y);
    });

function startGame() {
    loop.start();
}
