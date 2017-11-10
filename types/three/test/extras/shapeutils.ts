import { Color, ShapeUtils, Vector2 } from "../../three-core"

const clockWisePoints2D = [[0,2],[2,2],[2,0],[0,0]];
const clockWisePointsAsXY = clockWisePoints2D.map( ([x,y]) => ({x,y}) );
const clockWisePointsAsVector2 = clockWisePoints2D.map( ([x,y]) => new Vector2(x,y));

// -------------------------------------------- area()

// The value can be positive or negative

ShapeUtils.area(clockWisePointsAsXY); // $ExpectType number
ShapeUtils.area(clockWisePointsAsVector2); // $ExpectType number

ShapeUtils.area(clockWisePoints2D); // $ExpectError

// -------------------------------------------- isClockWise()

// Always returns true or false. False if there is an error

ShapeUtils.isClockWise(clockWisePointsAsXY); // $ExpectType boolean
ShapeUtils.isClockWise(clockWisePointsAsVector2); // $ExpectType boolean

ShapeUtils.isClockWise(clockWisePoints2D); // $ExpectError

// -------------------------------------------- triangulate()

// Will either return tuples of indices ([number, number, number][]),
// or original points/objects/vectors, see PR comments for more:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/21192#issuecomment-341653093

ShapeUtils.triangulate(clockWisePoints2D, true); // $ExpectType [number, number, number][]
ShapeUtils.triangulate(clockWisePoints2D, false); // $ExpectType number[][][]
ShapeUtils.triangulate(clockWisePoints2D); // $ExpectType number[][][]

ShapeUtils.triangulate(clockWisePointsAsXY, true); // $ExpectType [number, number, number][]
ShapeUtils.triangulate(clockWisePointsAsXY, false); // $ExpectType { x: number; y: number; }[][]
ShapeUtils.triangulate(clockWisePointsAsXY); // $ExpectType { x: number; y: number; }[][]

ShapeUtils.triangulate(clockWisePointsAsVector2, true); // $ExpectType [number, number, number][]
ShapeUtils.triangulate(clockWisePointsAsVector2, false); // $ExpectType Vector2[][]
ShapeUtils.triangulate(clockWisePointsAsVector2); // $ExpectType Vector2[][]

ShapeUtils.triangulate([new Color('red'), new Color('yellow')]); // $ExpectError

// -------------------------------------------- triangulateShape()

ShapeUtils.triangulateShape(clockWisePointsAsVector2, []); // $ExpectType number[][]
ShapeUtils.triangulateShape(clockWisePointsAsVector2, [clockWisePointsAsVector2]); // $ExpectType number[][]

ShapeUtils.triangulateShape(clockWisePointsAsVector2); // $ExpectError
