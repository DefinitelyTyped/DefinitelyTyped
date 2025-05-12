declare namespace randomString {
    interface RandomStringOptions {
        /**
         * The length of your resulting string
         * @default 8
         */
        length?: number | undefined;

        /**
         * Should your resulting string contain numbers
         * @default true
         */
        numeric?: boolean | undefined;

        /**
         * Should your resulting string contain letters (from a-z, lower and uppercase)
         * @default true
         */
        letters?: boolean | undefined;

        /**
         * Should your resulting string contain any of these special characters (!$%^&*()_+|~-=`{}[]:;<>?,./)
         * @default false
         */
        special?: boolean | undefined;

        /**
         * Removes characters from resulting string.
         * Note: Lowercase letters will not remove uppercase letters.
         * @default []
         */
        exclude?: string[] | undefined;
    }
}

declare function randomString(options?: randomString.RandomStringOptions): string;

export = randomString;
