img="";
status="";

function preload()
{
img = loadImage("Kitchen.png");
}

function setup()
{
canvas = createCanvas(900,600);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    } else
{
    console.log(results);
}
}

function draw()
{
    image(img, 0, 0, 900, 600);
}

function back()
{
    window.location = "Index.html";
}