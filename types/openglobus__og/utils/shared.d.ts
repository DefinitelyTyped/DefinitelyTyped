export function getDefault(param: any, def: any): any;
export function isEmpty(v: any): boolean;
export function stamp(obj: any): any;
export function isString(s: any): boolean;
/**
 * Synchronous text file loading. Returns file text.
 * @param {string} fileUrl - File name path.
 * @returns {string} -
 */
export function readTextFile(fileUrl: string): string;
/**
 * Convert html color string to the RGBA number vector.
 * @param {string} htmlColor - HTML string("#C6C6C6" or "#EF5" or "rgb(8,8,8)" or "rgba(8,8,8)") color.
 * @param {number} [opacity] - Opacity for the output vector.
 * @returns {og.math.Vec4} -
 */
export function htmlColorToRgba(htmlColor: string, opacity?: number): any;
export function htmlColorToFloat32Array(htmlColor: any, opacity: any): Float32Array;
/**
 * Convert html color string to the RGB number vector.
 * @param {string} htmlColor - HTML string("#C6C6C6" or "#EF5" or "rgb(8,8,8)" or "rgba(8,8,8)") color.
 * @param {number} [opacity] - Opacity for the output vector.
 * @returns {og.Vec3} -
 */
export function htmlColorToRgb(htmlColor: string): any;
/**
 * Replace template substrings between '{' and '}' tokens.
 * @param {string} template - String with templates in "{" and "}"
 * @param {Object} params - Template named object with subsrtings.
 * @returns {string} -
 *
 * @example <caption>Example from og.terrain that replaces tile indexes in url:</caption>
 * var substrings = {
 *       "x": 12,
 *       "y": 15,
 *       "z": 8
 * }
 * og.utils.stringTemplate("http://earth3.openglobus.org/{z}/{y}/{x}.ddm", substrins);
 * //returns http://earth3.openglobus.org/8/15/12.ddm
 */
export function stringTemplate(template: string, params: any): string;
export function getHTML(template: any, params: any): string;
export function parseHTML(htmlStr: any): ChildNode[];
export function print2d(id: any, text: any, x: any, y: any): void;
export function defaultString(str: any, def: any): any;
export function createVector3(v: any, def: any): any;
export function createVector4(v: any, def: any): any;
export function createColorRGBA(c: any, def: any): any;
export function createColorRGB(c: any, def: any): any;
export function createExtent(e: any, def: any): any;
export function createLonLat(l: any, def: any): any;
export function binarySearchFast(arr: any, x: any): number;
/**
 * Finds an item in a sorted array.
 * @param {Array} ar The sorted array to search.
 * @param {Object} el The item to find in the array.
 * @param {og.utils.binarySearch~compare_fn} compare_fn comparator The function to use to compare the item to
 *        elements in the array.
 * @returns {Number} a negative number  if a is less than b; 0 if a is equal to b;a positive number of a is greater than b.
 *
 * @example
 * // Create a comparator function to search through an array of numbers.
 * function comparator(a, b) {
 *     return a - b;
 * };
 * var numbers = [0, 2, 4, 6, 8];
 * var index = og.utils.binarySearch(numbers, 6, comparator); // 3
 */
export function binarySearch(ar: any[], el: any, compare_fn: any): number;
/**
 * Binary insertion that uses binarySearch algorithm.
 * @param {Array} ar - The sorted array to insert.
 * @param {Object} el - The item to insert.
 * @param {og.utils.binarySearch~compare_fn} compare_fn - comparator The function to use to compare the item to
 *        elements in the array.
 * @returns {Number} Array index position in which item inserted in.
 */
export function binaryInsert(ar: any[], el: any, compare_fn: any): number;
/**
 * Returns two segment lines intersection coordinate.
 * @static
 * @param {og.math.Vec2} start1 - First line first coordinate.
 * @param {og.math.Vec2} end1 - First line second coordinate.
 * @param {og.math.Vec2} start2 - Second line first coordinate.
 * @param {og.math.Vec2} end2 - Second line second coordinate.
 * @param {boolean} [isSegment] - Lines are segments.
 * @return {og.math.Vec2} - Intersection coordinate.
 */
export function getLinesIntersection2v(start1: any, end1: any, start2: any, end2: any, isSegment?: boolean): any;
/**
 * Returns two segment lines intersection coordinate.
 * @static
 * @param {og.math.Vec2} start1 - First line first coordinate.
 * @param {og.math.Vec2} end1 - First line second coordinate.
 * @param {og.math.Vec2} start2 - Second line first coordinate.
 * @param {og.math.Vec2} end2 - Second line second coordinate.
 * @param {boolean} [isSegment] - Lines are segments.
 * @return {og.math.Vec2} - Intersection coordinate.
 */
export function getLinesIntersectionLonLat(start1: any, end1: any, start2: any, end2: any, isSegment?: boolean): any;
/**
 * Converts XML to JSON
 * @static
 * @param {Object} xml - Xml object
 * @return {Object} - Json converted object.
 */
export function xmlToJson(xml: any): any;
export function base64toBlob(base64Data: any, contentType: any): Blob;
export function base64StringToBlog(string: any): Blob;
/**
 * Callback throttling
 * @param {any} func
 * @param {Number} limit
 * @param {Number} skip
 */
export function throttle(func: any, limit: number, skip: number): (...args: any[]) => void;
/**
 *
 * y2-----Q12--------------Q22---
 * |       |     |          |
 * |       |     |          |
 * y-------|-----P----------|----
 * |       |     |          |
 * |       |     |          |
 * |       |     |          |
 * |       |     |          |
 * |       |     |          |
 * y1-----Q11----|---------Q21---
 *         |     |          |
 *         |     |          |
 *         x1    x          x2
 *
 *
 * @param {Number} x -
 * @param {Number} y -
 * @param {Number} fQ11 -
 * @param {Number} fQ21 -
 * @param {Number} fQ12 -
 * @param {Number} fQ22 -
 * @param {Number} [x1=0.0] -
 * @param {Number} [x2=1.0] -
 * @param {Number} [y1=0.0] -
 * @param {Number} [y2=1.0] -
 */
export function blerp(x: number, y: number, fQ11: number, fQ21: number, fQ12: number, fQ22: number, x1?: number, x2?: number, y1?: number, y2?: number): number;
export function blerp2(x: any, y: any, fQ11: any, fQ21: any, fQ12: any, fQ22: any): number;
export function extractElevationTiles(rgbaData: any, outCurrenElevations: any, outChildrenElevations: any): void;
/**
 * Concatenates two the same type arrays
 * @param {TypedArray} a
 * @param {TypedArray} b
 */
export function concatTypedArrays(a: any, b: any): any;
/**
 * Concatenates two the same  arrays
 * @param {TypedArray | Array} a
 * @param {TypedArray | Array} b
 */
export function concatArrays(a: any | any[], b: any | any[]): any;
/**
 * Convert simple array to typed
 * @param arr {Array}
 * @param ctor {Float32ArrayConstructor}
 * @returns {TypedArray}
 */
export function makeArrayTyped(arr: any[], ctor?: Float32ArrayConstructor): any;
/**
 * Convert typed array to array
 * @param arr {TypedArray}
 * @returns {Array}
 */
export function makeArray(arr: any): any[];
/**
 *
 * @param {TypedArray | Array} arr
 * @param {Number} starting
 * @param {Number} deleteCount
 * @param {Array} elements
 */
export function spliceArray(arr: any | any[], starting: number, deleteCount: number, elements: any[]): any;
/**
 *
 * @param {TypedArray} arr
 * @param {Number} starting
 * @param {Number} deleteCount
 * @param {Array} elements
 */
export function spliceTypedArray(arr: any, starting: number, deleteCount: number, elements?: any[]): any;
/**
 * Returns triangle coordinate array from inside of the source triangle array.
 * @static
 * @param {Array.<number>} sourceArr - Source array
 * @param {number} gridSize - Source array square matrix size
 * @param {number} i0 - First row index source array matrix
 * @param {number} j0 - First column index
 * @param {number} size - Square matrix result size.
 * @return{Array.<number>} Triangle coordinates array from the source array.
 * @TODO: optimization
 */
export function getMatrixSubArray(sourceArr: Array<number>, gridSize: number, i0: number, j0: number, size: number): Array<number>;
/**
 * Returns two float32 triangle coordinate arrays from inside of the source triangle array.
 * @static
 * @param {Array.<number>} sourceArr - Source array
 * @param {number} gridSize - Source array square matrix size
 * @param {number} i0 - First row index source array matrix
 * @param {number} j0 - First column index
 * @param {number} size - Square matrix result size.
 * @param {object} outBounds - Output bounds.
 * @return{Array.<number>} Triangle coordinates array from the source array.
 * @TODO: optimization
 */
export function getMatrixSubArrayBoundsExt(sourceArr: Array<number>, sourceArrHigh: any, sourceArrLow: any, noDataVertices: any, gridSize: number, i0: number, j0: number, size: number, outArr: any, outArrHigh: any, outArrLow: any, outBounds: object, outNoDataVertices: any): Array<number>;
export function cloneArray(items: any): any;
/**
 * Returns true if the object pointer is undefined.
 * @function
 * @param {Object} obj - Object pointer.
 * @returns {boolean} Returns true if object is undefined.
 */
export function isUndef(obj: any): boolean;
export namespace castType {
    function string(v: any): any;
    function date(v: any): any;
    function datetime(v: any): any;
    function time(v: any): any;
    function integer(v: any): any;
    function float(v: any): any;
    function boolean(str: any): any;
}
