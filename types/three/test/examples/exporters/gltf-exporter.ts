() => {
    var container: HTMLElement;
    var camera: THREE.PerspectiveCamera,
        material: THREE.MeshStandardMaterial,
        object: THREE.Object3D,
        scene1: THREE.Scene,
        renderer: THREE.WebGLRenderer;
    var gridHelper: THREE.GridHelper,
        sphere: THREE.Object3D,
        waltHead: THREE.Object3D;

    var gltfExporter = new THREE.GLTFExporter();

    var options = {
        trs: true,
        onlyVisible: true,
        truncateDrawRange: true,
        binary: true,
        forceIndices: true,
        forcePowerOfTwoTextures: true
    };
    // gltfExporter.parse(
    //     scene1,
    //     function(result) {
    //         if (result instanceof ArrayBuffer) {
    //             saveArrayBuffer(result, "scene.glb");
    //         } else {
    //             var output = JSON.stringify(result, null, 2);
    //             console.log(output);
    //             saveString(output, "scene.gltf");
    //         }
    //     },
    //     options
    // );

    var link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link); // Firefox workaround, see #6594

    // function save(blob, filename) {
    //     link.href = URL.createObjectURL(blob);
    //     link.download = filename;
    //     link.click();

    //     // URL.revokeObjectURL( url ); breaks Firefox...
    // }

    // function saveString(text, filename) {
    //     save(new Blob([text], { type: "text/plain" }), filename);
    // }

    // function saveArrayBuffer(buffer, filename) {
    //     save(
    //         new Blob([buffer], { type: "application/octet-stream" }),
    //         filename
    //     );
    // }

    if (!Detector.webgl) Detector.addGetWebGLMessage();

    init();
    animate();

    function init() {
        container = document.createElement("div");
        document.body.appendChild(container);

        scene1 = new THREE.Scene();
        scene1.name = "Scene1";

        // ---------------------------------------------------------------------
        // Perspective Camera
        // ---------------------------------------------------------------------
        camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            1,
            2000
        );
        camera.position.set(600, 400, 0);

        camera.name = "PerspectiveCamera";
        scene1.add(camera);

        // ---------------------------------------------------------------------
        // Ambient light
        // ---------------------------------------------------------------------
        var light = new THREE.AmbientLight(0xffffff, 0.2);
        light.name = "AmbientLight";
        scene1.add(light);

        // ---------------------------------------------------------------------
        // DirectLight
        // ---------------------------------------------------------------------
        light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 0);
        light.name = "DirectionalLight";
        scene1.add(light);

        // ---------------------------------------------------------------------
        // Grid
        // ---------------------------------------------------------------------
        gridHelper = new THREE.GridHelper(2000, 20);
        gridHelper.position.y = -50;
        gridHelper.name = "Grid";
        scene1.add(gridHelper);

        // ---------------------------------------------------------------------
        // Axes
        // ---------------------------------------------------------------------
        var axes = new THREE.AxesHelper(500);
        axes.name = "AxesHelper";
        scene1.add(axes);

        // ---------------------------------------------------------------------
        // Simple geometry with basic material
        // ---------------------------------------------------------------------
        // Icosahedron
        var mapGrid = new THREE.TextureLoader().load("textures/UV_Grid_Sm.jpg");
        mapGrid.wrapS = mapGrid.wrapT = THREE.RepeatWrapping;
        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            map: mapGrid
        });

        object = new THREE.Mesh(new THREE.IcosahedronGeometry(75, 0), material);
        object.position.set(-200, 0, 200);
        object.name = "Icosahedron";
        scene1.add(object);

        // Octahedron
        material = new THREE.MeshBasicMaterial({
            color: 0x0000ff,
            wireframe: true
        });
        object = new THREE.Mesh(new THREE.OctahedronGeometry(75, 1), material);
        object.position.set(0, 0, 200);
        object.name = "Octahedron";
        scene1.add(object);

        // Tetrahedron
        material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0.5
        });

        object = new THREE.Mesh(new THREE.TetrahedronGeometry(75, 0), material);
        object.position.set(200, 0, 200);
        object.name = "Tetrahedron";
        scene1.add(object);

        // ---------------------------------------------------------------------
        // Buffered geometry primitives
        // ---------------------------------------------------------------------
        // Sphere
        sphere = new THREE.Mesh(
            new THREE.SphereBufferGeometry(70, 10, 10),
            new THREE.MeshStandardMaterial({
                color: 0xffff00,
                metalness: 0.5,
                roughness: 1.0,
                flatShading: true
            })
        );
        sphere.position.set(0, 0, 0);
        sphere.name = "Sphere";
        scene1.add(sphere);

        // Cylinder
        object = new THREE.Mesh(
            new THREE.CylinderBufferGeometry(10, 80, 100),
            new THREE.MeshStandardMaterial({
                color: 0xff00ff,
                flatShading: true
            })
        );
        object.position.set(200, 0, 0);
        object.name = "Cylinder";
        scene1.add(object);

        // TorusKnot
        object = new THREE.Mesh(
            new THREE.TorusKnotGeometry(50, 15, 40, 10),
            new THREE.MeshStandardMaterial({
                color: 0xff0000,
                roughness: 1
            })
        );
        object.position.set(-200, 0, 0);
        object.name = "Cylinder";
        scene1.add(object);

        // ---------------------------------------------------------------------
        // Hierarchy
        // ---------------------------------------------------------------------
        var mapWood = new THREE.TextureLoader().load(
            "textures/hardwood2_diffuse.jpg"
        );

        object = new THREE.Mesh(
            new THREE.BoxBufferGeometry(40, 100, 100),
            new THREE.MeshStandardMaterial({
                map: mapWood,
                side: THREE.DoubleSide
            })
        );
        object.position.set(-200, 0, 400);
        object.name = "Cube";
        scene1.add(object);

        var object2 = new THREE.Mesh(
            new THREE.BoxBufferGeometry(40, 40, 40, 2, 2, 2),
            material
        );
        object2.position.set(0, 0, 50);
        object2.rotation.set(0, 45, 0);
        object2.name = "SubCube";
        object.add(object2);

        // ---------------------------------------------------------------------
        // Groups
        // ---------------------------------------------------------------------
        var group1 = new THREE.Group();
        group1.name = "Group";
        scene1.add(group1);

        var group2 = new THREE.Group();
        group2.name = "subGroup";
        group2.position.set(0, 50, 0);
        group1.add(group2);

        object2 = new THREE.Mesh(
            new THREE.BoxBufferGeometry(30, 30, 30),
            material
        );
        object2.name = "Cube in group";
        object2.position.set(0, 0, 400);
        group2.add(object2);

        // ---------------------------------------------------------------------
        // Triangle Strip
        // ---------------------------------------------------------------------
        var geometry = new THREE.BufferGeometry();
        var positions = new Float32Array([
            0,
            0,
            0,
            0,
            80,
            0,
            80,
            0,
            0,
            80,
            80,
            0,
            80,
            0,
            80,
            80,
            80,
            80
        ]);

        var colors = new Float32Array([
            1,
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            0,
            1,
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            1
        ]);

        geometry.addAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        geometry.addAttribute("color", new THREE.BufferAttribute(colors, 3));
        object = new THREE.Mesh(
            geometry,
            new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                vertexColors: THREE.VertexColors
            })
        );
        object.position.set(140, -40, -250);
        // object.setDrawMode(THREE.TriangleStripDrawMode);
        object.name = "Custom buffered";
        object.userData = { data: "customdata", list: [1, 2, 3, 4] };

        scene1.add(object);

        // ---------------------------------------------------------------------
        // Line Strip
        // ---------------------------------------------------------------------
        var geometry = new THREE.BufferGeometry();
        var numPoints = 100;
        var positions = new Float32Array(numPoints * 3);

        for (var i = 0; i < numPoints; i++) {
            positions[i * 3] = i;
            positions[i * 3 + 1] = Math.sin(i / 2) * 20;
            positions[i * 3 + 2] = 0;
        }

        geometry.addAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        object = new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({ color: 0xffff00 })
        );
        object.position.set(-50, 0, -200);
        scene1.add(object);

        // ---------------------------------------------------------------------
        // Buffer geometry truncated (DrawRange)
        // ---------------------------------------------------------------------
        var geometry = new THREE.BufferGeometry();
        var numElements = 6;
        var outOfRange = 3;

        var positions = new Float32Array((numElements + outOfRange) * 3);
        var colors = new Float32Array((numElements + outOfRange) * 3);

        positions.set([
            0,
            0,
            0,
            0,
            80,
            0,
            80,
            0,
            0,
            80,
            0,
            0,
            0,
            80,
            0,
            80,
            80,
            0
        ]);

        colors.set([1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1]);

        geometry.addAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        geometry.addAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setDrawRange(0, numElements);

        object = new THREE.Mesh(
            geometry,
            new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                vertexColors: THREE.VertexColors
            })
        );
        object.name = "Custom buffered truncated";
        object.position.set(340, -40, -200);

        scene1.add(object);

        // ---------------------------------------------------------------------
        // Points
        // ---------------------------------------------------------------------
        var numPoints = 100;
        var pointsArray = new Float32Array(numPoints * 3);
        for (var i = 0; i < numPoints; i++) {
            pointsArray[3 * i] = -50 + Math.random() * 100;
            pointsArray[3 * i + 1] = Math.random() * 100;
            pointsArray[3 * i + 2] = -50 + Math.random() * 100;
        }

        var pointsGeo = new THREE.BufferGeometry();
        pointsGeo.addAttribute(
            "position",
            new THREE.BufferAttribute(pointsArray, 3)
        );

        var pointsMaterial = new THREE.PointsMaterial({
            color: 0xffff00,
            size: 5
        });
        var points = new THREE.Points(pointsGeo, pointsMaterial);
        points.name = "Points";
        points.position.set(-200, 0, -200);
        scene1.add(points);

        // ---------------------------------------------------------------------
        // Ortho camera
        // ---------------------------------------------------------------------
        var cameraOrtho = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            0.1,
            10
        );
        scene1.add(cameraOrtho);
        cameraOrtho.name = "OrthographicCamera";

        material = new THREE.MeshLambertMaterial({
            color: 0xffff00,
            side: THREE.DoubleSide
        });

        object = new THREE.Mesh(
            new THREE.CircleGeometry(50, 20, 0, Math.PI * 2),
            material
        );
        object.position.set(200, 0, -400);
        scene1.add(object);

        object = new THREE.Mesh(
            new THREE.RingGeometry(10, 50, 20, 5, 0, Math.PI * 2),
            material
        );
        object.position.set(0, 0, -400);
        scene1.add(object);

        object = new THREE.Mesh(
            new THREE.CylinderGeometry(25, 75, 100, 40, 5),
            material
        );
        object.position.set(-200, 0, -400);
        scene1.add(object);

        // ---------------------------------------------------------------------
        // Big red box hidden just for testing `onlyVisible` option
        // ---------------------------------------------------------------------
        material = new THREE.MeshBasicMaterial({
            color: 0xff0000
        });
        object = new THREE.Mesh(
            new THREE.BoxBufferGeometry(200, 200, 200),
            material
        );
        object.position.set(0, 0, 0);
        object.name = "CubeHidden";
        object.visible = false;
        scene1.add(object);

        // ---------------------------------------------------------------------
        //
        //
        var loader = new THREE.OBJLoader();
        loader.load("models/obj/walt/WaltHead.obj", function(obj) {
            waltHead = obj;
            waltHead.scale.multiplyScalar(1.5);
            waltHead.position.set(400, 0, 0);
            scene1.add(waltHead);
        });

        //

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        container.appendChild(renderer.domElement);

        //

        window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //

    function animate() {
        requestAnimationFrame(animate);

        render();
    }

    function render() {
        var timer = Date.now() * 0.0001;

        camera.position.x = Math.cos(timer) * 800;
        camera.position.z = Math.sin(timer) * 800;

        camera.lookAt(scene1.position);
        renderer.render(scene1, camera);
    }
};
