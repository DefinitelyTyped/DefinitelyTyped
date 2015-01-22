/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_lights_hemisphere.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    var morph: any;
    // -------
    if (!Detector.webgl) Detector.addGetWebGLMessage();

    var camera, scene, renderer, dirLight, hemiLight;
    var morphs = [];
    var stats;

    var clock = new THREE.Clock();

    init();
    animate();

    function init() {

        var container = document.getElementById('container');

        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.set(0, 0, 250);

        scene = new THREE.Scene();

        scene.fog = new THREE.Fog(0xffffff, 1, 5000);
        scene.fog.color.setHSL(0.6, 0, 1);

        /*
        controls = new THREE.TrackballControls( camera );

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.noZoom = false;
        controls.noPan = false;

        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.15;
        */

        // LIGHTS

        hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        hemiLight.position.set(0, 500, 0);
        scene.add(hemiLight);

        //

        dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.color.setHSL(0.1, 1, 0.95);
        dirLight.position.set(-1, 1.75, 1);
        dirLight.position.multiplyScalar(50);
        scene.add(dirLight);

        dirLight.castShadow = true;

        dirLight.shadowMapWidth = 2048;
        dirLight.shadowMapHeight = 2048;

        var d = 50;

        dirLight.shadowCameraLeft = -d;
        dirLight.shadowCameraRight = d;
        dirLight.shadowCameraTop = d;
        dirLight.shadowCameraBottom = -d;

        dirLight.shadowCameraFar = 3500;
        dirLight.shadowBias = -0.0001;
        dirLight.shadowDarkness = 0.35;
        //dirLight.shadowCameraVisible = true;

        // GROUND

        var groundGeo = new THREE.PlaneBufferGeometry(10000, 10000);
        var groundMat = new THREE.MeshPhongMaterial({ ambient: 0xffffff, color: 0xffffff, specular: 0x050505 });
        groundMat.color.setHSL(0.095, 1, 0.75);

        var ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -33;
        scene.add(ground);

        ground.receiveShadow = true;

        // SKYDOME

        var vertexShader = document.getElementById('vertexShader').textContent;
        var fragmentShader = document.getElementById('fragmentShader').textContent;
        var uniforms = {
            topColor: { type: "c", value: new THREE.Color(0x0077ff) },
            bottomColor: { type: "c", value: new THREE.Color(0xffffff) },
            offset: { type: "f", value: 33 },
            exponent: { type: "f", value: 0.6 }
        }
				uniforms.topColor.value.copy(hemiLight.color);

        scene.fog.color.copy(uniforms.bottomColor.value);

        var skyGeo = new THREE.SphereGeometry(4000, 32, 15);
        var skyMat = new THREE.ShaderMaterial({ vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide });

        var sky = new THREE.Mesh(skyGeo, skyMat);
        scene.add(sky);

        // MODEL

        var loader = new THREE.JSONLoader();

        loader.load("models/animated/flamingo.js", function (geometry) {

            morphColorsToFaceColors(geometry);
            geometry.computeMorphNormals();

            var material = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff, shininess: 20, morphTargets: true, morphNormals: true, vertexColors: THREE.FaceColors, shading: THREE.FlatShading });
            var meshAnim = new THREE.MorphAnimMesh(geometry, material);

            meshAnim.duration = 1000;

            var s = 0.35;
            meshAnim.scale.set(s, s, s);
            meshAnim.position.y = 15;
            meshAnim.rotation.y = -1;

            meshAnim.castShadow = true;
            meshAnim.receiveShadow = true;

            scene.add(meshAnim);
            morphs.push(meshAnim);

        });

        // RENDERER

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(scene.fog.color);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        renderer.shadowMapEnabled = true;
        renderer.shadowMapCullFace = THREE.CullFaceBack;

        // STATS

        stats = new Stats();
        container.appendChild(stats.domElement);

        //

        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('keydown', onKeyDown, false);

    }

    function morphColorsToFaceColors(geometry) {

        if (geometry.morphColors && geometry.morphColors.length) {

            var colorMap = geometry.morphColors[0];

            for (var i = 0; i < colorMap.colors.length; i++) {

                geometry.faces[i].color = colorMap.colors[i];

            }

        }

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function onKeyDown(event) {

        switch (event.keyCode) {

            case 72: /*h*/

                hemiLight.visible = !hemiLight.visible;
                break;

            case 68: /*d*/

                dirLight.visible = !dirLight.visible;
                break;

        }

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    function render() {

        var delta = clock.getDelta();

        //controls.update();

        for (var i = 0; i < morphs.length; i++) {

            morph = morphs[i];
            morph.updateAnimation(1000 * delta);

        }

        renderer.render(scene, camera);

    }
}
