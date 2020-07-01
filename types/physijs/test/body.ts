/// <reference types="stats.js" />

Physijs.scripts.worker = '../physijs_worker.js';
Physijs.scripts.ammo = 'examples/js/ammo.js';

var initScene, render, applyForce, setMousePosition, mouse_position,
    ground_material, box_material,
    renderer, render_stats, physics_stats, scene, ground, light, camera, box, boxes = [];

initScene = function() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    // // renderer.shadowMapSoft = true;
    document.getElementById('viewport').appendChild(renderer.domElement);

    render_stats = new Stats();
    render_stats.dom.style.position = 'absolute';
    render_stats.dom.style.top = '1px';
    render_stats.dom.style.zIndex = '100';
    document.getElementById('viewport').appendChild(render_stats.dom);

    physics_stats = new Stats();
    physics_stats.dom.style.position = 'absolute';
    physics_stats.dom.style.top = '50px';
    physics_stats.dom.style.zIndex = '100';
    document.getElementById('viewport').appendChild(physics_stats.dom);

    scene = new Physijs.Scene();
    scene.setGravity(new THREE.Vector3(0, -30, 0));
    scene.addEventListener(
        'update',
        function() {
            applyForce();
            scene.simulate(undefined, 1);
            physics_stats.update();
        }
    );

    camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set(60, 50, 60);
    camera.lookAt(scene.position);
    scene.add(camera);

    // Light
    light = new THREE.DirectionalLight(0xFFFFFF);
    light.position.set(20, 40, -15);
    light.target.position.copy(scene.position);
    light.castShadow = true;
    light.shadowCameraLeft = -60;
    light.shadowCameraTop = -60;
    light.shadowCameraRight = 60;
    light.shadowCameraBottom = 60;
    light.shadowCameraNear = 20;
    light.shadowCameraFar = 200;
    light.shadowBias = -.0001
    light.shadowMapWidth = light.shadowMapHeight = 2048;
    //// light.shadowDarkness = .7;
    scene.add(light);

    // Materials
    ground_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/rocks.jpg') }),
        .8, // high friction
        .4 // low restitution
    );
    // ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
    // ground_material.map.repeat.set( 3, 3 );

    box_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/plywood.jpg') }),
        .4, // low friction
        .6 // high restitution
    );
    // box_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
    // box_material.map.repeat.set( .25, .25 );

    // Ground
    ground = new Physijs.BoxMesh(
        new THREE.BoxGeometry(100, 1, 100),
        ground_material,
        0 // mass
    );
    ground.receiveShadow = true;
    scene.add(ground);

    for (var i = 0; i < 10; i++) {
        box = new Physijs.BoxMesh(
            new THREE.BoxGeometry(4, 4, 4),
            box_material
        );
        box.position.set(
            Math.random() * 50 - 25,
            10 + Math.random() * 5,
            Math.random() * 50 - 25
        );
        box.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        );
        box.scale.set(
            Math.random() * 1 + .5,
            Math.random() * 1 + .5,
            Math.random() * 1 + .5
        );
        box.castShadow = true;
        scene.add(box);
        boxes.push(box);
    }

    renderer.domElement.addEventListener('mousemove', setMousePosition);

    requestAnimationFrame(render);
    scene.simulate();
};

render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    render_stats.update();
};

setMousePosition = function(evt) {
    // Find where mouse cursor intersects the ground plane
    var vector = new THREE.Vector3(
        (evt.clientX / renderer.dom.clientWidth) * 2 - 1,
        -((evt.clientY / renderer.dom.clientHeight) * 2 - 1),
        .5
    );
    vector.unproject(camera);
    vector.sub(camera.position).normalize();

    var coefficient = (box.position.y - camera.position.y) / vector.y
    mouse_position = camera.position.clone().add(vector.multiplyScalar(coefficient));
};

applyForce = function() {
    if (!mouse_position) return;
    var strength = 35, distance, effect, offset, box;

    for (var i = 0; i < boxes.length; i++) {
        box = boxes[i];
        distance = mouse_position.distanceTo(box.position);
        effect = mouse_position.clone().sub(box.position).normalize().multiplyScalar(strength / distance).negate();
        offset = mouse_position.clone().sub(box.position);
        box.applyImpulse(effect, offset);
    }
};

window.onload = initScene;
