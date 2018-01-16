// Type definitions for sat.js
// Project: https://github.com/jriecken/sat-js
// Definitions by: Hou Chunlei <https://github.com/omni360>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace SAT {

	/**
	 * This is a simple 2D vector/point class,Vector has two parameters {x},{y}.
	 */
	export class Vector {
		/**
		 * @class Vector has two properties
		 * @param {number} x The x-coordinate of the Vector.
		 * @param {number} y The y-coordinate of the Vector.
		 */
		constructor(x?: number, y?: number);

		x: number;
		y: number;

		copy(other: Vector): Vector;
		clone(): Vector;
		perp(): Vector;
		rotate(angle: number): Vector;
		reverse(): Vector;
		normalize(): Vector;
		add(other: Vector): Vector;
		sub(other: Vector): Vector;
		scale(x: number, y?: number): Vector;
		project(other: Vector): Vector;
		projectN(other: Vector): Vector;
		reflect(axis: Vector): Vector;
		reflectN(axis: Vector): Vector;
		dot(other: Vector): number;
		len2(): number;
		len(): number;
	}
	/**
	 * This is simple circle with a center {pos} position and radius {r}.
	 */
	export class Circle {
		constructor(pos?: Vector, r?: number);

		pos: Vector;
		r: number;
	}
	export class Polygon {
		constructor(pos?: Vector, points?: Vector[]);

		pos: Vector;
		points: Vector[];
		angle: number;
		offset: Vector;
		calcPoints: Vector[];
		edges: Vector[];
		normals: Vector[];

		setPoints(points: Vector[]): Polygon;
		setAngle(angle: number): Polygon;
		setOffset(offset: Vector): Polygon;
		recalc(): Polygon;
		rotate(angle: number): Polygon;
		translate(x: number, y: number): Polygon;
		getAABB(): Polygon;

	}
	export class Box {
		constructor(pos?: Vector, width?: number, height?: number);

		pos: Vector;
		w: number;
		h: number;

		toPolygon(): Polygon;
	}
	export class Response {
		constructor();

		a: any;
		b: any;
		overlap: number;
		overlapN: Vector;
		overlapV: Vector;
		aInB: boolean;
		bInA: boolean;

		clear(): Response;
	}

	/**
	 * @function {pointInCircle} checks whether a given point {p} is inside the specified circle {c}.
	 * @param  {Vector}  p given a point to checks.
	 * @param  {Circle}  c check with a specified circle
	 * @return {boolean} return {true} if there is a collision. {false} otherwise.
	 */
	export function pointInCircle(p: Vector, c: Circle): boolean;
	/**
	 * @function {pointInPolygon} checks whether a given point [p] is inside a specified convex polygon.
	 * @param  {Vector}  p    given a point to check.
	 * @param  {Polygon} poly check with a spcified convex polygon.
	 * @return {boolean} 	  return {true} if there is a collision. {false} otherwise.
	 */
	export function pointInPolygon(p: Vector, poly: Polygon): boolean;
	/**
	 * @function {testCicleCircle} tests a collision between two {Circle}s, {a} and {b}.
	 * if a {response} is to be calculated in the event of a collision, pass in a cleared {Response} object.
	 * @param  {Circle}   a        specified circle a to tests.
	 * @param  {Circle}   b        spacified circle b to tests.
	 * @param  {Response} response specified the result of a collision between two circle.
	 * @return {boolean}  		   return {true} if there is a collision. {false} otherwise.
	 */
	export function testCircleCircle(a: Circle, b: Circle, response?: Response): boolean;
	/**
	 * @function {testPolygonCicle} tests a collision between a {Polygon} and a {Circle}. if a response is to
	 * be calculated in the event of a collision, pass in a cleared {Response} object.
	 * @param  {Polygon}  polygon  specified a Polygon to tests a collision.
	 * @param  {Circle}   circle   specified a Circle to tests a collision.
	 * @param  {Response} response specified the result of a collision between a {Polygon} and a {Circle}.
	 * @return {boolean}  		   return {true} if there is a collision. {false} otherwise.
	 */
	export function testPolygonCircle(polygon: Polygon, circle: Circle, response?: Response): boolean;
	/**
	 * @function {testCirclePolygon} tests a collision between a {Circle} and a {Polygon}. if a response is to
	 * be calculated in the event of a collision, pass in a cleared {Response} object.
	 * @param  {Circle}   circle   specified a {Circle} to tests a collision.
	 * @param  {Polygon}  polygon  specified a {Polygon} to tests a collision.
	 * @param  {Response} response specified the result of a collision between a {Circle} and a {Polygon}.
	 * @return {boolean}  		   return {true} if there is a collision. {false} otherwise.
	 */
	export function testCirclePolygon(circle: Circle, polygon: Polygon, response?: Response): boolean;
	/**
	 * @function {testPolygonPolygon} tests whether two polygons {a} and {b} collide.
	 * if a response is to be calculated in the event of a collision, pass in a cleared {Response} object.
	 * @param  {Polygon}  a        specified a {Polygon} {a} to test a collision.
	 * @param  {Polygon}  b        specified a {Polygon} {b} to test a collision.
	 * @param  {Response} response specified the result of a collision between two {Polygon}s.
	 * @return {boolean}           return {true} if there is a collision. {false} otherwise.
	 */
	export function testPolygonPolygon(a: Polygon, b: Polygon, response?: Response): boolean;

}

declare module "sat" {
	export = SAT;
}
