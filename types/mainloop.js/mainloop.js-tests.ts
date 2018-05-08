// To see what this test does, create an HTML file with these contents and open it:
/*
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>MainLoop.js test</title>

    <meta name="description" content="TypeScript typings test for MainLoop.js.">

    <style>
html, body { height: 100%; margin: 0; overflow: hidden; position: relative; }
    </style>
</head>
<body>
    <script src="https://rawgit.com/IceCreamYou/MainLoop.js/gh-pages/build/mainloop.min.js"></script>
    <script src="mainloop.js-tests.js"></script>
</body>
</html>
*/

window.addEventListener('load', () => {

    let cx = window.innerWidth / 2 - 15,
        cy = window.innerHeight / 2 - 15,
        x = cx + 120,
        y = cy,
        lx = x,
        ly = y,
        theta = 0
    const radius = 120,
        velocity = 0.1 * Math.PI / 180;

    const actor = document.createElement('div');
    actor.style.width = '30px';
    actor.style.height = '30px';
    actor.style.backgroundColor = 'red';
    actor.style.position = 'absolute';
    actor.style.left = x + 'px';
    actor.style.top = y + 'px';

    document.body.appendChild(actor);

    const fpsCounter = document.createElement('div');
    fpsCounter.style.position = 'absolute';
    fpsCounter.style.left = '10px';
    fpsCounter.style.top = '10px';

    document.body.appendChild(fpsCounter);

    document.body.addEventListener('click', (event) => {
        cx = event.pageX;
        cy = event.pageY;
    });

    MainLoop
        .setBegin((timestamp, delta) => {
            lx = x;
            ly = y;
            x = cx + Math.cos(theta) * radius;
            y = cy + Math.sin(theta) * radius;
        })
        .setDraw((interpolationPercentage) => {
            actor.style.left = (lx + (x - lx) * interpolationPercentage) + 'px';
            actor.style.top = (ly + (y - ly) * interpolationPercentage) + 'px';
        })
        .setUpdate((delta) => {
            theta += velocity * delta;
        })
        .setEnd((fps, panic) => {
            fpsCounter.textContent = Math.round(fps) + ' FPS';
            if (panic) {
                console.info(
                    `Main loop panicked; tried to simulate too much time. Discarding ${MainLoop.resetFrameDelta()}ms`
                );
            }
        })
        .start();

    document.body.addEventListener('keyup', (event) => {
        if ((event.which || event.keyCode) === 80) { // Hit P to toggle Pause
            if (MainLoop.isRunning()) {
                MainLoop.stop();
            }
            else {
                MainLoop.start();
            }
        }
    });

});
