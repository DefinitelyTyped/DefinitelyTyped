/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            almost: ChaiAlmost.Almost;
        }
        interface Deep {
            almost: ChaiAlmost.DeepAlmost;
        }

        namespace ChaiAlmost {
            interface DeepAlmost {
                (value: any, toleranceOverride?: number): Assertion;
                equal: Equal;
                equals: Equal;
                eq: Equal;
            }
            interface Almost extends DeepAlmost {
                eql: Equal;
                eqls: Equal;
            }
        }
    }
}

declare function chaiAlmost(tolerance?: number): Chai.ChaiPlugin;
export = chaiAlmost;
