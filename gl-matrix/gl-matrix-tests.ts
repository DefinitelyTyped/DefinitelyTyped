/// <reference path="gl-matrix.d.ts" />

// common
var result: number = glMatrix.toRadian(180);

var out: GLM.IArray;
var outVal: number;
var outStr: string;

// vec2
var vecA: GLM.IArray, vecB: GLM.IArray, matA: GLM.IArray;
var vecArray: GLM.IArray;
  
vecA = [1, 2]; 
vecB = new Float32Array([3, 4]);
out = [0, 0];
matA = [1, 2, 3, 4, 5, 6];
vecArray  = [1, 2, 3, 4, 0, 0];
            
out = vec2.create();
out = vec2.clone(vecA);
out = vec2.fromValues(1, 2);
out = vec2.copy(out, vecA);
out = vec2.set(out, 1, 2);
out = vec2.add(out, vecA, vecB);
out = vec2.subtract(out, vecA, vecB);
out = vec2.sub(out, vecA, vecB);
out = vec2.multiply(out, vecA, vecB);
out = vec2.mul(out, vecA, vecB);
out = vec2.divide(out, vecA, vecB);
out = vec2.div(out, vecA, vecB);
out = vec2.min(out, vecA, vecB);
out = vec2.max(out, vecA, vecB);
out = vec2.scale(out, vecA, 2);
out = vec2.scaleAndAdd(out, vecA, vecB, 0.5);
outVal = vec2.distance(vecA, vecB);
outVal = vec2.dist(vecA, vecB);
outVal = vec2.squaredDistance(vecA, vecB);
outVal = vec2.sqrDist(vecA, vecB);
outVal = vec2.length(vecA);
outVal = vec2.len(vecA);
outVal = vec2.squaredLength(vecA);
outVal = vec2.sqrLen(vecA);
out = vec2.negate(out, vecA);
out = vec2.inverse(out, vecA);
out = vec2.normalize(out, vecA);
outVal = vec2.dot(vecA, vecB);
out = vec2.cross(out, vecA, vecB);
out = vec2.lerp(out, vecA, vecB, 0.5);
out = vec2.random(out);
out = vec2.random(out, 5.0);
out = vec2.transformMat2(out, vecA, matA);
out = vec2.transformMat2d(out, vecA, matA);
out = vec2.transformMat3(out, vecA, matA);
out = vec2.transformMat4(out, vecA, matA);
out = vec2.forEach(vecArray, 0, 0, 0, vec2.normalize);
outStr = vec2.str(vecA);

// vec3
var matr: GLM.IArray;
var q: GLM.IArray;

vecA = [1, 2, 3]; 
vecB = new Float32Array([4, 5, 6]);
out = [0, 0, 0];
vecArray  = [1, 2, 3, 4, 5, 6, 0, 0, 0];
matr = [1, 0, 0, 0, 1, 0, 0, 0, 1 ];

out = vec3.create();
out = vec3.clone(vecA);
out = vec3.fromValues(1, 2, 3);
out = vec3.copy(out, vecA);
out = vec3.set(out, 1, 2, 3);
out = vec3.add(out, vecA, vecB);
out = vec3.subtract(out, vecA, vecB);
out = vec3.sub(out, vecA, vecB);
out = vec3.multiply(out, vecA, vecB);
out = vec3.mul(out, vecA, vecB);
out = vec3.divide(out, vecA, vecB);
out = vec3.div(out, vecA, vecB);
out = vec3.min(out, vecA, vecB);
out = vec3.max(out, vecA, vecB);
out = vec3.scale(out, vecA, 2);
out = vec3.scaleAndAdd(out, vecA, vecB, 0.5);
outVal = vec3.distance(vecA, vecB);
outVal = vec3.dist(vecA, vecB);
outVal = vec3.squaredDistance(vecA, vecB);
outVal = vec3.sqrDist(vecA, vecB);
outVal = vec3.length(vecA);
outVal = vec3.len(vecA);
outVal = vec3.squaredLength(vecA);
outVal = vec3.sqrLen(vecA);
out = vec3.negate(out, vecA);
out = vec3.inverse(out, vecA);
out = vec3.normalize(out, vecA);
outVal = vec3.dot(vecA, vecB);
out = vec3.cross(out, vecA, vecB);
out = vec3.lerp(out, vecA, vecB, 0.5);
out = vec3.random(out);
out = vec3.random(out, 5.0);
out = vec3.rotateX(out, vecA, vecB, Math.PI);
out = vec3.rotateY(out, vecA, vecB, Math.PI);
out = vec3.rotateZ(out, vecA, vecB, Math.PI);
out = vec3.transformMat3(out, vecA, matr);

matr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
out = vec3.transformMat4(out, vecA, matr);

q = [1, 2, 3, 4];
out = vec3.transformQuat(out, vecA, matr);

out = vec3.forEach(vecArray, 0, 0, 0, vec3.normalize);
outVal = vec3.angle(vecA, vecB);
outStr = vec3.str(vecA);

// vec4
var q: GLM.IArray;

vecA = [1, 2, 3, 4]; 
vecB = new Float32Array([5, 6, 7, 8]);
out = [0, 0, 0, 0];
q = [1, 2, 3, 4];

out = vec4.create();
out = vec4.clone(vecA);
out = vec4.fromValues(1, 2, 3, 4);
out = vec4.copy(out, vecA);
out = vec4.set(out, 1, 2, 3, 4);
out = vec4.add(out, vecA, vecB);
out = vec4.subtract(out, vecA, vecB);
out = vec4.sub(out, vecA, vecB);
out = vec4.multiply(out, vecA, vecB);
out = vec4.mul(out, vecA, vecB);
out = vec4.divide(out, vecA, vecB);
out = vec4.div(out, vecA, vecB);
out = vec4.min(out, vecA, vecB);
out = vec4.max(out, vecA, vecB);
out = vec4.scale(out, vecA, 2);
out = vec4.scaleAndAdd(out, vecA, vecB, 0.5);
outVal = vec4.distance(vecA, vecB);
outVal = vec4.dist(vecA, vecB);
outVal = vec4.squaredDistance(vecA, vecB);
outVal = vec4.sqrDist(vecA, vecB);
outVal = vec4.length(vecA);
outVal = vec4.len(vecA);
outVal = vec4.squaredLength(vecA);
outVal = vec4.sqrLen(vecA);
out = vec4.negate(out, vecA);
out = vec4.inverse(out, vecA);
out = vec4.normalize(out, vecA);
outVal = vec4.dot(vecA, vecB);
out = vec4.lerp(out, vecA, vecB, 0.5);
out = vec4.random(out);
out = vec4.random(out, 5.0);

matr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]
out = vec4.transformMat4(out, vecA, matr);
out = vec4.transformQuat(out, vecA, q);

vecArray  = [1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0];
out = vec4.forEach(vecArray, 0, 0, 0, vec4.normalize);
outStr = vec4.str(vecA);

// mat2
var matB: GLM.IArray, identity: GLM.IArray;

matA = [1, 2, 3, 4];
matB = new Float32Array([5, 6, 7, 8]);
out =  [0, 0, 0, 0];
identity = [1, 0, 0, 1];
                    
out = mat2.create();
out = mat2.clone(matA);
out = mat2.copy(out, matA);
out = mat2.identity(out);
out = mat2.transpose(out, matA);
out = mat2.invert(out, matA);
out = mat2.adjoint(out, matA);
outVal = mat2.determinant(matA);
out = mat2.multiply(out, matA, matB);
out = mat2.mul(out, matA, matB);
out = mat2.rotate(out, matA, Math.PI * 0.5);

vecA = [2, 3];
out = mat2.scale(out, matA, vecA);
outStr = mat2.str(matA);
outVal = mat2.frob(matA);

var L = mat2.create(); 
var D = mat2.create(); 
var U = mat2.create();
out = mat2.LDU(L, D, U, [4,3,6,3]);

// mat2d
matA = [1, 2, 3, 4, 5, 6];
matB = [7, 8, 9, 10, 11, 12];
out =  [0, 0, 0, 0, 0, 0];
identity = [1, 0, 0, 1, 0, 0];

out = mat2d.create();
out = mat2d.clone(matA);
out = mat2d.copy(out, matA);
out = mat2d.identity(out);
out = mat2d.invert(out, matA);
outVal = mat2d.determinant(matA);
out = mat2d.multiply(out, matA, matB);
out = mat2d.mul(out, matA, matB);
out = mat2d.rotate(out, matA, Math.PI * 0.5);

vecA = [2, 3];
out = mat2d.scale(out, matA, vecA);
out = mat2d.translate(out, matA, vecA);
outStr = mat2d.str(matA);
outVal = mat2d.frob(matA);

// mat3
matA = [1, 0, 0, 0, 1, 0, 1, 2, 1];
matB = [1, 0, 0, 0, 1, 0, 3, 4, 1];
out =  [0, 0, 0, 0, 0, 0, 0, 0, 0];
identity = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    
out = mat3.create();
out = mat3.clone(matA);
out = mat3.copy(out, matA);
out = mat3.identity(out);
out = mat3.transpose(out, matA);
out = mat3.invert(out, matA);
out = mat3.adjoint(out, matA);
outVal = mat3.determinant(matA);
out = mat3.multiply(out, matA, matB);
out = mat3.mul(out, matA, matB);
outStr = mat3.str(matA);
outVal = mat3.frob(matA);

matA = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1];
out = mat3.normalFromMat4(out, matA);                    
                    
q = [ 0, -0.7071067811865475, 0, 0.7071067811865475 ];
out = mat3.fromQuat(out, q);                    

out = mat3.normalFromMat4(out, [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12, 13,14,15,16]);
out = mat3.fromMat4(out, [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12, 13,14,15,16]);
out = mat3.scale(out, matA, [2,2]);
out = mat3.fromMat2d(out, [1, 2, 3, 4, 5, 6]);

out = mat3.translate(out, matA, [1, 2, 3]);
out = mat3.rotate(out, matA, Math.PI/2);

// mat4
matA = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        1, 2, 3, 1];

matB = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        4, 5, 6, 1];

out =  [0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0];

identity = [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1];
            
out = mat4.create();
out = mat4.clone(matA);
out = mat4.copy(out, matA);
out = mat4.identity(out);            
out = mat4.transpose(out, matA);
out = mat4.invert(out, matA);
out = mat4.adjoint(out, matA);
outVal = mat4.determinant(matA);
out = mat4.multiply(out, matA, matB);
out = mat4.mul(out, matA, matB);
out = mat4.translate(out, matA, [4, 5, 6]);
out = mat4.scale(out, matA, [4, 5, 6]);

var rad = Math.PI * 0.5;
var axis = [1, 0, 0];
out = mat4.rotate(out, matA, rad, axis);
out = mat4.rotateX(out, matA, rad);
out = mat4.rotateY(out, matA, rad);
out = mat4.rotateZ(out, matA, rad);

out = mat4.frustum(out, -1, 1, -1, 1, -1, 1);

var fovy = Math.PI * 0.5;
out = mat4.perspective(out, fovy, 1, 0, 1);
out = mat4.ortho(out, -1, 1, -1, 1, -1, 1);

var eye    = [0, 0, 1];
var center = [0, 0, -1];
var up     = [0, 1, 0];
out = mat4.lookAt(out, eye, center, up);

outStr = mat4.str(matA);
outVal = mat4.frob(matA);

q = [0, 0, 0, 1];
out = mat4.fromRotationTranslation(out, q, [1, 2, 3]);
out = mat4.fromQuat(out, q);

// quat
var quatA = [1, 2, 3, 4];
var quatB = [5, 6, 7, 8];
out = [0, 0, 0, 0];
var vec = [1, 1, -1];
var id = [0, 0, 0, 1];
var deg90 = Math.PI / 2;

out = quat.create();
out = quat.clone(quatA);
out = quat.fromValues(1, 2, 3, 4);
out = quat.copy(out, quatA);
out = quat.set(out, 1, 2, 3, 4);
out = quat.identity(out);
out = quat.setAxisAngle(out, [1, 0, 0], Math.PI * 0.5);
out = quat.add(out, quatA, quatB);
out = quat.multiply(out, quatA, quatB);
out = quat.mul(out, quatA, quatB);
out = quat.scale(out, quatA, 2);
outVal = quat.length(quatA);
outVal = quat.len(quatA);
outVal = quat.squaredLength(quatA);
outVal = quat.sqrLen(quatA);
out = quat.normalize(out, quatA);
outVal = quat.dot(out, quatA, quatB);
out = quat.lerp(out, quatA, quatB, 0.5);
out = quat.slerp(out, quatA, quatB, 0.5);
out = quat.invert(out, quatA);
out = quat.conjugate(out, quatA);
outStr = quat.str(quatA);
out = quat.rotateX(out, id, deg90);
out = quat.rotateY(out, id, deg90);
out = quat.rotateZ(out, id, deg90);

matr = [ 1, 0,  0,
         0, 0, -1,
         0, 1,  0 ];
out = quat.fromMat3(out, matr);

var view = [-1, 0, 0];
up   = [ 0, 1, 0];
var right= [ 0, 0,-1];
out = quat.setAxes([], view, right, up);

out = quat.rotationTo(out, [0, 1, 0], [1, 0, 0]);
out = quat.calculateW(out, quatA);

