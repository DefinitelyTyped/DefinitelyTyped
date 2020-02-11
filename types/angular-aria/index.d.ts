// Type definitions for angular-aria 1.7
// Project: http://angularjs.org, https://docs.angularjs.org/api/ngAria
// Definitions by: Chives <https://github.com/chivesrs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';

declare module 'angular' {
    namespace aria {
        type IAriaAttribute = 'ariaHidden'|'ariaChecked'|'ariaReadonly'|'ariaDisabled'|'ariaRequired'|'ariaInvalid'|'ariaValue'|'tabindex'|'bindKeydown'|'bindRoleForClick';

        type IAriaProviderOptions = {
            [key in IAriaAttribute]?: boolean;
        };

        /**
         * $ariaProvider (https://docs.angularjs.org/api/ngAria/provider/$ariaProvider).
         */
        interface IAriaProvider {
            config(config: IAriaProviderOptions): void;
        }

        /**
         * $aria service (https://docs.angularjs.org/api/ngAria/service/$aria).
         */
        interface IAriaService {
            config(attribute: IAriaAttribute): boolean;
        }
    }
}
