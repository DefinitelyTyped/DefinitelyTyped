import { RecoilValue, RecoilState, RecoilValueReadOnly } from './recoilValue';
import { DefaultValue } from './node';

export type GetRecoilValue = <T>(recoilVal: RecoilValue<T>) => T;
export type SetRecoilState = <T>(
    recoilVal: RecoilState<T>,
    newVal: T | DefaultValue | ((prevValue: T) => T | DefaultValue),
) => void;

export type ResetRecoilState = (recoilVal: RecoilState<any>) => void;

export interface ReadOnlySelectorOptions<T> {
    key: string;
    get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;

    // cacheImplementation_UNSTABLE?: CacheImplementation<Loadable<T>>,
    dangerouslyAllowMutability?: boolean;
}

export interface ReadWriteSelectorOptions<T> extends ReadOnlySelectorOptions<T> {
    set: (
        opts: {
            set: SetRecoilState;
            get: GetRecoilValue;
            reset: ResetRecoilState;
        },
        newValue: T | DefaultValue,
    ) => void;
}

export function selector<T>(options: ReadWriteSelectorOptions<T>): RecoilState<T>;
export function selector<T>(options: ReadOnlySelectorOptions<T>): RecoilValueReadOnly<T>;
