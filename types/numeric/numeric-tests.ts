import numeric = require("numeric");

const vector = [2, 5];
const matrix = [vector, vector];
const threeDimensionalMatrix = [[[2, 3], [2, 3], [3, 5]]];
const sparseMatrix: [number[], number[], number[]] = [vector, vector, vector];

numeric.bench(() => null, 150); // $ExpectType number
numeric.prettyPrint(vector); // $ExpectType string
numeric.parseDate("08-08-17"); // $ExpectType number
numeric.parseDate(["08-05-87", "08-05-75"]); // $ExpectType number[]
numeric.parseFloat("55.24"); // $ExpectType number
numeric.parseFloat(["25.15", "44.25", "as"]); // $ExpectType number[]
numeric.parseCSV("car, bike"); // $ExpectType string[][]
numeric.toCSV([[25, 52, 62, 66], ["car", "bad", "bike", {}]]); // $ExpectType string
numeric.imageURL([[25, 50], [52, 52]]); // $ExpectType string
numeric.getURL('sdf'); // $ExpectType any

numeric.dim(matrix); // $ExpectType number[] || Vector
numeric.same(25, [25]); // $ExpectType boolean
numeric.rep([2, 5], true);
numeric.dotMMsmall(matrix, matrix); // $ExpectType number[][] || Matrix
numeric.dotMMbig(matrix, matrix); // $ExpectType number[][] || Matrix
numeric.dotMV(matrix, vector); // $ExpectType number[] || Vector
numeric.dotVM(vector, matrix); // $ExpectType number[] || Vector
numeric.dotVV(vector, vector); // $ExpectType number
numeric.dot(vector, matrix); // $ExpectType number | number[] | number[][] || number | Vector | Matrix
numeric.diag([25, 52]); // $ExpectType number[][] || Matrix
numeric.getDiag(matrix); // $ExpectType number[] || Vector
numeric.identity(24); // $ExpectType number[][] || Matrix

numeric.abs(matrix); // $ExpectType number[][] || Matrix
numeric.absV(vector); // $ExpectType number[] || Vector
numeric.abseqV(vector); // $ExpectType number[] || Vector
numeric.abseq(matrix); // $ExpectType number[][] || Matrix

numeric.acos(matrix); // $ExpectType number[][] || Matrix
numeric.acosV(vector); // $ExpectType number[] || Vector
numeric.acoseqV(vector); // $ExpectType number[] || Vector
numeric.acoseq(matrix); // $ExpectType number[][] || Matrix

numeric.asin(matrix); // $ExpectType number[][] || Matrix
numeric.asinV(vector); // $ExpectType number[] || Vector
numeric.asineqV(vector); // $ExpectType number[] || Vector
numeric.asineq(matrix); // $ExpectType number[][] || Matrix

numeric.atan(matrix); // $ExpectType number[][] || Matrix
numeric.atanV(vector); // $ExpectType number[] || Vector
numeric.ataneqV(vector); // $ExpectType number[] || Vector
numeric.ataneq(matrix); // $ExpectType number[][] || Matrix

numeric.ceil(matrix); // $ExpectType number[][] || Matrix
numeric.ceilV(vector); // $ExpectType number[] || Vector
numeric.ceileqV(vector); // $ExpectType number[] || Vector
numeric.ceileq(matrix); // $ExpectType number[][] || Matrix

numeric.cos(matrix); // $ExpectType number[][] || Matrix
numeric.cosV(vector); // $ExpectType number[] || Vector
numeric.coseqV(vector); // $ExpectType number[] || Vector
numeric.coseq(matrix); // $ExpectType number[][] || Matrix

numeric.exp(matrix); // $ExpectType number[][] || Matrix
numeric.expV(vector); // $ExpectType number[] || Vector
numeric.expeqV(vector); // $ExpectType number[] || Vector
numeric.expeq(matrix); // $ExpectType number[][] || Matrix

numeric.floor(matrix); // $ExpectType number[][] || Matrix
numeric.floorV(vector); // $ExpectType number[] || Vector
numeric.flooreqV(vector); // $ExpectType number[] || Vector
numeric.flooreq(matrix); // $ExpectType number[][] || Matrix

numeric.log(matrix); // $ExpectType number[][] || Matrix
numeric.logV(vector); // $ExpectType number[] || Vector
numeric.logeqV(vector); // $ExpectType number[] || Vector
numeric.logeq(matrix); // $ExpectType number[][] || Matrix

numeric.round(matrix); // $ExpectType number[][] || Matrix
numeric.roundV(vector); // $ExpectType number[] || Vector
numeric.roundeqV(vector); // $ExpectType number[] || Vector
numeric.roundeq(matrix); // $ExpectType number[][] || Matrix

numeric.sin(matrix); // $ExpectType number[][] || Matrix
numeric.sinV(vector); // $ExpectType number[] || Vector
numeric.sineqV(vector); // $ExpectType number[] || Vector
numeric.sineq(matrix); // $ExpectType number[][] || Matrix

numeric.sqrt(matrix); // $ExpectType number[][] || Matrix
numeric.sqrtV(vector); // $ExpectType number[] || Vector
numeric.sqrteqV(vector); // $ExpectType number[] || Vector
numeric.sqrteq(matrix); // $ExpectType number[][] || Matrix

numeric.tan(matrix); // $ExpectType number[][] || Matrix
numeric.tanV(vector); // $ExpectType number[] || Vector
numeric.taneqV(vector); // $ExpectType number[] || Vector
numeric.taneq(matrix); // $ExpectType number[][] || Matrix

numeric.isNaN(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isNaN(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.isNaNV(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isNaNeqV(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isNaNeq(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isNaNeq(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>

numeric.isFinite(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isFinite(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.isFiniteV(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isFiniteeqV(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isFiniteeq(vector); // $ExpectType boolean[] || VectorBoolean
numeric.isFiniteeq(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>

numeric.neg(matrix); // $ExpectType number[][] || Matrix
numeric.negV(vector); // $ExpectType number[] || Vector
numeric.negeqV(vector); // $ExpectType number[] || Vector
numeric.negeq(matrix); // $ExpectType number[][] || Matrix

numeric.bnot(matrix); // $ExpectType number[][] || Matrix
numeric.bnotV(vector); // $ExpectType number[] || Vector
numeric.bnoteqV(vector); // $ExpectType number[] || Vector
numeric.bnoteq(matrix); // $ExpectType number[][] || Matrix

numeric.not(2); // $ExpectType boolean
numeric.not(vector); // $ExpectType boolean[] || VectorBoolean
numeric.not(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.notV(vector); // $ExpectType boolean[] || VectorBoolean
numeric.noteq(2); // $ExpectType boolean
numeric.noteq(vector); // $ExpectType boolean[] || VectorBoolean
numeric.noteq(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.noteqV(vector); // $ExpectType boolean[] || VectorBoolean

numeric.clone(vector); // $ExpectType number[] || Vector
numeric.cloneV(vector); // $ExpectType NonNullPrimitive[]
numeric.cloneeq(vector); // $ExpectType NonNullPrimitive[]
numeric.cloneeqV(vector); // $ExpectType NonNullPrimitive[]

numeric.add(2, 5, 6); // $ExpectType number
numeric.add(2, 3, vector); // $ExpectType number[] || Vector
numeric.add(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["+"](2, 5, 6); // $ExpectType number
numeric["+"](2, 3, vector); // $ExpectType number[] || Vector
numeric["+"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.addVV(vector, vector); // $ExpectType number[] || Vector
numeric.addSV(2, vector); // $ExpectType number[] || Vector
numeric.addVS(vector, 2); // $ExpectType number[] || Vector
numeric.addeq(vector, 3); // $ExpectType number[] || Vector
numeric.addeqV(vector, vector); // $ExpectType number[] || Vector
numeric.addeqS(vector, 3); // $ExpectType number[] || Vector

numeric.sub(2, 5, 6); // $ExpectType number
numeric.sub(2, 3, vector); // $ExpectType number[] || Vector
numeric.sub(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["-"](2, 5, 6); // $ExpectType number
numeric["-"](2, 3, vector); // $ExpectType number[] || Vector
numeric["-"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.subVV(vector, vector); // $ExpectType number[] || Vector
numeric.subSV(2, vector); // $ExpectType number[] || Vector
numeric.subVS(vector, 2); // $ExpectType number[] || Vector
numeric.subeq(vector, 3); // $ExpectType number[] || Vector
numeric.subeqV(vector, vector); // $ExpectType number[] || Vector
numeric.subeqS(vector, 3); // $ExpectType number[] || Vector

numeric.mul(2, 5, 6); // $ExpectType number
numeric.mul(2, 3, vector); // $ExpectType number[] || Vector
numeric.mul(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["*"](2, 5, 6); // $ExpectType number
numeric["*"](2, 3, vector); // $ExpectType number[] || Vector
numeric["*"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.mulVV(vector, vector); // $ExpectType number[] || Vector
numeric.mulSV(2, vector); // $ExpectType number[] || Vector
numeric.mulVS(vector, 2); // $ExpectType number[] || Vector
numeric.muleq(vector, 3); // $ExpectType number[] || Vector
numeric.muleqV(vector, vector); // $ExpectType number[] || Vector
numeric.muleqS(vector, 3); // $ExpectType number[] || Vector

numeric.div(2, 5, 6); // $ExpectType number
numeric.div(2, 3, vector); // $ExpectType number[] || Vector
numeric.div(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["/"](2, 5, 6); // $ExpectType number
numeric["/"](2, 3, vector); // $ExpectType number[] || Vector
numeric["/"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.divVV(vector, vector); // $ExpectType number[] || Vector
numeric.divSV(2, vector); // $ExpectType number[] || Vector
numeric.divVS(vector, 2); // $ExpectType number[] || Vector
numeric.diveq(vector, 3); // $ExpectType number[] || Vector
numeric.diveqV(vector, vector); // $ExpectType number[] || Vector
numeric.diveqS(vector, 3); // $ExpectType number[] || Vector

numeric.mod(2, 5, 6); // $ExpectType number
numeric.mod(2, 3, vector); // $ExpectType number[] || Vector
numeric.mod(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["%"](2, 5, 6); // $ExpectType number
numeric["%"](2, 3, vector); // $ExpectType number[] || Vector
numeric["%"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.modVV(vector, vector); // $ExpectType number[] || Vector
numeric.modSV(2, vector); // $ExpectType number[] || Vector
numeric.modVS(vector, 2); // $ExpectType number[] || Vector
numeric.modeq(vector, 3); // $ExpectType number[] || Vector
numeric.modeqV(vector, vector); // $ExpectType number[] || Vector
numeric.modeqS(vector, 3); // $ExpectType number[] || Vector

numeric.and(2, 5, 6); // $ExpectType number
numeric.and(2, 3, vector); // $ExpectType number[] || Vector
numeric.and(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["&&"](2, 5, 6); // $ExpectType number
numeric["&&"](2, 3, vector); // $ExpectType number[] || Vector
numeric["&&"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.andVV(vector, vector); // $ExpectType number[] || Vector
numeric.andSV(2, vector); // $ExpectType number[] || Vector
numeric.andVS(vector, 2); // $ExpectType number[] || Vector
numeric.andeq(vector, 3); // $ExpectType number[] || Vector
numeric.andeqV(vector, vector); // $ExpectType number[] || Vector
numeric.andeqS(vector, 3); // $ExpectType number[] || Vector

numeric.or(2, 5, 6); // $ExpectType number
numeric.or(2, 3, vector); // $ExpectType number[] || Vector
numeric.or(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["||"](2, 5, 6); // $ExpectType number
numeric["||"](2, 3, vector); // $ExpectType number[] || Vector
numeric["||"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.orVV(vector, vector); // $ExpectType number[] || Vector
numeric.orSV(2, vector); // $ExpectType number[] || Vector
numeric.orVS(vector, 2); // $ExpectType number[] || Vector
numeric.oreq(vector, 3); // $ExpectType number[] || Vector
numeric.oreqV(vector, vector); // $ExpectType number[] || Vector
numeric.oreqS(vector, 3); // $ExpectType number[] || Vector

numeric.eq(2, 5); // $ExpectType boolean
numeric.eq(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.eq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[] || VectorBoolean
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.eqVV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.eqSV(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.eqVS(vector, 2); // $ExpectType boolean[] || VectorBoolean
numeric.eqeq(vector, 3); // $ExpectType boolean[] || VectorBoolean
numeric.eqeqV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.eqeqS(vector, 3); // $ExpectType boolean[] || VectorBoolean

numeric.neq(2, 5); // $ExpectType boolean
numeric.neq(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.neq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[] || VectorBoolean
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.neqVV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.neqSV(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.neqVS(vector, 2); // $ExpectType boolean[] || VectorBoolean
numeric.neqeq(vector, 3); // $ExpectType boolean[] || VectorBoolean
numeric.neqeqV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.neqeqS(vector, 3); // $ExpectType boolean[] || VectorBoolean

numeric.lt(2, 5); // $ExpectType boolean
numeric.lt(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.lt(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[] || VectorBoolean
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.ltVV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.ltSV(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.ltVS(vector, 2); // $ExpectType boolean[] || VectorBoolean
numeric.lteq(vector, 3); // $ExpectType boolean[] || VectorBoolean
numeric.lteqV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.lteqS(vector, 3); // $ExpectType boolean[] || VectorBoolean

numeric.gt(2, 5); // $ExpectType boolean
numeric.gt(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.gt(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[] || VectorBoolean
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.gtVV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.gtSV(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.gtVS(vector, 2); // $ExpectType boolean[] || VectorBoolean
numeric.gteq(vector, 3); // $ExpectType boolean[] || VectorBoolean
numeric.gteqV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.gteqS(vector, 3); // $ExpectType boolean[] || VectorBoolean

numeric.leq(2, 5); // $ExpectType boolean
numeric.leq(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.leq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[] || VectorBoolean
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.leqVV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.leqSV(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.leqVS(vector, 2); // $ExpectType boolean[] || VectorBoolean
numeric.leqeq(vector, 3); // $ExpectType boolean[] || VectorBoolean
numeric.leqeqV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.leqeqS(vector, 3); // $ExpectType boolean[] || VectorBoolean

numeric.geq(2, 5); // $ExpectType boolean
numeric.geq(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.geq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[] || VectorBoolean
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.geqVV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.geqSV(2, vector); // $ExpectType boolean[] || VectorBoolean
numeric.geqVS(vector, 2); // $ExpectType boolean[] || VectorBoolean
numeric.geqeq(vector, 3); // $ExpectType boolean[] || VectorBoolean
numeric.geqeqV(vector, vector); // $ExpectType boolean[] || VectorBoolean
numeric.geqeqS(vector, 3); // $ExpectType boolean[] || VectorBoolean

numeric.band(2, 5, 6); // $ExpectType number
numeric.band(2, 3, vector); // $ExpectType number[] || Vector
numeric.band(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["&"](2, 5, 6); // $ExpectType number
numeric["&"](2, 3, vector); // $ExpectType number[] || Vector
numeric["&"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.bandVV(vector, vector); // $ExpectType number[] || Vector
numeric.bandSV(2, vector); // $ExpectType number[] || Vector
numeric.bandVS(vector, 2); // $ExpectType number[] || Vector
numeric.bandeq(vector, 3); // $ExpectType number[] || Vector
numeric.bandeqV(vector, vector); // $ExpectType number[] || Vector
numeric.bandeqS(vector, 3); // $ExpectType number[] || Vector

numeric.bor(2, 5, 6); // $ExpectType number
numeric.bor(2, 3, vector); // $ExpectType number[] || Vector
numeric.bor(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["|"](2, 5, 6); // $ExpectType number
numeric["|"](2, 3, vector); // $ExpectType number[] || Vector
numeric["|"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.borVV(vector, vector); // $ExpectType number[] || Vector
numeric.borSV(2, vector); // $ExpectType number[] || Vector
numeric.borVS(vector, 2); // $ExpectType number[] || Vector
numeric.boreq(vector, 3); // $ExpectType number[] || Vector
numeric.boreqV(vector, vector); // $ExpectType number[] || Vector
numeric.boreqS(vector, 3); // $ExpectType number[] || Vector

numeric.bxor(2, 5, 6); // $ExpectType number
numeric.bxor(2, 3, vector); // $ExpectType number[] || Vector
numeric.bxor(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["^"](2, 5, 6); // $ExpectType number
numeric["^"](2, 3, vector); // $ExpectType number[] || Vector
numeric["^"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.bxorVV(vector, vector); // $ExpectType number[] || Vector
numeric.bxorSV(2, vector); // $ExpectType number[] || Vector
numeric.bxorVS(vector, 2); // $ExpectType number[] || Vector
numeric.bxoreq(vector, 3); // $ExpectType number[] || Vector
numeric.bxoreqV(vector, vector); // $ExpectType number[] || Vector
numeric.bxoreqS(vector, 3); // $ExpectType number[] || Vector

numeric.lshift(2, 5, 6); // $ExpectType number
numeric.lshift(2, 3, vector); // $ExpectType number[] || Vector
numeric.lshift(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["<<"](2, 5, 6); // $ExpectType number
numeric["<<"](2, 3, vector); // $ExpectType number[] || Vector
numeric["<<"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.lshiftVV(vector, vector); // $ExpectType number[] || Vector
numeric.lshiftSV(2, vector); // $ExpectType number[] || Vector
numeric.lshiftVS(vector, 2); // $ExpectType number[] || Vector
numeric.lshifteq(vector, 3); // $ExpectType number[] || Vector
numeric.lshifteqV(vector, vector); // $ExpectType number[] || Vector
numeric.lshifteqS(vector, 3); // $ExpectType number[] || Vector

numeric.rshift(2, 5, 6); // $ExpectType number
numeric.rshift(2, 3, vector); // $ExpectType number[] || Vector
numeric.rshift(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric[">>"](2, 5, 6); // $ExpectType number
numeric[">>"](2, 3, vector); // $ExpectType number[] || Vector
numeric[">>"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.rshiftVV(vector, vector); // $ExpectType number[] || Vector
numeric.rshiftSV(2, vector); // $ExpectType number[] || Vector
numeric.rshiftVS(vector, 2); // $ExpectType number[] || Vector
numeric.rshifteq(vector, 3); // $ExpectType number[] || Vector
numeric.rshifteqV(vector, vector); // $ExpectType number[] || Vector
numeric.rshifteqS(vector, 3); // $ExpectType number[] || Vector

numeric.rrshift(2, 5, 6); // $ExpectType number
numeric.rrshift(2, 3, vector); // $ExpectType number[] || Vector
numeric.rrshift(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric[">>>"](2, 5, 6); // $ExpectType number
numeric[">>>"](2, 3, vector); // $ExpectType number[] || Vector
numeric[">>>"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.rrshiftVV(vector, vector); // $ExpectType number[] || Vector
numeric.rrshiftSV(2, vector); // $ExpectType number[] || Vector
numeric.rrshiftVS(vector, 2); // $ExpectType number[] || Vector
numeric.rrshifteq(vector, 3); // $ExpectType number[] || Vector
numeric.rrshifteqV(vector, vector); // $ExpectType number[] || Vector
numeric.rrshifteqS(vector, 3); // $ExpectType number[] || Vector

numeric.atan2(2, 5, 6); // $ExpectType number
numeric.atan2(2, 3, vector); // $ExpectType number[] || Vector
numeric.atan2(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.atan2VV(vector, vector); // $ExpectType number[] || Vector
numeric.atan2SV(2, vector); // $ExpectType number[] || Vector
numeric.atan2VS(vector, 2); // $ExpectType number[] || Vector
numeric.atan2eq(vector, 3); // $ExpectType number[] || Vector
numeric.atan2eqV(vector, vector); // $ExpectType number[] || Vector
numeric.atan2eqS(vector, 3); // $ExpectType number[] || Vector

numeric.pow(2, 5, 6); // $ExpectType number
numeric.pow(2, 3, vector); // $ExpectType number[] || Vector
numeric.pow(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.powVV(vector, vector); // $ExpectType number[] || Vector
numeric.powSV(2, vector); // $ExpectType number[] || Vector
numeric.powVS(vector, 2); // $ExpectType number[] || Vector
numeric.poweq(vector, 3); // $ExpectType number[] || Vector
numeric.poweqV(vector, vector); // $ExpectType number[] || Vector
numeric.poweqS(vector, 3); // $ExpectType number[] || Vector

numeric.max(2, 5, 6); // $ExpectType number
numeric.max(2, 3, vector); // $ExpectType number[] || Vector
numeric.max(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.maxVV(vector, vector); // $ExpectType number[] || Vector
numeric.maxSV(2, vector); // $ExpectType number[] || Vector
numeric.maxVS(vector, 2); // $ExpectType number[] || Vector
numeric.maxeq(vector, 3); // $ExpectType number[] || Vector
numeric.maxeqV(vector, vector); // $ExpectType number[] || Vector
numeric.maxeqS(vector, 3); // $ExpectType number[] || Vector

numeric.min(2, 5, 6); // $ExpectType number
numeric.min(2, 3, vector); // $ExpectType number[] || Vector
numeric.min(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.minVV(vector, vector); // $ExpectType number[] || Vector
numeric.minSV(2, vector); // $ExpectType number[] || Vector
numeric.minVS(vector, 2); // $ExpectType number[] || Vector
numeric.mineq(vector, 3); // $ExpectType number[] || Vector
numeric.mineqV(vector, vector); // $ExpectType number[] || Vector
numeric.mineqS(vector, 3); // $ExpectType number[] || Vector

numeric.any(23); // $ExpectType boolean
numeric.anyV(vector); // $ExpectType boolean

numeric.all(23); // $ExpectType boolean
numeric.allV(vector); // $ExpectType boolean

numeric.sum(threeDimensionalMatrix); // $ExpectType number
numeric.sumV(vector); // $ExceptType number

numeric.prod(threeDimensionalMatrix); // $ExpectType number
numeric.prodV(vector); // $ExceptType number

numeric.norm2Squared(threeDimensionalMatrix); // $ExpectType number
numeric.norm2SquaredV(vector); // $ExceptType number

numeric.norminf(threeDimensionalMatrix); // $ExpectType number
numeric.norminfV(vector); // $ExceptType number

numeric.norm1(threeDimensionalMatrix); // $ExpectType number
numeric.norm1V(vector); // $ExceptType number

numeric.sup(threeDimensionalMatrix); // $ExpectType number
numeric.supV(vector); // $ExceptType number

numeric.inf(threeDimensionalMatrix); // $ExpectType number
numeric.infV(vector); // $ExceptType number

numeric.trunc(vector, 3); // $ExpectType number[] || Vector
numeric.truncVV(vector, vector); // $ExpectType number[] || Vector
numeric.truncVS(vector, 4); // $ExpectType number[] || Vector
numeric.truncSV(3, vector); // $ExpectType number[] || Vector

numeric.inv(matrix); // $ExpectType number[][] || Matrix
numeric.det(matrix); // $ExpectType number
numeric.transpose(matrix); // $ExpectType number[][] || Matrix
numeric.negtranspose(matrix); // $ExpectType number[][] || Matrix
numeric.random(vector); // $ExpectType NonScalar
numeric.norm2(threeDimensionalMatrix); // $ExpectType number
numeric.linspace(1, 3, 5); // $ExpectType number[] || Vector
numeric.getBlock(threeDimensionalMatrix, vector, vector); // $ExpectType number[][][]
const block: number[][][] = numeric.setBlock(
    threeDimensionalMatrix,
    vector,
    vector,
    threeDimensionalMatrix
);
numeric.blockMatrix(matrix); // $ExpectType number[][] || Matrix
numeric.tensor(3, 5); // $ExpectType number
numeric.tensor(vector, vector); // $ExpectType number[][] || Matrix

const tensor = numeric.t(vector, vector);
tensor
    .add(tensor)
    .sub(tensor)
    .mul(tensor)
    .reciprocal()
    .div(tensor)
    .dot(tensor)
    .transpose()
    .transjugate()
    .exp()
    .conj()
    .neg()
    .sin()
    .cos()
    .abs()
    .log()
    .norm2()
    .inv()
    .get(vector)
    .set(vector, tensor)
    .getRow(2)
    .setRow(2, tensor)
    .getRows(10, 10)
    .setRows(10, 10, tensor)
    .getBlock(vector, vector)
    .setBlock(vector, vector, tensor)
    .rep(vector, tensor)
    .diag(tensor)
    .identity(3)
    .getDiag()
    .fft()
    .ifft()
    .eig();

numeric.house(vector); // $ExpectType number[] || Vector
numeric.toUpperHessenberg(matrix); // $ExpectType { H: number[][]; Q: number[][]; } || { H: Matrix; Q: Matrix; }
numeric.QRFrancis(matrix, 25); // $ExpectType { Q: number[][]; B: number[][]; } || { Q: Matrix; B: Matrix; }
numeric.eig(matrix); // $ExpectType { lambda: Tensor; E: Tensor; }

numeric.ccsSparse(matrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsFull(sparseMatrix); // $ExpectType number[][] || Matrix
numeric.ccsTSolve(sparseMatrix, vector, vector, vector, vector); // $ExpectType number[] || Vector
numeric.ccsDot(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
const lup = numeric.ccsLUP(sparseMatrix, 4);
numeric.ccsDim(sparseMatrix); // $ExpectType number[] || Vector
numeric.ccsGetBlock(sparseMatrix, vector, 3); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsLUPSolve(lup, sparseMatrix); // $ExpectType number[] || Vector
numeric.ccsScatter(sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsGather(sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsadd(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsadd(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsaddMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccssub(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccssub(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccssubMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsmul(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsmul(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsmulMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsdiv(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsdiv(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsdivMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsmod(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsmod(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsmodMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsand(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsand(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsandMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsor(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsor(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsorMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccseq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccseq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccseqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult

numeric.ccsneq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsneq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsneqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult

numeric.ccslt(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccslt(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsltMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult

numeric.ccsgt(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsgt(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsgtMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult

numeric.ccsleq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsleq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsleqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult

numeric.ccsgeq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsgeq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult
numeric.ccsgeqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]] || CCSComparisonResult

numeric.ccsband(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsband(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsbandMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsbor(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsbor(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsborMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsbxor(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsbxor(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsbxorMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccslshift(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccslshift(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccslshiftMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsrshift(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsrshift(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsrshiftMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

numeric.ccsrrshift(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsrrshift(2, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix
numeric.ccsrrshiftMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]] || SparseMatrix

const lu = numeric.cLU(matrix);
numeric.cLUSolve(lu, vector); // $ExpectType number[] || Vector
numeric.cgrid(2, "L"); // $ExpectType number[][] || Matrix
numeric.cdelsq(matrix); // $ExpectType number[][] || Matrix
numeric.cdotmv(matrix, vector); // $ExpectType number[] || Vector

const spline = numeric.spline(vector, matrix, "periodic", 3);
spline.diff().roots(); // $ExpectType number[] || Vector
spline.at(vector); // $ExpectType number | number[] || number | Vector

numeric.uncmin((x: number[]) => 23, vector, 2, null, 3, () => undefined, {
    Hinv: matrix
});
numeric.gradient((x: number[]) => 44, vector); // $ExpectType number[] || Vector

const dopri = numeric.dopri(
    1,
    1,
    1,
    (x = 23, y = 44) => 44,
    2,
    3,
    (x = 23, y = 44) => 44
);
dopri.at(vector); // $ExpectType number[] | number[][] || Vector | Matrix

numeric.echelonize(matrix); // $ExpectType { I: number[][]; A: number[][]; P: number[]; } || { I: Matrix; A: Matrix; P: Vector; }
const temp1: { solution: number | number[]; message: string; iterations: number; } =
    numeric.solveLP(vector, matrix, vector, matrix, matrix, 3, 4);

const temp2: { solution: number[]; value: number[]; unconstrained_solution: number[]; iterations: number[]; iact: number[]; message: string; } =
    numeric.solveQP(matrix, vector, matrix, vector, 3, 44);

numeric.svd(matrix); // $ExpectType { U: number[][]; S: number[]; V: number[][]; } || { U: Matrix; S: Vector; V: Matrix; }
