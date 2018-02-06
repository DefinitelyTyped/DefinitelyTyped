import _ = require("../index");

declare namespace Lodash {
    interface IsMatchWith {
        (): IsMatchWith;
        (customizer: isMatchWithCustomizer): IsMatchWith1x1;
        (customizer: isMatchWithCustomizer, source: object): IsMatchWith1x2;
        (customizer: isMatchWithCustomizer, source: object, object: object): boolean;
    }
    interface IsMatchWith1x1 {
        (): IsMatchWith1x1;
        (source: object): IsMatchWith1x2;
        (source: object, object: object): boolean;
    }
    interface IsMatchWith1x2 {
        (): IsMatchWith1x2;
        (object: object): boolean;
    }
}

declare const isMatchWith: Lodash.IsMatchWith;
export = isMatchWith;
