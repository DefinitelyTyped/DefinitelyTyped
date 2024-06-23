/**
 * getPathOr :: a -> [ (String | Integer) ] -> b -> a
 */
declare function getPathOr<A extends any>(a: A, p: ReadonlyArray<string | number>, b: any): A;
declare function getPathOr<A extends any>(a: A, p: ReadonlyArray<string | number>): (b: any) => A;
declare function getPathOr<A extends any>(a: A): (p: ReadonlyArray<string | number>) => (b: any) => A;

export default getPathOr;
