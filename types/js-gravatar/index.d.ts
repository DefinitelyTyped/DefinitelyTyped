// Type definitions for js-gravatar 1.1
// Project: https://github.com/chukwumaijem/js-gravatar#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * JS Gravatar
 * {@link https://github.com/chukwumaijem/js-gravatar#js-gravatar}
 */
declare function jsGravatar(options?: jsGravatar.Options): string;

declare namespace jsGravatar {
    interface Options {
        /**
         * The size of the image to be displayed. Should be from 1 to 2048
         */
        size?: number | undefined;
        /**
         *  What image should be used if email does not have a gravatar
         */
        defaultImage?: '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank' | undefined;
        /**
         * Email address of the user to generate gravatar for
         */
        email: string;
        /**
         *  Optional: MD5 hash of the email above.
         * If email is provided, md5hash will be ignored. If neither email nor md5hash is provided, the library will throw en error
         */
        md5Hash?: string | undefined;
    }

    function buildQueryStringFromOptions(options: Options): string;
    function validateOptions(options?: Options): void;
}

export as namespace jsGravatar;

export = jsGravatar;
