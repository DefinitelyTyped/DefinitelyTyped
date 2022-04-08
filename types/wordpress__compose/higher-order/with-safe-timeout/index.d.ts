import { ComponentType } from 'react';

// prettier-ignore
declare function withSafeTimeout<T extends ComponentType<any>>(component: T):
    T extends ComponentType<infer U> ? ComponentType<Omit<U, 'setTimeout'>> :
    never;

export default withSafeTimeout;
