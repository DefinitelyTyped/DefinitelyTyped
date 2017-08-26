// Type definitions for Angular Touchspin v1.0.0
// Project: https://github.com/nkovacic/angular-touchspin
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare let angularTouchSpin: string;
export = angularTouchSpin;

declare module "angular" {
    namespace touchspin {
        interface ITouchSpinOptions {
            min?: number;
            max?: number;
            step?: number;
            decimals?: number;
            stepInterval?: number;
            forceStepDivisibility?: string; // none | floor | round | ceil
            stepIntervalDelay?: number;
            verticalButtons?: boolean;
            verticalUpClass?: string;
            verticalDownClass?: string;
            initVal?: number;
            prefix?: string;
            postfix?: string;
            prefixExtraClass?: string;
            postfixExtraClass?: string;
            mousewheel?: boolean;
            buttonDownClass?: string;
            buttonUpClass?: string;
            buttonDownTxt?: string;
            buttonUpTxt?: string;
        }

        interface ITouchSpinConfig extends ITouchSpinOptions { }

        interface ITouchSpinConfigProvider {
            defaults(touchSpinOptions: ITouchSpinOptions): void;
        }
    }
}
