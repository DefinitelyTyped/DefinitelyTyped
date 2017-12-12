// Type definitions for chai-xml 0.3
// Project: https://github.com/krampstudio/chai-xml
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Assertion } from "chai";

declare function chaiXml(chai: any, utils: any): void;
export = chaiXml;

declare module "chai" {
    interface Assertion {
        xml: XmlAssertion;
    }
}

interface XmlAssertion extends Assertion {
    valid(): XmlAssertion;

    not: XmlAssertion;
    to: XmlAssertion;
    be: XmlAssertion;
    been: XmlAssertion;
    is: XmlAssertion;
    that: XmlAssertion;
    which: XmlAssertion;
    and: XmlAssertion;
    has: XmlAssertion;
    have: XmlAssertion;
    with: XmlAssertion;
    at: XmlAssertion;
    of: XmlAssertion;
    same: XmlAssertion;
}
