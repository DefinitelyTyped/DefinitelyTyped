import ComputedProperty from '@ember/object/computed';
/**
 * Deconstructs computed properties into the types which would be returned by `.get()`.
 */
export type UnwrapComputedPropertyGetter<T> =
    T extends ComputedProperty<infer U, any> ? U :
    T;
export type UnwrapComputedPropertyGetters<T> = {
    [P in keyof T]: UnwrapComputedPropertyGetter<T[P]>;
};

export type UnwrapComputedPropertySetter<T> =
    T extends ComputedProperty<any, infer V> ? V :
    T;
export type UnwrapComputedPropertySetters<T> = {
    [P in keyof T]: UnwrapComputedPropertySetter<T[P]>;
};

export type ComputedPropertyGetterFunction<T> = (this: any, key: string) => T;
export type ComputedPropertySetterFunction<T> = (this: any, key: string, newVal: T, oldVal: T) => T;

export interface ComputedPropertyGetterObj<T> {
    get(this: any, key: string): T;
}

export interface ComputedPropertySetterObj<T> {
    set(this: any, key: string, value: T): T;
}
export type ComputedPropertyObj<T> = ComputedPropertyGetterObj<T> | ComputedPropertySetterObj<T> | (ComputedPropertyGetterObj<T> & ComputedPropertySetterObj<T>);

export type ComputedPropertyGetter<T> = ComputedPropertyGetterFunction<T> | ComputedPropertyGetterObj<T>;
export type ComputedPropertySetter<T> = ComputedPropertySetterFunction<T> | ComputedPropertySetterObj<T>;

export type ComputedPropertyCallback<T> = ComputedPropertyGetterFunction<T> | ComputedPropertyObj<T>;
