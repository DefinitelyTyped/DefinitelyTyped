/// <reference types="react" />

import * as React from "react";

declare namespace reactMixin {
    export interface ClassDecorator {
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        <TFunction extends Function>(target: TFunction): TFunction | void;
    }

    interface ReactMixin {
        decorate(mixin: React.Mixin<any, any>): ClassDecorator;
        onClass<S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
        <S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>;
    }
}

declare var reactMixin: reactMixin.ReactMixin;

export = reactMixin;
