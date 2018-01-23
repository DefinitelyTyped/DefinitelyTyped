declare namespace _ {
    interface LoDashStatic {
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        random(
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(
            max: number,
            floating?: boolean
        ): number;

        /**
         * @see _.random
         */
        random(
            min: number,
            max: number,
            floating?: boolean
        ): number;

        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns the random number.
         */
        random(
            min: number,
            index: string | number,
            guard: object
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): number;

        /**
         * @see _.random
         */
        random(
            max: number,
            floating?: boolean
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): LoDashExplicitWrapper<number>;

        /**
         * @see _.random
         */
        random(
            max: number,
            floating?: boolean
        ): LoDashExplicitWrapper<number>;
    }

    /**********
     * Object *
     **********/
}