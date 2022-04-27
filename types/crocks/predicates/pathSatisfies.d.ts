import Pred from '../Pred';

/**
 * pathSatisfies :: [ String | Integer ] -> ((a -> Boolean) | Pred) -> Object -> Boolean
 */
export function pathSatisfies(path: ReadonlyArray<string | number>, pred: (val: any) => boolean | Pred, obj: object): boolean;
export function pathSatisfies(path: ReadonlyArray<string | number>, pred: (val: any) => boolean | Pred): (obj: object) => boolean;
export function pathSatisfies(path: ReadonlyArray<string | number>): (pred: (val: any) => boolean | Pred) => (obj: object) => boolean;

export default pathSatisfies;
