// Type definitions for revalidator 0.3.1
// Project: https://github.com/flatiron/revalidator
// Definitions by: Jason Turner <https://github.com/brewsoftware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Revalidator {
    interface RevalidatorStatic {
        validate(object: any, schema: any, options: any): any;
    }
}

declare var revalidator: Revalidator.RevalidatorStatic;

declare module "revalidator" {
    export = revalidator;
}
