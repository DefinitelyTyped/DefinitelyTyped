import { Request, Response, Express, NextFunction } from 'express';
import { GradeService } from './Services/GradeService';
import { DeepLinkingService } from './Services/DeepLinking';
import { Database, DatabaseOptions } from '../Utils/Database';
import { NamesAndRolesService } from './Services/NamesAndRoles';
import { PlatformConfig } from './../Utils/Platform';
import { IdToken } from '../IdToken';
import { Platform } from '../Utils/Platform';

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
    (connection: IdToken, request: Request, response: Response, next: NextFunction): Response | void;
}

export interface OnConnectOptions {
    sessionTimeout?: ((request: Request, response: Response) => Response) | undefined;
    invalidToken?: ((request: Request, response: Response) => Response) | undefined;
}

export interface RedirectOptions {
    isNewResource?: boolean | undefined;
    ignoreRoot?: boolean | undefined;
}

export class Provider {
    app: Express;

    Database: Database;
    Grade: GradeService;
    DeepLinking: DeepLinkingService;
    NamesAndRoles: NamesAndRolesService;

    constructor(encryptionKey: string, database: DatabaseOptions, options?: ProviderOptions);

    deploy(options?: DeploymentOptions): Promise<true | undefined>;

    close(): Promise<boolean>;

    onConnect(_connectCallback: OnConnectCallback, options?: OnConnectOptions): true;

    onDeepLinking(_connectCallback: OnConnectCallback, options?: OnConnectOptions): true;

    loginUrl(): string;

    appUrl(): string;

    sessionTimeoutUrl(): string;

    invalidTokenUrl(): string;

    keysetUrl(): string;

    whitelist(...urls: Array<string | { route: string; method: string }>): true;

    registerPlatform(config: PlatformConfig): Promise<Platform | false>;

    getPlatform(url: string): Promise<Platform | false>;

    deletePlatform(url: string): Promise<boolean>;

    getAllPlatforms(): Promise<Platform[] | false>;

    redirect(response: Response, path: string, options?: RedirectOptions): void;
}
