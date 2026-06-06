import { AxiosInstance } from "axios";

export interface AuthOptions {
    /** The type of authentication. */
    type: "jwt" | "bearer";

    /** The issuer used for JWT. */
    issuer?: string;

    /** The secret used for JWT. */
    secret?: string;

    /** The token used for Bearer. */
    token?: string;
}

export interface InstanceOptions {
    /** Credentials for the instance */
    auth: AuthOptions;

    /**
     * The name of the application which will use this instance.
     * This will be sent in the user-agent header.
     */
    applicationName?: string;

    /** The base name. (For internal use.) */
    baseName?: string;
}

/**
 * Create a new Axios instance with Salling Group API support.
 * This automatically injects authorization and sets the base URL.
 * Furthermore, it also wraps API errors into a designated error type.
 * The instance can be used directly on resources (e.g. 'instance.get('/v1/stores/')').
 *
 * @param options Options for the instance
 *
 * @returns An Axios instance that can access the Salling Group API.
 */
export function createInstance(options: InstanceOptions): AxiosInstance;
