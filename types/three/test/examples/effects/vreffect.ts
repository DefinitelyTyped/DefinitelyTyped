var _vrEffect: THREE.VREffect;

_vrEffect = new THREE.VREffect(new THREE.WebGLRenderer({antialias: true}), (error) => {
    if (error) {
        this._stats.classList.add("error");
        this._stats.innerHTML = "WebVR API not supported";
        this._vrAvailable = false;
    }
});

_vrEffect.setSize(100, 100);
_vrEffect.render(new THREE.Scene(), new THREE.Camera());
_vrEffect.setFullScreen(true);
