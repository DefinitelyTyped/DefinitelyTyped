// https://github.com/mrdoob/three.js/blob/master/examples/canvas_materials.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    var container: HTMLDivElement, stats: Stats;

    var camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.CanvasRenderer, objects: THREE.Mesh[];
    var pointLight: THREE.PointLight;

    init();
    animate();

    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.set(0, 200, 800);

        scene = new THREE.Scene();

        // Grid

        var size = 500, step = 100;

        var geometry = new THREE.Geometry();

        for (var i = - size; i <= size; i += step) {

            geometry.vertices.push(new THREE.Vector3(- size, - 120, i));
            geometry.vertices.push(new THREE.Vector3(size, - 120, i));

            geometry.vertices.push(new THREE.Vector3(i, - 120, - size));
            geometry.vertices.push(new THREE.Vector3(i, - 120, size));

        }

        var material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.2 });

        var line = new THREE.Line(geometry, material, THREE.LinePieces);
        scene.add(line);

        // Spheres

        var geometry2 = new THREE.SphereGeometry(100, 14, 7);

        type MeshMaterial = THREE.MeshBasicMaterial | THREE.MeshFaceMaterial | THREE.MeshLambertMaterial | THREE.MeshDepthMaterial | THREE.MeshNormalMaterial;

        var materials: MeshMaterial[] = [

            new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true, side: THREE.DoubleSide }),
            new THREE.MeshBasicMaterial({ color: 0xff0000, blending: THREE.AdditiveBlending }),
            new THREE.MeshLambertMaterial({ color: 0xffffff, overdraw: 0.5 }),
            new THREE.MeshLambertMaterial({ color: 0xffffff, overdraw: 0.5 }),
            new THREE.MeshDepthMaterial({ overdraw: 0.5 }),
            new THREE.MeshNormalMaterial({ overdraw: 0.5 }),
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('textures/land_ocean_ice_cloud_2048.jpg') }),
            new THREE.MeshBasicMaterial({ envMap: THREE.ImageUtils.loadTexture('textures/envmap.png', THREE.SphericalReflectionMapping), overdraw: 0.5 })

        ];

        for (var i = 0, l = geometry2.faces.length; i < l; i++) {

            var face = geometry2.faces[i];
            if (Math.random() > 0.5) face.materialIndex = Math.floor(Math.random() * materials.length);

        }

        materials.push(new THREE.MeshFaceMaterial(materials));

        objects = [];

        for (var i = 0, l = materials.length; i < l; i++) {

            var sphere = new THREE.Mesh(geometry, materials[i]);

            sphere.position.x = (i % 5) * 200 - 400;
            sphere.position.z = Math.floor(i / 5) * 200 - 200;

            sphere.rotation.x = Math.random() * 200 - 100;
            sphere.rotation.y = Math.random() * 200 - 100;
            sphere.rotation.z = Math.random() * 200 - 100;

            objects.push(sphere);

            scene.add(sphere);

        }

        var PI2 = Math.PI * 2;
        var program = function (context: CanvasRenderingContext2D) {

            context.beginPath();
            context.arc(0, 0, 0.5, 0, PI2, true);
            context.fill();

        }

        // Lights

        scene.add(new THREE.AmbientLight(Math.random() * 0x202020));

        var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
        directionalLight.position.x = Math.random() - 0.5;
        directionalLight.position.y = Math.random() - 0.5;
        directionalLight.position.z = Math.random() - 0.5;
        directionalLight.position.normalize();
        scene.add(directionalLight);

        pointLight = new THREE.PointLight(0xffffff, 1);
        scene.add(pointLight);

        var sprite = new THREE.Sprite(new THREE.SpriteCanvasMaterial({ color: 0xffffff, program: program }));
        sprite.scale.set(8, 8, 8);
        pointLight.add(sprite);

        renderer = new THREE.CanvasRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        var debugCanvas = document.createElement('canvas');
        debugCanvas.width = 512;
        debugCanvas.height = 512;
        debugCanvas.style.position = 'absolute';
        debugCanvas.style.top = '0px';
        debugCanvas.style.left = '0px';

        container.appendChild(debugCanvas);

        var debugContext = debugCanvas.getContext('2d');
        debugContext.setTransform(1, 0, 0, 1, 256, 256);
        debugContext.strokeStyle = '#000000';

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

    function loadImage(path: string) {

        var image = document.createElement('img');
        var texture = new THREE.Texture(image, THREE.UVMapping)

        image.onload = function () { texture.needsUpdate = true; };
        image.src = path;

        return texture;

    }

    //

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    function render() {

        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos(timer) * 1000;
        camera.position.z = Math.sin(timer) * 1000;
        camera.lookAt(scene.position);

        for (var i = 0, l = objects.length; i < l; i++) {

            var object = objects[i];

            object.rotation.x += 0.01;
            object.rotation.y += 0.005;

        }

        pointLight.position.x = Math.sin(timer * 7) * 300;
        pointLight.position.y = Math.cos(timer * 5) * 400;
        pointLight.position.z = Math.cos(timer * 3) * 300;

        renderer.render(scene, camera);

    }

}
