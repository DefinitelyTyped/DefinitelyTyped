var _vrControls = new THREE.VRControls(new THREE.Camera());

_vrControls.update();

_vrControls.scale = 25;

window.addEventListener("keydown", (ev) => {
    if (ev.keyCode == "R".charCodeAt(0)) {
        _vrControls.zeroSensor();
    }
});

window.addEventListener("touchstart", (ev) => {
    _vrControls.zeroSensor();
});
