// Type definitions for chai-almost 1.0
// Project: https://github.com/nmuldavin/chai-almost#readme
// Definitions by: Lennard Schulz <https://github.com/kclnn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

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
