import { Mixin } from "react";

declare var LinkedStateMixin: LinkedStateMixin.LinkedStateMixin;
type LinkedStateMixin = LinkedStateMixin.LinkedStateMixin;
export = LinkedStateMixin;

declare namespace LinkedStateMixin {
    export interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    export interface LinkedStateMixin extends Mixin<any, any> {
        linkState<T>(key: string): ReactLink<T>;
    }
}

declare module "react" {
    interface HTMLAttributes<T> {
        checkedLink?: LinkedStateMixin.ReactLink<boolean> | undefined;
        valueLink?: LinkedStateMixin.ReactLink<boolean | string | number> | undefined;
    }
}
