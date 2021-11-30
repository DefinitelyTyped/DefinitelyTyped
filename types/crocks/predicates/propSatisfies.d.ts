import Pred from '../Pred';

/**
 * propSatisfies :: (String | Integer) -> ((a -> Boolean) | Pred) -> Object -> Boolean
 */
declare function propSatisfies(prop: string | number, pred: (val: unknown) => boolean | Pred, obj: object): boolean;
declare function propSatisfies(prop: string | number, pred: (val: any) => boolean | Pred): (obj: object) => boolean;
declare function propSatisfies(prop: string | number): (pred: (val: any) => boolean | Pred) => (obj: object) => boolean;

export default propSatisfies;
