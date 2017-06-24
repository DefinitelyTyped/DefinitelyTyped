// https://github.com/mrdoob/three.js/blob/master/examples/webgl_custom_attributes.html

() => {
    if (!Detector.webgl) Detector.addGetWebGLMessage();

    var renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, stats: Stats;

    var sphere: THREE.Mesh, uniforms: { amplitude: { type: string; value: number; }; color: { type: string; value: THREE.Color; }; texture: { type: string; value: THREE.Texture; }; };

    var displacement: Float32Array, noise: Float32Array;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 300;

        scene = new THREE.Scene();

        uniforms = {

            amplitude: { type: "f", value: 1.0 },
            color: { type: "c", value: new THREE.Color(0xff2200) },
            texture: { type: "t", value: THREE.ImageUtils.loadTexture("textures/water.jpg") },

        };

        uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE.RepeatWrapping;

        var shaderMaterial = new THREE.ShaderMaterial({

            uniforms: uniforms,
            vertexShader: document.getElementById('vertexshader').textContent,
            fragmentShader: document.getElementById('fragmentshader').textContent

        });


        var radius = 50, segments = 128, rings = 64;

        var geometry = new THREE.SphereBufferGeometry( radius, segments, rings );

        displacement = new Float32Array( geometry.getAttribute('position').count );
        noise = new Float32Array( geometry.getAttribute('position').count );

        for ( var i = 0; i < displacement.length; i ++ ) {

            noise[ i ] = Math.random() * 5;

        }

        geometry.addAttribute( 'displacement', new THREE.BufferAttribute( displacement, 1 ) );

        sphere = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(sphere);

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x050505);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        var container = document.getElementById('container');
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

    function animate() {

        requestAnimationFrame(animate);

        render();
        stats.update();

    }

    function render() {

        var time = Date.now() * 0.01;

        sphere.rotation.y = sphere.rotation.z = 0.01 * time;

        uniforms.amplitude.value = 2.5 * Math.sin(sphere.rotation.y * 0.125);
        uniforms.color.value.offsetHSL(0.0005, 0, 0);

        for ( var i = 0; i < displacement.length; i ++ ) {

            displacement[ i ] = Math.sin( 0.1 * i + time );

            noise[ i ] += 0.5 * ( 0.5 - Math.random() );
            noise[ i ] = THREE.Math.clamp( noise[ i ], -5, 5 );

            displacement[ i ] += noise[ i ];

        }

        ((sphere.geometry as THREE.BufferGeometry).getAttribute('displacement')as THREE.BufferAttribute).needsUpdate = true;

        renderer.render(scene, camera);

    }

}