import { ComponentType } from '@wordpress/element';

// prettier-ignore
declare function withFilters(hookName: string): <T>(wrapped: T) =>
    T extends ComponentType<infer U> ? ComponentType<U> : never;

declare function withFilters<P>(hookName: string): (wrapped: ComponentType<any>) => ComponentType<P>; // tslint:disable-line:no-unnecessary-generics

export default withFilters;
