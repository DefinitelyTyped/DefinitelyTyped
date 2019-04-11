// https://github.com/mrdoob/three.js/blob/master/docs/scenes/bones-browser.html

() => {
    var scene: THREE.Scene;
    var camera: THREE.PerspectiveCamera;
    var renderer: THREE.WebGLRenderer;
    var orbit: THREE.OrbitControls;
    var lights: THREE.Light[];
    var mesh: THREE.SkinnedMesh;
    var bones: THREE.Bone[];
    var skeletonHelper: THREE.SkeletonHelper;
    var state = {
        animateBones: false
    };
    function initScene() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
        camera.position.z = 30;
        camera.position.y = 30;
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 1);
        document.body.appendChild(renderer.domElement);
        orbit = new THREE.OrbitControls(camera, renderer.domElement);
        orbit.enableZoom = false;
        lights = [];
        lights[0] = new THREE.PointLight(0xffffff, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(- 100, - 200, - 100);
        scene.add(lights[0]);
        scene.add(lights[1]);
        scene.add(lights[2]);
        window.addEventListener('resize', function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
        initBones();
    }
    function createGeometry(sizing: any) {
        var geometry = new THREE.CylinderBufferGeometry(
            5,                       // radiusTop
            5,                       // radiusBottom
            sizing.height,           // height
            8,                       // radiusSegments
            sizing.segmentCount * 3, // heightSegments
            true                     // openEnded
        );

        var position = geometry.attributes.position as THREE.BufferAttribute;

        var vertex = new THREE.Vector3();

        var skinIndices = [];
        var skinWeights = [];

        for (var i = 0; i < position.count; i++) {
            vertex.fromBufferAttribute(position, i);

            var y = (vertex.y + sizing.halfHeight);

            var skinIndex = Math.floor(y / sizing.segmentHeight);
            var skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

            skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
            skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
        }

        geometry.addAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
        geometry.addAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

        return geometry;
    }
    function createBones(sizing: any) {
        bones = [];
        var prevBone = new THREE.Bone();
        bones.push(prevBone);
        prevBone.position.y = - sizing.halfHeight;
        for (var i = 0; i < sizing.segmentCount; i++) {
            var bone = new THREE.Bone();
            bone.position.y = sizing.segmentHeight;
            bones.push(bone);
            prevBone.add(bone);
            prevBone = bone;
        }
        return bones;
    }
    function createMesh(geometry: THREE.BufferGeometry, bones: THREE.Bone[]) {
        var material = new THREE.MeshPhongMaterial({
            skinning: true,
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        });
        var mesh = new THREE.SkinnedMesh(geometry, material);
        var skeleton = new THREE.Skeleton(bones);
        mesh.add(bones[0]);
        mesh.bind(skeleton);
        skeletonHelper = new THREE.SkeletonHelper(mesh);
        (skeletonHelper.material as THREE.LineBasicMaterial).linewidth = 2;
        scene.add(skeletonHelper);
        return mesh;
    }
    function initBones() {
        var segmentHeight = 8;
        var segmentCount = 4;
        var height = segmentHeight * segmentCount;
        var halfHeight = height * 0.5;
        var sizing = {
            segmentHeight: segmentHeight,
            segmentCount: segmentCount,
            height: height,
            halfHeight: halfHeight
        };
        var geometry = createGeometry(sizing);
        var bones = createBones(sizing);
        mesh = createMesh(geometry, bones);
        mesh.scale.multiplyScalar(1);
        scene.add(mesh);
    }
    function render() {
        requestAnimationFrame(render);
        var time = Date.now() * 0.001;
        //Wiggle the bones
        if (state.animateBones) {
            for (var i = 0; i < mesh.skeleton.bones.length; i++) {
                mesh.skeleton.bones[i].rotation.z = Math.sin(time) * 2 / mesh.skeleton.bones.length;
            }
        }
        renderer.render(scene, camera);
    }
    initScene();
    render();
}
