import trayballoon = require( "trayballoon" );

function testTrayballoon() {
    trayballoon( {
        text: "text",
        title: "title",
        icon: "icon",
        timeout: 5000,
        wait: true
    }, () => {

    } );
}
