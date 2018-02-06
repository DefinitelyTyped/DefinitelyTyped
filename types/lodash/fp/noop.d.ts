import _ = require("../index");

declare namespace Lodash {
    interface Noop {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (): Noop;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args: any): Noop1x1;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args: any, args2: any): Noop1x2;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args: any, args2: any, args3: any): Noop1x3;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args: any, args2: any, args3: any, args4: any): void;
    }
    interface Noop1x1 {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (): Noop1x1;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args2: any): Noop1x2;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args2: any, args3: any): Noop1x3;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args2: any, args3: any, args4: any): void;
    }
    interface Noop1x2 {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (): Noop1x2;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args3: any): Noop1x3;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args3: any, args4: any): void;
    }
    interface Noop1x3 {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (): Noop1x3;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (args4: any): void;
    }
}

declare const noop: Lodash.Noop;
export = noop;
