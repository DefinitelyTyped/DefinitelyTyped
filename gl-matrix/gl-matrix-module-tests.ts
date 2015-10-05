/// <reference path="gl-matrix-module.d.ts" />

// See gl-matrix-tests.ts for the majority of the tests.
// This file only tests that types and functions are exported as an AMD module correctly.
import { glMatrix as _1, vec2 as _2, vec3 as _3, vec4 as _4, mat2 as _5, mat2d as _6, mat3 as _7, mat4 as _8, quat as _9 } from "gl-matrix";

_1.toRadian;
_2.fromValues(1, 2);
_3.fromValues(1, 2, 3);
_4.fromValues(1, 2, 3, 4); _4.dist;
_5.LDU;
_6.frob; // No unique methods available on mat2d
_7.fromMat4;
_8.fromRotationTranslation;
_9.fromValues(1, 2, 3, 4); _9.conjugate;