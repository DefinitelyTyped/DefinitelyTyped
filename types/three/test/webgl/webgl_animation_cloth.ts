// https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_cloth.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    var cloth: any;
    var clothFunction: any;
    var ballPosition: any;
    var ballSize: any;
    var windStrength: any;
    var windForce: any;
    var simulate: Function;
    // -------

    /* testing cloth simulation */
    var pinsFormation: number[][] = [];
    var pins: number[] = [6];

    pinsFormation.push(pins);

    pins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    pinsFormation.push(pins);

    pins = [0];
    pinsFormation.push(pins);

    pins = []; // cut the rope ;)
    pinsFormation.push(pins);

    pins = [0, cloth.w]; // classic 2 pins
    pinsFormation.push(pins);

    pins = pinsFormation[1];


    function togglePins() {

        pins = pinsFormation[~~(Math.random() * pinsFormation.length)];

    }

    if (!Detector.webgl) Detector.addGetWebGLMessage();

    var container: HTMLElement;
    var stats: Stats;
    var camera: THREE.PerspectiveCamera;
    var scene: THREE.Scene;
    var renderer: THREE.WebGLRenderer;
    var clothGeometry: THREE.ParametricGeometry;
    var sphere: THREE.Mesh;
    var object: THREE.Mesh;
    var arrow: THREE.ArrowHelper;
    var light:  THREE.DirectionalLight;
    var rotate = true;

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        // scene

        scene = new THREE.Scene();

        scene.fog = new THREE.Fog(0xcce0ff, 500, 10000);

        // camera

        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.y = 50;
        camera.position.z = 1500;
        scene.add(camera);

        // lights

        scene.add(new THREE.AmbientLight(0x666666));

        light = new THREE.DirectionalLight(0xdfebff, 1.75);
        light.position.set(50, 200, 100);
        light.position.multiplyScalar(1.3);

        light.castShadow = true;
        //light.shadowCameraVisible = true;

        light.shadowMapWidth = 1024;
        light.shadowMapHeight = 1024;

        var d = 300;

        light.shadowCameraLeft = -d;
        light.shadowCameraRight = d;
        light.shadowCameraTop = d;
        light.shadowCameraBottom = -d;

        light.shadowCameraFar = 1000;
        //light.shadowDarkness = 0.5;

        scene.add(light);

        // cloth material

        var clothTexture = THREE.ImageUtils.loadTexture('textures/patterns/circuit_pattern.png');
        clothTexture.wrapS = clothTexture.wrapT = THREE.RepeatWrapping;
        clothTexture.anisotropy = 16;

        var clothMaterial = new THREE.MeshPhongMaterial({ alphaTest: 0.5, color: 0xffffff, specular: 0x030303, emissive: 0x111111, shininess: 10, map: clothTexture, side: THREE.DoubleSide });

        // cloth geometry
        clothGeometry = new THREE.ParametricGeometry(clothFunction, cloth.w, cloth.h);
        //clothGeometry.dynamic = true;
        clothGeometry.computeFaceNormals();

        var uniforms = { texture: { value: clothTexture } };
        var vertexShader = document.getElementById('vertexShaderDepth').textContent;
        var fragmentShader = document.getElementById('fragmentShaderDepth').textContent;

        // cloth mesh

        object = new THREE.Mesh(clothGeometry, clothMaterial);
        object.position.set(0, 0, 0);
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);

        //object.customDepthMaterial = new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: vertexShader, fragmentShader: fragmentShader });

        // sphere

        var ballGeo = new THREE.SphereGeometry(ballSize, 20, 20);
        var ballMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

        sphere = new THREE.Mesh(ballGeo, ballMaterial);
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        scene.add(sphere);

        // arrow

        arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 50, 0xff0000);
        arrow.position.set(-200, 0, -200);
        // scene.add( arrow );

        // ground

        var groundTexture = THREE.ImageUtils.loadTexture("textures/terrain/grasslight-big.jpg");
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(25, 25);
        groundTexture.anisotropy = 16;

        var groundMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, map: groundTexture });

        var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(20000, 20000), groundMaterial);
        mesh.position.y = -250;
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        // poles

        var poleGeo = new THREE.BoxGeometry(5, 375, 5);
        var poleMat = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 100 });

        var mesh = new THREE.Mesh(poleGeo, poleMat);
        mesh.position.x = -125;
        mesh.position.y = -62;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add(mesh);

        var mesh = new THREE.Mesh(poleGeo, poleMat);
        mesh.position.x = 125;
        mesh.position.y = -62;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add(mesh);

        var mesh = new THREE.Mesh(new THREE.BoxGeometry(255, 5, 5), poleMat);
        mesh.position.y = -250 + 750 / 2;
        mesh.position.x = 0;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add(mesh);

        var gg = new THREE.BoxGeometry(10, 10, 10);
        var mesh = new THREE.Mesh(gg, poleMat);
        mesh.position.y = -250;
        mesh.position.x = 125;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add(mesh);

        var mesh = new THREE.Mesh(gg, poleMat);
        mesh.position.y = -250;
        mesh.position.x = -125;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        scene.add(mesh);

        //

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(scene.fog.color);

        container.appendChild(renderer.domElement);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        renderer.shadowMapEnabled = true;

        //

        stats = new Stats();
        container.appendChild(stats.dom);

        //

        window.addEventListener('resize', onWindowResize, false);

        sphere.visible = !true

			}

    //

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        var time = Date.now();

        windStrength = Math.cos(time / 7000) * 20 + 40;
        windForce.set(Math.sin(time / 2000), Math.cos(time / 3000), Math.sin(time / 1000)).normalize().multiplyScalar(windStrength);
        arrow.setLength(windStrength);
        arrow.setDirection(windForce);

        simulate(time);
        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0002;

        var p = cloth.particles;

        for (var i = 0, il = p.length; i < il; i++) {

            clothGeometry.vertices[i].copy(p[i].position);

        }

        clothGeometry.computeFaceNormals();
        clothGeometry.computeVertexNormals();

        clothGeometry.normalsNeedUpdate = true;
        clothGeometry.verticesNeedUpdate = true;

        sphere.position.copy(ballPosition);

        if (rotate) {

            camera.position.x = Math.cos(timer) * 1500;
            camera.position.z = Math.sin(timer) * 1500;

        }

        camera.lookAt(scene.position);

        renderer.render(scene, camera);

    }
}