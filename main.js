img="";
status="";
objects=[];
function setup(){
    canvas = createCanvas(640,450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}
function modelLoaded(){
    console.log(" MODEL LOADED");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
   image(img,0,0,640,450);
   if(status!=""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML = "status:object detected";

        fill("#ff0000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+"   "+percent+" %",objects[i].x+5,objects[i].y+10);
        noFill();
        stroke("#ff0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
   }
  
}