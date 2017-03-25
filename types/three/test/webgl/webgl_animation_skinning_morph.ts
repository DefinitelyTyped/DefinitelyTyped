// https://github.com/mrdoob/three.js/blob/master/examples/webgl_sprites.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    // -------

    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var FLOOR = -250;

    var container: HTMLElement;
    var stats: Stats;
    var camera: THREE.PerspectiveCamera;
    var scene: THREE.Scene;
    var renderer: THREE.WebGLRenderer;
    var mesh: THREE.Mesh;
    var helper: THREE.SkeletonHelper;
    var mixer: THREE.AnimationMixer;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var clock = new THREE.Clock();

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    init();
    animate();

    function init() {

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 30, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 2200;

        scene = new THREE.Scene();

        scene.fog = new THREE.Fog( 0xffffff, 2000, 10000 );

        scene.add( camera );

        // GROUND

        var geometry = new THREE.PlaneBufferGeometry( 16000, 16000 );
        var material = new THREE.MeshPhongMaterial( { emissive: 0x888888 } );

        var ground = new THREE.Mesh( geometry, material );
        ground.position.set( 0, FLOOR, 0 );
        ground.rotation.x = -Math.PI/2;
        scene.add( ground );

        ground.receiveShadow = true;


        // LIGHTS

        scene.add( new THREE.HemisphereLight( 0x111111, 0x444444 ) );

        var light = new THREE.DirectionalLight( 0xebf3ff, 1.5 );
        light.position.set( 0, 140, 500 ).multiplyScalar( 1.1 );
        scene.add( light );

        light.castShadow = true;

        light.shadowMapWidth = 1024;
        light.shadowMapHeight = 1024;

        var d = 390;

        light.shadowCameraLeft = -d;
        light.shadowCameraRight = d;
        light.shadowCameraTop = d * 1.5;
        light.shadowCameraBottom = -d;

        light.shadowCameraFar = 3500;
        //light.shadowCameraVisible = true;

        // RENDERER

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setClearColor( scene.fog.color );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        renderer.domElement.style.position = "relative";

        container.appendChild( renderer.domElement );

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        renderer.shadowMap.enabled = true;


        // STATS

        stats = new Stats();
        container.appendChild( stats.dom );

        //

        var loader = new THREE.JSONLoader();
        loader.load( "models/skinned/knight.js", function ( geometry, materials ) {

            createScene( geometry, materials as THREE.MeshPhongMaterial[], 0, FLOOR, -300, 60 )

        } );

        // GUI

        initGUI();

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function createScene( geometry: THREE.Geometry, materials: THREE.MeshPhongMaterial[], x: number, y: number, z: number, s: number ) {

        //ensureLoop( geometry.animation );

        geometry.computeBoundingBox();
        var bb = geometry.boundingBox;

        var path = "textures/cube/Park2/";
        var format = '.jpg';
        var urls = [
            path + 'posx' + format, path + 'negx' + format,
            path + 'posy' + format, path + 'negy' + format,
            path + 'posz' + format, path + 'negz' + format
        ];

        for ( var i = 0; i < materials.length; i ++ ) {

            var m = materials[ i ];
            m.skinning = true;
            m.morphTargets = true;

            m.specular.setHSL( 0, 0, 0.1 );

            m.color.setHSL( 0.6, 0, 0.6 );

            //m.map = map;
            //m.envMap = envMap;
            //m.bumpMap = bumpMap;
            //m.bumpScale = 2;

            //m.combine = THREE.MixOperation;
            //m.reflectivity = 0.75;

        }

        mesh = new THREE.SkinnedMesh( geometry, new THREE.MeshFaceMaterial( materials ) );
        mesh.position.set( x, y - bb.min.y * s, z );
        mesh.scale.set( s, s, s );
        scene.add( mesh );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        helper = new THREE.SkeletonHelper( mesh );
        //helper.material.linewidth = 3;
        helper.visible = false;
        scene.add( helper );


        var clipMorpher = THREE.AnimationClip.CreateFromMorphTargetSequence( 'facialExpressions', (mesh.geometry as THREE.Geometry).morphTargets, 3, true );
        var clipBones = geometry.animations[0];

        mixer = new THREE.AnimationMixer( mesh );
    }

    function initGUI() {

        var API = {
            'show model'    : true,
            'show skeleton' : false
        };

        var gui = new dat.GUI();

        gui.add( API, 'show model' ).onChange( function() { mesh.visible = API[ 'show model' ]; } );

        gui.add( API, 'show skeleton' ).onChange( function() { helper.visible = API[ 'show skeleton' ]; } );

    }

    function onDocumentMouseMove( event: MouseEvent ) {

        mouseX = ( event.clientX - windowHalfX );
        mouseY = ( event.clientY - windowHalfY );

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }

    function render() {

        var delta = 0.75 * clock.getDelta();

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y = THREE.Math.clamp( camera.position.y + ( - mouseY - camera.position.y ) * .05, 0, 1000 );

        camera.lookAt( scene.position );

        if( mixer ) {
            mixer.update( delta );
            helper.update();
        }

        renderer.render( scene, camera );

    }
}