import * as menubar from "menubar";

var mb1 = menubar();

mb1.on("ready", function ready () {
    console.log("app is ready")
    // your app code here
})

var mb2 = menubar({
    index: 'file://path/to/index.html',
    icon: '/path/to/icon.png',
    width: 400,
    height: 800,
    preloadWindow: true,
    transparent: true,
});

mb2.on('ready', () => mb2.showWindow());

function toggleWindow() {
    if (mb2.window.isFocused()) {
        mb2.hideWindow();
    } else {
        mb2.showWindow();
    }
}
