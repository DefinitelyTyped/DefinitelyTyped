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
    appUrl?: string | undefined;
    loginUrl?: string | undefined;
    sessionTimeoutUrl?: string | undefined;
    invalidTokenUrl?: string | undefined;
    keysetUrl?: string | undefined;
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
    } | undefined;
}

export interface OnConnectCallback {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    (connection: IdToken, request: Request, response: Response, next: NextFunction): Response | void;
}

export interface UnregisteredPlatformCallback {
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

declare class Provider {
    app: Express;

    Database: Database;
    Grade: GradeService;
    DeepLinking: DeepLinkingService;
    NamesAndRoles: NamesAndRolesService;

    setup(encryptionKey: string, database: DatabaseOptions, options?: ProviderOptions): Provider;

    deploy(options?: DeploymentOptions): Promise<true | undefined>;

    close(): Promise<boolean>;

    onConnect(_connectCallback: OnConnectCallback, options?: OnConnectOptions): true;

    onDeepLinking(_connectCallback: OnConnectCallback, options?: OnConnectOptions): true;

    onUnregisteredPlatform(_unregisteredPlatformCallback: UnregisteredPlatformCallback): true;

    loginUrl(): string;

    appUrl(): string;

    sessionTimeoutUrl(): string;

    invalidTokenUrl(): string;

    keysetUrl(): string;

    whitelist(...urls: Array<string | { route: string; method: string }>): true;

    registerPlatform(config: PlatformConfig): Promise<Platform | false>;

    getPlatform(url: string): Promise<Platform | false>;

    deletePlatform(url: string, clientId: string): Promise<boolean>;

    getAllPlatforms(): Promise<Platform[] | false>;

    redirect(response: Response, path: string, options?: RedirectOptions): void;
}

declare const defaultProvider: Provider;
export default defaultProvider;
