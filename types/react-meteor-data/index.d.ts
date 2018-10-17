// Type definitions for meteor/react-meteor-data v0.2.16
// Project: https://github.com/meteor/react-packages/tree/devel/packages/react-meteor-data
// Definitions by: Igor Golovin <https://github.com/Deadly0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare module 'meteor/react-meteor-data' {
    import * as React from 'react';

    export function withTracker<InP, D, OutP extends (InP & D)>(
        options: (props: InP) => D | {getMeteorData: (props: InP) => D, pure?: boolean}
    ): (reactComponent: React.ComponentType<OutP>) => React.ComponentType<InP>;
}
