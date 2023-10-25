import * as _ from "lodash";

declare module "lodash" {
    interface LoDashStatic {
        deepMapValues(
            object: any,
            callback: any,
            propertyPath?: any,
        ): any;
    }
}

export function deepMapValues(
    object: any,
    callback: any,
    propertyPath?: any,
): any;
