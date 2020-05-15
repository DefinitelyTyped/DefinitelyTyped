import { NodeKey } from './state';
import { RecoilValue, RecoilState } from './recoilValue';

export type AtomOptions<T> = Readonly<{
    key: NodeKey;
    default: RecoilValue<T> | Promise<T> | T;
    // persistence_UNSTABLE?: PersistenceSettings<T>,
    dangerouslyAllowMutability?: boolean;
}>;

export function atom<T>(options: AtomOptions<T>): RecoilState<T>;
