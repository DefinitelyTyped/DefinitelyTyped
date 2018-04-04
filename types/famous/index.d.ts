// Type definitions for Famous Engine v0.7.1
// Project: http://famous.org/
// Definitions by: Boris Vasilenko <https://github.com/borisvasilenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "famous/core" {
	export class FamousEngine {
		static init(): FamousEngine;
		static createScene(): Scene;
		static getClock(): Clock;
		static getContext(selector: string): Scene;
		
		createScene(): Scene;
		
		static requestUpdate(requester: number): void;
		static requestUpdateOnNextTick(requester: number): void;
	}
	
	export class Scene extends Node {
	}
	
	export class Node {
		static RELATIVE_SIZE: number;
		static ABSOLUTE_SIZE: number;
		static RENDER_SIZE: number;
		static DEFAULT_SIZE: number;
		
		addComponent(component: any): number;
		getComponent(index: number): any;
		getComponents(): any[];
		
		addChild(node?: Node): Node;
		getChildren(): Node[];
		removeChild(node: Node): boolean;
		getParent(): Node;
		
		isMounted(): boolean;
		mount(): void;
		dismount(): void;
		
		show(): Node;
		hide(): Node;
		
		onUpdate(time: number): void;
		requestUpdate(requester: number): void;
		requestUpdateOnNextTick(requester: number): void;
		
		getSizeMode(): number[];
		setSizeMode(x?: string|number, y?: string|number, z?: string|number): Node;
		
		getSize(): number[];
		getRenderSize(): number[];
		
		getAbsoluteSize(): number[];
		setAbsoluteSize(x?: number, y?: number, z?: number): Node;
		
		getDifferentialSize(): number[];
		setDifferentialSize(x?: number, y?: number, z?: number): Node;
		
		getProportionalSize(): number[];
		setProportionalSize(x?: number, y?: number, z?: number): Node;
		
		onSizeChange(x: number, y: number, z: number): void;
		
		getPosition(): number[];
		setPosition(x?: number, y?: number, z?: number): Node;
		
		emit(event: any, payload?: any): void;
		
		isMounted(): boolean;
		isShown(): boolean;
		
		getMountPoint(): number[];
		setMountPoint(x?: number, y?: number, z?: number): Node;
		
		getAlign(): number[];
		setAlign(x?: number, y?: number, z?: number): Node;
		
		setScale(x?: number, y?: number, z?: number): Node;
		
		setOrigin(x?: number, y?: number, z?: number): Node;
		setRotation(x?: number, y?: number, z?: number, w?: number): Node;
		
		addUIEvent(eventName: string): void;
		getLocation(): string;
	}
	
	export class Size {
		static RELATIVE: number;
		static ABSOLUTE: number;
		static RENDER: number;
		static DEFAULT: number;
	}
	
	export class Clock {
		setTimeout(callback: Function, delay?: number): void;
	}
	
	export class Dispatch {
		static dispatchUIEvent(path: string, event: string, payload: any): void;
	}
	
	export class TransformSystem {
		static deregisterTransformAtPath(path: string): void;
	}
	
	export class SizeSystem {
		static deregisterSizeAtPath(path: string): void;
	}
}

declare module "famous/dom-renderables" {
	import { Node } from 'famous/core'
	
	export class DOMElement {
		constructor(node: Node, options?: IDOMElementOptions);
		setContent(content: string): Node;
		onShow(): void;
		onHide(): void;
		on(event: string, listener: (payload?: any) => void): () => void;
		addClass(value: string): DOMElement; 
		removeClass(value: string): DOMElement;
		setAttribute(name: string, value: string): DOMElement;
		setProperty(name: string, value: string): DOMElement;
	}
	
	export interface IDOMElementOptions {
		tagName?: string;
		classes?: string[];
		attributes?: { [attributeName: string]: string };
		properties?: { [attributeName: string]: string };
		id?: string;
		content?: string;
		cutout?: boolean;
	}
}

declare module "famous/components" {
	import { Node } from 'famous/core'
	import { Vec2 } from 'famous/math'
	
	export class Position {
		constructor(node: Node);
		
		set(x: number, y?: number, z?: number, transition?: any, callback?: Function): Position;
		
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Position;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Position;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Position;
		
		isActive(): boolean;
		halt(): Position;
		
		update(): void;
		onUpdate(): void;
	}
	
	export class Transform {
		constructor(node: Node);
		
		translate(): Transform;
		
		clean(): void;
		onUpdate(): void;
	}
	
	export class Size {
		constructor(node: Node);
		
		setAbsolute(x?: number, y?: number, z?: number, options?: any, callback?: Function): void;
	}
	
	export class Scale {
		constructor(node: Node);
		
		set(x: number, y?: number, z?: number, transition?: any, callback?: Function): Scale;
		
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Scale;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Scale;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Scale;
		
		isActive(): boolean;
		halt(): Position;
		
		update(): void;
		onUpdate(): void;
	}
	
	export class Rotation {
		constructor(node: Node);
		
		set(x: number, y?: number, z?: number, transition?: any, callback?: Function): Rotation;
		
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Rotation;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Rotation;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Rotation;
		
		isActive(): boolean;
		halt(): Position;
		
		update(): void;
		onUpdate(): void;
	}
	
	export class Align {
		constructor(node: Node);
		
		set(x: number, y?: number, z?: number, transition?: any, callback?: Function): Align;
		
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Align;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Align;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Align;
		
		isActive(): boolean;
		halt(): Position;
		
		update(): void;
		onUpdate(): void;
	}
	
	export class MountPoint {
		constructor(node: Node);
		
		set(x: number, y?: number, z?: number, transition?: any, callback?: Function): MountPoint;
		
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): MountPoint;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): MountPoint;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): MountPoint;
		
		isActive(): boolean;
		halt(): Position;
		
		update(): void;
		onUpdate(): void;
	}
	
	export class Origin {
		constructor(node: Node);
		
		set(x: number, y?: number, z?: number, transition?: any, callback?: Function): Origin;
		
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Origin;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Origin;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Origin;
		
		isActive(): boolean;
		halt(): Position;
		
		update(): void;
		onUpdate(): void;
	}
	
	export class Opacity {
		constructor(node: Node);

		get(): number;
		set(value: number, transition?: any, callback?: Function): Opacity;
		
		isActive(): boolean;
		halt(): Position;
		
		update(): void;
		onUpdate(): void;
	}
	
	export class GestureHandler {
		constructor(node: Node, events?: IGestureEvent[]);
		onReceive(ev: string, payload: IGesturePayload): void;
		on(ev: string|IGestureEvent, cb: (payload?: IGesturePayload) => void): void;
		triggerGestures(): void;
		trigger(ev: string, payload?: IGesturePayload): void;
	}
	
	export interface IGestureEvent {
		event: string;
		callback: (payload?: IGesturePayload) => void;
	}
	
	export interface IGesturePayload {
		center: Vec2;
		centerDelta: Vec2;
		centerVelocity: Vec2;
		current: number;
		points: number;
		pointers: IGesturePointer[];
		status: string;
		time: number;
	}
	
	export interface IGesturePointer {
		delta: Vec2;
		position: Vec2;
		velocity: Vec2;
	}
}

declare module "famous/dom-renderers/events" {
	export class EventMap {
	}
	export class MouseEvent {
	}
	export class TouchEvent {
	}
}

declare module "famous/math" {
	export class Vec2 {
		x: number;
		y: number;
		constructor(x?: number, y?: number);
		set(x?: number, y?: number): Vec3;
		add(v: Vec2): Vec2;
		subtract(v: Vec2): Vec2;
		scale(s: number): Vec2;
		rotate(theta: number): Vec2;
		dot(v: Vec2): number;
		cross(v: Vec2): Vec2;
		invert(): Vec2;
		map(fn: (eachCoordinate: number) => number): Vec2;
		length(): number;
		copy(v: Vec2): Vec2;
		clear(): Vec2;
		isZero(): boolean;
		toArray(): number[];
		static normalize(v: Vec2, output: Vec2): Vec2;
		static clone(v: Vec2): Vec2;
		static add(v1: Vec2, v2: Vec2, output: Vec2): Vec2;
		static subtract(v1: Vec2, v2: Vec2, output: Vec2): Vec2;
		static scale(v: Vec2, s: Vec2, output: Vec2): Vec2;
		static dot(v1: Vec2, v2: Vec2): number;
		static cross(v1: Vec2, v2: Vec2, output: Vec2): Vec2;
	}
	
	export class Mat33 {
		values: number[];
	}
	
	export class Quaternion {
		w: number;
		x: number;
		y: number;
		z: number;
		toEuler(output: Vec3): Vec3;
		fromEuler(x: number, y: number, z: number): Quaternion;
	}
	
	export class Vec3 {
		x: number;
		y: number;
		z: number;
		constructor(x?: number, y?: number, z?: number);
		set(x?: number, y?: number, z?: number): Vec3;
		add(v: Vec3): Vec3;
		subtract(v: Vec3): Vec3;
		rotateX(theta: number): Vec3;
		rotateY(theta: number): Vec3;
		rotateZ(theta: number): Vec3;
		dot(v: Vec3): number;
		cross(v: Vec3): Vec3;
		scale(s: number): Vec3;
		insert(): Vec3;
		map(fn: (eachCoordinate: number) => number): Vec3;
		length(): number;
		lengthSq(): number;
		copy(v: Vec3): Vec3;
		clear(): Vec3;
		isZero(): boolean;
		toArray(): number[];
		normalize(): Vec3;
		applyRotation(q: Quaternion): Vec3;
		applyMatrix(matrix: Mat33): Vec3;
		static normalize(v: Vec3, output: Vec3): Vec3;
		static applyRotation(v: Vec3, q: Quaternion, output: Vec3): Vec3;
		static clone(v: Vec3): Vec3;
		static add(v1: Vec3, v2: Vec3, output: Vec3): Vec3;
		static subtract(v1: Vec3, v2: Vec3, output: Vec3): Vec3;
		static scale(v: Vec3, s: Vec3, output: Vec3): Vec3;
		static dot(v1: Vec3, v2: Vec3): number;
		static cross(v1: Vec3, v2: Vec3, output: Vec3): Vec3;
		static project(v1: Vec3, v2: Vec3, output: Vec3): Vec3;
	}
}

declare module "famous/physics" {
	import {
		Vec3, 
		Mat33,
		Quaternion 
	} from 'famous/math'
	
	export class PhysicsEngine {
		on(key: string, callback: (payload: any) => void): void;
		off(key: string, callback: (payload: any) => void): void;
		trigger(key: string, payload: any): void;
		
		setOrigin(x: number, y: number, z: number): void;
		setOrientation(w: number, x: number, y: number, z: number): void;
		
		add(...args: any[]): PhysicsEngine;
		remove(...args: any[]): PhysicsEngine;
		addBody(body: any): void;
		addForce(body: any): void;
		addConstraint(body: any): void;
		removeBody(body: any): void;
		removeForce(body: any): void;
		removeConstraint(body: any): void;
		
		update(time: number): void;
		getTransform(body: any): IPhysicsTransform;
	}
	
	export interface IPhysicsTransform {
		position: number[];
		rotation: number[];
	}
	
	export class Particle {
		constructor(options?: IParticleOptions);
		position: Vec3;
		orientation: Quaternion;
		velocity: Vec3;
		momentum: Vec3;
		angularVelocity: Vec3;
		angularMomentum: Vec3;
		mass: number;
		inverseMass: number;
		force: Vec3;
		torque: Vec3;
		restitution: number;
		friction: number;
		inverseInertia: Mat33;
		localInertia: Mat33;
		localInveseInertia: Mat33;
		size: number[];
		restrictions: number;
		collisionMask: number;
		collisionGroup: number;
		type: number;
		on(key: string, callback: (payload: any) => void): void;
		off(key: string, callback: (payload: any) => void): void;
		trigger(key: string, payload: any): void;
		getRestrictions(): string[];
		setRestrictions(transRestrictions: string, rotRestrictions: string): Particle;
		getMass(): number;
		setMass(mass: number): Particle;
		getInverseMass(): number;
		updateLocalInertia(): Particle;
		updateInertia(): Particle;
		getPosition(): Vec3;
		setPosition(x: number, y: number, z: number): Particle;
		getVelocity(): Vec3;
		setVelocity(x: number, y: number, z: number): Particle;
		getMomentum(): Vec3;
		setMomentum(x: number, y: number, z: number): Particle;
		getOrientation(): Quaternion;
		setOrientation(w: number, x: number, y: number, z: number): Particle;
		getAngularVelocity(): Vec3;
		setAngularVelocity(x: number, y: number, z: number): Particle;
		getAngularMomentum(): Vec3;
		setAngularMomentum(x: number, y: number, z: number): Particle;
		getForce(): Vec3;
		setForce(x: number, y: number, z: number): Particle;
		getTorque(): Vec3;
		setTorque(x: number, y: number, z: number): Particle;
		applyForce(force: Vec3): Particle;
		applyTorque(torque: Vec3): Particle;
		applyImpulse(impulse: Vec3): Particle;
		applyAngularImpulse(angularImpulse: Vec3): Particle;
		support(): Vec3;
		updateShape(): void;
	}
	
	export interface IParticleOptions {
		position?: Vec3;
		orientation?: Quaternion;
		mass?: number;
		restitution?: number;
		friction?: number;
		size?: number[];
		velocity?: number;
		restrictions?: number;
		collisionMask?: number;
		collisionGroup?: number;
	}
	
	export class Wall extends Particle {
		constructor(options: IWallOptions);
		normal: Vec3;
		invNormal: Vec3;
		
	}
	
	export interface IWallOptions extends IParticleOptions {
		direction?: number;
	}
	
	export interface IForceOptions {
		targets?: any[];
	}
	
	export class Force {
		constructor(targets?: any[]|any, options?: IForceOptions);
		targets: any[];
		setOptions(options: any): void;
		addTarget(target: any): void;
		removeTarget(target: any): void;
		init(options: any): void;
		update(time?: number, dt?: number): void;
	}
	
	export interface IDragOptions extends IForceOptions {
		type?: (v: number) => number;
		strength?: number;
		max?: number;
	}
	
	export class Drag extends Force {
		static QUADRATIC: (v: number) => number;
		static LINEAR: (v: number) => number;
		type: (v: number) => number;
		strength: number;
		max: number;
		constructor(targets?: any[]|any, options?: IDragOptions);
		init(): void;
		update(): void;	
	}
	
	export interface ISpringOptions extends IForceOptions {
		length?: number;
		type?: (dist: any, rMax: any) => number;
		maxLength?: number;
		stiffness?: number;
		damping?: number;
		period?: number;
		dampingRatio?: number;
		anchor?: Vec3;
	}
	
	export class Spring extends Force {
		static FENE: (dist: any, rMax: any) => number;
		static HOOKE: (dist: any, rMax: any) => number;
		length: number;
		type: (dist: any, rMax: any) => number;
		maxLength: number;
		stiffness: number;
		damping: number;
		period: number;
		dampingRatio: number;
		anchor: Vec3;
		constructor(source?: Particle, targets?: Particle[]|Particle, options?: ISpringOptions);
		init(options?: ISpringOptions): void;
		update(): void;
	}
	
	export interface IRotationalSpringOptions extends IForceOptions {
		max?: number;
		type?: (dist: any, rMax: any) => number;
		stiffness?: number;
		damping?: number;
		period?: number;
		dampingRatio?: number;
		anchor?: Quaternion;
	}
	
	export class RotationalSpring extends Force {
		constructor(source?: Particle, targets?: Particle[]|Particle, options?: IRotationalSpringOptions);
		max: number;
		stiffness: number;
		damping: number;
		period: number;
		dampingRatio: number;
		anchor: Vec3;
	}
	
	export class ConvexBody extends Particle {
	}
	
	export class Box extends ConvexBody {
		constructor(options?: any);
	}
	
	export class Constraint {
	}
	
	export class Angle extends Constraint {
		constructor(a: Particle, b: Particle, options?: any);
	}
}

declare module "famous/transitions" {
	export class Curves {
		static linear: (t: number) => number;
		static easeIn: (t: number) => number;
		static easeOut: (t: number) => number;
		static easeInOut: (t: number) => number;
		static easeOutBounce: (t: number) => number;
		static spring: (t: number) => number;
		static inQuad: (t: number) => number;
		static outQuad: (t: number) => number;
		static inOutQuad: (t: number) => number;
		static inCubic: (t: number) => number;
		static outCubic: (t: number) => number;
		static inOutCubic: (t: number) => number;
		static inQuart: (t: number) => number;
		static outQuart: (t: number) => number;
		static inOutQuart: (t: number) => number;
		static inQuint: (t: number) => number;
		static outQuint: (t: number) => number;
		static inOutQuint: (t: number) => number;
		static inSine: (t: number) => number;
		static outSine: (t: number) => number;
		static inOutSine: (t: number) => number;
		static inExpo: (t: number) => number;
		static outExpo: (t: number) => number;
		static inOutExp: (t: number) => number;
		static inCirc: (t: number) => number;
		static outCirc: (t: number) => number;
		static inOutCirc: (t: number) => number;
		static inElastic: (t: number) => number;
		static outElastic: (t: number) => number;
		static inOutElastic: (t: number) => number;
		static inBounce: (t: number) => number;
		static outBounce: (t: number) => number;
		static inOutBounce: (t: number) => number;
		static flat: (t: number) => number;
	}
}

declare module "famous/utilities" {
	export class CallbackStore {
		on(event: string, callback: (payload: any) => void): void;
		trigger(event: string, payload: any): void;
	}
}