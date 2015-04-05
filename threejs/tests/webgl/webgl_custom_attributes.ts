/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes.html

() => {
    if (!Detector.webgl) Detector.addGetWebGLMessage();

    var renderer, scene, camera, stats;

    var sphere, uniforms, attributes;

    var noise = [];

    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT, 1, 10000);
        camera.position.z = 300;

        scene = new THREE.Scene();

        attributes = {

            displacement: { type: 'f', value: [] }

        };

        uniforms = {

            amplitude: { type: "f", value: 1.0 },
            color: { type: "c", value: new THREE.Color(0xff2200) },
            texture: { type: "t", value: THREE.ImageUtils.loadTexture("textures/water.jpg") },

        };

        uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE.RepeatWrapping;

        var shaderMaterial = new THREE.ShaderMaterial({

            uniforms: uniforms,
            attributes: attributes,
            vertexShader: document.getElementById('vertexshader').textContent,
            fragmentShader: document.getElementById('fragmentshader').textContent

        });


        var radius = 50, segments = 128, rings = 64;
        var geometry = new THREE.SphereGeometry(radius, segments, rings);
        geometry.dynamic = true;

        sphere = new THREE.Mesh(geometry, shaderMaterial);

        var vertices = sphere.geometry.vertices;
        var values = attributes.displacement.value;

        for (var v = 0; v < vertices.length; v++) {

            values[v] = 0;
            noise[v] = Math.random() * 5;

        }

        scene.add(sphere);

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x050505);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(WIDTH, HEIGHT);

        var container = document.getElementById('container');
        container.appendChild(renderer.domElement);

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.01;

        sphere.rotation.y = sphere.rotation.z = 0.01 * time;

        uniforms.amplitude.value = 2.5 * Math.sin(sphere.rotation.y * 0.125);
        uniforms.color.value.offsetHSL(0.0005, 0, 0);

        for (var i = 0; i < attributes.displacement.value.length; i++) {

            attributes.displacement.value[i] = Math.sin(0.1 * i + time);

            noise[i] += 0.5 * (0.5 - Math.random());
            noise[i] = THREE.Math.clamp(noise[i], -5, 5);

            attributes.displacement.value[i] += noise[i];

        }

        attributes.displacement.needsUpdate = true;

        renderer.render(scene, camera);

    }

}