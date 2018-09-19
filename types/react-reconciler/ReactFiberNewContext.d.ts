import { ReactContext } from './ReactTypes';

export interface ContextDependency<T> {
    context: ReactContext<T>;
    observedBits: number;
    next: ContextDependency<any> | null;
}
