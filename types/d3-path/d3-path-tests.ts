/**
 * Typescript definition tests for d3/d3-path module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Path from 'd3-path';

// -----------------------------------------------------------------------------------------
// Test create new path serializer
// -----------------------------------------------------------------------------------------

let context: d3Path.Path = d3Path.path();

// -----------------------------------------------------------------------------------------
// Test path serializer methods
// -----------------------------------------------------------------------------------------

context.moveTo(50, 50);

context.lineTo(100, 100);

context.quadraticCurveTo(150, 200, 200, 100);

context.bezierCurveTo(300, 50, 400, 200, 500, 100);

context.arcTo(250, 250, 300, 300, 60);

context.arc(400, 400, 50, 0, Math.PI / 2);
context.arc(400, 400, 50, 0, Math.PI / 2, true);

context.rect(60, 60, 100, 200);

context.closePath();

let pathString: string = context.toString();
