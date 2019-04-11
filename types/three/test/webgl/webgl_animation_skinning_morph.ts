// https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning_morph.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    interface WEBGL {
        isWebGLAvailable(): boolean;

        isWebGL2Available(): boolean;

        getWebGLErrorMessage(): HTMLDivElement;

        getWebGL2ErrorMessage(): HTMLDivElement;

        getErrorMessage(version: 1 | 2): HTMLDivElement;
    }

    var WEBGL: WEBGL;
    // -------

    if (WEBGL.isWebGLAvailable() === false) {
        document.body.appendChild(WEBGL.getWebGLErrorMessage());
    }
    var container: HTMLElement
    var stats: Stats;
    var clock: THREE.Clock;
    var gui: dat.GUI;
    var mixer: THREE.AnimationMixer;
    var actions: { [name: string]: THREE.AnimationAction };
    var activeAction: THREE.AnimationAction;
    var previousAction: THREE.AnimationAction;

    var camera: THREE.PerspectiveCamera;
    var scene: THREE.Scene;
    var renderer: THREE.WebGLRenderer;
    var model: THREE.Scene;
    var face: THREE.Mesh;

    type Emote = 'Jump' | 'Yes' | 'No' | 'Wave' | 'Punch' | 'ThumbsUp';

    var api: { [name in Emote]?: () => void; } & { state: string; } = {state: 'Walking'};

    init();
    animate();

    function init() {
        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 100);
        camera.position.set(-5, 3, 10);
        camera.lookAt(new THREE.Vector3(0, 2, 0));

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xe0e0e0);
        scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

        clock = new THREE.Clock();

        // lights
        var light: THREE.Light = new THREE.HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 20, 0);
        scene.add(light);

        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 20, 10);
        scene.add(light);

        // ground
        var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({
            color: 0x999999,
            depthWrite: false
        }));
        mesh.rotation.x = -Math.PI / 2;
        scene.add(mesh);

        var grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
        (grid.material as THREE.LineBasicMaterial).opacity = 0.2;
        (grid.material as THREE.LineBasicMaterial).transparent = true;
        scene.add(grid);

        // model
        var loader = new THREE.GLTFLoader();
        loader.load('models/gltf/RobotExpressive/RobotExpressive.glb', function (gltf) {
            model = gltf.scene;
            scene.add(model);

            createGUI(model, gltf.animations);
        }, undefined, function (e) {
            console.error(e);
        });

        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.gammaOutput = true;
        renderer.gammaFactor = 2.2;
        container.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);

        // stats
        stats = new Stats();
        container.appendChild(stats.dom);
    }

    function createGUI(model: THREE.Scene, animations: THREE.AnimationClip[]) {
        var states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
        var emotes: Emote[] = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];

        gui = new dat.GUI();

        mixer = new THREE.AnimationMixer(model);

        actions = {};

        for (var i = 0; i < animations.length; i++) {
            var clip = animations[i];
            var action = mixer.clipAction(clip);
            actions[clip.name] = action;

            if (emotes.indexOf(clip.name as Emote) >= 0 || states.indexOf(clip.name) >= 4) {
                action.clampWhenFinished = true;
                action.loop = THREE.LoopOnce;
            }
        }

        // states
        var statesFolder = gui.addFolder('States');

        var clipCtrl = statesFolder.add(api, 'state').options(states);

        clipCtrl.onChange(function () {
            fadeToAction(api.state, 0.5);
        });

        statesFolder.open();

        // emotes
        var emoteFolder = gui.addFolder('Emote');

        function createEmoteCallback(name: Emote) {
            api[name] = function () {
                fadeToAction(name, 0.2);
                mixer.addEventListener('finished', restoreState);
            };

            emoteFolder.add(api, name);
        }

        function restoreState() {
            mixer.removeEventListener('finished', restoreState);

            fadeToAction(api.state, 0.2);
        }

        for (var i = 0; i < emotes.length; i++) {
            createEmoteCallback(emotes[i]);
        }

        emoteFolder.open();

        // expressions
        face = model.getObjectByName('Head_2') as THREE.Mesh;

        var expressions = Object.keys(face.morphTargetDictionary);
        var expressionFolder = gui.addFolder('Expressions');

        for (var i = 0; i < expressions.length; i++) {
            expressionFolder.add(face.morphTargetInfluences, i.toString(), 0, 1, 0.01).name(expressions[i]);
        }

        activeAction = actions['Walking'];
        activeAction.play();

        expressionFolder.open();
    }

    function fadeToAction(name: string, duration: number) {
        previousAction = activeAction;
        activeAction = actions[name];

        if (previousAction !== activeAction) {
            previousAction.fadeOut(duration);
        }

        activeAction
            .reset()
            .setEffectiveTimeScale(1)
            .setEffectiveWeight(1)
            .fadeIn(duration)
            .play();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //
    function animate() {
        var dt = clock.getDelta();
        if (mixer) mixer.update(dt);
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        stats.update();
    }
}
