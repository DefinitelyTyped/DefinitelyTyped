// Type definitions for passport-steam 1.0
// Project: https://github.com/liamcurry/passport-steam
// Definitions by: Gonthier Renaud <https://github.com/kzay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = passport_steam;

declare function passport_steam(options: any, validate: any): any;

declare namespace passport_steam {
    // Circular reference from passport_steam
    const Strategy: any;

    const version: string;

    namespace prototype {
        function authenticate(req: any): any;

        function loadAssociation(fn: any): any;

        function loadDiscoveredInfo(fn: any): any;

        function loadDiscoveredInformation(fn: any): any;

        function saveAssociation(fn: any): any;

        function saveDiscoveredInfo(fn: any): any;

        function saveDiscoveredInformation(fn: any): any;

        namespace authenticate {
            const prototype: {
            };
        }

        namespace loadAssociation {
            const prototype: {
            };
        }

        namespace loadDiscoveredInfo {
            const prototype: {
            };
        }

        namespace loadDiscoveredInformation {
            const prototype: {
            };
        }

        namespace saveAssociation {
            const prototype: {
            };
        }

        namespace saveDiscoveredInfo {
            const prototype: {
            };
        }

        namespace saveDiscoveredInformation {
            const prototype: {
            };
        }
    }
}
