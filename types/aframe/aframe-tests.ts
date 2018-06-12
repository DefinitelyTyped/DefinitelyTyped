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
const camera = (document.querySelector('a-entity[camera]') as MyEntity).components.camera;
const material = (document.querySelector('a-entity[material]') as MyEntity).components.material;
(document.querySelector('a-entity[sound]') as MyEntity).components.sound.pause();

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

interface TestComponent extends AFrame.Component {
	multiply: (f: number) => number;

	data: {
		myProperty: any[],
		string: string,
		num: number
	};

	system: TestSystem;
}

const Component = AFRAME.registerComponent<TestComponent>('test-component', {
	schema: {
		myProperty: {
			default: [],
			parse() { return [true]; },
		},
		string: { type: 'string' },
		num: 0
	},
	init() {
		this.data.num = 0;
	},
	update() {},
	tick() {},
	remove() {},
	pause() {},
	play() {},

	multiply(this: TestComponent, f: number) {
		// Reference to system because both were registered with the same name.
		return f * this.data.num * this.system.data.counter;
	}
});

// Scene
const scene = document.querySelector('a-scene');
scene.hasLoaded;

// System

interface TestSystem extends AFrame.System {
	data: {
		counter: number;
	};
}

const testSystem: AFrame.SystemDefinition<TestSystem> = {
	schema: {
		counter: 0
	},

	init() {
		this.data.counter = 1;
	}
};

AFRAME.registerSystem('test-component', testSystem);

// Register Custom Geometry

interface TestGeometry extends AFrame.Geometry {
	schema: AFrame.MultiPropertySchema<{
		groupIndex: number;
	}>;
}

AFRAME.registerGeometry<TestGeometry>('a-test-geometry', {
	schema: {
		groupIndex: { default: 0 }
	},
	init(data) {
		this.geometry = new THREE.Geometry();
		const temp = data.groupIndex;
		temp;
	}
});
