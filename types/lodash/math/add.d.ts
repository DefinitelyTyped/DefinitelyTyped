import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Adds two numbers.
         *
         * @param augend The first number to add.
         * @param addend The second number to add.
         * @return Returns the sum.
         */
        add(
            augend: number,
            addend: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): LoDashExplicitWrapper<number>;
    }
}