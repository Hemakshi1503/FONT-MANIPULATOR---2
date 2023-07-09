function setup() {
    video = createCapture(VIDEO);
    video.size(680, 600);

    canvas = createCanvas(700, 500);
    canvas.position(800, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('pink');
}

function modelLoaded() {
    console.log('PoseNet Is Intilised!');
}

function gotPoses(results) {
   if (results.length > 0) 
   {
     console.log(results);
   } 
}
