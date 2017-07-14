import { ComponentClass } from "react";
import { ComponentConstructor, InjectedFormProps } from "redux-form";

/*
export type FormValuesDecorator<FormData = {}, P = {}, T = {}> =
    (component: ComponentConstructor<P & InjectedFormProps<FormData, P>>) => ComponentClass<P & InjectedFormProps<FormData, P> & Pick<FormData, keyof FormData>>;

declare function formValues<
    FormData,
    Obj extends { [K in keyof FormData]: string },
    P = {}
>(obj: Obj): FormValuesDecorator<FormData, P, Obj>;

declare function formValues<
    FormData,
    Name extends keyof FormData,
    P = {}
>(...names: Name[]): FormValuesDecorator<FormData, P, Pick<FormData, Name>>;


declare function formValues<
    FormData,
    Name extends keyof FormData,
    P = {},
    Obj extends { [K in keyof FormData]: string } = {},
    InjectedValues = { [K in Name]: FormData[K] }
>(
    obj: Obj
): (component: ComponentConstructor<P & InjectedValues>) => ComponentClass<P & InjectedValues>;
*/

// -=----------===

declare function formValues<
    Values,
    P = {}
>(obj: Values): (component: ComponentConstructor<P & { [K in keyof Values]: any }>) => ComponentClass<P & { [K in keyof Values]: any }>;

declare function formValues<
    FormData = {},
    K extends keyof FormData = keyof FormData,
    P = {}
>(...names: K[]): (component: ComponentConstructor<P & Pick<FormData, K>>) => ComponentClass<P & Pick<FormData, K>>;
