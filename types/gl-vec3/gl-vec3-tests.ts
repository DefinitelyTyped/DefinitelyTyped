import * as GlVec3 from "gl-vec3";
import GLVec3Add from "gl-vec3/add";
import GLVec3Angle from "gl-vec3/angle";
import GLVec3Clone from "gl-vec3/clone";
import GLVec3Copy from "gl-vec3/copy";
import GLVec3Create from "gl-vec3/create";
import GLVec3Dist from "gl-vec3/dist";
import GLVec3Div from "gl-vec3/div";
import GLVec3Dot from "gl-vec3/dot";
import GLVec3Equals from "gl-vec3/equals";
import GLVec3exactEquals from "gl-vec3/exactEquals";
import GLVec3forEach from "gl-vec3/forEach";
import GLVec3fromValues from "gl-vec3/fromValues";
import GLVec3Inverse from "gl-vec3/inverse";
import GLVec3Len from "gl-vec3/len";
import GLVec3Lerp from "gl-vec3/lerp";
import GLVec3Max from "gl-vec3/max";
import GLVec3Min from "gl-vec3/min";
import GLVec3Mul from "gl-vec3/mul";
import GLVec3Negate from "gl-vec3/negate";
import GLVec3Normalize from "gl-vec3/normalize";
import GLVec3Random from "gl-vec3/random";
import GLVec3Scale from "gl-vec3/scale";
import GLVec3ScaleAndAdd from "gl-vec3/scaleAndAdd";
import GLVec3Set from "gl-vec3/set";
import GLVec3SqrDist from "gl-vec3/sqrDist";
import GLVec3SqrLen from "gl-vec3/sqrLen";
import GLVec3Sub from "gl-vec3/sub";
import GLVec3TransformMat3 from "gl-vec3/transformMat3";
import GLVec3TransformMat4 from "gl-vec3/transformMat4";
import GLVec3TransformQuat from "gl-vec3/transformQuat";

GlVec3.add([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3Add([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.angle([1, 2, 3], [1, 2, 3]);
GLVec3Angle([1, 2, 3], [1, 2, 3]);

GlVec3.clone([1, 2, 3]);
GLVec3Clone([1, 2, 3]);

GlVec3.copy([1, 2, 3], [1, 2, 3]);
GLVec3Copy([1, 2, 3], [1, 2, 3]);

GlVec3.create();
GLVec3Create();

GlVec3.dist([1, 2, 3], [1, 2, 3]);
GLVec3Dist([1, 2, 3], [1, 2, 3]);

GlVec3.div([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3Div([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.dot([1, 2, 3], [1, 2, 3]);
GLVec3Dot([1, 2, 3], [1, 2, 3]);

GlVec3.forEach([1, 2, 3], 5, 6, 1, () => [3], {});
GLVec3forEach([1, 2, 3], 5, 6, 1, () => [3], {});

GlVec3.fromValues(1, 2, 3);
GLVec3fromValues(1, 2, 3);

GlVec3.equals([1, 2, 3], [1, 2, 3]);
GLVec3Equals([1, 2, 3], [1, 2, 3]);

GlVec3.exactEquals([1, 2, 3], [1, 2, 3]);
GLVec3exactEquals([1, 2, 3], [1, 2, 3]);

GlVec3.inverse([1, 2, 3], [1, 2, 3]);
GLVec3Inverse([1, 2, 3], [1, 2, 3]);

GlVec3.len([1, 2, 3]);
GLVec3Len([1, 2, 3]);

GlVec3.lerp([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);
GLVec3Lerp([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);

GlVec3.max([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3Max([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.min([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3Min([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.mul([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3Mul([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.negate([1, 2, 3], [1, 2, 3]);
GLVec3Negate([1, 2, 3], [1, 2, 3]);

GlVec3.normalize([1, 2, 3], [1, 2, 3]);
GLVec3Normalize([1, 2, 3], [1, 2, 3]);

GlVec3.random([1, 2, 3], 6);
GLVec3Random([1, 2, 3], 6);

GlVec3.scale([1, 2, 3], [1, 2, 3], 6);
GLVec3Scale([1, 2, 3], [1, 2, 3], 6);

GlVec3.scaleAndAdd([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);
GLVec3ScaleAndAdd([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);

GlVec3.set([1, 2, 3], 1, 2, 6);
GLVec3Set([1, 2, 3], 1, 2, 6);

GlVec3.sqrDist([1, 2, 3], [1, 2, 3]);
GLVec3SqrDist([1, 2, 3], [1, 2, 3]);

GlVec3.sqrLen([1, 2, 3]);
GLVec3SqrLen([1, 2, 3]);

GlVec3.sub([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3Sub([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.transformMat3([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3TransformMat3([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.transformMat4([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3TransformMat4([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec3.transformQuat([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GLVec3TransformQuat([1, 2, 3], [1, 2, 3], [1, 2, 3]);
