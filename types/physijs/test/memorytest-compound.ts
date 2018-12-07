/// <reference types="stats.js" />



Physijs.scripts.worker = '../physijs_worker.js';
Physijs.scripts.ammo = 'examples/js/ammo.js';

var initScene, render, _boxes = [], spawnBox, inc_ready, renderer, render_stats, physics_stats, scene, ground_material, ground, light, camera;

var cubes = [];
var total_cubes = 0;
var total_ready = 0;
var max_on_screen = 100;
var spawn_per_tick = 25;

initScene = function() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
    // // renderer.shadowMapSoft = true;
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
    scene.setGravity(new THREE.Vector3( 0, -30, 0 ));
    scene.addEventListener(
        'update',
        function() {
            scene.simulate( undefined, 1 );
            physics_stats.update();
            while(cubes.length > max_on_screen) {
                scene.remove(cubes[0]);
                cubes[0].geometry.dispose();
                cubes[0].material.dispose();
                cubes.splice( 0, 1 );
            }
            document.getElementById( 'totalcubecount' ).textContent = ( total_cubes.toString() );
            document.getElementById( 'currentcubecount' ).textContent = ( cubes.length.toString() );
            document.getElementById( 'totalobjects' ).textContent = ( scene.__objects.length );
            if(total_cubes > total_ready){
                return;
            }
            for (var i=0;i<spawn_per_tick;i++) {
                spawnBox();
            }
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
    // // light.shadowDarkness = .7;
    scene.add( light );

    // Ground
    ground_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) }),
        .8, // high friction
        .3 // low restitution
    );
    // ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
    // ground_material.map.repeat.set( 3, 3 );

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
        createBox = function() {
            var box, material, childBox;
            total_cubes++;

            material = Physijs.createMaterial(
                new THREE.MeshLambertMaterial({ opacity: .9, transparent: true }),
                .6, // medium friction
                .3 // low restitution
            );

            // material.color.setRGB(Math.random() * 100 / 100, Math.random() * 100 / 100, Math.random() * 100 / 100);

            box = new Physijs.BoxMesh(
                box_geometry,
                material
            );
            childBox = new Physijs.BoxMesh(
                box_geometry,
                material
            );

            // childBox.collisions = 0;
            // box.collisions = 0;
            box.add(childBox);

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
            box.addEventListener( 'ready', inc_ready );

            cubes.push( box );
            scene.add( box );
        };

    return function() {
        createBox();
    };
})();

inc_ready = function() {
    total_ready++;
}

render = function() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    render_stats.update();
};

window.onload = initScene;
