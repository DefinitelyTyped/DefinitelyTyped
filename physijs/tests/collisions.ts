/// <reference path="../../stats/stats.d.ts" />
/// <reference path="../physijs.d.ts" />


Physijs.scripts.worker = '../physijs_worker.js';
Physijs.scripts.ammo = 'examples/js/ammo.js';

var initScene, render, _boxes = [], spawnBox,
    renderer, render_stats, physics_stats, scene, ground_material, ground, light, camera;

initScene = function() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    document.getElementById( 'viewport' ).appendChild( renderer.domElement );

    render_stats = new Stats();
    render_stats.domElement.style.position = 'absolute';
    render_stats.domElement.style.top = '0px';
    render_stats.domElement.style.zIndex = 100;
    document.getElementById( 'viewport' ).appendChild( render_stats.domElement );

    physics_stats = new Stats();
    physics_stats.domElement.style.position = 'absolute';
    physics_stats.domElement.style.top = '50px';
    physics_stats.domElement.style.zIndex = 100;
    document.getElementById( 'viewport' ).appendChild( physics_stats.domElement );

    scene = new Physijs.Scene;
    scene.setGravity(new THREE.Vector3( 0, -30, 0 ));
    scene.addEventListener(
        'update',
        function() {
            scene.simulate( undefined, 1 );
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
    light.shadowDarkness = .7;
    scene.add( light );

    // Ground
    ground_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) }),
        .8, // high friction
        .3 // low restitution
    );
    ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
    ground_material.map.repeat.set( 3, 3 );

    ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(100, 1, 100),
        ground_material,
        0 // mass
    );
    ground.receiveShadow = true;
    scene.add( ground );

    spawnBox();

    requestAnimationFrame( render );
    scene.simulate();
};

spawnBox = (function() {

    var box_geometry = new THREE.BoxGeometry( 4, 4, 4 ),
        handleCollision = function( collided_with, linearVelocity, angularVelocity ) {
            var target = <any>this;
            target.collisions = 0;
            switch (++target.collisions) {

                case 1:
                    target.material.color.setHex(0xcc8855);
                    break;

                case 2:
                    target.material.color.setHex(0xbb9955);
                    break;

                case 3:
                    target.material.color.setHex(0xaaaa55);
                    break;

                case 4:
                    target.material.color.setHex(0x99bb55);
                    break;

                case 5:
                    target.material.color.setHex(0x88cc55);
                    break;

                case 6:
                    target.material.color.setHex(0x77dd55);
                    break;
            }
        },
        createBox = function() {
            var box, material;

            material = Physijs.createMaterial(
                new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/plywood.jpg' ) }),
                .6, // medium friction
                .3 // low restitution
            );
            material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
            material.map.repeat.set( .5, .5 );

            //material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) });

            box = new Physijs.BoxMesh(
                box_geometry,
                material
            );

            box.collisions = 0;

            box.position.set(
                Math.random() * 15 - 7.5,
                25,
                Math.random() * 15 - 7.5
            );

            box.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            box.castShadow = true;
            box.addEventListener( 'collision', handleCollision );
            box.addEventListener( 'ready', spawnBox );
            scene.add( box );
        };

    return function() {
        setTimeout( createBox, 1000 );
    };
})();

render = function() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    render_stats.update();
};

window.onload = initScene;