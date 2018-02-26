// Global
const threeCamera = new AFRAME.THREE.Camera();
AFRAME.TWEEN.Easing;

// Entity
const entity = document.createElement('a-entity');
entity.emit('rotate');
entity.emit('collide', { target: entity });
entity.emit('sink', null, false);

const position = entity.getAttribute('position');
position.x;
position.y;
position.z;
entity.setAttribute('material', 'color', 'red');

entity.components['geometry'].data;

type MyEntity = AFrame.Entity<{
	camera: THREE.Camera;
	material: THREE.Material;
	sound: { pause(): void };
}>;
const camera = document.querySelector<MyEntity>('a-entity[camera]').components.camera;
const material = document.querySelector<MyEntity>('a-entity[material]').components.material;
document.querySelector<MyEntity>('a-entity[sound]').components.sound.pause();

entity.getDOMAttribute('geometry').primitive;

entity.setAttribute('light', {
	type: 'spot',
	distance: 30,
	intensity: 2.0
});

entity.addEventListener('child-detached', (event) => {
	event.detail;
});

// Components
const Component = AFRAME.registerComponent('test', {});

// Scene
const scene = document.querySelector('a-scene');
scene.hasLoaded;

// System
const system = scene.systems['systemName'];

// Register Custom Geometry
AFRAME.registerGeometry('a-test-geometry', {
	schema: {
		groupIndex: { default: 0 }
	},
	init(data) {
		this.geometry = new THREE.Geometry();
	}
});
