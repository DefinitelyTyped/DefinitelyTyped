export interface AppConfig {

    /**
     * Application name (Example: restfulApiHandler)
     */
    name: string,

    /**
     * Application description
     */
    description: string,

    /**
     * Request prefix (Example: /api)
     */
    prefix: string,

    /**
     * Use asynchronous handler?
     */
    asynchronous: string,

    /**
     * Function timeout (in seconds)
     */
    timeout: string,

    /**
     * AWS SDK for JavaScript version
     */
    sdkVersion: string,

    /**
     * Node.js Lambda runtime identifier
     */
    runtime: string
}

export interface PluginInfo {
    [key: string]: any

    /**
     * Middleware plugin name.
     */
    name: string,

    /**
     * Github content URL
     */
    html_url: string
}

export interface TemplateVars {

    appName?: AppConfig['name'],
    appDescription?: AppConfig['description'],
    appPrefix?: AppConfig['prefix'],
    appTimeout?: AppConfig['timeout'],
    appRuntime?: AppConfig['runtime'],

    /**
     * Package name (Example: restful-api-handler)
     */
    pkgName?: string | undefined,

    /**
     * AWS SDK mock library (Options: aws-sdk-client-mock|aws-sdk-mock)'
     */
    sdkPackage?: string | undefined,

    /**
     * CloudFront resource name
     */
    cfResourceName?: string | undefined,

    /**
     * Router path (Example: /api)
     */
    routePath: string,

    /**
     * Node version number
     */
    nodeVersion?: string | undefined
}

/**
 * Generate app sources from templates.
 */
export function createFiles(appConfig: AppConfig, outPath: string): Promise<void>

/**
 * Generate file source from a template.
 */
export function createFile(name: string, outPath: string, basePath: string): Promise<void>

/**
 * Install remote middleware
 */
export function addPackage(name: string): Promise<string|undefined>

/**
 * Request plugin list from the package repo.
 */
export function listPackages(): Promise<PluginInfo[]>
