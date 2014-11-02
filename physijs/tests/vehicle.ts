/// <reference path="../../stats/stats.d.ts" />
/// <reference path="../physijs.d.ts" />
/// <reference path="../../threejs/three-projector.d.ts" />

var TWEEN: any;
var SimplexNoise: any;


Physijs.scripts.worker = '../physijs_worker.js';
Physijs.scripts.ammo = 'examples/js/ammo.js';

var initScene, render,
    ground_material, box_material,
    projector, renderer, render_stats, physics_stats, scene, ground, light, camera,
    vehicle_body, vehicle;

initScene = function() {
    projector = new THREE.Projector;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    document.getElementById( 'viewport' ).appendChild( renderer.domElement );

    render_stats = new Stats();
    render_stats.domElement.style.position = 'absolute';
    render_stats.domElement.style.top = '1px';
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

            if ( input && vehicle ) {
                if ( input.direction !== null ) {
                    input.steering += input.direction / 50;
                    if ( input.steering < -.6 ) input.steering = -.6;
                    if ( input.steering > .6 ) input.steering = .6;
                }
                vehicle.setSteering( input.steering, 0 );
                vehicle.setSteering( input.steering, 1 );

                if ( input.power === true ) {
                    vehicle.applyEngineForce( 300 );
                } else if ( input.power === false ) {
                    vehicle.setBrake( 20, 2 );
                    vehicle.setBrake( 20, 3 );
                } else {
                    vehicle.applyEngineForce( 0 );
                }
            }

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
    scene.add( camera );

    // Light
    light = new THREE.DirectionalLight( 0xFFFFFF );
    light.position.set( 20, 20, -15 );
    light.target.position.copy( scene.position );
    light.castShadow = true;
    light.shadowCameraLeft = -150;
    light.shadowCameraTop = -150;
    light.shadowCameraRight = 150;
    light.shadowCameraBottom = 150;
    light.shadowCameraNear = 20;
    light.shadowCameraFar = 400;
    light.shadowBias = -.0001
    light.shadowMapWidth = light.shadowMapHeight = 2048;
    light.shadowDarkness = .7;
    scene.add( light );


    var input;


    // Materials
    ground_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) }),
        .8, // high friction
        .4 // low restitution
    );
    ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
    ground_material.map.repeat.set( 3, 3 );

    box_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/plywood.jpg' ) }),
        .4, // low friction
        .6 // high restitution
    );
    box_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
    box_material.map.repeat.set( .25, .25 );

    // Ground
    var NoiseGen = new SimplexNoise;

    var ground_geometry = new THREE.PlaneGeometry( 300, 300, 100, 100 );
    for ( var i = 0; i < ground_geometry.vertices.length; i++ ) {
        var vertex = ground_geometry.vertices[i];
        //vertex.y = NoiseGen.noise( vertex.x / 30, vertex.z / 30 ) * 1;
    }
    ground_geometry.computeFaceNormals();
    ground_geometry.computeVertexNormals();

    // If your plane is not square as far as face count then the HeightfieldMesh
    // takes two more arguments at the end: # of x faces and # of z faces that were passed to THREE.PlaneMaterial
    ground = new Physijs.HeightfieldMesh(
        ground_geometry,
        ground_material,
        0 // mass
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add( ground );

    for ( i = 0; i < 50; i++ ) {
        var size = Math.random() * 2 + .5;
        var box = new Physijs.BoxMesh(
            new THREE.BoxGeometry( size, size, size ),
            box_material
        );
        box.castShadow = box.receiveShadow = true;
        box.position.set(
            Math.random() * 25 - 50,
            5,
            Math.random() * 25 - 50
        );
        scene.add( box )
    }


    var loader = new THREE.JSONLoader();

    loader.load( "models/mustang.js", function( car, car_materials ) {
        loader.load( "models/mustang_wheel.js", function( wheel, wheel_materials ) {
            var mesh = new Physijs.BoxMesh(
                car,
                new THREE.MeshFaceMaterial( car_materials )
            );
            mesh.position.y = 2;
            mesh.castShadow = mesh.receiveShadow = true;

            vehicle = new Physijs.Vehicle(mesh, new Physijs.VehicleTuning(
                10.88,
                1.83,
                0.28,
                500,
                10.5,
                6000
            ));
            scene.add( vehicle );

            var wheel_material = new THREE.MeshFaceMaterial( wheel_materials );

            for ( var i = 0; i < 4; i++ ) {
                vehicle.addWheel(
                    wheel,
                    wheel_material,
                    new THREE.Vector3(
                        i % 2 === 0 ? -1.6 : 1.6,
                        -1,
                        i < 2 ? 3.3 : -3.2
                    ),
                    new THREE.Vector3( 0, -1, 0 ),
                    new THREE.Vector3( -1, 0, 0 ),
                    0.5,
                    0.7,
                    i < 2 ? false : true
                );
            }

            input = <any>{
                power: null,
                direction: null,
                steering: 0
            };
            document.addEventListener('keydown', function( ev ) {
                switch ( ev.keyCode ) {
                    case 37: // left
                        input.direction = 1;
                        break;

                    case 38: // forward
                        input.power = true;
                        break;

                    case 39: // right
                        input.direction = -1;
                        break;

                    case 40: // back
                        input.power = false;
                        break;
                }
            });
            document.addEventListener('keyup', function( ev ) {
                switch ( ev.keyCode ) {
                    case 37: // left
                        input.direction = null;
                        break;

                    case 38: // forward
                        input.power = null;
                        break;

                    case 39: // right
                        input.direction = null;
                        break;

                    case 40: // back
                        input.power = null;
                        break;
                }
            });
        });
    });

    requestAnimationFrame( render );
    scene.simulate();
};


render = function() {
    requestAnimationFrame( render );
    if ( vehicle ) {
        camera.position.copy( vehicle.mesh.position ).add( new THREE.Vector3( 40, 25, 40 ) );
        camera.lookAt( vehicle.mesh.position );

        light.target.position.copy( vehicle.mesh.position );
        light.position.addVectors( light.target.position, new THREE.Vector3( 20, 20, -15 ) );
    }
    renderer.render( scene, camera );
    render_stats.update();
};

window.onload = initScene;
