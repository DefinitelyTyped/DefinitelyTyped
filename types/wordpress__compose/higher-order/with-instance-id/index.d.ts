import { ComponentType } from 'react';

// prettier-ignore
declare function withInstanceId<T extends ComponentType<any>>(wrapped: T):
    T extends ComponentType<infer U> ? ComponentType<Omit<U, 'instanceId'>> :
    never;

export default withInstanceId;
