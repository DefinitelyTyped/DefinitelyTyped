import { ComponentClass, ComponentType } from "react";
import { InjectedFormProps } from "../index";

export function formValues<
    Values,
    P = {}
>(obj: Values): (component: ComponentType<P & { [K in keyof Values]: any }>) => ComponentClass<P & { [K in keyof Values]: any }>;

export function formValues<
    FormData = {},
    K extends keyof FormData = keyof FormData,
    P = {}
>(...names: K[]): (component: ComponentType<P & Pick<FormData, K>>) => ComponentClass<P & Pick<FormData, K>>;
