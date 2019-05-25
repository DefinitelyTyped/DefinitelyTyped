/**
 * Typescript definition tests for vx/vx-point module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */
import { Point } from "vx__point";

new Point({}); // $ExpectType Point

const p = new Point({});
p.x; // $ExpectType number
p.y; // $ExpectType number
p.toArray(); // $ExpectType [number, number]
p.value(); // $ExpectType { x: number; y: number; }

const p1 = new Point({ x: 1 });
p1.y; // $ExpectType number

const p2 = new Point({ y: 1 });
p2.x; // $ExpectType number
