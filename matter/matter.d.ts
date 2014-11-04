// Type definitions for matter-0.8.0.js
// Project: http://brm.io/matter-js/
// Definitions by: soywiz <https://github.com/soywiz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Matter {
	interface Vector2 { x: number; y: number; }
	interface Bounds { min: Vector2; max: Vector2; }
	interface Vector2Angle extends Vector2 { angle: number; }
	interface Vertex extends Vector2 { index?: number; body?: Body; }
	interface MatterObject { type: string; } // Body, Constraint, Composite, MouseConstraint

	class Body implements MatterObject {
		id: number;
		type: string;
		label: string;
		angle: number;
		vertices: Vertex[];
		position: Vector2;
		force: Vector2;
		torque: number;
		positionImpulse: Vector2;
		constraintImpulse: Vector2Angle;
		speed: number;
		angularSpeed: number;
		velocity: Vector2;
		angularVelocity: number;
		isStatic: boolean;
		isSleeping: boolean;
		motion: number;
		sleepThreshold: number;
		density: number;
		restitution: number;
		friction: number;
		frictionAir: number;
		groupId: number;
		slop: number;
		timeScale: number;
		render: {
			visible: boolean;
			sprite: { xScale: number; yScale: number; };
			lineWidth: number;
		};

		static create(options?: any): Body;
		static nextGroupId(): number;
		static setStatic(body: Body, isStatic: boolean): void;
		static resetForcesAll(bodies: Body[]): void;
		static applyGravityAll(bodies: Body[], gravity: Vector2): void;
		static updateAll(bodies: Body[], deltaTime: number, timeScale: number, correction: number, worldBounds: number): void;
		static update(body: Body, deltaTime: number, timeScale: number, correction: number): void;
		static applyForce(body: Body, position: Vector2, force: Vector2): void;
		static translate(body: Body, translation: Vector2): void;
		static rotate(body: Body, angle: number): void;
		static scale(body: Body, scaleX: number, scaleY: number, point: Vector2): void;
	}

	class Composite implements MatterObject {
		id: number;
		type: string;
		parent: Composite;
		isModified: boolean;
		bodies: Body[];
		constraints: Constraint[];
		composites: Composite[];
		label: string;

		static create(options?: any): Composite;

		/**
		 * Sets the composite's `isModified` flag. 
		 * If `updateParents` is true, all parents will be set (default: false).
		 * If `updateChildren` is true, all children will be set (default: false).
		 */
		static setModified(composite: Composite, isModified: boolean, updateParents: boolean, updateChildren: boolean);
		static add(composite: Composite, object: MatterObject): Composite;
		static remove(composite: Composite, object: MatterObject, deep: boolean): Composite;

		static addComposite(compositeA: Composite, compositeB: Composite): Composite;
		static removeComposite(compositeA: Composite, compositeB: Composite, deep: boolean): Composite;
		static removeCompositeAt(composite: Composite, position: number): Composite;

		static addBody(composite: Composite, body: Body): Composite;
		static removeBody(composite: Composite, body: Body, deep: boolean): Composite;
		static removeBodyAt(composite: Composite, position: number): Composite;

		static addConstraint(composite: Composite, constraint: Constraint): Composite;
		static removeConstraint(composite: Composite, constraint: Constraint, deep: boolean): Composite;
		static removeConstraintAt(composite: Composite, position: number): Composite;

		static clear(composite: Composite, keepStatic: boolean, deep: boolean): Composite;
		static allBodies(composite: Composite): Body[];
		static allConstraints(composite: Composite): Constraint[];
		static allComposities(composite: Composite): Composite[];
		static get(composite: Composite, id: number, type: string): MatterObject;
		static get(composite: Composite, id: number, type: "body"): Body;
		static get(composite: Composite, id: number, type: "constraint"): Constraint;
		static get(composite: Composite, id: number, type: "composite"): Composite;
		static move(compositeA: Composite, objects: MatterObject[], compositeB: Composite): Composite;
		static rebase(composite: Composite): Composite;
	}

	class World extends Composite {
		label: string;
		gravity: Vector2;
		bounds: Bounds;

		static create(options?: any): World;

		static add(composite: World, object: MatterObject): World;
		static add(composite: World, objects: MatterObject[]): World;
		static remove(composite: World, object: MatterObject, deep: boolean): World;
		static addComposite(compositeA: World, compositeB: World): World;
		static addBody(composite: World, body: Body): World;
		static addConstraint(composite: World, constraint: Constraint): World;
		static clear(composite: World, keepStatic: boolean, deep: boolean): World;
	}

	//interface Vertex { }

	class Constraint implements MatterObject {
		id: string;
		type: string;
		label: string;

		bodyA: Body;
		bodyB: Body;
		pointA: Vector2;
		pointB: Vector2;
		length: number;
		render: any;
		stiffness: number;
		angularStiffness: number;
		angleA: number;
		angleB: number;

		static create(options?: any): Constraint;
		static solveAll(constraints: Constraint[], timeScale: number): void;
		static solve(constraint: Constraint, timeScale: number): void;
		static postSolveAll(bodies: Body[]): void;
	}

	class MouseConstraint implements MatterObject {
		type: string;
		mouse: Mouse;
		dragBody: Body;
		dragPoint: Vector2;
		constraint: Constraint;

		static create(engine: Engine, options?: any): MouseConstraint;
		static update(mouseConstraint: MouseConstraint, bodies: Body[]): void;
	}

	class Engine {
		enabled: boolean;
		positionIterations: number;
		velocityIterations: number;
		constraintIterations: number;
		enableSleeping: boolean;
		timeScale: number;
		input: any;
		events: any[];
		world: World;
		timing: {
			fps: number;
			timestamp: number;
			delta: number;
			correction: number;
			deltaMin: number;
			deltaMax: number;
			timeScale: number;
			isFixed: boolean;
		};
		render: {
			element: HTMLElement;
			controller: any;
		};

		static create(element: HTMLElement, options?: any): Engine;

		/** An optional utility function that provides a game loop, that handles updating the engine for you.
		 * Calls `Engine.update` and `Engine.render` on the `requestAnimationFrame` event automatically.
		 * Handles time correction and non-fixed dynamic timing (if enabled). 
		 * Triggers `beforeTick`, `tick` and `afterTick` events. */
		static run(engine: Engine): void;

		/** Moves the simulation forward in time by `delta` ms. Triggers `beforeUpdate` and `afterUpdate` events. */
		static update(engine: Engine, delta: number, correction: number): Engine;

		/** Renders the world by calling its defined renderer `engine.render.controller`. Triggers `beforeRender` and `afterRender` events. */
		static render(engine: Engine): void;
		static merge(engineA: Engine, engineB: Engine): void;
		static clear(engine: Engine): void;
	}

	class Events {
		static on(object: any, eventNames: string, callback: Function): void;
		static off(object: any, eventNames: string, callback: Function): void;
		static trigger(object: any, eventNames: string, event: Function): void;

		/** Fired after rendering */
		static on(engine: Engine, eventName: "afterRender", callback: Function): void;

		/** Fired after engine update and after rendering */
		static on(engine: Engine, eventName: "afterTick", callback: Function): void;

		/** Fired after engine update and all collision events */
		static on(engine: Engine, eventName: "afterUpdate", callback: Function): void;

		/** Fired just before rendering */
		static on(engine: Engine, eventName: "beforeRender", callback: Function): void;

		/** Fired at the start of a tick, before any updates to the engine or timing */
		static on(engine: Engine, eventName: "beforeTick", callback: Function): void;

		/** Fired just before an update */
		static on(engine: Engine, eventName: "beforeUpdate", callback: Function): void;

		/** Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any) */
		static on(engine: Engine, eventName: "collisionActive", callback: Function): void;

		/** Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any) */
		static on(engine: Engine, eventName: "collisionEnd", callback: Function): void;

		/** Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any) */
		static on(engine: Engine, eventName: "collisionStart", callback: Function): void;

		/** Fired when the mouse is down (or a touch has started) during the last step */
		static on(engine: Engine, eventName: "mousedown", callback: Function): void;

		/** Fired when the mouse has moved (or a touch moves) during the last step */
		static on(engine: Engine, eventName: "mousemove", callback: Function): void;

		/** Fired when the mouse is up (or a touch has ended) during the last step */
		static on(engine: Engine, eventName: "mouseup", callback: Function): void;

		/** Fired after engine timing updated, but just before engine state updated */
		static on(engine: Engine, eventName: "tick", callback: Function): void;
	}

	interface CompositeGenerator {
		(x: number, y: number, column: number, row: number, lastBody: Body, i: number): Body;
	}

	class Composites {
		static stack(xx: number, yy: number, columns: number, rows: number, columnGap: number, rowGap: number, generator: CompositeGenerator): Composite;
		static chain(composite: Composite, xOffsetA: number, yOffsetA: number, xOffsetB: number, yOffsetB: number, options: any): Composite;
		static mesh(composite: Composite, columns: number, rows: number, crossBrace: boolean, options: any): Composite;
		static pyramid(xx: number, yy: number, columns: number, rows: number, columnGap: number, rowGap: number, generator: CompositeGenerator): Composite;
		static newtonsCradle(xx: number, yy: number, number: number, size: number, length: number): Composite;
		static car(xx: number, yy: number, width: number, height: number, wheelSize: number): Composite;
		static softBody(xx: number, yy: number, columns: number, rows: number, columnGap: number, rowGap: number, crossBrace: boolean, particleRadius: number, particleOptions: any, constraintOptions: any): Composite;
	}

	class Bodies {
		static rectangle(x: number, y: number, width: number, height: number, options: any): Body;
		static trapezoid(x: number, y: number, width: number, height: number, slope: number, options: any): Body;
		static circle(x: number, y: number, radius: number, options?: any, maxSides?: number): Body;
		static polygon(x: number, y: number, sides: number, radius: number, options: any): void;
	}

	class Vertices {
		static create(vertices: Vertex[], body: Body): Vertex[];
		static fromPath(path: string): Vertices[];
		static center(vertices: Vertex[]): Vector2;
		static area(vertices: Vertex[], signed: boolean): number;
		static inertia(vertices: Vertex[], mass: number): number;
		static translate(vertices: Vertex[], vector: Vector2, scalar: number): void;
		static rotate(vertices: Vertex[], angle: number, point: Vector2): void;
		static contains(vertices: Vertex[], point: Vector2): boolean;
		static scale(vertices: Vertex[], scaleX: number, scaleY: number, point: Vector2): Vertex[];
		static chamfer(vertices: Vertex[], radius: number[], quality: number, qualityMin: number, qualityMax: number): Vertex[];
	}
	interface RenderController {
	}

	class Render {
		controller: RenderController;
		element: any;
		canvas: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		bounds: Bounds;
		textures: any;
		options: {
			width: number;
			height: number;
			background: string;
			wireframeBackground: string;
			hasBounds: boolean;
			enabled: boolean;
			wireframes: boolean;
			showSleeping: boolean;
			showDebug: boolean;
			showBroadphase: boolean;
			showBounds: boolean;
			showVelocity: boolean;
			showCollisions: boolean;
			showAxes: boolean;
			showPositions: boolean;
			showAngleIndicator: boolean;
			showIds: boolean;
			showShadows: boolean;
		};

		static create(options?: any): Render;
		static clear(render: Render): void;
		static setBackground(render: Render, background: string): void;
		static world(engine: Engine): void;
		static debug(engine: Engine, context: CanvasRenderingContext2D): void;
		static constraints(constraints: Constraint[], context: CanvasRenderingContext2D): void;
		static bodyShadows(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static body(engine: Engine, body: Body, context: CanvasRenderingContext2D): void;
		static bodies(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static bodyWireframes(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static bodyBounds(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static bodyAxes(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static bodyPositions(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static bodyVelocity(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static bodyIds(engine: Engine, bodies: Body[], context: CanvasRenderingContext2D): void;
		static collisions(engine: Engine, pairs: Pair[], context: CanvasRenderingContext2D): void;
		static grid(engine: Engine, grid: Grid, context: CanvasRenderingContext2D): void;
		static inspector(inspector: Inspector, context: CanvasRenderingContext2D): void;
	}

	interface Inspector { }

	class RenderPixi {
		static create(options?: any): Render;
	}

	// Internal
	class Metrics { }
	class Mouse { }
	class Sleeping { }
	class Axes { }
	//class Bounds { }
	class Vector {
		static magnitude(vector: Vector2): number;
		static magnitudeSquared(vector: Vector2): number;
		static rotate(vector: Vector2, angle: number): Vector2;
		static rotateAbout(vector: Vector2, angle: number, point: Vector2): Vector2;
		static normalise(vector: Vector2): Vector2;
		static dot(vectorA: Vector2, vectorB: Vector2): number;
		static cross(vectorA: Vector2, vectorB: Vector2): number;

		static add(vectorA: Vector2, vectorB: Vector2): Vector2;
		static sub(vectorA: Vector2, vectorB: Vector2): Vector2;
		static mult(vectorA: Vector2, vectorB: Vector2): Vector2;
		static div(vectorA: Vector2, vectorB: Vector2): Vector2;

		static prep(vectorA: Vector2, negate: boolean): Vector2;
		static neg(vectorA: Vector2): Vector2;

		static angle(vectorA: Vector2, vectorB: Vector2): number;
	}

	class Common {
		static _nextId: number;
		static extend(...objs: any[]): any;
		static clone(obj: any, deep: boolean): any;
		static keys(obj: any): any[];
		static values(obj: any): any[];
		static shadeColor(color: string, percent: number): string;

		static shuffle(array: any[]): any[];
		static choose(array: any[]): any;
		static isElement(obj: any): boolean;
		static clamp(value: number, min: number, max: number): number;
		static sign(value: number): number;
		static now(): number;
		static random(min: number, max: number): number;
		static colorToNumber(colorString: string): number;
		static log(message: string, type: string): void;
		static nextId(): number;

	}

	class Contact {
		id: number;
		vertex: Vertex;
		normalImpulse: number;
		tangentImpulse: number;

		static id(vertex: Vertex): string;
		static create(vertex: Vertex): Contact;
	}

	interface Collision {
		collided: boolean;
		bodyA: Body;
		bodyB: Body;
	}

	class Detector {
		static collisions(broadphasePairs: Pair[], engine: Engine): Collision[];
		static bruteForce(bodies: Body[], engine: Engine): Collision[];
	}

	class Grid {
		buckets: any;
        pairs: any;
        pairsList: any[];
        bucketWidth: number;
        bucketHeight: number;

		static create(bucketWidth: number, bucketHeight: number): Grid;
		static update(grid: Grid, bodies: Body[], engine: Engine, forceUpdate: boolean): void;
		static clear(grid: Grid): void;
	}

	class Pair {
		id: string;
		bodyA: Body;
		bodyB: Body;
		contacts: any;
		activeContacts: any[];
		separation: number;
		isActive: boolean;
		timeCreated: number;
		timeUpdated: number;
		inverseMass: number;
		friction: number;
		restitution: number;
		slop: number;

		static create(collision: Collision, timestamp: number): Pair;
		static update(pair: Pair, collision: Collision, timestamp: number): void;
		static setActive(pair: Pair, isActive: boolean, timestamp: number): void;
		static id(bodyA: Body, bodyB: Body): string;
	}

	class Pairs {
		table: any;
		list: any[];
        collisionStart: any[];
        collisionActive: any[];
		collisionEnd: any[];

		static create(options: Pairs): Pairs;
		static update(pairs: Pairs, collisions: Collision[], timestamp: number): void;
		static removeOld(pairs: Pairs, timestamp: number): void;
		static clear(pairs: Pairs): Pairs;
	}

	class Query {
		/** Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided. */
		static ray(bodies: Body[], startPoint: Vector2, endPoint: Vector2, rayWidth: number): Collision[];
		/** Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies */
		static region(bodies: Body[], bounds: Bounds, outside: boolean): Body[];
	}

	// Internal
	class Resolver { }
	class SAT { }
}
