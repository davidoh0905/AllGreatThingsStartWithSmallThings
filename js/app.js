//Okay let's start. I am going to keep track of all the process of my thoughts.....
//Error messag : allEnemies not defined. where are you calling the allEnemies.. let's find out
//updateEntioties function in engine.js goes through all the enemies in allEnemies array using
//forEach. okay then let's go define allEnemies.
//and before that I should define(??) enemies to put into allEnemies using Enemy constructor(??)

//okay now... enemy is not that easy
//1. first I need to assign then a place to start. it will be somewhere left to the screen.
//and I want it to be little bit random
//2. I need to give it a speed. at which it will be moving and it should also be random
//2.5 random integer function required
//3. and I need to move this back to the left of the screen once it goes beyond the screen.
// okay one step at a time
// a. let's display any bug on the screen --> to do that I need coordinate.
//Good! and these bugs shoud run around on second third fourth row.
//but let's start with one bug. it should choose from three coordinates. and randomInt function
// is needed.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Enemies our player must avoid
var Enemy = function() {
    this.x = Math.random()*(-400);
    this.y = [-18+83*1, -18+83*2, -18+83*3][getRandomIntInclusive(0,2)];
    this.speed = getRandomIntInclusive(100,300);

    //and if I do this I should remove...
    //?? hey hey wait a minute.. so again. how is this being drawn?
    //let's say the new Enemy is called, and it creates x,y, sprite all this
    // what makes it displayed? okay the render is run and .. oh good okay I understand cool
    //



    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x < 505){
        this.x += this.speed*dt;
        }
        else if (this.x >505){
        this.x -= 505+Math.random()*1000;
    }

           //dang!!! it's working!!!!! now I have to push this back

//so update and render goes hand in hand. I guess. update updates the x,y coordinate 
//and render gets it and draws it over and over agin.
// now I need speed!!!!! let's go back and give speed to the bug


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// you are telling me to create the player class here? so player class comes before 
//creating allEnemies array.... so you want me to write all the constructors first
//and then instantiate them.. alright alright
var Player = function(x,y) {
    this.x = x;
    this.y = y;


    this.sprite =  'images/char-boy.png'
}
// (??) this... refers to..... what exactly? if I say var player1 = new Player(). then
//this will refer to player1. and the "sprite" will become a property of player1 that has
//sprite as name and the relative url as value???
//then... how is it gonna be drawn eventually??(??)
//okay the render function seems to have some clue. let's wait until I get there
Player.prototype.update = function(dt) {
//?? how come the dt is a global variable?

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //okay it seems like each player will require x,y value.
    //so is this an initial rendering? and does that mean this should only run once?
    //because if the render function constantly refreshes.... then the player will come
    //back to the original location over and over agian... (??)
    //now! let's find a way to assign x,y value to the player first.
    // we should have x,y as a parameter. fo to constructor function
    //okay did that now let's go and call it!
}

Player.prototype.handleInput = function(key){
    if (key == "left" && this.x >0) {
        this.x = this.x - 101;
// I should not be able to move further to the left if I am at the left end.
//so if my x coordinate is >0 I can move left? let's try. PERFECT!!!!
    } else if (key == "right" && this.x < 101*5-101){
        this.x = this.x + 101;
    } else if (key == "up" && this.y > -18){
        this.y = this.y -83;
//this is also working! but one thing! reset might just take this dude away anyways.
// and another thing to consider is that... what if gen is at the very end?
//if it conflicts with reset.... then having gem at the end row will not make much sense.
//?? What!! what if I decide to make this screen larger!
//for future purpose I should not make the end limit at 505!!!! it shoudld be width!
//?? why does canvas.width not work1?!?!?!?!??!?!?!??!?!?!
//??and also... if case of scaling this up. it makes sense to replace 5 with numrow, numcol
    } else if (key == "down" && this.y < -18+83*5){
        this.y = this.y +83;
// good lesson learned!! I knew this but to actually implement this for the first time it's cool!
//you actually have to subtract the coordinate number if you wannt move up!
// and now let's add boundaries!
    }
    }
    //?? when I move around the canvase, and when I reach the op of the screen, the remaining
    //image happens... but I guess when I write the reset function it won;t have chance to 
    //having the remaining trace...

//now what should I do!!
//okay let's create a reset function so that when it reaches the very last line, it will come
//back to the original place/
//so when do I want to reset? -->when it reaches the water at the end. but it's no fun
//taking this dude right back as soon as it reaches the end. I might as well
// use a pop up saying congratulations!!!
//and then bring this dude back to its original place.
Player.prototype.reset = function(){
    if (this.y == -18){

        this.x = 101*2;
        this.y = -18+83*5;
        //??. alert("Congratulations!!"); --> congratulations pop up way too early..
    };
};
//Okay now.. this is all I can do for now.
// now what should I do?
//I should create enemy now



// now.. how should this be called?
//oh right.. update and render is called by engine.js so let's see if there is something like
//that for reset in engine js
//I want reset to be constantly running too. so that it will always know whether it should 
//go back to its original place or not.

// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

//okay how should I place enemy1 into allEnemies. let's define the array first
//http://www.w3schools.com/jsref/jsref_push.asp
var allEnemies = [];

var enemy1 = new Enemy(100,100); allEnemies.push(enemy1);

//alright! allEnemies done!
//now I have another error message
//Error message : player is not defined. let's go define player. first of all create
//constructor for player





// Place the player object in a variable called player
//  okay there is only one player. so var name should be player.
// HAHA!!! okay I see it!
// now there is no error message. shit... I have to start thinking now.
// okay let's get this dude right at the center. let's figure out where to place him
// I hope there is a good way from the browser where exactly in the coordinate sense my cursor 
// is at.
/*document.onclick = function(e)
{
    var x = e.pageX;
    var y = e.pageY;
    alert("User clicked at position (" + x + "," + y + ")")
};*/
//yeah but this is not about giving an estimate correct position. movement is done by block by block
//where can I find the exact length of the box?
//the canvas size is.. 
//?? canvas is not defined....canvas is 505 x 606. but it has some space left...
// in engine.js it seems like each col is 101 and each row is 83. but where is the starting point?
//in terms of width it seems like it strats from the edge so to place this guy in the middle
//and this character is a box so..... x = 101*2
//and what about the height? even upper margin and lower margin is different.
//do I really have go to by estimate of coordinate? let's try placing this guy at y = 0
//it should be place higher than that even.... let's set a starting point for this
//so starting at y = -18 looks the best
//
var player = new Player(101*2,-18+83*5);
//Good! and now I have another error message which is very good!!
//Unaught TypeError : player.handleInput is not a function
//okay... it seems like handleInput is going to be another method of player.
//and from document.addEventListenr function player.handleInput is called. so it should be defined
//somewhere.. let's define it above but I don't understand how it's going to be used yet.
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});  //okay this will result it handleInput('left') or handleInput('right') something like this
//and I will have to deal with creating handleInput function.
//so if the handleInput function receives left.. than x coordinate should move to left by 101
//and if receive up then it should move up my 83... okay that's not gonna be too hard//
//but!! when I press the key.... how come it is decided that...
// no no I mean what the hell is keyup and the numbers.....
//## https://developer.mozilla.org/en-US/docs/Web/Events
//nice! it is already predefined! and keyup is an event type
//?? what is the difference between keyup and keydown?
//?? I will pass for now but! who gave you these numnbers?  now I am off to creating 
//handleInput!!!!

