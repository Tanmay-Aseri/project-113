function draw(){
    image(video, 75, 75, 150, 150);
}

function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    circle(30, 50, 30);
    circle(270, 250, 30);
    circle(30, 250, 30);
    circle(270, 50, 30);
    rect(0, 0, 300, 30);
    rect(0, 270, 300, 30);

    video = createCapture(VIDEO);
    video.hide();
}