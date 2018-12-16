
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_helpers.html

() => {
    var scene: THREE.Scene, renderer: THREE.WebGLRenderer;
    var camera: THREE.PerspectiveCamera, light: THREE.PointLight;

    init();
    animate();

    function init() {

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 400;

        scene = new THREE.Scene();

        light = new THREE.PointLight();
        light.position.set(200, 100, 150);
        scene.add(light);

        scene.add(new THREE.PointLightHelper(light, 5));

        var gridHelper = new THREE.GridHelper(200, 10);
        gridHelper.setColors(0x0000ff, 0x808080);
        gridHelper.position.y = - 150;
        scene.add(gridHelper);

        var plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3);
        var planeHelper = new THREE.PlaneHelper(plane, 1, 0xffff00);
        scene.add(planeHelper);

        var loader = new THREE.JSONLoader();
        loader.load('obj/leeperrysmith/LeePerrySmith.js', function (geometry, materials) {

            var material = new THREE.MeshLambertMaterial();

            var mesh = new THREE.Mesh(geometry, material);
            mesh.scale.multiplyScalar(50);
            scene.add(mesh);

            scene.add(new THREE.FaceNormalsHelper(mesh, 10));
            scene.add(new THREE.VertexNormalsHelper(mesh, 10));

            var helper = new THREE.WireframeHelper(mesh);
            var wireframeMaterial = helper.material as THREE.Material;
            wireframeMaterial.depthTest = false;
            wireframeMaterial.opacity = 0.25;
            wireframeMaterial.transparent = true;
            scene.add(helper);

            scene.add(new THREE.BoxHelper(mesh));

        });

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {

        requestAnimationFrame(animate);

        var time = - performance.now() * 0.0003;

        camera.position.x = 400 * Math.cos(time);
        camera.position.z = 400 * Math.sin(time);
        camera.lookAt(scene.position);

        light.position.x = Math.sin(time * 1.7) * 300;
        light.position.y = Math.cos(time * 1.5) * 400;
        light.position.z = Math.cos(time * 1.3) * 300;

        renderer.render(scene, camera);

    }

}
