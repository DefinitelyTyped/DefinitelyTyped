// https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_obj_mtl.html

() => {

			var container: HTMLElement;
			var camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
			var mouseX = 0, mouseY = 0;
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.z = 250;
				// scene
				scene = new THREE.Scene();
				var ambient = new THREE.AmbientLight( 0x444444 );
				scene.add( ambient );
				var directionalLight = new THREE.DirectionalLight( 0xffeedd );
				directionalLight.position.set( 0, 0, 1 ).normalize();
				scene.add( directionalLight );
				// model
				var onProgress = function ( xhr: ProgressEvent ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete) + '% downloaded' );
					}
				};
				var onError = function ( xhr: ErrorEvent ) { };
				THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
				var mtlLoader: THREE.MTLLoader = new THREE.MTLLoader();
				mtlLoader.setPath( 'obj/male02/' );
				mtlLoader.load( 'male02_dds.mtl', function( materials: THREE.MaterialCreator ) {
					materials.preload();
					var objLoader: THREE.OBJLoader = new THREE.OBJLoader();
					objLoader.setMaterials( materials );
					objLoader.setPath( 'obj/male02/' );
					objLoader.load( 'male02.obj', function ( object: THREE.Object3D ) {
						object.position.y = - 95;
						scene.add( object );
					}, onProgress, onError );
				});

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
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

			function onDocumentMouseMove( event: MouseEvent ) {
				mouseX = ( event.clientX - windowHalfX ) / 2;
				mouseY = ( event.clientY - windowHalfY ) / 2;
			}

			//
			function animate() {
				requestAnimationFrame( animate );
				render();
			}

			function render() {
				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				camera.lookAt( scene.position );
				renderer.render( scene, camera );
			}

}
