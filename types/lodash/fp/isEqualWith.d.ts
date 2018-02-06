import _ = require("../index");

declare namespace Lodash {
    interface IsEqualWith {
        (): IsEqualWith;
        (other: any): IsEqualWith1x1;
        (other: any, customizer: IsEqualCustomizer): IsEqualWith1x2;
        (other: any, customizer: IsEqualCustomizer, value: any): boolean;
    }
    interface IsEqualWith1x1 {
        (): IsEqualWith1x1;
        (customizer: IsEqualCustomizer): IsEqualWith1x2;
        (customizer: IsEqualCustomizer, value: any): boolean;
    }
    interface IsEqualWith1x2 {
        (): IsEqualWith1x2;
        (value: any): boolean;
    }
}

declare const isEqualWith: Lodash.IsEqualWith;
export = isEqualWith;
