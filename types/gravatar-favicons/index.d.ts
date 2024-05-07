import { FaviconOptions } from "favicons";

/**
 * Generate favicons from a gravatar email.
 */
declare function gravatarFavicons(
    config?: gravatarFavicons.Options,
    logger?: gravatarFavicons.Logger,
    cb?: gravatarFavicons.Callback,
): void;

declare namespace gravatarFavicons {
    // console.log compatible contract
    type Logger = (message?: any, ...optionalParams: any[]) => void;

    type Callback = (err: Error | null, files: string[]) => void;

    interface Options {
        email: string;
        dest: string;
        /**
         * The `faviconConfig` field is the same options that can be passed to `favicons`.
         */
        faviconConfig: Partial<FaviconOptions>;
    }
}

export = gravatarFavicons;
