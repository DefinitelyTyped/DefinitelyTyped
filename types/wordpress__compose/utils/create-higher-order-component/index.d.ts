import { ComponentType } from 'react';

// tslint:disable:no-unnecessary-generics
// prettier-ignore
declare function createHigherOrderComponent<EP = {}>(
    mapComponentToEnhancedComponent: (component: ComponentType<any>) => ComponentType<any>,
    modifierName: string
): <T extends ComponentType<any>>(component: T) =>
    T extends ComponentType<infer OP> ? ComponentType<Omit<OP, keyof EP>> :
    never;

export default createHigherOrderComponent;
