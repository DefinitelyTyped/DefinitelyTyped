import IdleJs = require("idle-js");

const idleDefault = new IdleJs();
idleDefault.start().stop().reset().start();

const idle = new IdleJs({
    idle: 60000,
    events: ["mousedown"],
    keepTracking: true,
    recurIdleCall: true,
    startAtIdle: true,
    onIdle: () => console.log("idle"),
    onActive: () => console.log("active"),
    onHide: () => console.log("hide"),
    onShow: () => console.log("show"),
});

idle.set({ idle: 99999 });
idle.reset(true, true);
