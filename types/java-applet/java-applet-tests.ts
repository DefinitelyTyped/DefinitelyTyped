

/**
 * @summary Test for the typage.
 */
function testTypage() {
    var applet: HTMLAppletElement = <HTMLAppletElement>document.getElementById('applet');
    var javaApplet: JavaApplet = applet;
}

/**
 * @summary Test for the java applet status.
 */
function testStatus() {
    var applet: JavaApplet = <JavaApplet>document.getElementById('applet');
    var status: number = applet.status;
}

/**
 * @summary Test for the handlers.
 */
function testHandlers() {
    var applet: JavaApplet = <JavaApplet>document.getElementById('applet');
    
    var handler: Function = () => {};
    applet.onError  = handler;
    applet.onLoad  = handler;
    applet.onStop  = handler;
}