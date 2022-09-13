import WinBox = require("winbox");

declare const content: HTMLElement;

WinBox.new("Basic Window");

WinBox.new("Custom Root", {
    root: document.body,
});

WinBox("Basic Window");

WinBox("Custom Root", {
    root: document.body,
});

new WinBox("Basic Window");

new WinBox("Custom Root", {
    root: document.body,
});
new WinBox("Custom Border", {
    border: "0.3em",
});

new WinBox({
    title: "Custom Color",
    background: "#ff005d",
    border: 4,
});

new WinBox("Limit Viewport", {
    top: 50,
    right: 50,
    bottom: 0,
    left: 50,
});

new WinBox({
    title: "Custom Position / Size",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
});

new WinBox({
    title: "Window",
    y: "center",
    x: "center",
    width: "50%",
});

new WinBox("Modal Window", {
    modal: true,
});

new WinBox({
    title: "Set innerHTML",
    html: "<h1>Lorem Ipsum</h1>",
});

new WinBox("Mount DOM", {
    mount: content.cloneNode(true),
});

new WinBox("Mount DOM", {
    mount: content,
});

new WinBox("WinBox.js", {
    url: "https://nextapps-de.github.io/winbox/",
    class: "iframe",
});

new WinBox({
    background: "#fff",
    border: 4,
    bottom: 0,
    class: ["no-full", "my-theme"],
    height: 200,
    html: "width: 200, height: 200",
    id: "my-window",
    index: 50,
    left: 50,
    max: false,
    right: 50,
    root: document.body,
    title: "All Options",
    top: 50,
    width: 200,
    x: "center",
    y: "center",
    onfocus() {
        this.setBackground("#fff");
    },
    onblur() {
        this.setBackground("#999");
    },
    onresize(width, height) {
        this.body.textContent = `width: ${width}, height: ${height}`;
    },
    onmove(x, y) {
        this.body.textContent = `x: ${x}, y: ${y}`;
    },
    onclose(force) {
        return !force && !window.confirm("Are you sure to close window?");
    },
});

new WinBox("Custom CSS", {
    class: "custom",
    mount: content.cloneNode(true),
});

new WinBox("Custom CSS (Class)", {
    class: "my-theme",
    mount: content.cloneNode(true),
});

new WinBox("Theme: Modern", {
    class: "modern",
    mount: content.cloneNode(true),
});

const winbox = new WinBox("Controls", {
    mount: document.getElementById("controls")!,
    border: 4,
    onclose(force) {
        return !force && !window.confirm("Are you sure to close window?");
    },
});
winbox.minimize();
winbox.maximize();
winbox.fullscreen();

winbox.move("center", "center");
winbox.move("right", "bottom");
winbox.resize("50%", "50%");
winbox.setTitle("Title-" + Math.random());
winbox.setBackground("rgb(178, 76, 247)");
winbox.body.parentElement!.classList.toggle("modal");
winbox.addClass("my-theme");
winbox.removeClass("my-theme");
winbox.close();
winbox.close(true);
