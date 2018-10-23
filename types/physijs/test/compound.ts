/// <reference types="stats.js" />



Physijs.scripts.worker = '../physijs_worker.js';
Physijs.scripts.ammo = 'examples/js/ammo.js';

var initScene, render, renderer, render_stats, physics_stats, scene, ground, light, camera, spawnChair,
    ground_material, chair_material;

initScene = function() {
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

    scene = new Physijs.Scene;
    scene.setGravity(new THREE.Vector3( 0, -50, 0 ));
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
    // ground_material.map.repeat.set( 3, 3 );

    chair_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/wood.jpg' ) }),
        .6, // medium friction
        .2 // low restitution
    );
    // chair_material.map.wrapS = chair_material.map.wrapT = THREE.RepeatWrapping;
    // chair_material.map.repeat.set( .25, .25 );

    // Ground
    ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(100, 1, 100),
        ground_material,
        0 // mass
    );;
    ground.receiveShadow = true;
    scene.add( ground );

    spawnChair();

    requestAnimationFrame( render );
    scene.simulate();
};

spawnChair = (function() {
    var buildBack, buildLegs, doSpawn;

    buildBack = function() {
        var back, _object;

        back = new Physijs.BoxMesh(
            new THREE.BoxGeometry( 5, 1, .5 ),
            chair_material
        );
        back.position.y = 5;
        back.position.z = -2.5;
        back.castShadow = true;
        back.receiveShadow = true;

        // rungs - relative to back
        _object = new Physijs.BoxMesh(
            new THREE.BoxGeometry( 1, 5, .5 ),
            chair_material
        );
        _object.position.y = -3;
        _object.position.x = -2;
        _object.castShadow = true;
        _object.receiveShadow = true;
        back.add( _object );

        _object = new Physijs.BoxMesh(
            new THREE.BoxGeometry( 1, 5, .5 ),
            chair_material
        );
        _object.position.y = -3;
        _object.castShadow = true;
        _object.receiveShadow = true;
        back.add( _object );

        _object = new Physijs.BoxMesh(
            new THREE.BoxGeometry( 1, 5, .5 ),
            chair_material
        );
        _object.position.y = -3;
        _object.position.x = 2;
        _object.castShadow = true;
        _object.receiveShadow = true;
        back.add( _object );

        return back;
    };

    buildLegs = function() {
        var leg, _leg;

        // back left
        leg = new Physijs.BoxMesh(
            new THREE.BoxGeometry( .5, 4, .5 ),
            chair_material
        );
        leg.position.x = 2.25;
        leg.position.z = -2.25;
        leg.position.y = -2.5;
        leg.castShadow = true;
        leg.receiveShadow = true;

        // back right - relative to back left leg
        _leg = new Physijs.BoxMesh(
            new THREE.BoxGeometry( .5, 4, .5 ),
            chair_material
        );
        _leg.position.x = -4.5;
        _leg.castShadow = true;
        _leg.receiveShadow = true;
        leg.add( _leg );

        // front left - relative to back left leg
        _leg = new Physijs.BoxMesh(
            new THREE.BoxGeometry( .5, 4, .5 ),
            chair_material
        );
        _leg.position.z = 4.5;
        _leg.castShadow = true;
        _leg.receiveShadow = true;
        leg.add( _leg );

        // front right - relative to back left leg
        _leg = new Physijs.BoxMesh(
            new THREE.BoxGeometry( .5, 4, .5 ),
            chair_material
        );
        _leg.position.x = -4.5;
        _leg.position.z = 4.5;
        _leg.castShadow = true;
        _leg.receiveShadow = true;
        leg.add( _leg );

        return leg;
    };

    doSpawn = function() {
        var chair, back, legs;

        // seat of the chair
        chair = new Physijs.BoxMesh(
            new THREE.BoxGeometry( 5, 1, 5 ),
            chair_material
        );
        chair.castShadow = true;
        chair.receiveShadow = true;

        // back - relative to chair ( seat )
        back = buildBack();
        chair.add( back );

        // legs - relative to chair ( seat )
        legs = buildLegs();
        chair.add( legs );

        chair.position.y = 20;
        chair.position.x = Math.random() * 50 - 25;
        chair.position.z = Math.random() * 50 - 25;

        chair.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        );

        chair.addEventListener( 'ready', spawnChair );
        scene.add( chair );
    };

    return function() {
        setTimeout( doSpawn, 500 );
    };
})();

render = function() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    render_stats.update();
};

window.onload = initScene;
