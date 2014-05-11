/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_lensflares.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    var controls: any;
    // -------

    var container, stats;

    var camera, scene, renderer;

    var clock = new THREE.Clock();

    var composer;

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        // camera

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 15000);
        camera.position.z = 250;

        controls = new THREE.FlyControls(camera);

        controls.movementSpeed = 2500;
        controls.domElement = container;
        controls.rollSpeed = Math.PI / 6;
        controls.autoForward = false;
        controls.dragToLook = false

				// scene

				scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 3500, 15000);
        scene.fog.color.setHSL(0.51, 0.4, 0.01);

        // world

        var s = 250;

        var cube = new THREE.BoxGeometry(s, s, s);
        var material = new THREE.MeshPhongMaterial({ ambient: 0x333333, color: 0xffffff, specular: 0xffffff, shininess: 50 });


        for (var i = 0; i < 3000; i++) {

            var mesh = new THREE.Mesh(cube, material);

            mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
            mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
            mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;
            mesh.rotation.z = Math.random() * Math.PI;

            mesh.matrixAutoUpdate = false;
            mesh.updateMatrix();

            scene.add(mesh);

        }


        // lights

        var ambient = new THREE.AmbientLight(0xffffff);
        ambient.color.setHSL(0.1, 0.3, 0.2);
        scene.add(ambient);


        var dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
        dirLight.position.set(0, -1, 0).normalize();
        scene.add(dirLight);

        dirLight.color.setHSL(0.1, 0.7, 0.5);

        // lens flares

        var textureFlare0 = THREE.ImageUtils.loadTexture("textures/lensflare/lensflare0.png");
        var textureFlare2 = THREE.ImageUtils.loadTexture("textures/lensflare/lensflare2.png");
        var textureFlare3 = THREE.ImageUtils.loadTexture("textures/lensflare/lensflare3.png");

        addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
        addLight(0.08, 0.8, 0.5, 0, 0, -1000);
        addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

        function addLight(h, s, l, x, y, z) {

            var light = new THREE.PointLight(0xffffff, 1.5, 4500);
            light.color.setHSL(h, s, l);
            light.position.set(x, y, z);
            scene.add(light);

            var flareColor = new THREE.Color(0xffffff);
            flareColor.setHSL(h, s, l + 0.5);

            var lensFlare = new THREE.LensFlare(textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor);

            lensFlare.add(textureFlare2, 512, 0.0, THREE.AdditiveBlending);
            lensFlare.add(textureFlare2, 512, 0.0, THREE.AdditiveBlending);
            lensFlare.add(textureFlare2, 512, 0.0, THREE.AdditiveBlending);

            lensFlare.add(textureFlare3, 60, 0.6, THREE.AdditiveBlending);
            lensFlare.add(textureFlare3, 70, 0.7, THREE.AdditiveBlending);
            lensFlare.add(textureFlare3, 120, 0.9, THREE.AdditiveBlending);
            lensFlare.add(textureFlare3, 70, 1.0, THREE.AdditiveBlending);

            lensFlare.customUpdateCallback = lensFlareUpdateCallback;
            lensFlare.position = light.position;

            scene.add(lensFlare);

        }

        // renderer

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(scene.fog.color, 1);

        container.appendChild(renderer.domElement);

        //

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        // stats

        stats = new Stats();
        container.appendChild(stats.domElement);

        // events

        window.addEventListener('resize', onWindowResize, false);

    }

    //

    function lensFlareUpdateCallback(object) {

        var f, fl = object.lensFlares.length;
        var flare;
        var vecX = -object.positionScreen.x * 2;
        var vecY = -object.positionScreen.y * 2;


        for (f = 0; f < fl; f++) {

            flare = object.lensFlares[f];

            flare.x = object.positionScreen.x + vecX * flare.distance;
            flare.y = object.positionScreen.y + vecY * flare.distance;

            flare.rotation = 0;

        }

        object.lensFlares[2].y += 0.025;
        object.lensFlares[3].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad(45);

    }

    //

    function onWindowResize(event) {

        renderer.setSize(window.innerWidth, window.innerHeight);

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    function render() {

        var delta = clock.getDelta();

        controls.update(delta);
        renderer.render(scene, camera);

    }
}
