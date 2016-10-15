// Type definitions for chai-enzyme 0.5.0
// Project: https://github.com/producthunt/chai-enzyme
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference path="../enzyme/enzyme.d.ts" />
/// <reference path="../chai/chai.d.ts" />
/// <reference path="../react/react.d.ts" />

declare namespace Chai {
    type EnzymeSelector = string | __React.StatelessComponent<any> | __React.ComponentClass<any> | { [key: string]: any };

    interface Match {
        /**
         * Assert that the wrapper matches given selector:
         * @param selector
         */
        (selector: EnzymeSelector): Assertion;
    }
    interface Include {
        /**
         * Assert that the wrapper contains a given node:
         * @param code
         */
        (selector: EnzymeSelector): Assertion;
    }
    interface Assertion {
        /**
         * Assert that the given wrapper is checked:
         */
        checked(): Assertion;

        /**
         * Assert that the wrapper has a given class:
         * @param name
         */
        className(name: string): Assertion;

        /**
         * Assert that the wrapper contains a descendant matching the given selector:
         * @param selector
         */
        descendants(selector?: EnzymeSelector): Assertion;

        /**
         * Assert that the wrapper contains an exact amount of descendants matching the given selector:
         */
        exactly(count?: number): Assertion;

        /**
         * Assert that the given wrapper is disabled:
         */
        disabled(): Assertion;

        /**
         * Assert that the given wrapper is empty:
         */
        blank(): Assertion;

        /**
         * Assert that the given wrapper exists:
         */
        present(): Assertion;

        /**
         * Assert that the wrapper has given html:
         * @param str
         */
        html(str?: string): Assertion;

        /**
         * Assert that the wrapper has given ID attribute:
         * @param str
         */
        id(str: string): Assertion;

        /**
         * Assert that the wrapper has a given ref
         * @param key
         */
        ref(key: string): Assertion;

        /**
         * Assert that the given wrapper is selected:
         */
        selected(): Assertion;

        /**
         * Assert that the given wrapper has the tag name:
         * @param str
         */
        tagName(str: string): Assertion;

        /**
         * Assert that the given wrapper has the supplied text:
         * @param str
         */
        text(str?: string): Assertion;

        /**
         * Assert that the given wrapper has given value:
         * @param str
         */
        value(str: string): Assertion;

        /**
         * Assert that the wrapper has given attribute [with value]:
         * @param key
         * @param val
         */
        attr(key: string, val?: string): Assertion;

        /**
         * Assert that the wrapper has a given data attribute [with value]:
         * @param key
         * @param val
         */
        data(key: string, val?: string): Assertion;

        /**
         * Assert that the wrapper has given style:
         * @param key
         * @param val
         */
        style(key: string, val?: string): Assertion;

        /**
         * Assert that the wrapper has given state [with value]:
         * @param key
         * @param val
         */
        state(key: string, val?: any): Assertion;

        /**
         * Assert that the wrapper has given prop [with value]:
         * @param key
         * @param val
         */
        prop(key: string, val?: any): Assertion;
    }
}

declare module "chai-enzyme" {
    import { ShallowWrapper, ReactWrapper, CheerioWrapper } from "enzyme";

    type DebugWrapper = ShallowWrapper<any,any> | CheerioWrapper<any, any> | ReactWrapper<any, any>;
    function chaiEnzyMe(wrapper?: (debugWrapper: DebugWrapper) => string): (chai: any) => void;

    module chaiEnzyMe {
    }
    export = chaiEnzyMe;
}
