// Type definitions for React v0.14 (react-addons-create-fragment)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
    namespace __Addons {
        export function createFragment(object: { [key: string]: ReactNode }): ReactFragment;
    }
}

declare module "react-addons-create-fragment" {
    export = __React.__Addons.createFragment;
}
