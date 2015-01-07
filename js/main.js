var tempX = 0;
var xDir = 1;
var context;
var start = Date.now();
var then = Date.now();
var viewport;
var bounceAmount=0;

var textArt;

var draw = function() {
    context.clearRect(0, 0, viewport.width, viewport.height);

    context.fillStyle = "black";
    
    context.fillRect(Math.floor(tempX), viewport.height / 2, 50, 50);
    
    textArt.font = "16px Arial";
    textArt.fillText("HELLO EVERYONE! The box has bounced "+bounceAmount+" times!!", 10,20);
    
};

var game = function() {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    draw();

    then = now;
};

var resize = function() {
    var aspectRatio = {
        x: 16,
        y: 9
    };

    if (window.innerWidth / window.innerHeight < aspectRatio.x / aspectRatio.y) {
        viewport.width = window.innerWidth;
        viewport.height = viewport.width / aspectRatio.x * aspectRatio.y;
    }
    else if (window.innerWidth / window.innerHeight > aspectRatio.x / aspectRatio.y) {
        viewport.height = window.innerHeight;
        viewport.width = viewport.height / aspectRatio.y * aspectRatio.x;
    }
    else {
        viewport.height = window.innerHeight;
        viewport.width = window.innerWidth;
    }

    viewport.style.marginTop = -(viewport.height / 2) + "px";
    viewport.style.marginLeft = -(viewport.width / 2) + "px";
};

var update = function(deltaTime) {
    tempX += (500*xDir) * deltaTime;
    if (tempX+50 > viewport.width) {
        xDir = -1;
        bounceAmount+=1;
    }
    else if(tempX < 0){
        xDir = 1;
        bounceAmount+=1;
    }
};
