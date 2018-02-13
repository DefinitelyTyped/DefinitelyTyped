// https://github.com/mrdoob/three.js/blob/master/examples/webgl_camera.html

() => {
    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;

    var container: HTMLElement;
    var stats: Stats;
    var camera: THREE.PerspectiveCamera;
    var scene: THREE.Scene;
    var renderer: THREE.WebGLRenderer;
    var mesh: THREE.Mesh;

    var cameraRig: THREE.Group, activeCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera, activeHelper: THREE.CameraHelper;
    var cameraPerspective: THREE.PerspectiveCamera, cameraOrtho: THREE.OrthographicCamera;
    var cameraPerspectiveHelper: THREE.CameraHelper, cameraOrthoHelper: THREE.CameraHelper;

    init();
    animate();

    function init() {

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        scene = new THREE.Scene();

        //

        camera = new THREE.PerspectiveCamera( 50, 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
        camera.position.z = 2500;

        cameraPerspective = new THREE.PerspectiveCamera( 50, 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT, 150, 1000 );

        cameraPerspectiveHelper = new THREE.CameraHelper( cameraPerspective );
        scene.add( cameraPerspectiveHelper );

        //

        cameraOrtho = new THREE.OrthographicCamera( 0.5 * SCREEN_WIDTH / - 2, 0.5 * SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, 150, 1000 );

        cameraOrthoHelper = new THREE.CameraHelper( cameraOrtho );
        scene.add( cameraOrthoHelper );

        //

        activeCamera = cameraPerspective;
        activeHelper = cameraPerspectiveHelper;


        // counteract different front orientation of cameras vs rig

        cameraOrtho.rotation.y = Math.PI;
        cameraPerspective.rotation.y = Math.PI;

        cameraRig = new THREE.Group();

        cameraRig.add( cameraPerspective );
        cameraRig.add( cameraOrtho );

        scene.add( cameraRig );

        //

        mesh = new THREE.Mesh(
            new THREE.SphereBufferGeometry( 100, 16, 8 ),
            new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } )
        );
        scene.add( mesh );

        var mesh2 = new THREE.Mesh(
            new THREE.SphereBufferGeometry( 50, 16, 8 ),
            new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } )
        );
        mesh2.position.y = 150;
        mesh.add( mesh2 );

        var mesh3 = new THREE.Mesh(
            new THREE.SphereBufferGeometry( 5, 16, 8 ),
            new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } )
        );
        mesh3.position.z = 150;
        cameraRig.add( mesh3 );

        //

        var geometry = new THREE.Geometry();

        for ( var i = 0; i < 10000; i ++ ) {

            var vertex = new THREE.Vector3();
            vertex.x = THREE.Math.randFloatSpread( 2000 );
            vertex.y = THREE.Math.randFloatSpread( 2000 );
            vertex.z = THREE.Math.randFloatSpread( 2000 );

            geometry.vertices.push( vertex );

        }

        var particles = new THREE.Points( geometry, new THREE.PointsMaterial( { color: 0x888888 } ) );
        scene.add( particles );

        //


        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        renderer.domElement.style.position = "relative";
        container.appendChild( renderer.domElement );

        renderer.autoClear = false;

        //

        stats = new Stats();
        container.appendChild( stats.dom );

        //

        window.addEventListener( 'resize', onWindowResize, false );
        document.addEventListener( 'keydown', onKeyDown, false );

    }

    //

    function onKeyDown ( event: KeyboardEvent ) {

        switch( event.keyCode ) {

            case 79: /*O*/

                activeCamera = cameraOrtho;
                activeHelper = cameraOrthoHelper;

                break;

            case 80: /*P*/

                activeCamera = cameraPerspective;
                activeHelper = cameraPerspectiveHelper;

                break;

        }

    }

    //

    function onWindowResize( event: Event ) {

        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;

        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

        camera.aspect = 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();

        cameraPerspective.aspect = 0.5 * SCREEN_WIDTH / SCREEN_HEIGHT;
        cameraPerspective.updateProjectionMatrix();

        cameraOrtho.left   = - 0.5 * SCREEN_WIDTH / 2;
        cameraOrtho.right  =   0.5 * SCREEN_WIDTH / 2;
        cameraOrtho.top    =   SCREEN_HEIGHT / 2;
        cameraOrtho.bottom = - SCREEN_HEIGHT / 2;
        cameraOrtho.updateProjectionMatrix();

    }

    //

    function animate() {

        requestAnimationFrame( animate );

        render();
        stats.update();

    }


    function render() {

        var r = Date.now() * 0.0005;

        mesh.position.x = 700 * Math.cos( r );
        mesh.position.z = 700 * Math.sin( r );
        mesh.position.y = 700 * Math.sin( r );

        mesh.children[ 0 ].position.x = 70 * Math.cos( 2 * r );
        mesh.children[ 0 ].position.z = 70 * Math.sin( r );

        if ( activeCamera === cameraPerspective ) {

            cameraPerspective.fov = 35 + 30 * Math.sin( 0.5 * r );
            cameraPerspective.far = mesh.position.length();
            cameraPerspective.updateProjectionMatrix();

            cameraPerspectiveHelper.update();
            cameraPerspectiveHelper.visible = true;

            cameraOrthoHelper.visible = false;

        } else {

            cameraOrtho.far = mesh.position.length();
            cameraOrtho.updateProjectionMatrix();

            cameraOrthoHelper.update();
            cameraOrthoHelper.visible = true;

            cameraPerspectiveHelper.visible = false;

        }

        cameraRig.lookAt( mesh.position );

        renderer.clear();

        activeHelper.visible = false;

        renderer.setViewport( 0, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT );
        renderer.render( scene, activeCamera );

        activeHelper.visible = true;

        renderer.setViewport( SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2, SCREEN_HEIGHT );
        renderer.render( scene, camera );

    }
}