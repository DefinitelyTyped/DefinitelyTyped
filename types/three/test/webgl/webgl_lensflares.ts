// https://github.com/mrdoob/three.js/blob/master/examples/webgl_lensflares.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    var controls: any;
    // -------

    var container: HTMLDivElement, stats: Stats;

    var camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

    var clock = new THREE.Clock();

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
        var material = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff, shininess: 50 });


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

        function addLight(h: number, s: number, l: number, x: number, y: number, z: number) {

            var light = new THREE.PointLight(0xffffff, 1.5, 4500);
            light.color.setHSL(h, s, l);
            light.position.set(x, y, z);
            scene.add(light);

            var flareColor = new THREE.Color(0xffffff);
            flareColor.setHSL(h, s, l + 0.5);

            var lensFlare = new THREE.LensFlare();

            lensFlare.addElement(new THREE.LensFlareElement(textureFlare2, 512, 0.0));
            lensFlare.addElement(new THREE.LensFlareElement(textureFlare3, 512, 0.0));

            lensFlare.position.copy(light.position);

            scene.add(lensFlare);

        }

        // renderer

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(scene.fog.color);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        //

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        // stats

        stats = new Stats();
        container.appendChild(stats.dom);

        // events

        window.addEventListener('resize', onWindowResize, false);

    }

    //

    function onWindowResize(event: Event) {

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
