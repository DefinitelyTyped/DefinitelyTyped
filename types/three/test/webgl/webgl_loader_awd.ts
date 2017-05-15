// https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_awd.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.

    // -------

    if (!Detector.webgl) Detector.addGetWebGLMessage();

    var container: HTMLDivElement, stats: Stats;

    var camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer, controls: THREE.OrbitControls;
    var pointLight: THREE.PointLight;
    var trunk: THREE.Object3D;

    var loader = new THREE.AWDLoader();

    loader.materialFactory = createMaterial;
    loader.load('./models/awd/simple/simple.awd', function (_trunk: THREE.Object3D) {

        trunk = _trunk;

        init();
        render();

    });


    function createMaterial(name: string) {
        console.log( name );
        var mat = new THREE.MeshPhongMaterial({
            color: 0xaaaaaa,
            shininess: 20
        });
        return mat;
    }


    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.set(70, 50, -100);

        controls = new THREE.OrbitControls(camera);

        scene = new THREE.Scene();


        // Add the AWD SCENE

        scene.add(trunk);


        // Lights

        scene.add(new THREE.AmbientLight(0x606060));

        var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xeeeeee);
        directionalLight.position.set(.2, -1, .2);
        directionalLight.position.normalize();
        scene.add(directionalLight);

        pointLight = new THREE.PointLight(0xffffff, .6);
        scene.add(pointLight);

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        stats = new Stats();
        stats.dom.style.position = 'absolute';
        stats.dom.style.top = '0px';
        container.appendChild(stats.dom);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }



    function render() {

        requestAnimationFrame(render);

        var timer = Date.now() * 0.0005;

        pointLight.position.x = Math.sin(timer * 4) * 3000;
        pointLight.position.y = 600
        pointLight.position.z = Math.cos(timer * 4) * 3000;

        renderer.render(scene, camera);

        stats.update();

    }
}
