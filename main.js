
difference=0;
leftwristX=0;
rightwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
 poseNet=ml5.poseNet(video,modelloaded);
 poseNet.on('pose',gotPoses);
}
function modelloaded(){
console.log('PoseNet Is Initialized')
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);

        
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("left wrist x="+leftwristX+"right wrist x "+rightwristX+"difference="+difference);

    }
}
function draw(){
    background('#a7acb5');
    document.getElementById("square_sides").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Dhriti', 50, 400);
}