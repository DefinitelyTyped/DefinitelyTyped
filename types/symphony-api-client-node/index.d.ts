import { Token } from "./SymBotAuth";

export * from "./AdminClient";
export * from "./AdminUserClient";
export * from "./ConnectionsClient";
export * from "./MessagesClient";
export * from "./OBOClient";
export * from "./PresenceClient";
export * from "./SignalsClient";
export * from "./StreamsClient";
export * from "./SymBotAuth";
export * from "./SymMessageParser";
export * from "./UsersClient";

export interface AuthInfo {
    sessionAuthToken: string;
    kmAuthToken: string;
}

export interface AppInfo {
    appId: string;
    appToken: string;
}

export interface SymphonyConfiguration {
    sessionAuthHost?: string | undefined;
    sessionAuthPort?: number | undefined;
    sessionAuthContextPath?: string | undefined;
    keyAuthHost?: string | undefined;
    keyAuthPort?: number | undefined;
    keyAuthContextPath?: string | undefined;
    podHost?: string | undefined;
    podPort?: number | undefined;
    podContextPath?: string | undefined;
    agentHost?: string | undefined;
    agentPort?: number | undefined;
    agentContextPath?: string | undefined;
    botUsername?: string | undefined;
    botEmailAddress?: string | undefined;
    botPrivateKeyPath?: string | undefined;
    botPrivateKeyName?: string | undefined;
    botCertPath?: string | undefined;
    botCertName?: string | undefined;
    botCertPassword?: string | undefined;
    appId?: string | undefined;
    appPrivateKeyPath?: string | undefined;
    appPrivateKeyName?: string | undefined;
    appCertPath?: string | undefined;
    appCertName?: string | undefined;
    appCertPassword?: string | undefined;
    podProxyURL?: string | undefined;
    podProxyUsername?: string | undefined;
    podProxyPassword?: string | undefined;
    proxyURL?: string | undefined;
    proxyUsername?: string | undefined;
    proxyPassword?: string | undefined;
    keyManagerProxyURL?: string | undefined;
    keyManagerProxyUsername?: string | undefined;
    keyManagerProxyPassword?: string | undefined;
    nodeTlsRejectUnauthorized?: number | undefined;
    maxRetries?: number | undefined;
    maxWaitInterval?: number | undefined;
}

export const MESSAGEML_FORMAT: string;
export const PRESENTATIONML_FORMAT: string;

export const sessionToken: string;

export function authenticateBot(SymConfig: SymphonyConfiguration): Promise<AuthInfo>;

export function authenticateExtApp(): Promise<AppInfo>;

export function authenticateOboApp(): Promise<Token>;

export function formBuilder(formId: any): any;

export function getDatafeedEventsService(options: any): any;

export function getFirehoseEventsService(subscriberCallback: any): void;

export function initBot(pathToConfigFile: string, pathToLoadBalancerConfigFile?: string): Promise<AuthInfo>;

export function setDebugMode(mode: string): void;

export function stopDatafeedEventsService(): void;

export function stopFirehoseEventsService(): void;
