//Fps
var fps = document.createElement("div");
fps.setAttribute("style", "font-size: 3em;position: absolute;z-index: 9999999;color: greenyellow;");
document.body.appendChild(fps);

var last = performance.now();
var frameAverage = 0;
var total = 0;
var count = 0;

function FrameCount ()
{
    var current = performance.now();
    let frame = (current - last);
    last = current;

    total += frame;
    count++;
    if(total >= 1000)
    {
        frameAverage = 1 / ((total / count) / 1000);
        total = 0;
        count = 0;
    }

    return Math.floor(frameAverage);
}

(function Loop ()
{
    requestAnimationFrame(function(){
        fps.innerHTML = FrameCount();
        Loop();
    });
})();

// source :
// http://jsfiddle.net/krnlde/u1fL1cs5