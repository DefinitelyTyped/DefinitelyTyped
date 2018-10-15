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

numeric.dim(matrix); // $ExpectType number[]
numeric.same(25, [25]); // $ExpectType boolean
numeric.rep([2, 5], true);
numeric.dotMMsmall(matrix, matrix); // $ExpectType number[][]
numeric.dotMMbig(matrix, matrix); // $ExpectType number[][]
numeric.dotMV(matrix, vector); // $ExpectType number[]
numeric.dotVM(vector, matrix); // $ExpectType number[]
numeric.dotVV(vector, vector); // $ExpectType number
numeric.dot(vector, matrix); // $ExpectType number | number[] | number[][]
numeric.diag([25, 52]); // $ExpectType number[][]
numeric.getDiag(matrix); // $ExpectType number[]
numeric.identity(24); // $ExpectType number[][]

numeric.abs(matrix); // $ExpectType number[][]
numeric.absV(vector); // $ExpectType number[]
numeric.abseqV(vector); // $ExpectType number[]
numeric.abseq(matrix); // $ExpectType number[][]

numeric.acos(matrix); // $ExpectType number[][]
numeric.acosV(vector); // $ExpectType number[]
numeric.acoseqV(vector); // $ExpectType number[]
numeric.acoseq(matrix); // $ExpectType number[][]

numeric.asin(matrix); // $ExpectType number[][]
numeric.asinV(vector); // $ExpectType number[]
numeric.asineqV(vector); // $ExpectType number[]
numeric.asineq(matrix); // $ExpectType number[][]

numeric.atan(matrix); // $ExpectType number[][]
numeric.atanV(vector); // $ExpectType number[]
numeric.ataneqV(vector); // $ExpectType number[]
numeric.ataneq(matrix); // $ExpectType number[][]

numeric.ceil(matrix); // $ExpectType number[][]
numeric.ceilV(vector); // $ExpectType number[]
numeric.ceileqV(vector); // $ExpectType number[]
numeric.ceileq(matrix); // $ExpectType number[][]

numeric.cos(matrix); // $ExpectType number[][]
numeric.cosV(vector); // $ExpectType number[]
numeric.coseqV(vector); // $ExpectType number[]
numeric.coseq(matrix); // $ExpectType number[][]

numeric.exp(matrix); // $ExpectType number[][]
numeric.expV(vector); // $ExpectType number[]
numeric.expeqV(vector); // $ExpectType number[]
numeric.expeq(matrix); // $ExpectType number[][]

numeric.floor(matrix); // $ExpectType number[][]
numeric.floorV(vector); // $ExpectType number[]
numeric.flooreqV(vector); // $ExpectType number[]
numeric.flooreq(matrix); // $ExpectType number[][]

numeric.log(matrix); // $ExpectType number[][]
numeric.logV(vector); // $ExpectType number[]
numeric.logeqV(vector); // $ExpectType number[]
numeric.logeq(matrix); // $ExpectType number[][]

numeric.round(matrix); // $ExpectType number[][]
numeric.roundV(vector); // $ExpectType number[]
numeric.roundeqV(vector); // $ExpectType number[]
numeric.roundeq(matrix); // $ExpectType number[][]

numeric.sin(matrix); // $ExpectType number[][]
numeric.sinV(vector); // $ExpectType number[]
numeric.sineqV(vector); // $ExpectType number[]
numeric.sineq(matrix); // $ExpectType number[][]

numeric.sqrt(matrix); // $ExpectType number[][]
numeric.sqrtV(vector); // $ExpectType number[]
numeric.sqrteqV(vector); // $ExpectType number[]
numeric.sqrteq(matrix); // $ExpectType number[][]

numeric.tan(matrix); // $ExpectType number[][]
numeric.tanV(vector); // $ExpectType number[]
numeric.taneqV(vector); // $ExpectType number[]
numeric.taneq(matrix); // $ExpectType number[][]

numeric.isNaN(vector); // $ExpectType boolean[]
numeric.isNaN(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.isNaNV(vector); // $ExpectType boolean[]
numeric.isNaNeqV(vector); // $ExpectType boolean[]
numeric.isNaNeq(vector); // $ExpectType boolean[]
numeric.isNaNeq(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>

numeric.isFinite(vector); // $ExpectType boolean[]
numeric.isFinite(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.isFiniteV(vector); // $ExpectType boolean[]
numeric.isFiniteeqV(vector); // $ExpectType boolean[]
numeric.isFiniteeq(vector); // $ExpectType boolean[]
numeric.isFiniteeq(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>

numeric.neg(matrix); // $ExpectType number[][]
numeric.negV(vector); // $ExpectType number[]
numeric.negeqV(vector); // $ExpectType number[]
numeric.negeq(matrix); // $ExpectType number[][]

numeric.bnot(matrix); // $ExpectType number[][]
numeric.bnotV(vector); // $ExpectType number[]
numeric.bnoteqV(vector); // $ExpectType number[]
numeric.bnoteq(matrix); // $ExpectType number[][]

numeric.not(2); // $ExpectType boolean
numeric.not(vector); // $ExpectType boolean[]
numeric.not(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.notV(vector); // $ExpectType boolean[]
numeric.noteq(2); // $ExpectType boolean
numeric.noteq(vector); // $ExpectType boolean[]
numeric.noteq(threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.noteqV(vector); // $ExpectType boolean[]

numeric.clone(vector); // $ExpectType number[]
numeric.cloneV(vector); // $ExpectType NonNullPrimitive[]
numeric.cloneeq(vector); // $ExpectType NonNullPrimitive[]
numeric.cloneeqV(vector); // $ExpectType NonNullPrimitive[]

numeric.add(2, 5, 6); // $ExpectType number
numeric.add(2, 3, vector); // $ExpectType number[]
numeric.add(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["+"](2, 5, 6); // $ExpectType number
numeric["+"](2, 3, vector); // $ExpectType number[]
numeric["+"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.addVV(vector, vector); // $ExpectType number[]
numeric.addSV(2, vector); // $ExpectType number[]
numeric.addVS(vector, 2); // $ExpectType number[]
numeric.addeq(vector, 3); // $ExpectType number[]
numeric.addeqV(vector, vector); // $ExpectType number[]
numeric.addeqS(vector, 3); // $ExpectType number[]

numeric.sub(2, 5, 6); // $ExpectType number
numeric.sub(2, 3, vector); // $ExpectType number[]
numeric.sub(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["-"](2, 5, 6); // $ExpectType number
numeric["-"](2, 3, vector); // $ExpectType number[]
numeric["-"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.subVV(vector, vector); // $ExpectType number[]
numeric.subSV(2, vector); // $ExpectType number[]
numeric.subVS(vector, 2); // $ExpectType number[]
numeric.subeq(vector, 3); // $ExpectType number[]
numeric.subeqV(vector, vector); // $ExpectType number[]
numeric.subeqS(vector, 3); // $ExpectType number[]

numeric.mul(2, 5, 6); // $ExpectType number
numeric.mul(2, 3, vector); // $ExpectType number[]
numeric.mul(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["*"](2, 5, 6); // $ExpectType number
numeric["*"](2, 3, vector); // $ExpectType number[]
numeric["*"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.mulVV(vector, vector); // $ExpectType number[]
numeric.mulSV(2, vector); // $ExpectType number[]
numeric.mulVS(vector, 2); // $ExpectType number[]
numeric.muleq(vector, 3); // $ExpectType number[]
numeric.muleqV(vector, vector); // $ExpectType number[]
numeric.muleqS(vector, 3); // $ExpectType number[]

numeric.div(2, 5, 6); // $ExpectType number
numeric.div(2, 3, vector); // $ExpectType number[]
numeric.div(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["/"](2, 5, 6); // $ExpectType number
numeric["/"](2, 3, vector); // $ExpectType number[]
numeric["/"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.divVV(vector, vector); // $ExpectType number[]
numeric.divSV(2, vector); // $ExpectType number[]
numeric.divVS(vector, 2); // $ExpectType number[]
numeric.diveq(vector, 3); // $ExpectType number[]
numeric.diveqV(vector, vector); // $ExpectType number[]
numeric.diveqS(vector, 3); // $ExpectType number[]

numeric.mod(2, 5, 6); // $ExpectType number
numeric.mod(2, 3, vector); // $ExpectType number[]
numeric.mod(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["%"](2, 5, 6); // $ExpectType number
numeric["%"](2, 3, vector); // $ExpectType number[]
numeric["%"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.modVV(vector, vector); // $ExpectType number[]
numeric.modSV(2, vector); // $ExpectType number[]
numeric.modVS(vector, 2); // $ExpectType number[]
numeric.modeq(vector, 3); // $ExpectType number[]
numeric.modeqV(vector, vector); // $ExpectType number[]
numeric.modeqS(vector, 3); // $ExpectType number[]

numeric.and(2, 5, 6); // $ExpectType number
numeric.and(2, 3, vector); // $ExpectType number[]
numeric.and(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["&&"](2, 5, 6); // $ExpectType number
numeric["&&"](2, 3, vector); // $ExpectType number[]
numeric["&&"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.andVV(vector, vector); // $ExpectType number[]
numeric.andSV(2, vector); // $ExpectType number[]
numeric.andVS(vector, 2); // $ExpectType number[]
numeric.andeq(vector, 3); // $ExpectType number[]
numeric.andeqV(vector, vector); // $ExpectType number[]
numeric.andeqS(vector, 3); // $ExpectType number[]

numeric.or(2, 5, 6); // $ExpectType number
numeric.or(2, 3, vector); // $ExpectType number[]
numeric.or(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["||"](2, 5, 6); // $ExpectType number
numeric["||"](2, 3, vector); // $ExpectType number[]
numeric["||"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.orVV(vector, vector); // $ExpectType number[]
numeric.orSV(2, vector); // $ExpectType number[]
numeric.orVS(vector, 2); // $ExpectType number[]
numeric.oreq(vector, 3); // $ExpectType number[]
numeric.oreqV(vector, vector); // $ExpectType number[]
numeric.oreqS(vector, 3); // $ExpectType number[]

numeric.eq(2, 5); // $ExpectType boolean
numeric.eq(2, vector); // $ExpectType boolean[]
numeric.eq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[]
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.eqVV(vector, vector); // $ExpectType boolean[]
numeric.eqSV(2, vector); // $ExpectType boolean[]
numeric.eqVS(vector, 2); // $ExpectType boolean[]
numeric.eqeq(vector, 3); // $ExpectType boolean[]
numeric.eqeqV(vector, vector); // $ExpectType boolean[]
numeric.eqeqS(vector, 3); // $ExpectType boolean[]

numeric.neq(2, 5); // $ExpectType boolean
numeric.neq(2, vector); // $ExpectType boolean[]
numeric.neq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[]
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.neqVV(vector, vector); // $ExpectType boolean[]
numeric.neqSV(2, vector); // $ExpectType boolean[]
numeric.neqVS(vector, 2); // $ExpectType boolean[]
numeric.neqeq(vector, 3); // $ExpectType boolean[]
numeric.neqeqV(vector, vector); // $ExpectType boolean[]
numeric.neqeqS(vector, 3); // $ExpectType boolean[]

numeric.lt(2, 5); // $ExpectType boolean
numeric.lt(2, vector); // $ExpectType boolean[]
numeric.lt(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[]
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.ltVV(vector, vector); // $ExpectType boolean[]
numeric.ltSV(2, vector); // $ExpectType boolean[]
numeric.ltVS(vector, 2); // $ExpectType boolean[]
numeric.lteq(vector, 3); // $ExpectType boolean[]
numeric.lteqV(vector, vector); // $ExpectType boolean[]
numeric.lteqS(vector, 3); // $ExpectType boolean[]

numeric.gt(2, 5); // $ExpectType boolean
numeric.gt(2, vector); // $ExpectType boolean[]
numeric.gt(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[]
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.gtVV(vector, vector); // $ExpectType boolean[]
numeric.gtSV(2, vector); // $ExpectType boolean[]
numeric.gtVS(vector, 2); // $ExpectType boolean[]
numeric.gteq(vector, 3); // $ExpectType boolean[]
numeric.gteqV(vector, vector); // $ExpectType boolean[]
numeric.gteqS(vector, 3); // $ExpectType boolean[]

numeric.leq(2, 5); // $ExpectType boolean
numeric.leq(2, vector); // $ExpectType boolean[]
numeric.leq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[]
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.leqVV(vector, vector); // $ExpectType boolean[]
numeric.leqSV(2, vector); // $ExpectType boolean[]
numeric.leqVS(vector, 2); // $ExpectType boolean[]
numeric.leqeq(vector, 3); // $ExpectType boolean[]
numeric.leqeqV(vector, vector); // $ExpectType boolean[]
numeric.leqeqS(vector, 3); // $ExpectType boolean[]

numeric.geq(2, 5); // $ExpectType boolean
numeric.geq(2, vector); // $ExpectType boolean[]
numeric.geq(threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric["==="](2, 5); // $ExpectType boolean
numeric["==="](2, vector); // $ExpectType boolean[]
numeric["==="](threeDimensionalMatrix, threeDimensionalMatrix); // $ExpectType MultidimensionalArray<boolean>
numeric.geqVV(vector, vector); // $ExpectType boolean[]
numeric.geqSV(2, vector); // $ExpectType boolean[]
numeric.geqVS(vector, 2); // $ExpectType boolean[]
numeric.geqeq(vector, 3); // $ExpectType boolean[]
numeric.geqeqV(vector, vector); // $ExpectType boolean[]
numeric.geqeqS(vector, 3); // $ExpectType boolean[]

numeric.band(2, 5, 6); // $ExpectType number
numeric.band(2, 3, vector); // $ExpectType number[]
numeric.band(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["&"](2, 5, 6); // $ExpectType number
numeric["&"](2, 3, vector); // $ExpectType number[]
numeric["&"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.bandVV(vector, vector); // $ExpectType number[]
numeric.bandSV(2, vector); // $ExpectType number[]
numeric.bandVS(vector, 2); // $ExpectType number[]
numeric.bandeq(vector, 3); // $ExpectType number[]
numeric.bandeqV(vector, vector); // $ExpectType number[]
numeric.bandeqS(vector, 3); // $ExpectType number[]

numeric.bor(2, 5, 6); // $ExpectType number
numeric.bor(2, 3, vector); // $ExpectType number[]
numeric.bor(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["|"](2, 5, 6); // $ExpectType number
numeric["|"](2, 3, vector); // $ExpectType number[]
numeric["|"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.borVV(vector, vector); // $ExpectType number[]
numeric.borSV(2, vector); // $ExpectType number[]
numeric.borVS(vector, 2); // $ExpectType number[]
numeric.boreq(vector, 3); // $ExpectType number[]
numeric.boreqV(vector, vector); // $ExpectType number[]
numeric.boreqS(vector, 3); // $ExpectType number[]

numeric.bxor(2, 5, 6); // $ExpectType number
numeric.bxor(2, 3, vector); // $ExpectType number[]
numeric.bxor(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["^"](2, 5, 6); // $ExpectType number
numeric["^"](2, 3, vector); // $ExpectType number[]
numeric["^"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.bxorVV(vector, vector); // $ExpectType number[]
numeric.bxorSV(2, vector); // $ExpectType number[]
numeric.bxorVS(vector, 2); // $ExpectType number[]
numeric.bxoreq(vector, 3); // $ExpectType number[]
numeric.bxoreqV(vector, vector); // $ExpectType number[]
numeric.bxoreqS(vector, 3); // $ExpectType number[]

numeric.lshift(2, 5, 6); // $ExpectType number
numeric.lshift(2, 3, vector); // $ExpectType number[]
numeric.lshift(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric["<<"](2, 5, 6); // $ExpectType number
numeric["<<"](2, 3, vector); // $ExpectType number[]
numeric["<<"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.lshiftVV(vector, vector); // $ExpectType number[]
numeric.lshiftSV(2, vector); // $ExpectType number[]
numeric.lshiftVS(vector, 2); // $ExpectType number[]
numeric.lshifteq(vector, 3); // $ExpectType number[]
numeric.lshifteqV(vector, vector); // $ExpectType number[]
numeric.lshifteqS(vector, 3); // $ExpectType number[]

numeric.rshift(2, 5, 6); // $ExpectType number
numeric.rshift(2, 3, vector); // $ExpectType number[]
numeric.rshift(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric[">>"](2, 5, 6); // $ExpectType number
numeric[">>"](2, 3, vector); // $ExpectType number[]
numeric[">>"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.rshiftVV(vector, vector); // $ExpectType number[]
numeric.rshiftSV(2, vector); // $ExpectType number[]
numeric.rshiftVS(vector, 2); // $ExpectType number[]
numeric.rshifteq(vector, 3); // $ExpectType number[]
numeric.rshifteqV(vector, vector); // $ExpectType number[]
numeric.rshifteqS(vector, 3); // $ExpectType number[]

numeric.rrshift(2, 5, 6); // $ExpectType number
numeric.rrshift(2, 3, vector); // $ExpectType number[]
numeric.rrshift(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric[">>>"](2, 5, 6); // $ExpectType number
numeric[">>>"](2, 3, vector); // $ExpectType number[]
numeric[">>>"](threeDimensionalMatrix, 2, 4); // $ExpectType number[][][]
numeric.rrshiftVV(vector, vector); // $ExpectType number[]
numeric.rrshiftSV(2, vector); // $ExpectType number[]
numeric.rrshiftVS(vector, 2); // $ExpectType number[]
numeric.rrshifteq(vector, 3); // $ExpectType number[]
numeric.rrshifteqV(vector, vector); // $ExpectType number[]
numeric.rrshifteqS(vector, 3); // $ExpectType number[]

numeric.atan2(2, 5, 6); // $ExpectType number
numeric.atan2(2, 3, vector); // $ExpectType number[]
numeric.atan2(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.atan2VV(vector, vector); // $ExpectType number[]
numeric.atan2SV(2, vector); // $ExpectType number[]
numeric.atan2VS(vector, 2); // $ExpectType number[]
numeric.atan2eq(vector, 3); // $ExpectType number[]
numeric.atan2eqV(vector, vector); // $ExpectType number[]
numeric.atan2eqS(vector, 3); // $ExpectType number[]

numeric.pow(2, 5, 6); // $ExpectType number
numeric.pow(2, 3, vector); // $ExpectType number[]
numeric.pow(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.powVV(vector, vector); // $ExpectType number[]
numeric.powSV(2, vector); // $ExpectType number[]
numeric.powVS(vector, 2); // $ExpectType number[]
numeric.poweq(vector, 3); // $ExpectType number[]
numeric.poweqV(vector, vector); // $ExpectType number[]
numeric.poweqS(vector, 3); // $ExpectType number[]

numeric.max(2, 5, 6); // $ExpectType number
numeric.max(2, 3, vector); // $ExpectType number[]
numeric.max(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.maxVV(vector, vector); // $ExpectType number[]
numeric.maxSV(2, vector); // $ExpectType number[]
numeric.maxVS(vector, 2); // $ExpectType number[]
numeric.maxeq(vector, 3); // $ExpectType number[]
numeric.maxeqV(vector, vector); // $ExpectType number[]
numeric.maxeqS(vector, 3); // $ExpectType number[]

numeric.min(2, 5, 6); // $ExpectType number
numeric.min(2, 3, vector); // $ExpectType number[]
numeric.min(threeDimensionalMatrix, 2, threeDimensionalMatrix); // $ExpectType number[][][]
numeric.minVV(vector, vector); // $ExpectType number[]
numeric.minSV(2, vector); // $ExpectType number[]
numeric.minVS(vector, 2); // $ExpectType number[]
numeric.mineq(vector, 3); // $ExpectType number[]
numeric.mineqV(vector, vector); // $ExpectType number[]
numeric.mineqS(vector, 3); // $ExpectType number[]

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

numeric.trunc(vector, 3); // $ExpectType number[]
numeric.truncVV(vector, vector); // $ExpectType number[]
numeric.truncVS(vector, 4); // $ExpectType number[]
numeric.truncSV(3, vector); // $ExpectType number[]

numeric.inv(matrix); // $ExpectType number[][]
numeric.det(matrix); // $ExpectType number
numeric.transpose(matrix); // $ExpectType number[][]
numeric.negtranspose(matrix); // $ExpectType number[][]
numeric.random(vector); // $ExpectType NonScalar
numeric.norm2(threeDimensionalMatrix); // $ExpectType number
numeric.linspace(1, 3, 5); // $ExpectType number[]
numeric.getBlock(threeDimensionalMatrix, vector, vector); // $ExpectType number[][][]
const block: number[][][] = numeric.setBlock(
    threeDimensionalMatrix,
    vector,
    vector,
    threeDimensionalMatrix
);
numeric.blockMatrix(matrix); // $ExpectType number[][]
numeric.tensor(3, 5); // $ExpectType number
numeric.tensor(vector, vector); // $ExpectType number[][]

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

numeric.house(vector); // $ExpectType number[]
numeric.toUpperHessenberg(matrix); // $ExpectType { H: number[][]; Q: number[][]; }
numeric.QRFrancis(matrix, 25); // $ExpectType { Q: number[][]; B: number[][]; }
numeric.eig(matrix); // $ExpectType { lambda: Tensor; E: Tensor; }

numeric.ccsSparse(matrix); // $ExpectType [number[], number[], number[]]
numeric.ccsFull(sparseMatrix); // $ExpectType number[][]
numeric.ccsTSolve(sparseMatrix, vector, vector, vector, vector); // $ExpectType number[]
numeric.ccsDot(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
const lup = numeric.ccsLUP(sparseMatrix, 4);
numeric.ccsDim(sparseMatrix); // $ExpectType number[]
numeric.ccsGetBlock(sparseMatrix, vector, 3); // $ExpectType [number[], number[], number[]]
numeric.ccsLUPSolve(lup, sparseMatrix); // $ExpectType number[]
numeric.ccsScatter(sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsGather(sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsadd(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsadd(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsaddMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccssub(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccssub(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccssubMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsmul(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsmul(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsmulMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsdiv(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsdiv(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsdivMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsmod(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsmod(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsmodMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsand(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsand(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsandMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsor(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsor(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsorMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccseq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccseq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccseqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]

numeric.ccsneq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsneq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsneqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]

numeric.ccslt(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccslt(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsltMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]

numeric.ccsgt(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsgt(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsgtMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]

numeric.ccsleq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsleq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsleqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]

numeric.ccsgeq(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsgeq(2, sparseMatrix); // $ExpectType [number[], number[], boolean[]]
numeric.ccsgeqMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], boolean[]]

numeric.ccsband(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsband(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsbandMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsbor(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsbor(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsborMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsbxor(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsbxor(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsbxorMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccslshift(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccslshift(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccslshiftMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsrshift(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsrshift(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsrshiftMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

numeric.ccsrrshift(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsrrshift(2, sparseMatrix); // $ExpectType [number[], number[], number[]]
numeric.ccsrrshiftMM(sparseMatrix, sparseMatrix); // $ExpectType [number[], number[], number[]]

const lu = numeric.cLU(matrix);
numeric.cLUSolve(lu, vector); // $ExpectType number[]
numeric.cgrid(2, "L"); // $ExpectType number[][]
numeric.cdelsq(matrix); // $ExpectType number[][]
numeric.cdotmv(matrix, vector); // $ExpectType number[]

const spline = numeric.spline(vector, matrix, "periodic", 3);
spline.diff().roots(); // $ExpectType number[]
spline.at(vector); // $ExpectType number | number[]

numeric.uncmin((x: number[]) => 23, vector, 2, null, 3, () => undefined, {
    Hinv: matrix
});
numeric.gradient((x: number[]) => 44, vector); // $ExpectType number[]

const dopri = numeric.dopri(
    1,
    1,
    1,
    (x = 23, y = 44) => 44,
    2,
    3,
    (x = 23, y = 44) => 44
);
dopri.at(vector); // $ExpectType number[] | number[][]

numeric.echelonize(matrix); // $ExpectType { I: number[][]; A: number[][]; P: number[]; }
numeric.solveLP(vector, matrix, vector, matrix, matrix, 3, 4); // $ExpectType { solution: number | number[]; message: string; iterations: number; }

numeric.solveQP(matrix, vector, matrix, vector, 3, 44); // $ExpectType { solution: number[]; value: number[]; unconstrained_solution: number[]; iterations: number[]; iact: number[]; message: string; }

numeric.svd(matrix); // $ExpectType { U: number[][]; S: number[]; V: number[][]; }
