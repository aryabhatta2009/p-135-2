status="";
video="";
function setup(){
  canvas=createCanvas(480,300);
  canvas.center();
}
function draw(){
    image(video,0,0,480,300);
}
function start(){
    obj_detect=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
}
function modelLoaded(){
    console.log("Model loaded!!!!!");
    status=true;
 }