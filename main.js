nosex=0;
nosey=0;
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.hide();
    posenet=ml5.poseNet(camera,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
    {
    console.log("Posenet is Initiated");
    }
function preload()
{
    mushtach=loadImage('https://i.postimg.cc/fTRVvMDx/m.png');
}
function draw()
{
    image(camera,0,0,400,400);
    image(mushtach,nosex,nosey,50,50);
}
function snapshot()
{
    save('filter.jpg');
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-155;
        nosey=results[0].pose.nose.y-50;
        console.log("nosex"+ nosex);
        console.log("nosey"+ nosey);
    }
}