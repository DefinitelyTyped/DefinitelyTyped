import { Express, NextFunction, Request, Response } from "express";
import { IdToken } from "../IdToken";
import { Database, DatabaseOptions } from "../Utils/Database";
import { PlatformConfig } from "./../Utils/Platform";
import { Platform } from "../Utils/Platform";
import { DeepLinkingService } from "./Services/DeepLinking";
import { GradeService } from "./Services/GradeService";
import { NamesAndRolesService } from "./Services/NamesAndRoles";

export interface ServerAddonFunction {
    (app: Express): void;
}

export interface DeploymentOptions {
    port?: number | undefined;
    silent?: boolean | undefined;
    serverless?: boolean | undefined;
}

export interface ProviderOptions {
    appRoute?: string | undefined;
    loginRoute?: string | undefined;
    keysetRoute?: string | undefined;
    dynregRoute?: string | undefined;
    https?: boolean | undefined;
    ssl?: {
        key: string;
        cert: string;
    } | undefined;
    staticPath?: string | undefined;
    logger?: boolean | undefined;
    cors?: boolean | undefined;
    serverAddon?: ServerAddonFunction | undefined;
    cookies?: {
        secure?: boolean | undefined;
        sameSite?: string | undefined;
        domain?: string | undefined;
    } | undefined;
    devMode?: boolean | undefined;
    ltiaas?: boolean | undefined;
    tokenMaxAge?: number | undefined;
    dynReg?: {
        url: string;
        name: string;
        logo?: string | undefined;
        description?: string | undefined;
        redirectUris?: string[] | undefined;
        customParameters?: any;
        autoActivate?: boolean | undefined;
        useDeepLinking?: boolean | undefined;
    } | undefined;

    /**
     * @deprecated Use `appRoute` property instead.
     */
    appUrl?: string | undefined;
    /**
     * @deprecated Use `loginRoute` property instead.
     */
    loginUrl?: string | undefined;
    /**
     * @deprecated Use `keysetRoute` property instead.
     */
    keysetUrl?: string | undefined;
}

export interface RequestCallback {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    (request: Request, response: Response, next: NextFunction): Response | void;
}

export interface TokenRequestCallback {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    (token: IdToken, request: Request, response: Response, next: NextFunction): Response | void;
}

export interface FinalRequestCallback {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    (request: Request, response: Response): Response | void;
}

export interface OnConnectOptions {
    sessionTimeout?: ((request: Request, response: Response) => Response) | undefined;
    invalidToken?: ((request: Request, response: Response) => Response) | undefined;
}

export interface RedirectOptions {
    isNewResource?: boolean | undefined;
    ignoreRoot?: boolean | undefined;
}

export type GetPlatformFunction = (
    url: string,
    clientId?: string,
    ENCRYPTIONKEY?: string,
    Database?: Database
) => Promise<Platform[] | Platform | false>;

declare class Provider {
    app: Express;

    Database: Database;
    Grade: GradeService;
    DeepLinking: DeepLinkingService;
    NamesAndRoles: NamesAndRolesService;

    setup(encryptionKey: string, database: DatabaseOptions, options?: ProviderOptions): Provider;

    deploy(options?: DeploymentOptions): Promise<true | undefined>;

    close(): Promise<boolean>;

    onConnect(_connectCallback: TokenRequestCallback, options?: OnConnectOptions): true;

    onDeepLinking(_deepLinkingCallback: TokenRequestCallback): true;

    onDynamicRegistration(_dynamicRegistrationCallback: RequestCallback): true;

    onSessionTimeout(_sessionTimeoutCallback: FinalRequestCallback): true;

    onInvalidToken(_invalidTokenCallback: FinalRequestCallback): true;

    onUnregisteredPlatform(_unregisteredPlatformCallback: FinalRequestCallback): true;

    appRoute(): string;

    loginRoute(): string;

    keysetRoute(): string;

    dynRegRoute(): string;

    whitelist(...urls: Array<string | { route: string; method: string }>): true;

    registerPlatform(platform: PlatformConfig, getPlatform?: GetPlatformFunction, ENCRYPTIONKEY?: string, Database?: Database): Promise<Platform>;

    getPlatform(url: string, clientId?: string, ENCRYPTIONKEY?: string, Database?: Database): Promise<Platform[] | Platform | false>;

    updatePlatformById(platformId: string, platformInfo: PlatformConfig): Promise<Platform>;

    deletePlatform(url: string, clientId: string): Promise<true>;

    getAllPlatforms(): Promise<Platform[]>;

    redirect(response: Response, path: string, options?: RedirectOptions): void;

    appUrl(): string;
    loginUrl(): string;
    keysetUrl(): string;
}

declare const defaultProvider: Provider;
export default defaultProvider;
