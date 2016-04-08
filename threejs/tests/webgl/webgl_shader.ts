/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_shader.html

() => {
    if (!Detector.webgl) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    var uniforms;

    init();
    animate();

    function init() {

        container = document.getElementById('container');

        camera = new THREE.Camera();
        camera.position.z = 1;

        scene = new THREE.Scene();

        var geometry = new THREE.PlaneBufferGeometry(2, 2);

        uniforms = {
            time: { type: "f", value: 1.0 },
            resolution: { type: "v2", value: new THREE.Vector2() }
        };

        var material = new THREE.ShaderMaterial({

            uniforms: uniforms,
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent

        });

        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        onWindowResize();

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        renderer.setSize(window.innerWidth, window.innerHeight);

        uniforms.resolution.value.x = renderer.domElement.width;
        uniforms.resolution.value.y = renderer.domElement.height;

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    function render() {

        uniforms.time.value += 0.05;

        renderer.render(scene, camera);

    }
}