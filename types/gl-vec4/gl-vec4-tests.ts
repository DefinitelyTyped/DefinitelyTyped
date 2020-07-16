import * as glVec from "gl-vec4";

import glVecAdd from "gl-vec4/add";
import glVecClone from "gl-vec4/clone";
import glVecCopy from "gl-vec4/copy";
import glVecCreate from "gl-vec4/create";
import glVecDistance from "gl-vec4/distance";
import glVecDivide from "gl-vec4/divide";
import glVecDot from "gl-vec4/dot";
import glVecFromValues from "gl-vec4/fromValues";
import glVecInverse from "gl-vec4/inverse";
import glVecLength from "gl-vec4/length";
import glVecLerp from "gl-vec4/lerp";
import glVecMax from "gl-vec4/max";
import glVecMin from "gl-vec4/min";
import glVecMultiply from "gl-vec4/multiply";
import glVecNegate from "gl-vec4/negate";
import glVecNormalize from "gl-vec4/normalize";
import glVecRandom from "gl-vec4/random";
import glVecScale from "gl-vec4/scale";
import glVecScaleAndAdd from "gl-vec4/scaleAndAdd";
import glVecSet from "gl-vec4/set";
import glVecSqrdDistance from "gl-vec4/squaredDistance";
import glVecSqrdLength from "gl-vec4/squaredLength";
import glVecSubtract from "gl-vec4/subtract";
import glVecTransformMat4 from "gl-vec4/transformMat4";
import glVecTransformQuat from "gl-vec4/transformQuat";

glVec.add([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecAdd([1, 2, 3], [1, 2, 3], [1, 2, 3]);

glVec.clone([1, 2, 3]);
glVecClone([1, 2, 3]);

glVec.copy([1, 2, 3], [1, 2, 3]);
glVecCopy([1, 2, 3], [1, 2, 3]);

glVec.create();
glVecCreate();

glVec.distance([1, 2, 3], [1, 2, 3]);
glVecDistance([1, 2, 3], [1, 2, 3]);

glVec.divide([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecDivide([1, 2, 3], [1, 2, 3], [1, 2, 3]);

glVec.dot([1, 2, 3], [1, 2, 3]);
glVecDot([1, 2, 3], [1, 2, 3]);

glVec.fromValues(1, 2, 4, 5);
glVecFromValues(1, 2, 4, 5);

glVec.inverse([1, 2, 3], [1, 2, 3]);
glVecInverse([1, 2, 3], [1, 2, 3]);

glVec.length([1, 2, 3]);
glVecLength([1, 2, 3]);

glVec.lerp([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);
glVecLerp([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);

glVec.max([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecMax([1, 2, 3], [1, 2, 3], [1, 2, 3]);

glVec.min([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecMin([1, 2, 3], [1, 2, 3], [1, 2, 3]);

glVec.multiply([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecMultiply([1, 2, 3], [1, 2, 3], [1, 2, 3]);

glVec.negate([1, 2, 3], [1, 2, 3]);
glVecNegate([1, 2, 3], [1, 2, 3]);

glVec.normalize([1, 2, 3], [1, 2, 3]);
glVecNormalize([1, 2, 3], [1, 2, 3]);

glVec.random([1, 2, 3], 6);
glVecRandom([1, 2, 3], 6);

glVec.scale([1, 2, 3], [1, 2, 3], 6);
glVecScale([1, 2, 3], [1, 2, 3], 6);

glVec.scaleAndAdd([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);
glVecScaleAndAdd([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);

glVec.set([1, 2, 3], [1, 2, 3], [1, 2, 3], 6, 6);
glVecSet([1, 2, 3], [1, 2, 3], [1, 2, 3], 6, 6);

glVec.squaredDistance([1, 2, 3], [1, 2, 3]);
glVecSqrdDistance([1, 2, 3], [1, 2, 3]);

glVec.squaredLength([1, 2, 3]);
glVecSqrdLength([1, 2, 3]);

glVec.subtract([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecSubtract([1, 2, 3], [1, 2, 3], [1, 2, 3]);

glVec.transformMat4([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecTransformMat4([1, 2, 3], [1, 2, 3], [1, 2, 3]);

glVec.transformQuat([1, 2, 3], [1, 2, 3], [1, 2, 3]);
glVecTransformQuat([1, 2, 3], [1, 2, 3], [1, 2, 3]);
