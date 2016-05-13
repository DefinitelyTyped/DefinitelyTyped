// Type definitions for React v0.14 (react-addons-update)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export = React.__Addons.update;

declare module 'react' {
    interface UpdateSpecCommand {
        $set?: any;
        $merge?: {};
        $apply?(value: any): any;
    }

    interface UpdateSpecPath {
        [key: string]: UpdateSpec;
    }

    type UpdateSpec = UpdateSpecCommand | UpdateSpecPath;

    interface UpdateArraySpec extends UpdateSpecCommand {
        $push?: any[];
        $unshift?: any[];
        $splice?: any[][];
    }

    namespace __Addons {
        export function update(value: any[], spec: UpdateArraySpec): any[];
        export function update(value: {}, spec: UpdateSpec): any;
    }
}

