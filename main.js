
leftWristX= 0;
rightWristX= 0;
difference= 0;

function setup(){

video = createCapture(VIDEO);
video.size(500,500);

canvas= createCanvas(500,500);
canvas.position(560,150);

poseNet= ml5.poseNet(video , modelLoaded);
poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("Model Loading Enabled!");
}

function gotPoses(results , error){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
 leftWristX= results[0].pose.leftWrist.x;
 rightWristX= results[0].pose.rightWrist.x;

 difference= Math.floor(leftWristX - rightWristX);

    }
}

function draw(){
    background("#F0BBE1"); 
    fill("#bc62a2");
    stroke("#ab4990");
    textSize(difference);
text("Yahoo!" , 50 , 400);

    }