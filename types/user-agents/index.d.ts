declare class UserAgent {
    /**
     * The representation of a user-agents object.
     * @param filters <Array, Function, Object, RegExp, or String> - A set of filters to apply to the generated user agents
     */
    constructor(filters?: Filter | Filter[]);

    /**
     * Casts the UserAgent instance to a string which corresponds to the user agent header. Equivalent to accessing the userAgent.userAgent property.
     */
    toString(): string;

    /**
     * Generates a new UserAgent instance using the same filters that were used to construct userAgent
     */
    random(): UserAgent;

    /**
     * Get a fingerprint for the UserAgent instance
     */
    data: Data;
    /**
     *  The value of data.appName
     */
    appName: string;
}

type Filter = Partial<Data> | RegExp | ((data: Data) => boolean) | string;

interface Data {
    /**
     *  The value of navigator.appName
     */
    appName: string;
    /**
     *  The value of navigator.connection
     */
    connection?: Connection | undefined;
    /**
     *  The value of navigator.cpuClass
     */
    cpuClass?: string | undefined;
    /**
     * One of desktop, mobile, or tablet depending on the type of device
     */
    deviceCategory?: string | undefined;
    /**
     *  The value of navigator.oscpu
     */
    oscpu?: string | undefined;
    /**
     * The value of navigator.platform
     */
    platform: string;
    /**
     * The value of navigator.plugins.length
     */
    pluginsLength: number;
    /**
     *  The value of screen.height
     */
    screenHeight: number;
    /**
     * The value of screen.width
     */
    screenWidth: number;
    /**
     * The value of navigator.vendor
     */
    vendor: string;
    /**
     * The value of navigator.userAgent
     */
    userAgent: string;
    /**
     * The value of window.innerHeight
     */
    viewportHeight: number;
    /**
     * The value of window.innerWidth
     */
    viewportWidth: number;
}

interface Connection {
    downlink?: number | undefined;
    downlinkMax?: any;
    effectiveType?: string | undefined;
    rtt?: number | undefined;
    type?: string | undefined;
}

export = UserAgent;
