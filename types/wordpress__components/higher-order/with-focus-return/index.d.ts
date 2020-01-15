import { ComponentType } from '@wordpress/element';

export interface WFROptions {
    onFocusReturn?(): boolean | void;
}

export const Provider: ComponentType;

// prettier-ignore
declare function withFocusReturn<T extends ComponentType<any>>(wrapped: T):
    T extends ComponentType<infer U> ? ComponentType<U> :
    never;

// prettier-ignore
declare function withFocusReturn(options: WFROptions):
    <T extends ComponentType<any>>(wrapped: T) =>
        T extends ComponentType<infer U> ? ComponentType<U> :
        never;

export default withFocusReturn;
