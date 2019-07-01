import { ComponentClass, ComponentType } from '@wordpress/element';

// prettier-ignore
declare function withState<SP extends object>(initialState: { [k in keyof SP]: SP[k] }):
    <T extends ComponentType<any>>(component: T) =>
        T extends ComponentType<infer U> ? ComponentClass<Omit<U, keyof SP | 'setState'>, SP> :
        never;

export default withState;
