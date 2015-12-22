// Type definitions for axios 0.5.2

// Definitions by:  Jason Turner<https://github.com/brewsoftware>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Revalidator {
    interface RevalidatorStatic {
        validate(object: any, schema: any, options: any): any;
    }
}

declare var revalidator: Revalidator.RevalidatorStatic;

declare module "revalidator" {
    export = revalidator;
}
