﻿/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />
/// <reference path="../../../tween.js/tween.js.d.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/canvas_interactive_cubes_tween.html

() => {
    var container, stats;
    var camera, scene, projector, renderer;

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        var info = document.createElement('div');
        info.style.position = 'absolute';
        info.style.top = '10px';
        info.style.width = '100%';
        info.style.textAlign = 'center';
        info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - clickable objects';
        container.appendChild(info);

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.y = 300;
        camera.position.z = 500;

        scene = new THREE.Scene();

        var geometry = new THREE.BoxGeometry(100, 100, 100);

        for (var i = 0; i < 20; i++) {

            var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, opacity: 0.5 }));
            object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;
            object.scale.x = Math.random() * 2 + 1;
            object.scale.y = Math.random() * 2 + 1;
            object.scale.z = Math.random() * 2 + 1;
            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;
            scene.add(object);

        }

        projector = new THREE.Projector();

        renderer = new THREE.CanvasRenderer();
        renderer.setClearColor(0xf0f0f0);
        renderer.setSize(window.innerWidth, window.innerHeight);

        container.appendChild(renderer.domElement);

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild(stats.domElement);

        document.addEventListener('mousedown', onDocumentMouseDown, false);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function onDocumentMouseDown(event) {

        event.preventDefault();

        var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1, 0.5);
        projector.unprojectVector(vector, camera);

        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {

            new TWEEN.Tween(intersects[0].object.position).to({
                x: Math.random() * 800 - 400,
                y: Math.random() * 800 - 400,
                z: Math.random() * 800 - 400
            }, 2000)
                .easing(TWEEN.Easing.Elastic.Out).start();

            new TWEEN.Tween(intersects[0].object.rotation).to({
                x: Math.random() * 2 * Math.PI,
                y: Math.random() * 2 * Math.PI,
                z: Math.random() * 2 * Math.PI
            }, 2000)
                .easing(TWEEN.Easing.Elastic.Out).start();

        }

        /*
        // Parse all the faces
        for ( var i in intersects ) {

            intersects[ i ].face.material[ 0 ].color.setHex( Math.random() * 0xffffff | 0x80000000 );

        }
        */
    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    var radius = 600;
    var theta = 0;

    function render() {

        TWEEN.update();

        theta += 0.1;

        camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
        camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta));
        camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));
        camera.lookAt(scene.position);

        renderer.render(scene, camera);

    }
}