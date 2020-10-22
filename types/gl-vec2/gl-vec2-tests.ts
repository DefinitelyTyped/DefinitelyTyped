import GlVec2 = require("gl-vec2");

import GlVec2Add = require("gl-vec2/add");
import GlVec2Clone = require("gl-vec2/clone");
import GlVec2Copy = require("gl-vec2/copy");
import GlVec2Create = require("gl-vec2/create");
import GlVec2Cross = require("gl-vec2/cross");
import GlVec2Dist = require("gl-vec2/dist");
import GlVec2Div = require("gl-vec2/div");
import GlVec2Dot = require("gl-vec2/dot");
import GlVec2Equals = require("gl-vec2/equals");
import GlVec2exactEquals = require("gl-vec2/exactEquals");
import GlVec2forEach = require("gl-vec2/forEach");
import GlVec2fromValues = require("gl-vec2/fromValues");
import GlVec2Floor = require("gl-vec2/floor");
import GlVec2Inverse = require("gl-vec2/inverse");
import GlVec2Len = require("gl-vec2/len");
import GlVec2Lerp = require("gl-vec2/lerp");
import GlVec2Limit = require("gl-vec2/limit");
import GlVec2Max = require("gl-vec2/max");
import GlVec2Min = require("gl-vec2/min");
import GlVec2Mul = require("gl-vec2/mul");
import GlVec2Negate = require("gl-vec2/negate");
import GlVec2Normalize = require("gl-vec2/normalize");
import GlVec2Random = require("gl-vec2/random");
import GlVec2Scale = require("gl-vec2/scale");
import GlVec2ScaleAndAdd = require("gl-vec2/scaleAndAdd");
import GlVec2Set = require("gl-vec2/set");
import GlVec2SqrDist = require("gl-vec2/sqrDist");
import GlVec2SqrLen = require("gl-vec2/sqrLen");
import GlVec2Sub = require("gl-vec2/sub");
import GlVec2TransformMat2 = require("gl-vec2/transformMat2");
import GlVec2TransformMat2d = require("gl-vec2/transformMat2d");
import GlVec2TransformMat3 = require("gl-vec2/transformMat3");
import GlVec2TransformMat4 = require("gl-vec2/transformMat4");

GlVec2.add([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2Add([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.clone([1, 2, 3]);
GlVec2Clone([1, 2, 3]);

GlVec2.copy([1, 2, 3], [1, 2, 3]);
GlVec2Copy([1, 2, 3], [1, 2, 3]);

GlVec2.create();
GlVec2Create();

GlVec2.cross([1, 2], [1, 2], [1, 2]);
GlVec2Cross([1, 2], [1, 2], [1, 2]);

GlVec2.dist([1, 2, 3], [1, 2, 3]);
GlVec2Dist([1, 2, 3], [1, 2, 3]);

GlVec2.div([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2Div([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.dot([1, 2, 3], [1, 2, 3]);
GlVec2Dot([1, 2, 3], [1, 2, 3]);

GlVec2.forEach([1, 2, 3], 5, 6, 1, () => [3], {});
GlVec2forEach([1, 2, 3], 5, 6, 1, () => [3], {});

GlVec2.fromValues(1, 2);
GlVec2fromValues(1, 2);

GlVec2.floor([1, 2], [1, 2]);
GlVec2Floor([1, 2], [1, 2]);

GlVec2.equals([1, 2, 3], [1, 2, 3]);
GlVec2Equals([1, 2, 3], [1, 2, 3]);

GlVec2.exactEquals([1, 2, 3], [1, 2, 3]);
GlVec2exactEquals([1, 2, 3], [1, 2, 3]);

GlVec2.inverse([1, 2, 3], [1, 2, 3]);
GlVec2Inverse([1, 2, 3], [1, 2, 3]);

GlVec2.len([1, 2, 3]);
GlVec2Len([1, 2, 3]);

GlVec2.lerp([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);
GlVec2Lerp([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);

GlVec2.limit([1, 2], [1, 2], 5);
GlVec2Limit([1, 2], [1, 2], 5);

GlVec2.max([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2Max([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.min([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2Min([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.mul([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2Mul([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.negate([1, 2, 3], [1, 2, 3]);
GlVec2Negate([1, 2, 3], [1, 2, 3]);

GlVec2.normalize([1, 2, 3], [1, 2, 3]);
GlVec2Normalize([1, 2, 3], [1, 2, 3]);

GlVec2.random([1, 2, 3], 6);
GlVec2Random([1, 2, 3], 6);

GlVec2.scale([1, 2, 3], [1, 2, 3], 6);
GlVec2Scale([1, 2, 3], [1, 2, 3], 6);

GlVec2.scaleAndAdd([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);
GlVec2ScaleAndAdd([1, 2, 3], [1, 2, 3], [1, 2, 3], 6);

GlVec2.set([1, 2], 1, 2);
GlVec2Set([1, 2], 1, 2);

GlVec2.sqrDist([1, 2, 3], [1, 2, 3]);
GlVec2SqrDist([1, 2, 3], [1, 2, 3]);

GlVec2.sqrLen([1, 2, 3]);
GlVec2SqrLen([1, 2, 3]);

GlVec2.sub([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2Sub([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.transformMat2([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2TransformMat2([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.transformMat2([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2TransformMat2d([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.transformMat3([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2TransformMat3([1, 2, 3], [1, 2, 3], [1, 2, 3]);

GlVec2.transformMat4([1, 2, 3], [1, 2, 3], [1, 2, 3]);
GlVec2TransformMat4([1, 2, 3], [1, 2, 3], [1, 2, 3]);
