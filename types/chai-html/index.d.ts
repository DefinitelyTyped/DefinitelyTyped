// Type definitions for chai-html 1.3
// Project: https://github.com/i-like-robots/chai-html
// Definitions by: Alex <https://github.com/adjerbetian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            html: ChaiHtml.HtmlAssertion;
        }
    }
}

declare namespace ChaiHtml {
    interface HtmlAssertion extends Chai.Assertion {
        ignoringComments: Chai.Assertion;
    }
}

declare const chaiHtml: Chai.ChaiPlugin;
declare namespace chaiHtml {}
export = chaiHtml;
