/**
 * getPropOr :: a -> (String | Integer) -> b -> a
 */
declare function getPropOr<A extends any>(a: A, p: string | number, b: any): A;
declare function getPropOr<A extends any>(a: A, p: string | number): (b: any) => A;
declare function getPropOr<A extends any>(a: A): (p: string | number) => (b: any) => A;

export default getPropOr;
