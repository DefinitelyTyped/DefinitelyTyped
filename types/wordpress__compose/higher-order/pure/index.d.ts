import { ComponentType } from "@wordpress/element";

// prettier-ignore
declare function pure<T extends ComponentType<any>>(component: T):
    T extends ComponentType<infer U> ? ComponentType<U> :
    never;

export default pure;
