﻿/// <reference path="../../three.d.ts" />
/// <reference path="../three-tests-setup.ts" />

// https://github.com/mrdoob/three.js/blob/master/examples/webgl_sprites.html

() => {
    // ------- variable definitions that does not exist in the original code. These are for typescript.
    var material: THREE.SpriteMaterial;
    var geometry: THREE.Geometry;
    var dat:any;
    // -------

    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var FLOOR = -250;

    var container,stats;

    var camera, scene;
    var renderer;

    var mesh, helper;

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

        var groundMaterial = new THREE.MeshPhongMaterial( { emissive: 0xbbbbbb } );
        var planeGeometry = new THREE.PlaneGeometry( 16000, 16000 );

        var ground = new THREE.Mesh( planeGeometry, groundMaterial );
        ground.position.set( 0, FLOOR, 0 );
        ground.rotation.x = -Math.PI/2;
        scene.add( ground );

        ground.receiveShadow = true;


        // LIGHTS

        var ambient = new THREE.AmbientLight( 0x222222 );
        scene.add( ambient );


        var light = new THREE.DirectionalLight( 0xebf3ff, 1.6 );
        light.position.set( 0, 140, 500 ).multiplyScalar( 1.1 );
        scene.add( light );

        light.castShadow = true;

        light.shadowMapWidth = 2048;
        light.shadowMapHeight = 2048;

        var d = 390;

        light.shadowCameraLeft = -d * 2;
        light.shadowCameraRight = d * 2;
        light.shadowCameraTop = d * 1.5;
        light.shadowCameraBottom = -d;

        light.shadowCameraFar = 3500;
        //light.shadowCameraVisible = true;

        //

        var light = new THREE.DirectionalLight( 0x497f13, 1 );
        light.position.set( 0, -1, 0 );
        scene.add( light );

        // RENDERER

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        renderer.domElement.style.position = "relative";

        renderer.setClearColor( scene.fog.color, 1 );

        container.appendChild( renderer.domElement );

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        renderer.shadowMapEnabled = true;


        // STATS

        stats = new Stats();
        container.appendChild( stats.domElement );

        //

        var loader = new THREE.JSONLoader();
        loader.load( "models/skinned/knight.js", function ( geometry, materials ) {

            createScene( geometry, materials, 0, FLOOR, -300, 60 )

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

    function ensureLoop( animation ) {

        for ( var i = 0; i < animation.hierarchy.length; i ++ ) {

            var bone = animation.hierarchy[ i ];

            var first = bone.keys[ 0 ];
            var last = bone.keys[ bone.keys.length - 1 ];

            last.pos = first.pos;
            last.rot = first.rot;
            last.scl = first.scl;

        }

    }

    function createScene( geometry, materials, x, y, z, s ) {

        ensureLoop( geometry.animation );

        geometry.computeBoundingBox();
        var bb = geometry.boundingBox;

        var path = "textures/cube/Park2/";
        var format = '.jpg';
        var urls = [
            path + 'posx' + format, path + 'negx' + format,
            path + 'posy' + format, path + 'negy' + format,
            path + 'posz' + format, path + 'negz' + format
        ];


        //var envMap = THREE.ImageUtils.loadTextureCube( urls );

        //var map = THREE.ImageUtils.loadTexture( "textures/UV_Grid_Sm.jpg" );

        //var bumpMap = THREE.ImageUtils.generateDataTexture( 1, 1, new THREE.Color() );
        //var bumpMap = THREE.ImageUtils.loadTexture( "textures/water.jpg" );

        for ( var i = 0; i < materials.length; i ++ ) {

            var m = materials[ i ];
            m.skinning = true;
            m.morphTargets = true;

            m.specular.setHSL( 0, 0, 0.1 );

            m.color.setHSL( 0.6, 0, 0.6 );
            m.ambient.copy( m.color );

            //m.map = map;
            //m.envMap = envMap;
            //m.bumpMap = bumpMap;
            //m.bumpScale = 2;

            //m.combine = THREE.MixOperation;
            //m.reflectivity = 0.75;

            m.wrapAround = true;

        }

        mesh = new THREE.SkinnedMesh( geometry, new THREE.MeshFaceMaterial( materials ) );
        mesh.position.set( x, y - bb.min.y * s, z );
        mesh.scale.set( s, s, s );
        scene.add( mesh );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        helper = new THREE.SkeletonHelper( mesh );
        helper.material.linewidth = 3;
        helper.visible = false;
        scene.add( helper );

        var animation = new THREE.Animation( mesh, geometry.animation );
        animation.play();

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

    function onDocumentMouseMove( event ) {

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

        // update skinning

        THREE.AnimationHandler.update( delta );

        if ( helper !== undefined ) helper.update();

        // update morphs

        if ( mesh ) {

            var time = Date.now() * 0.001;

            // mouth

            mesh.morphTargetInfluences[ 1 ] = ( 1 + Math.sin( 4 * time ) ) / 2;

            // frown ?

            mesh.morphTargetInfluences[ 2 ] = ( 1 + Math.sin( 2 * time ) ) / 2;

            // eyes

            mesh.morphTargetInfluences[ 3 ] = ( 1 + Math.cos( 4 * time ) ) / 2;

        }

        renderer.render( scene, camera );

    }
}