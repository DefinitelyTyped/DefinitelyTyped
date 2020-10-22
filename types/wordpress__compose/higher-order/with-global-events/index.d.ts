import { ComponentClass, ComponentType } from 'react';

// prettier-ignore
declare function withGlobalEvents(eventMapper: { [k in keyof WindowEventMap]?: string }):
    <T extends ComponentClass<any>>(component: T) =>
        T extends ComponentClass<infer U> ? ComponentType<U> :
        never;

export default withGlobalEvents;
