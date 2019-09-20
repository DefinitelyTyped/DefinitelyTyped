const stats = new Stats();
stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

const panel = stats.addPanel(
    new Stats.Panel('custom', 'red', 'pink'));

function animate() {

    stats.begin();

    // monitored code goes here

    // $ExpectType number
    stats.end();

    panel.update(40, 100);

    requestAnimationFrame( animate );

}

requestAnimationFrame( animate );
