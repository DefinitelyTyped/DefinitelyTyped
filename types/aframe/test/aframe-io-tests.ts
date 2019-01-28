import { Component, Coordinate, Entity, Scene, THREE, ANode } from 'aframe';

/**
 * These tests are examples from https://aframe.io pulled directly from the sample gallery.
 * Types and some formatting have been added, but for the most part they remain unchanged.
 */

// disable checks for things done in the original, JS examples
/* tslint:disable:object-literal-shorthand */
/* tslint:disable:no-var-keyword */
/* tslint:disable:prefer-const */
/* tslint:disable:only-arrow-functions */
/* tslint:disable:one-variable-per-declaration */

///////////////////////////////////////////////////////////////////////////////////////////////////
// 360 picture gallery
// Taken from https://glitch.com/edit/#!/aframe-gallery

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
	schema: {
		on: { type: 'string' },
		target: { type: 'selector' },
		src: { type: 'string' },
		dur: { type: 'number', default: 300 }
	},

	init: function() {
		var data = this.data;
		var el = this.el;

		this.setupFadeAnimation();

		el.addEventListener(data.on, function() {
			// Fade out image.
			data.target.emit('set-image-fade');
			// Wait for fade to complete.
			setTimeout(function() {
				// Set image.
				data.target.setAttribute('material', 'src', data.src);
			}, data.dur);
		});
	},

	/**
	 * Setup fade-in + fade-out.
	 */
	setupFadeAnimation: function() {
		var data = this.data;
		var targetEl = this.data.target;

		// Only set up once.
		if (targetEl.dataset.setImageFadeSetup) {
			return;
		}
		targetEl.dataset.setImageFadeSetup = true;

		// Create animation.
		targetEl.setAttribute('animation__fade', {
			property: 'material.color',
			startEvents: 'set-image-fade',
			dir: 'alternate',
			dur: data.dur,
			from: '#FFF',
			to: '#000'
		});
	}
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// 360 video example
// Taken from https://glitch.com/edit/#!/aframe-360-video-example

AFRAME.registerComponent('arrow-key-rotation', {
	directionX: 0,
	directionY: 0,

	schema: {
		enabled: { default: true },
		dx: { default: 2.0 },
		dy: { default: 2.0 }
	},
	init: function() {
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.directionX = 0;
		this.directionY = 0;
	},
	play: function() {
		window.addEventListener('keydown', this.onKeyDown);
		window.addEventListener('keyup', this.onKeyUp);
	},
	pause: function() {
		window.removeEventListener('keydown', this.onKeyDown);
		window.removeEventListener('keyup', this.onKeyUp);
	},
	onKeyDown: function(evt: KeyboardEvent) {
		switch (evt.keyCode) {
			case 37:
				this.directionX = 1;
				break;
			case 38:
				this.directionY = 1;
				break;
			case 39:
				this.directionX = -1;
				break;
			case 40:
				this.directionY = -1;
				break;
		}
	},
	onKeyUp: function(evt: KeyboardEvent) {
		switch (evt.keyCode) {
			case 37:
				this.directionX = 0;
				break;
			case 38:
				this.directionY = 0;
				break;
			case 39:
				this.directionX = 0;
				break;
			case 40:
				this.directionY = 0;
				break;
		}
	},
	tick: function() {
		if (!this.data.enabled) {
			return;
		}
		var rotation = this.el.getAttribute('rotation');
		if (!rotation) {
			return;
		}
		if (this.directionX || this.directionY) {
			rotation.x += this.data.dx * this.directionY;
			rotation.y += this.data.dy * this.directionX;
			this.el.setAttribute('rotation', rotation);
		}
	}
});

AFRAME.registerComponent('hide-once-playing', {
	schema: { type: 'selector' },
	init: function() {
		this.onPlaying = this.onPlaying.bind(this);
		this.onPause = this.onPause.bind(this);
	},
	play: function() {
		if (this.data) {
			this.data.addEventListener('playing', this.onPlaying);
			this.data.addEventListener('pause', this.onPause);
		}
	},
	pause: function() {
		if (this.data) {
			this.data.removeEventListener('playing', this.onPlaying);
			this.data.removeEventListener('pause', this.onPause);
		}
	},
	onPlaying: function() {
		this.el.setAttribute('visible', false);
	},
	onPause: function() {
		this.el.setAttribute('visible', true);
	}
});

AFRAME.registerComponent('play-on-vrdisplayactivate-or-enter-vr', {
	init: function() {
		this.playVideo = this.playVideo.bind(this);
		this.playVideoNextTick = this.playVideoNextTick.bind(this);
	},
	play: function() {
		window.addEventListener('vrdisplayactivate', this.playVideo);
		this.el.sceneEl!.addEventListener('enter-vr', this.playVideoNextTick);
	},
	pause: function() {
		this.el.sceneEl!.removeEventListener('enter-vr', this.playVideoNextTick);
		window.removeEventListener('vrdisplayactivate', this.playVideo);
	},
	playVideoNextTick: function() {
		setTimeout(this.playVideo);
	},
	playVideo: function() {
		// TODO improve type
		var video = (this.el as Entity<any>).components.material.material.map.image;
		if (!video) {
			return;
		}
		video.play();
	}
});

AFRAME.registerComponent('play-on-window-click', {
	init: function() {
		this.onClick = this.onClick.bind(this);
	},
	play: function() {
		window.addEventListener('click', this.onClick);
	},
	pause: function() {
		window.removeEventListener('click', this.onClick);
	},
	onClick: function() {
		var video = (this.el as Entity<any>).components.material.material.map.image;
		if (!video) {
			return;
		}
		video.play();
	}
});

AFRAME.registerComponent('toggle-play-on-window-click', {
	init: function() {
		this.onClick = this.onClick.bind(this);
	},
	play: function() {
		window.addEventListener('click', this.onClick);
	},
	pause: function() {
		window.removeEventListener('click', this.onClick);
	},
	onClick: function() {
		var video = (this.el as Entity<any>).components.material.material.map.image;
		if (!video) {
			return;
		}
		video.paused ? video.play() : video.pause();
	}
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Animation
// Taken from https://github.com/processprocess/lazerGlazer_Viz

interface Appender extends HTMLElement {
	// append is part of living standard HTML
	append(n: Node): void;
}
let scene = document.querySelector('a-scene') as Scene & Appender;
let sky = document.querySelector('a-sky');
let objectContainer = document.querySelector('#object-container');

// random num generator
function getRandomNumber(x: number, y: number) {
	return Math.floor(Math.random() * x + y);
}

// get random hex color
function getRandomColor() {
	let letters = '0123456789abcdef';
	let randomColor = '';
	for (let i = 0; i < 6; i++) {
		randomColor += letters[Math.floor(Math.random() * 16)];
	}
	return randomColor;
}

// set sky values
sky.setAttribute('color', `#${getRandomColor()}`);
sky.setAttribute(
	'animation__color',
	`property: color; dir: alternate; dur: 2000; easing: easeInOutSine; loop: true; to: #${getRandomColor()}`
);

// change this value for more or less rings
let totalRingElements = 10;

function generateAllElements() {
	for (let a = 0; a < totalRingElements; a++) {
		// element params
		let totalCircleElements = getRandomNumber(10, 3);
		let elementScale = getRandomNumber(3, 1);
		let scaleDuration = getRandomNumber(3000, 1000);

		// path params
		let pathValOne = getRandomNumber(21, -10);
		let pathValTwo = getRandomNumber(11, -20);
		let pathDuration = getRandomNumber(6000, 5000);

		for (let i = 1; i <= totalCircleElements; i++) {
			let currentRotation = (360 / totalCircleElements) * i;
			let rotateContainer = document.createElement('a-entity');
			rotateContainer.setAttribute('rotation', `0 0 ${currentRotation}`);

			// generate circle element and set params
			let circleElementContainer = document.createElement('a-entity');
			circleElementContainer.setAttribute('position', `0 1 0`);
			let circleElement = document.createElement('a-entity');
			circleElement.setAttribute('class', `circleElement`);
			circleElement.setAttribute('scale', `${elementScale} ${elementScale} ${elementScale}`);
			circleElement.setAttribute(
				'material',
				`color:#${getRandomColor()}; metalness: 0; roughness: 0`
			);
			circleElement.setAttribute('geometry', `primitive: sphere; radius: 1.5`);
			circleElement.setAttribute(
				'animation__yoyo',
				`property: scale; dir: alternate; dur: ${scaleDuration}; easing: easeInOutSine; loop: true; to: 0 0 0`
			);
			circleElementContainer.appendChild(circleElement);
			rotateContainer.appendChild(circleElementContainer);

			// generate path and apply it
			let track1: Appender = document.createElement('a-curve') as any;
			track1.setAttribute('class', `track${a}`);
			scene.append(track1);
			let point1 = document.createElement('a-curve-point');
			point1.setAttribute('position', '0 0 0');
			track1.append(point1);
			let point2 = document.createElement('a-curve-point');
			point2.setAttribute('position', `${pathValOne} ${pathValTwo} ${pathValOne}`);
			track1.append(point2);
			let point3 = document.createElement('a-curve-point');
			point3.setAttribute('position', `${pathValTwo} ${pathValOne} ${pathValTwo}`);
			track1.append(point3);
			let point4 = document.createElement('a-curve-point');
			point4.setAttribute('position', '0 0 0');
			track1.append(point4);
			circleElement.setAttribute(
				`alongpath`,
				`curve: .track${a}; dur: ${pathDuration}; loop: true`
			);

			// append element to main container
			objectContainer.appendChild(rotateContainer);
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Audio Visualization
// Taken from https://github.com/ngokevin/kframe/tree/b78fb6a17d39556fcf61d00f5afb8b835651e473/components/audioanalyser
/**
 * Scale children based on audio frequency levels.
 */
AFRAME.registerComponent('audioanalyser-levels-scale', {
	schema: {
		analyserEl: { type: 'selector' },
		max: { default: 20 },
		multiplier: { default: 100 }
	},

	tick: function(time) {
		var analyserEl;
		var children;
		var data = this.data;
		var levels;

		analyserEl = data.analyserEl || this.el;
		levels = analyserEl.components.audioanalyser.levels;
		if (!levels) {
			return;
		}

		children = this.el.children;
		for (var i = 0; i < children.length; i++) {
			(children[i] as ANode).setAttribute('scale', {
				x: 1,
				y: Math.min(data.max, Math.max(levels[i] * data.multiplier, 0.05)),
				z: 1
			});
		}
	}
});

AFRAME.registerComponent('audioanalyser-volume-bind', {
	schema: {
		analyserEl: { type: 'selector' },
		component: { type: 'string' },
		property: { type: 'string' },
		max: { type: 'number' },
		multiplier: { type: 'number' }
	},

	tick: function() {
		var analyserComponent;
		var data = this.data;
		var el = this.el;
		var value;

		analyserComponent = data.analyserEl.components.audioanalyser;
		if (!analyserComponent.analyser) {
			return;
		}

		value = Math.min(data.max, analyserComponent.volume * data.multiplier);
		el.setAttribute(data.component, data.property, value);
	}
});

AFRAME.registerComponent('audioanalyser-volume-scale', {
	schema: {
		analyserEl: { type: 'selector' },
		multiplier: { type: 'number', default: 1 }
	},

	tick: function() {
		var analyserEl = this.data.analyserEl || this.el;
		var analyserComponent;
		var el = this.el;
		var volume;

		analyserComponent = analyserEl.components.audioanalyser;
		if (!analyserComponent.analyser) {
			return;
		}

		volume = analyserComponent.volume * this.data.multiplier;
		el.setAttribute('scale', {
			x: volume,
			y: volume,
			z: volume
		});
	}
});

var perlin = ImprovedNoise();

var RINGCOUNT = 160;
var SEGMENTS = 512;

interface AnalyserComponent extends Component {
	analyser: any;
	volume: number;
	waveform: number[];
}

/**
 * Generate rings (THREE.Line) and transform them using audioanalyser waveform data.
 * Adapted from https://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/
 */
AFRAME.registerComponent('audioanalyser-waveform', {
	dependencies: ['audioanalyser'],

	schema: {
		maxHeight: { default: 0.2 },
		multiplier: { default: 0.01 },
		radius: { default: 1 }
	},

	init: function(this: any /* TODO improve types */) {
		this.colors = [];
		this.geometry;
		this.levels = [];
		this.noisePos = 0;
		this.rings = [];
	},

	update: function(this: any /* TODO improve types */) {
		var data = this.data;
		var el = this.el;
		var i;
		var lineMesh;
		var loopShape;
		var material;
		var scale;

		// Create ring geometries.
		loopShape = new THREE.Shape();
		loopShape.absarc(0, 0, data.radius, 0, Math.PI * 2, false);
		this.geometry = loopShape.createPointsGeometry(SEGMENTS / 2);
		this.geometry.dynamic = true;

		// Create container object.
		el.setObject3D('waveformContainer', new THREE.Object3D());

		// Create rings.
		scale = 1;
		for (i = 0; i < RINGCOUNT; i++) {
			material = new THREE.LineBasicMaterial({
				color: 0xffffff,
				linewidth: 1,
				opacity: 0.7,
				blending: THREE.AdditiveBlending,
				depthTest: true,
				transparent: true
			});
			lineMesh = new THREE.Line(this.geometry, material);

			scale *= 1.05;
			lineMesh.scale.x = scale;
			lineMesh.scale.y = scale;
			el.getObject3D('waveformContainer').add(lineMesh);

			this.rings.push(lineMesh);
			this.levels.push(0);
			this.colors.push(0);
		}
	},

	tick: function(this: any /* TODO improve types */) {
		var VOL_SENS;
		var analyserComponent: AnalyserComponent;
		var colors = this.colors;
		var data = this.data;
		var el = this.el;
		var levels = this.levels;
		var rings = this.rings;

		analyserComponent = el.components.audioanalyser;
		if (!analyserComponent.analyser) {
			return;
		}

		VOL_SENS = 2;
		levels.push((analyserComponent.volume / 256) * VOL_SENS); // 256 is max level.
		levels.shift(1);

		// Add a new color onto the list.
		this.noisePos += 0.005;
		colors.push(Math.abs(perlin.noise(this.noisePos, 0, 0)));
		colors.shift(1);

		// Write current waveform into all rings.
		this.geometry.vertices.forEach(function(vertex: { z: number }, index: number) {
			vertex.z = Math.min(
				analyserComponent.waveform[index] * data.multiplier,
				data.maxHeight
			);
		});

		// Link up last segment.
		this.geometry.vertices[this.geometry.vertices.length - 1].z = this.geometry.vertices[0].z;
		this.geometry.verticesNeedUpdate = true;

		rings.forEach(function transformRing(ring: THREE.Line, index: number) {
			var normLevel;
			normLevel = levels[RINGCOUNT - index - 1] + 0.01; // Avoid scaling by 0.
			const lineMaterial = ring.material as THREE.LineBasicMaterial;
			lineMaterial.color.setHSL(colors[index], 1, normLevel);
			lineMaterial.linewidth = normLevel * 3;
			lineMaterial.opacity = normLevel;
			ring.scale.z = normLevel;
		});
	},

	remove: function() {
		this.el.removeObject3D('waveformContainer');
	}
});

/**
 * http://mrl.nyu.edu/~perlin/noise/
 */
function ImprovedNoise() {
	var p = [
		151,
		160,
		137,
		91,
		90,
		15,
		131,
		13,
		201,
		95,
		96,
		53,
		194,
		233,
		7,
		225,
		140,
		36,
		103,
		30,
		69,
		142,
		8,
		99,
		37,
		240,
		21,
		10,
		23,
		190,
		6,
		148,
		247,
		120,
		234,
		75,
		0,
		26,
		197,
		62,
		94,
		252,
		219,
		203,
		117,
		35,
		11,
		32,
		57,
		177,
		33,
		88,
		237,
		149,
		56,
		87,
		174,
		20,
		125,
		136,
		171,
		168,
		68,
		175,
		74,
		165,
		71,
		134,
		139,
		48,
		27,
		166,
		77,
		146,
		158,
		231,
		83,
		111,
		229,
		122,
		60,
		211,
		133,
		230,
		220,
		105,
		92,
		41,
		55,
		46,
		245,
		40,
		244,
		102,
		143,
		54,
		65,
		25,
		63,
		161,
		1,
		216,
		80,
		73,
		209,
		76,
		132,
		187,
		208,
		89,
		18,
		169,
		200,
		196,
		135,
		130,
		116,
		188,
		159,
		86,
		164,
		100,
		109,
		198,
		173,
		186,
		3,
		64,
		52,
		217,
		226,
		250,
		124,
		123,
		5,
		202,
		38,
		147,
		118,
		126,
		255,
		82,
		85,
		212,
		207,
		206,
		59,
		227,
		47,
		16,
		58,
		17,
		182,
		189,
		28,
		42,
		223,
		183,
		170,
		213,
		119,
		248,
		152,
		2,
		44,
		154,
		163,
		70,
		221,
		153,
		101,
		155,
		167,
		43,
		172,
		9,
		129,
		22,
		39,
		253,
		19,
		98,
		108,
		110,
		79,
		113,
		224,
		232,
		178,
		185,
		112,
		104,
		218,
		246,
		97,
		228,
		251,
		34,
		242,
		193,
		238,
		210,
		144,
		12,
		191,
		179,
		162,
		241,
		81,
		51,
		145,
		235,
		249,
		14,
		239,
		107,
		49,
		192,
		214,
		31,
		181,
		199,
		106,
		157,
		184,
		84,
		204,
		176,
		115,
		121,
		50,
		45,
		127,
		4,
		150,
		254,
		138,
		236,
		205,
		93,
		222,
		114,
		67,
		29,
		24,
		72,
		243,
		141,
		128,
		195,
		78,
		66,
		215,
		61,
		156,
		180
	];
	for (var i = 0; i < 256; i++) {
		p[256 + i] = p[i];
	}
	function fade(t: number) {
		return t * t * t * (t * (t * 6 - 15) + 10);
	}
	function lerp(t: number, a: number, b: number) {
		return a + t * (b - a);
	}
	function grad(hash: number, x: number, y: number, z: number) {
		var h = hash & 15;
		var u = h < 8 ? x : y,
			v = h < 4 ? y : h === 12 || h === 14 ? x : z;
		return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
	}
	return {
		noise: function(x: number, y: number, z: number) {
			var floorX = ~~x,
				floorY = ~~y,
				floorZ = ~~z;
			var X = floorX & 255,
				Y = floorY & 255,
				Z = floorZ & 255;
			x -= floorX;
			y -= floorY;
			z -= floorZ;
			var xMinus1 = x - 1,
				yMinus1 = y - 1,
				zMinus1 = z - 1;
			var u = fade(x),
				v = fade(y),
				w = fade(z);
			var A = p[X] + Y,
				AA = p[A] + Z,
				AB = p[A + 1] + Z,
				B = p[X + 1] + Y,
				BA = p[B] + Z,
				BB = p[B + 1] + Z;
			return lerp(
				w,
				lerp(
					v,
					lerp(u, grad(p[AA], x, y, z), grad(p[BA], xMinus1, y, z)),
					lerp(u, grad(p[AB], x, yMinus1, z), grad(p[BB], xMinus1, yMinus1, z))
				),
				lerp(
					v,
					lerp(u, grad(p[AA + 1], x, y, zMinus1), grad(p[BA + 1], xMinus1, y, z - 1)),
					lerp(
						u,
						grad(p[AB + 1], x, yMinus1, zMinus1),
						grad(p[BB + 1], xMinus1, yMinus1, zMinus1)
					)
				)
			);
		}
	};
}

AFRAME.registerComponent('color-on-beat', {
	schema: {
		analyserEl: { type: 'selector' }
	},

	init: function() {
		var analyserEl = this.data.analyserEl || this.el;
		var el = this.el;

		analyserEl.addEventListener('audioanalyser-beat', function() {
			el.setAttribute(
				'material',
				'color',
				'#' + new THREE.Color(Math.random(), Math.random(), Math.random()).getHexString()
			);
		});
	}
});

AFRAME.registerComponent('remove-on-event', {
	schema: {
		el: { type: 'selector' },
		event: { type: 'string' }
	},

	init: function() {
		this._removeEntity = this._removeEntity.bind(this);
	},

	update: function() {
		var data = this.data;
		var el = data.el || this.el;
		this.removeEventListener();
		el.addEventListener(data.event, this._removeEntity);
	},

	remove: function() {
		this.removeEventListener();
	},

	removeEventListener: function() {
		var data = this.data;
		var el = this.el;
		el.removeEventListener(data.event, this._removeEntity);
	},

	_removeEntity: function() {
		var el = this.el;
		if ((el as any).parentEl) {
			(el as any).parentEl.removeChild(el);
		}
		if (el.parentNode) {
			el.parentNode.removeChild(el);
		}
	}
});

/**
 * Create expanding ring on audioanalyser beat.
 */
AFRAME.registerComponent('ring-on-beat', {
	schema: {
		analyserEl: { type: 'selector' }
	},

	init: function(this: any) {
		var analyserEl = this.data.analyserEl || this.el;
		var el = this.el;
		var rings: Entity[] = (this.rings = []);

		analyserEl.addEventListener('audioanalyser-beat', function() {
			var ringEl = document.createElement('a-ring');
			ringEl.setAttribute('material', 'opacity', '0.6');
			ringEl.setAttribute('position', '0 0.1 0');
			ringEl.setAttribute('rotation', '-90 0 0');
			el.appendChild(ringEl);

			ringEl.addEventListener('loaded', function() {
				rings.push(ringEl);
				setTimeout(function() {
					el.removeChild(ringEl);
					rings.splice(rings.indexOf(ringEl), 1);
				}, 2000);
			});
		});
	},

	/**
	 * Expand ring radii.
	 */
	tick: function(this: any) {
		this.rings.forEach(function(ringEl: Entity) {
			var scale = ringEl.getComputedAttribute('scale') as Component & Coordinate;
			ringEl.setAttribute('scale', {
				x: scale.x * 1.06 + 0.05,
				y: scale.y * 1.06 + 0.05,
				z: scale.z
			});
		});
	}
});

/*
 * Change color at different levels of scale.
 */
AFRAME.registerComponent('scale-y-color', {
	schema: {
		from: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
		to: { type: 'vec3', default: { x: 255, y: 255, z: 255 } },
		maxScale: { default: 20 }
	},

	tick: function(this: any, time: number) {
		var data = this.data;
		var el = this.el;

		if (time - this.time < 50) {
			return;
		}
		this.time = time;

		var scaleY = el.getComputedAttribute('scale').y;
		var percentage = scaleY / data.maxScale;
		el.setAttribute(
			'material',
			'color',
			'#' +
				rgbToHex(
					(data.to.x - data.from.x) * percentage,
					(data.to.y - data.from.y) * percentage,
					(data.to.z - data.from.z) * percentage
				)
		);
	}
});

function rgbToHex(r: number, g: number, b: number) {
	var bin = (r << 16) | (g << 8) | b;
	return (function(h) {
		return new Array(7 - h.length).join('0') + h;
	})(bin.toString(16).toUpperCase());
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Lights
// Taken from https://github.com/aframevr/aframe/blob/master/examples/showcase/dynamic-lights/index.html

AFRAME.registerComponent('random-material', {
	init: function() {
		this.el.setAttribute('material', {
			color: this.getRandomColor(),
			metalness: Math.random(),
			roughness: Math.random()
		});
	},
	getRandomColor: function() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
});

AFRAME.registerComponent('random-torus-knot', {
	init: function() {
		this.el.setAttribute('geometry', {
			primitive: 'torusKnot',
			radius: Math.random() * 10,
			radiusTubular: Math.random() * 0.75,
			p: Math.round(Math.random() * 10),
			q: Math.round(Math.random() * 10)
		});
	}
});
