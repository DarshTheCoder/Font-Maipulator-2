function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,333);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on("Pose",gotPoses);
}
function draw(){
    background("#969A97");
}
function ModelLoaded(){
    console.log("Pose Net Loaded");
}
function gotPoses(results)
{
if(results.length > 0){
console.log(results);
}
}