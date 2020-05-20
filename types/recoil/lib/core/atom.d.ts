import { NodeKey } from './state';
import { RecoilValue, RecoilState } from './recoilValue';

export interface AtomOptions<T> {
    key: NodeKey;
    default: RecoilValue<T> | Promise<T> | T;
    // persistence_UNSTABLE?: PersistenceSettings<T>,
    dangerouslyAllowMutability?: boolean;
}

/**
 * Creates an atom, which represents a piece of writeable state
 */
export function atom<T>(options: AtomOptions<T>): RecoilState<T>;
