// Type definitions for angular-environment v1.0.4
// Project: https://github.com/juanpablob/angular-environment
// Definitions by: Matt Wheatley <https://github.com/terrawheat>
// Definitions: https://github.com/LiberisLabs

declare namespace angular.environment {
  interface ServiceProvider {
    /**
     * Sets the configuration object
     */
    config: (config: angular.environment.Config) => void;
    /**
     * Evaluates the current domain and
     * loads the correct environment variables.
     */
    check: () => void;
    /**
     * Retrieves the correct version of a
     * variable for the current environment.
     */
    read: (key: string) => any;    
  }
  interface Service {
    /**
     * Retrieve the current environment
     */
    get: () => string,

    /**
     * Force sets the current environment
     */
    set: (environment: string) => void,

    /**
     * Evaluates current environment against
     * environment parameter.
     */
    is: (environment: string) => boolean,

    /**
     * Retrieves the correct version of a
     * variable for the current environment.
     */
    read: (key: string) => any;
  }

  interface Config {
    /**
     * Map of domains to their environments
     */
    domains: { [environment: string]: Array<string> },
    /**
     * List of variables split by environment
     */
    vars: { [environment: string]: { [variable: string]: any }},
  }
}
