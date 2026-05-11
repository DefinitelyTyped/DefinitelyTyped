declare namespace isFQDN {
    interface Options {
        /**
         * @default true
         */
        requireTld?: boolean | undefined;
        /**
         * @default false
         */
        allowUnderscores?: boolean | undefined;
        /**
         * @default false
         */
        allowTrailingDot?: boolean | undefined;
    }
}

declare function isFQDN(str: string, options?: isFQDN.Options): boolean;

export = isFQDN;
