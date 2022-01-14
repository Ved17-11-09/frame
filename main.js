function preload() {
    
}

function setup() {
    canvas = createCanvas(1000,600) ;
    canvas.position(300,300) ;
    video = createCapture(VIDEO) ;
    video.hide() ; 

    tint_color = "" ;
}

function draw() {
    
    rect(200,120,400,400);
    image(video,300,200,200,200) ;
    tint(tint_color);
    ellipse(200, 120, 55, 55);
    ellipse(600, 120, 55, 55);
    ellipse(200, 520, 55, 55);
    ellipse(600, 520, 55, 55);
}

function take_snapshot() {
    save("mr-coder.png") ;
}

function filter_tint() {
    tint_color = document.getElementById("img-color").value;
}