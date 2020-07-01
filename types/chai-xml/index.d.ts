// Type definitions for chai-xml 0.3
// Project: https://github.com/krampstudio/chai-xml
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            xml: ChaiXml.XmlAssertion;
        }
    }
}

declare namespace ChaiXml {
  interface XmlAssertion extends Chai.Assertion {
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
}

declare const chaiXml: Chai.ChaiPlugin;
export = chaiXml;
