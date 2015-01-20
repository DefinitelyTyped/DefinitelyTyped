/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_morphtargets.html

() => {
    if (!Detector.webgl) Detector.addGetWebGLMessage();

    var container, stats;

    var camera, scene, renderer;

    var geometry, objects;

    var mouseX = 0, mouseY = 0;

    var mesh;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
        camera.position.z = 500;

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 1, 15000);

        var light = new THREE.PointLight(0xff2200);
        light.position.set(100, 100, 100);
        scene.add(light);

        var amblight = new THREE.AmbientLight(0x111111);
        scene.add(amblight);


        var geometry = new THREE.BoxGeometry(100, 100, 100);
        var material = new THREE.MeshLambertMaterial({ color: 0xffffff, morphTargets: true });

        // construct 8 blend shapes

        for (var i = 0; i < geometry.vertices.length; i++) {

            var vertices = [];

            for (var v = 0; v < geometry.vertices.length; v++) {

                vertices.push(geometry.vertices[v].clone());

                if (v === i) {

                    vertices[vertices.length - 1].x *= 2;
                    vertices[vertices.length - 1].y *= 2;
                    vertices[vertices.length - 1].z *= 2;

                }

            }

            geometry.morphTargets.push({ name: "target" + i, vertices: vertices });

        }

        mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        //

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x222222);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.sortObjects = false;
        container.appendChild(renderer.domElement);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function onDocumentMouseMove(event) {

        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY) * 2;

    }

    function animate() {

        requestAnimationFrame(animate);
        render();

    }

    function render() {

        mesh.rotation.y += 0.01;

        //mesh.morphTargetInfluences[ 0 ] = Math.sin( mesh.rotation.y ) * 0.5 + 0.5;

        //camera.position.x += ( mouseX - camera.position.x ) * .005;
        camera.position.y += (- mouseY - camera.position.y) * .01;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);

    }
}