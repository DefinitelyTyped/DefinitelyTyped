import { RecoilValue, RecoilState } from '../core/recoilValue';
import { AtomOptions } from '../core/atom';

export type Primitive = void | null | boolean | number | string;

export type AtomFamilyParameter =
    | Primitive
    | ReadonlyArray<AtomFamilyParameter>
    | Readonly<{ [k: string]: AtomFamilyParameter }>;

export type AtomFamilyOptions<T, P extends AtomFamilyParameter> = Readonly<
    Omit<AtomOptions<T>, 'default'> & {
        default: RecoilValue<T> | Promise<T> | T | ((param: P) => T | RecoilValue<T> | Promise<T>);
    }
>;

export function atomFamily<T, P extends AtomFamilyParameter>(
    options: AtomFamilyOptions<T, P>,
): (param: P) => RecoilState<T>;
