
var canvas,backgroundImage
var gameState = 0;
var playerCount 
var database,form,game,player;

function setup(){
  createCanvas(500,500);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()

}

function draw(){
 
  
}

