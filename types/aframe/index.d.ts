// Type definitions for AFRAME 0.7
// Project: https://aframe.io/
// Definitions by: Paul Shannon <https://github.com/devpaul>
//                 Roberto Ritger <https://github.com/bertoritger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Extended tests available at https://github.com/devpaul/aframe-typings.git
 */

/// <reference types="three" />
/// <reference types="tween.js" />

// Globals
declare var AFRAME: AFrame.AFrameGlobal;
declare var hasNativeWebVRImplementation: boolean;

interface NodeSelector {
	querySelector(selectors: 'a-scene'): AFrame.Scene;
	querySelector<T extends AFrame.Entity<any>>(selectors: string): T;
	querySelectorAll(selectors: string): NodeListOf<AFrame.Entity<any> | Element>;
}

interface Document {
	createElement(tagName: string): AFrame.Entity;
}

// Interfaces
declare namespace AFrame {
	interface ObjectMap<T = any> {
		[ key: string ]: T;
	}

	interface AFrameGlobal {
		AEntity: Entity;
		ANode: ANode;
		AScene: Scene;
		components: { [ key: string ]: ComponentDescriptor };
		geometries: { [ key: string ]: GeometryDescriptor };
		primitives: { [ key: string ]: Entity };
		registerComponent(name: string, component: ComponentDefinition): ComponentConstructor;
		registerElement(name: string, element: ANode): void;
		registerGeometry(name: string, geometry: GeometryDefinition): Geometry;
		registerPrimitive(name: string, primitive: PrimitiveDefinition): void;
		registerShader(name: string, shader: any): void;
		registerSystem(name: string, definition: SystemDefinition): void;
		schema: SchemaUtils;
		shaders: { [ key: string ]: ShaderDescriptor };
		systems: { [key: string]: System };
		THREE: typeof THREE;
		TWEEN: typeof TWEEN;
		utils: Utils;
		version: string;
	}

	interface Animation {
		attribute: string;
		begin: string | number;
		delay: number;
		direction: 'alternate' | 'alternateReverse' | 'normal' | 'reverse';
		dur: number;
		easing(): void;
		end: string;
		fill: 'backwards' | 'both' | 'forwards' | 'none';
		from: any; // TODO type
		repeat: number | 'indefinite';
		to: number;
	}

	interface ANode extends HTMLElement {
		// Only public APIs added. Many methods intentionally left out.
		// createdCallback
		// attachedCallback
		// attributeChangedCallback
		closestScene(): Scene;
		closest(selector: string): ANode;
		// detachedCallback
		hasLoaded: boolean;
		load(cb?: () => void, childFilter?: (el: Element) => boolean): void;
		// updateMixins
		registerMixin(id: string): void;
		setAttribute(type: string, newValue: any): void;
		unregisterMixin(id: string): void;
		removeMixinListener(id: string): void;
		attachMixinListener(mixin: HTMLElement): void;
		emit(name: string, detail?: any, bubbles?: boolean): void;
		emitter(name: string, detail?: any, bubbles?: boolean): () => void;
	}

	interface Behavior {
		tick(): void;
	}

	interface Component {
		attrName?: string;
		data?: any;
		dependencies?: string[];
		el: Entity;
		id: string;
		multiple?: boolean;
		name: string;
		schema: Schema;

		init(data?: any): void;
		pause(): void;
		play(): void;
		remove(): void;
		tick?(time: number, timeDelta: number): void;
		update(oldData: any): void;
		updateSchema?(): void;

		extendSchema(update: Schema): void;
		flushToDOM(): void;
	}

	interface ComponentConstructor {
		new (el: Entity, name: string, id: string): Component;
	}

	interface ComponentDefinition {
		dependencies?: string[];
		el?: Entity;
		id?: string;
		multiple?: boolean;
		schema?: Schema;

		init?(data?: any): void;
		pause?(): void;
		play?(): void;
		remove?(): void;
		tick?(time: number, timeDelta: number): void;
		update?(oldData: any): void;
		updateSchema?(): void;

		[ key: string ]: any;
	}

	interface ComponentDescriptor {
		Component: Component;
		dependencies: string[] | null;
		multiple: boolean | null;

		// internal APIs2
		// parse
		// parseAttrValueForCache
		// schema
		// stringify
		// type
		[ key: string ]: any;
	}

	interface Coordinate {
		x: number;
		y: number;
		z: number;
	}

	interface Entity<C = ObjectMap<Component>> extends ANode {
		components: C;
		isPlaying: boolean;
		object3D: THREE.Object3D;
		object3DMap: ObjectMap<THREE.Object3D>;
		sceneEl?: Scene;

		addState(name: string): void;
		flushToDOM(recursive?: boolean): void;
		/**
		 * @deprecated since 0.4.0
		 */
		getComputedAttribute<T = Component>(attr: string): T;
		getDOMAttribute<T = any>(attr: string): T;
		getObject3D(type: string): THREE.Object3D;
		getOrCreateObject3D(type: string, construct: any): THREE.Object3D;
		is(stateName: string): boolean;
		pause(): void;
		play(): void;
		setObject3D(type: string, obj: THREE.Object3D): void;
		removeAttribute(attr: string, property?: string): void;
		removeObject3D(type: string): void;
		removeState(stateName: string): void;

		// getAttribute specific usages
		getAttribute(type: string): any;
		getAttribute<T = Component>(attr: string): T;
		getAttribute(type: 'position' | 'rotation' | 'scale'): Coordinate;

		// setAttribute specific usages
		setAttribute(attr: string, value: any): void;
		setAttribute(attr: string, property: string, componentAttrValue?: any): void;
		setAttribute(type: 'position' | 'rotation' | 'scale', value: Coordinate): void;

		// addEventListener specific usages
		addEventListener<K extends keyof EntityEventMap>(type: K, listener: (event: Event & EntityEventMap[K]) => void, useCapture?: boolean): void;
		addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
	}

	type DetailEvent<D> = Event & { detail: D };

	interface EntityEventMap {
		'child-attached': DetailEvent<{ el: Element | Entity }>;
		'child-detached': DetailEvent<{ el: Element | Entity }>;
		'componentchanged': DetailEvent<{ name: string }>;
		'componentremoved': DetailEvent<{
			name: string,
			id: string,
			newData: any,
			oldData: any
		}>;
		'loaded': EventListener;
		'pause': EventListener;
		'play': EventListener;
		'stateadded': DetailEvent<{ state: string }>;
		'stateremoved': DetailEvent<{ state: string }>;
		'schemachanged': DetailEvent<{ componentName: string }>;
	}

	interface Geometry {
		name: string;
		geometry: THREE.Geometry;
		schema: Schema;
		update(data: object): void;
		[ key: string ]: any;
	}

	interface GeometryDefinition extends ComponentDefinition {
		geometry?: THREE.Geometry;
	}

	interface GeometryDescriptor {
		Geometry: Geometry;
		schema: Schema;
	}

	interface MultiPropertySchema {
		[ key: string ]: SinglePropertySchema<any>;
	}

	interface PrimitiveDefinition {
		defaultComponents?: any; // TODO cleanup type
		deprecated?: boolean;
		mappings?: any; // TODO cleanup type
		transforms?: any; // TODO cleanup type
	}

	type PropertyTypes = 'array' | 'boolean' | 'color' | 'int' | 'number' | 'selector' |
		'selectorAll' | 'src' | 'string' | 'vec2' | 'vec3' | 'vec4';

	type SceneEvents = 'enter-vr' | 'exit-vr' | 'loaded' | 'renderstart';

	interface Scene extends Entity {
		behaviors: Behavior[];
		camera: THREE.Camera;
		canvas: HTMLCanvasElement;
		effect: THREE.VREffect;
		isMobile: boolean;
		object3D: THREE.Scene;
		renderer: THREE.WebGLRenderer;
		renderStarted: boolean;
		systems: ObjectMap<System>;
		time: number;

		enterVR(): Promise<void> | void;
		exitVR(): Promise<void> | void;
		reload(): void;

		addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
		addEventListener(type: SceneEvents, listener: EventListener, useCapture?: boolean): void;
	}

	type Schema = SinglePropertySchema<any> | MultiPropertySchema;

	interface SchemaUtils {
		isSingleProperty(schema: Schema): boolean;
		process(schema: Schema): boolean;
	}

	interface Shader {
		name: string;
		schema: Schema;
	}

	interface ShaderDescriptor {
		Shader: Shader;
		schema: Schema;
	}

	interface SinglePropertySchema<T> {
		type?: PropertyTypes;
		'default'?: T;
		parse?(value: string): T;
		stringify?(value: T): string;
		[ key: string ]: any;
	}

	interface System {
		data: any;
		schema: Schema;
		init(): void;
		pause(): void;
		play(): void;
		tick?(): void;
	}

	interface SystemDefinition {
		schema?: Schema;
		init?(): void;
		pause?(): void;
		play?(): void;
		tick?(): void;
		[ key: string ]: any;
	}

	interface Utils {
		coordinates: {
			isCoordinate(value: string): boolean;
			parse(value: string): Coordinate;
			stringify(coord: Coordinate): string;
		};
		entity: {
			getComponentProperty(entity: Entity, componentName: string, delimiter?: string): any;
			setComponentProperty(entity: Entity, componentName: string, value: any, delimiter?: string): void;
		};
		styleParser: {
			parse(value: string): object;
			stringify(data: object): string;
		};
		deepEqual(a: any, b: any): boolean;
		diff(a: object, b: object): object;
		extend(target: object, ... source: object[]): object;
		extendDeep(target: object, ... source: object[]): object;
	}
}
