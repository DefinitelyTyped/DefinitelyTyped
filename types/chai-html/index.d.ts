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
