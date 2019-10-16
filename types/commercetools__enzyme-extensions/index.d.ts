// Type definitions for @commercetools/enzyme-extensions 3.0
// Project: https://github.com/commercetools/enzyme-extensions
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as enzyme from 'enzyme';

declare module 'enzyme' {
    interface UntilOptions {
        maxDepth: number;
    }
    interface ShallowWrapper<P = {}> {
        renderProp(propName: string, ...args: any[]): ShallowWrapper<P>;
        drill(expander: (props: any) => ShallowWrapper): ShallowWrapper<P>;
        until(selector: EnzymeSelector, options?: UntilOptions): ShallowWrapper<P>;
    }
}

declare function monkeyPatchShallowWrapper(s: typeof enzyme.ShallowWrapper): void;

export = monkeyPatchShallowWrapper;
