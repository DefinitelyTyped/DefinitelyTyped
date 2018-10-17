// Type definitions for meteor/react-meteor-data v0.2.16
// Project: https://github.com/meteor/react-packages/tree/devel/packages/react-meteor-data
// Definitions by: Igor Golovin <https://github.com/Deadly0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module 'meteor/react-meteor-data' {
    import * as React from 'react';

    export function withTracker<TDataProps, TOwnProps, TMergedProps extends (TOwnProps & TDataProps) = TOwnProps & TDataProps>(
        options: (props: TOwnProps) => TDataProps | {getMeteorData: (props: TOwnProps) => TDataProps, pure?: boolean}
    ): (reactComponent: React.ComponentType<TMergedProps>) => React.ComponentClass<TOwnProps>;
}
