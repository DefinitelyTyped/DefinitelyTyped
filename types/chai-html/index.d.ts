import { Assertion, ChaiPlugin } from "chai";

declare module "chai" {
    interface Assertion {
        html: ChaiHtml.HtmlAssertion;
    }
}

declare namespace ChaiHtml {
    interface HtmlAssertion extends Assertion {
        ignoringComments: Assertion;
    }
}

declare const chaiHtml: ChaiPlugin;
export default chaiHtml;
