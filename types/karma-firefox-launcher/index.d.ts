import "karma";

declare module "karma" {
    interface CustomLauncher {
        /**
         * configure preferences for the Firefox instance that is loaded
         */
        prefs?: {
            [name: string]: any;
        } | undefined;
        /**
         * extensions that you want loaded into the browser on startup
         */
        extensions?: string[] | undefined;

        /**
         * custom launcher name
         */
        name?: string | undefined;

        /**
         * location of the Firefox executable
         */
        command?: string | undefined;
    }
}
