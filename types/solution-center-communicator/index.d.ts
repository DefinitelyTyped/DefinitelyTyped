declare namespace ScCommunicator {
    interface Environment {
        /**
         * Name of the environment
         */
        NAME: string;

        /**
         * URL where to reach the frontend of the environment
         */
        URL: string;

        /**
         * Domain where to set a cookie in case it's needed for that environment
         */
        DOMAIN: string;

        /**
         * In case that the domain is localhost, a port can be also specified
         */
        PORT?: string | undefined;

        /**
         * URL where to reach the user management service API
         */
        USER_SERVICE?: string | undefined;

        /**
         * URL where to reach the token management service API
         */
        TOKEN_SERVICE?: string | undefined;

        /**
         * URL where to reach the merchant management service API
         */
        MERCHANT_SERVICE?: string | undefined;

        /**
         * URL where to reach the GoodData service API
         */
        GOODDATA_SERVICE?: string | undefined;

        /**
         * URL where to reach the module service API
         */
        MODULE_SERVICE?: string | undefined;

        /**
         * URL where to reach the new user service API
         */
        USER_SERVICE_NEW?: string | undefined;
    }

    interface Environments {
        /**
         * Production environment
         */
        PRODUCTION: Environment;

        /**
         * Stage environment
         */
        STAGE: Environment;

        /**
         * Integration environment
         */
        INTEGRATION: Environment;

        /**
         * Development environment
         */
        DEVELOPMENT: Environment;

        /**
         * Local environment
         */
        LOCAL: Environment;

        /**
         * Testing environment
         */
        TESTING: Environment;
    }

    interface ScEnvironmentsProvider {
        /**
         * Get current environment
         * If environment was not previously configured, use default environment
         *
         * @returns Current or default environment
         */
        getCurrentEnvironment(): Environment;

        /**
         * Get specific environment
         *
         * @param name - Environment name
         * @returns Specific or default environment
         */
        getSpecificEnvironment(name: string): Environment;

        /**
         * Set current environment
         *
         * @param env - Environment name or custom environment object
         * @returns Named or custom environment
         */
        setCurrentEnvironment(env: any): Environment;

        /**
         * Access to the public methods of the service
         */
        $get(): any;
    }
}

declare module "solution-center-communicator" {
    export = ScCommunicator;
}
