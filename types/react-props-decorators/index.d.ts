// Type definitions for react-props-decorators 0.1.0
// Project: https://github.com/popkirby/react-props-decorators
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />


import * as React from 'react';

export interface ClassDecorator {
    <TFunction extends Function>(target: TFunction): TFunction | void;
}

declare var propTypes: (map: React.ValidationMap<any>) => ClassDecorator;
declare var defaultProps: (defaultProps: any) => ClassDecorator;

export {
propTypes,
defaultProps
}
