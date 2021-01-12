var ball,ballPosition;
var newPositionFromDataBase;
var database;

function setup(){
createCanvas(600,600);

database=firebase.database();
console.log(database);
ball= createSprite(300,300,30,20);
ball.shapeColor="red";

ballPosition=database.ref('ball');
console.log(database.data)
ballPosition.on("value",readPosition,showError)
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function changePosition(x,y){
ball.x += x;
ball.y += y;
}

function readPosition(data){
newPositionFromDataBase=data.val();
console.log("newPositonFromDataBase is " + newPositionFromDataBase);
ball.x=newPositionFromDataBase.x;
ball.y=newPositionFromDataBase.y;
}

function writePosition(x,y){
  database.ref('ball').set({
    'x': x + x ,
    'y': y + y
  })
}

function showError(){
  console.log("Error in writing to the database");
}


