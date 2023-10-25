/// <reference types="react" />

import * as React from "react";

export interface ClassDecorator {
    <TFunction extends Function>(target: TFunction): TFunction | void;
}

declare var propTypes: (map: React.ValidationMap<any>) => ClassDecorator;
declare var defaultProps: (defaultProps: any) => ClassDecorator;

export { defaultProps, propTypes };
