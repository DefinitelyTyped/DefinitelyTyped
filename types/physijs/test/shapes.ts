/// <reference types="stats.js" />



var TWEEN: any;
var SimplexNoise: any;


Physijs.scripts.worker = '../physijs_worker.js';
Physijs.scripts.ammo = 'examples/js/ammo.js';

var initScene, render, createShape,
    renderer, render_stats, physics_stats, scene, light, ground, ground_material, camera;

initScene = function() {
    TWEEN.start();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
    // renderer.shadowMapSoft = true;
    document.getElementById( 'viewport' ).appendChild( renderer.domElement );

    render_stats = new Stats();
    render_stats.dom.style.position = 'absolute';
    render_stats.dom.style.top = '0px';
    render_stats.dom.style.zIndex = '100';
    document.getElementById( 'viewport' ).appendChild( render_stats.dom );

    physics_stats = new Stats();
    physics_stats.dom.style.position = 'absolute';
    physics_stats.dom.style.top = '50px';
    physics_stats.dom.style.zIndex = '100';
    document.getElementById( 'viewport' ).appendChild( physics_stats.dom );

    scene = new Physijs.Scene({ fixedTimeStep: 1 / 120 });
    scene.setGravity(new THREE.Vector3( 0, -30, 0 ));
    scene.addEventListener(
        'update',
        function() {
            scene.simulate( undefined, 2 );
            physics_stats.update();
        }
    );

    camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set( 60, 50, 60 );
    camera.lookAt( scene.position );
    scene.add( camera );

    // Light
    light = new THREE.DirectionalLight( 0xFFFFFF );
    light.position.set( 20, 40, -15 );
    light.target.position.copy( scene.position );
    light.castShadow = true;
    light.shadowCameraLeft = -60;
    light.shadowCameraTop = -60;
    light.shadowCameraRight = 60;
    light.shadowCameraBottom = 60;
    light.shadowCameraNear = 20;
    light.shadowCameraFar = 200;
    light.shadowBias = -.0001
    light.shadowMapWidth = light.shadowMapHeight = 2048;
    // light.shadowDarkness = .7;
    scene.add( light );

    // Materials
    ground_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) }),
        .8, // high friction
        .4 // low restitution
    );
    // ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
    // ground_material.map.repeat.set( 2.5, 2.5 );

    // Ground
    ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(50, 1, 50),
        //new THREE.PlaneGeometry(50, 50),
        ground_material,
        0 // mass
    );
    ground.receiveShadow = true;
    scene.add( ground );

    // Bumpers
    var bumper,
        bumper_geom = new THREE.BoxGeometry(2, 1, 50);

    bumper = new Physijs.BoxMesh( bumper_geom, ground_material, 0 );
    bumper.position.y = 1;
    bumper.position.x = -24;
    bumper.receiveShadow = true;
    bumper.castShadow = true;
    scene.add( bumper );

    bumper = new Physijs.BoxMesh( bumper_geom, ground_material, 0 );
    bumper.position.y = 1;
    bumper.position.x = 24;
    bumper.receiveShadow = true;
    bumper.castShadow = true;
    scene.add( bumper );

    bumper = new Physijs.BoxMesh( bumper_geom, ground_material, 0 );
    bumper.position.y = 1;
    bumper.position.z = -24;
    bumper.rotation.y = Math.PI / 2;
    bumper.receiveShadow = true;
    bumper.castShadow = true;
    scene.add( bumper );

    bumper = new Physijs.BoxMesh( bumper_geom, ground_material, 0 );
    bumper.position.y = 1;
    bumper.position.z = 24;
    bumper.rotation.y = Math.PI / 2;
    bumper.receiveShadow = true;
    bumper.castShadow = true;
    scene.add( bumper );

    requestAnimationFrame( render );
    scene.simulate();

    createShape();
};

render = function() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    render_stats.update();
};

createShape = (function() {
    var addshapes = true,
        shapes = 0,
        box_geometry = new THREE.BoxGeometry( 3, 3, 3 ),
        sphere_geometry = new THREE.SphereGeometry( 1.5, 32, 32 ),
        cylinder_geometry = new THREE.CylinderGeometry( 2, 2, 1, 32 ),
        cone_geometry = new THREE.CylinderGeometry( 0, 2, 4, 32 ),
        octahedron_geometry = new THREE.OctahedronGeometry( 1.7, 1 ),
        torus_geometry = new THREE.TorusKnotGeometry ( 1.7, .2, 32, 4 ),
        doCreateShape;

    setTimeout(
        function addListener() {
            var button = document.getElementById( 'stop' );
            if ( button ) {
                button.addEventListener( 'click', function() { addshapes = false; } );
            } else {
                setTimeout( addListener );
            }
        }
    );

    doCreateShape = function() {
        var shape, material = new THREE.MeshLambertMaterial({ opacity: 0, transparent: true });

        switch ( Math.floor(Math.random() * 6) ) {
            case 0:
                shape = new Physijs.BoxMesh(
                    box_geometry,
                    material
                );
                break;

            case 1:
                shape = new Physijs.SphereMesh(
                    sphere_geometry,
                    material,
                    undefined
                );
                break;

            case 2:
                shape = new Physijs.CylinderMesh(
                    cylinder_geometry,
                    material
                );
                break;

            case 3:
                shape = new Physijs.ConeMesh(
                    cone_geometry,
                    material
                );
                break;

            case 4:
                shape = new Physijs.ConvexMesh(
                    octahedron_geometry,
                    material
                );
                break;

            case 5:
                shape = new Physijs.ConvexMesh(
                    torus_geometry,
                    material
                );
                break;
        }

        // shape.material.color.setRGB( Math.random() * 100 / 100, Math.random() * 100 / 100, Math.random() * 100 / 100 );
        shape.castShadow = true;
        shape.receiveShadow = true;

        shape.position.set(
            Math.random() * 30 - 15,
            20,
            Math.random() * 30 - 15
        );

        shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );

        if ( addshapes ) {
            shape.addEventListener( 'ready', createShape );
        }
        scene.add( shape );

        new TWEEN.Tween(shape.material).to({opacity: 1}, 500).start();

        document.getElementById( 'shapecount' ).textContent = ( ++shapes ) + ' shapes created';
    };

    return function() {
        setTimeout( doCreateShape, 250 );
    };
})();

window.onload = initScene;
