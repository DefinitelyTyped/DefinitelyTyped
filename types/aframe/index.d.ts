// Type definitions for AFRAME 0.8
// Project: https://aframe.io/
// Definitions by: Paul Shannon <https://github.com/devpaul>
//                 Roberto Ritger <https://github.com/bertoritger>
//                 Trygve Wastvedt <https://github.com/twastvedt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * Extended tests and examples available at https://github.com/devpaul/aframe-experiments.git
 */

/// <reference types="tween.js" />

import * as three from 'three';
import * as tween from '@tweenjs/tween.js';

export type ThreeLib = typeof three;
export type TweenLib = typeof tween;

export interface ObjectMap<T = any> {
	[key: string]: T;
}

export interface Animation {
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

export interface ANode extends HTMLElement {
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

export interface Behavior {
	tick(): void;
}

export interface Component<T extends object = any, S extends System = System> {
	attrName?: string;
	data: T;
	dependencies?: string[];
	el: Entity;
	id: string;
	multiple?: boolean;
	name: string;
	schema: Schema<T>;
	system: S | undefined;

	init(data?: T): void;
	pause(): void;
	play(): void;
	remove(): void;
	tick?(time: number, timeDelta: number): void;
	update(oldData: T): void;
	updateSchema?(): void;

	extendSchema(update: Schema): void;
	flushToDOM(): void;
}

export interface ComponentConstructor<T extends object> {
	new (el: Entity, attrValue: string, id: string): T & Component;
	prototype: T & {
		name: string;
		system: System;
		play(): void;
		pause(): void;
	};
}

export interface ComponentDescriptor<T extends Component = Component> {
	Component: ComponentConstructor<T>;
	dependencies: string[] | undefined;
	multiple: boolean | undefined;

	// internal APIs2
	// parse
	// parseAttrValueForCache
	// schema
	// stringify
	// type
}

export interface Coordinate {
	x: number;
	y: number;
	z: number;
}

export interface DefaultComponents {
	position: Component<Coordinate>;
	rotation: Component<Coordinate>;
	scale: Component<Coordinate>;
}

export interface Entity<C = ObjectMap<Component>> extends ANode {
	components: C & DefaultComponents;
	isPlaying: boolean;
	object3D: THREE.Object3D;
	object3DMap: ObjectMap<THREE.Object3D>;
	sceneEl?: Scene;

	addState(name: string): void;
	flushToDOM(recursive?: boolean): void;
	/**
	 * @deprecated since 0.4.0
	 */
	getComputedAttribute(attr: string): Component;
	getDOMAttribute(attr: string): any;
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
	getAttribute(type: 'position' | 'rotation' | 'scale'): Coordinate;

	// setAttribute specific usages
	setAttribute(attr: string, value: any): void;
	setAttribute(attr: string, property: string, componentAttrValue?: any): void;
	setAttribute(type: 'position' | 'rotation' | 'scale', value: Coordinate): void;

	// addEventListener specific usages
	addEventListener<K extends keyof EntityEventMap>(
		type: K,
		listener: (event: Event & EntityEventMap[K]) => void,
		useCapture?: boolean
	): void;
	addEventListener(
		type: string,
		listener: EventListenerOrEventListenerObject,
		useCapture?: boolean
	): void;
}

export type DetailEvent<D> = Event & {
	detail: D;
	target: EventTarget & Entity;
};

export interface EntityEventMap {
	'child-attached': DetailEvent<{ el: Element | Entity }>;
	'child-detached': DetailEvent<{ el: Element | Entity }>;
	componentchanged: DetailEvent<{
		name: string;
		id: string;
	}>;
	componentremoved: DetailEvent<{
		name: string;
		id: string;
		newData: any;
		oldData: any;
	}>;
	loaded: EventListener;
	pause: EventListener;
	play: EventListener;
	stateadded: DetailEvent<{ state: string }>;
	stateremoved: DetailEvent<{ state: string }>;
	schemachanged: DetailEvent<{ componentName: string }>;
}

export interface Geometry<T = any> {
	data: T;
	name: string;
	geometry: THREE.Geometry;
	schema: Schema<any>;

	init(data: any): void;
}

export interface GeometryConstructor<T extends object = object> {
	new (): T & Geometry;
}

export interface GeometryDescriptor<T extends Geometry = Geometry> {
	Geometry: GeometryConstructor<T>;
	schema: Schema;
}

export type MultiPropertySchema<T extends object> = {
	[P in keyof T]: SinglePropertySchema<T[P]> | T[P]
};

export type PropertyTypes =
	| 'array'
	| 'asset'
	| 'audio'
	| 'boolean'
	| 'color'
	| 'int'
	| 'map'
	| 'model'
	| 'number'
	| 'selector'
	| 'selectorAll'
	| 'string'
	| 'vec2'
	| 'vec3'
	| 'vec4';

export type SceneEvents = 'enter-vr' | 'exit-vr' | 'loaded' | 'renderstart';

export interface Scene extends Entity {
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

	addEventListener(
		type: string,
		listener: EventListenerOrEventListenerObject,
		useCapture?: boolean
	): void;
	addEventListener(type: SceneEvents, listener: EventListener, useCapture?: boolean): void;
}

export type Schema<T extends object = object> = SinglePropertySchema<T> | MultiPropertySchema<T>;

export interface SchemaUtils {
	isSingleProperty(schema: Schema): boolean;
	process(schema: Schema): boolean;
}

export interface Shader {
	name: string;
	data: object;
	schema: Schema<this['data']>;
	material: THREE.Material;
	vertexShader: string;
	fragmentShader: string;

	init(data?: this['data']): void;
	tick?(time: number, timeDelta: number): void;
	update(oldData: this['data']): void;
}

export interface ShaderConstructor<T extends object> {
	new (): T;
}

export interface ShaderDescriptor<T extends Shader = Shader> {
	Shader: ShaderConstructor<T>;
	schema: Schema;
}

export interface SinglePropertySchema<T> {
	type?: PropertyTypes;
	default?: T;
	parse?(value: string): T;
	stringify?(value: T): string;
}

export interface System<T extends object = any> {
	data: T;
	schema: Schema<T>;
	init(): void;
	pause(): void;
	play(): void;
	tick?(t: number, dt: number): void;
}

export interface SystemConstructor<T extends object = object> {
	new (scene: Scene): T & System;
}

export interface Utils {
	coordinates: {
		isCoordinate(value: string): boolean;
		parse(value: string): Coordinate;
		stringify(coord: Coordinate): string;
	};
	entity: {
		getComponentProperty(entity: Entity, componentName: string, delimiter?: string): any;
		setComponentProperty(
			entity: Entity,
			componentName: string,
			value: any,
			delimiter?: string
		): void;
	};
	styleParser: {
		parse(value: string): object;
		stringify(data: object): string;
	};
	deepEqual(a: any, b: any): boolean;
	diff(a: object, b: object): object;
	extend(target: object, ...source: object[]): object;
	extendDeep(target: object, ...source: object[]): object;

	throttle(
		tickFunction: () => void,
		minimumInterval: number,
		optionalContext?: {}
	): (t: number, dt: number) => void;
	throttleTick(
		tickFunction: (t: number, dt: number) => void,
		minimumInterval: number,
		optionalContext?: {}
	): (t: number, dt: number) => void;
}

// Definitions
// used as mixins to register functions to create classes (newable functions) in A-Frame
export type ComponentDefinition<T extends object = object> = T & Partial<Component>;
export type GeometryDefinition<T extends object = object, U = any> = T & Partial<Geometry<U>>;
export type NodeDefinition<T extends object = object> = T & Partial<ANode>;
export interface PrimitiveDefinition {
	defaultComponents?: any; // TODO cleanup type
	deprecated?: boolean;
	mappings?: any; // TODO cleanup type
	transforms?: any; // TODO cleanup type
}
export interface MinimalShaderDefinition {
	schema: Shader['schema'];
}
export type ShaderDefinition<T extends object = MinimalShaderDefinition & object> = T &
	Partial<Shader>;
export type SystemDefinition<T extends object = object> = T & Partial<System>;

// root export
export interface AFrame {
	AComponent: Component;
	AEntity: Entity;
	ANode: ANode;
	AScene: Scene;

	components: ObjectMap<ComponentDescriptor>;
	geometries: ObjectMap<GeometryDescriptor>;
	primitives: {
		getMeshMixin(): {
			defaultComponents: { material: object };
			mappings: { [key: string]: any }; // TODO improve any type
		};
		primitives: ObjectMap<Entity>;
	};
	scenes: Scene[];
	schema: SchemaUtils;
	shaders: ObjectMap<ShaderDescriptor>;
	systems: ObjectMap<SystemConstructor>;
	THREE: ThreeLib;
	TWEEN: TweenLib;
	utils: Utils;
	version: string;

	registerComponent<T extends object>(
		name: string,
		component: ComponentDefinition<T>
	): ComponentConstructor<T>;
	registerElement(name: string, element: object): void;
	registerGeometry<T extends object>(
		name: string,
		geometry: GeometryDefinition<T>
	): GeometryConstructor<T>;
	registerPrimitive(name: string, primitive: PrimitiveDefinition): void;
	registerShader<T extends MinimalShaderDefinition & object>(
		name: string,
		shader: ShaderDefinition<T>
	): ShaderConstructor<T>;
	registerSystem<T extends object>(
		name: string,
		definition: SystemDefinition<T>
	): SystemConstructor<T>;
}

// module.exports
export const AComponent: AFrame['AComponent'];
export const AEntity: AFrame['AEntity'];
export const ANode: AFrame['ANode'];
export const AScene: AFrame['AScene'];
export const components: AFrame['components'];
export const geometries: AFrame['geometries'];
export const primitives: AFrame['primitives'];
export const scenes: AFrame['scenes'];
export const schema: AFrame['schema'];
export const shaders: AFrame['shaders'];
export const systems: AFrame['systems'];
export const THREE: AFrame['THREE'];
export const TWEEN: AFrame['TWEEN'];
export const utils: AFrame['utils'];
export const version: AFrame['version'];
export const registerComponent: AFrame['registerComponent'];
export const registerElement: AFrame['registerElement'];
export const registerGeometry: AFrame['registerGeometry'];
export const registerPrimitive: AFrame['registerPrimitive'];
export const registerShader: AFrame['registerShader'];
export const registerSystem: AFrame['registerSystem'];

// global exports
declare global {
	var hasNativeWebVRImplementation: boolean;

	namespace AFRAME {
		const AComponent: AFrame['AComponent'];
		const AEntity: AFrame['AEntity'];
		const ANode: AFrame['ANode'];
		const AScene: AFrame['AScene'];
		const components: AFrame['components'];
		const geometries: AFrame['geometries'];
		const primitives: AFrame['primitives'];
		const scenes: AFrame['scenes'];
		const schema: AFrame['schema'];
		const shaders: AFrame['shaders'];
		const systems: AFrame['systems'];
		const THREE: AFrame['THREE'];
		const TWEEN: AFrame['TWEEN'];
		const utils: AFrame['utils'];
		const version: string;

		const registerComponent: AFrame['registerComponent'];
		const registerElement: AFrame['registerElement'];
		const registerGeometry: AFrame['registerGeometry'];
		const registerPrimitive: AFrame['registerPrimitive'];
		const registerShader: AFrame['registerShader'];
		const registerSystem: AFrame['registerSystem'];
	}

	/**
	 * Custom elements augment document methods to return custom HTML
	 */
	interface Document {
		createElement(tagName: string): Entity;
		querySelector(selectors: 'a-scene'): Scene;
		querySelector(selectors: string): Entity<any>;
		querySelectorAll(selectors: string): NodeListOf<Entity<any> | Element>;
	}

	interface HTMLCollection extends HTMLCollectionBase {
		/**
		 * Retrieves a select object or an object from an options collection.
		 */
		namedItem(name: string): Element | Entity | null;
		item(index: number): Element | Entity;
		[index: number]: Element | Entity;
	}
}
