// Type definitions for symphony-api-client-node 1.1
// Project: https://github.com/SymphonyPlatformSolutions/symphony-api-client-node
// Definitions by: Mike Martinsky <https://github.com/mmartinsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
    sessionAuthHost?: string;
    sessionAuthPort?: number;
    sessionAuthContextPath?: string;
    keyAuthHost?: string;
    keyAuthPort?: number;
    keyAuthContextPath?: string;
    podHost?: string;
    podPort?: number;
    podContextPath?: string;
    agentHost?: string;
    agentPort?: number;
    agentContextPath?: string;
    botUsername?: string;
    botEmailAddress?: string;
    botPrivateKeyPath?: string;
    botPrivateKeyName?: string;
    botCertPath?: string;
    botCertName?: string;
    botCertPassword?: string;
    appId?: string;
    appPrivateKeyPath?: string;
    appPrivateKeyName?: string;
    appCertPath?: string;
    appCertName?: string;
    appCertPassword?: string;
    podProxyURL?: string;
    podProxyUsername?: string;
    podProxyPassword?: string;
    proxyURL?: string;
    proxyUsername?: string;
    proxyPassword?: string;
    keyManagerProxyURL?: string;
    keyManagerProxyUsername?: string;
    keyManagerProxyPassword?: string;
    nodeTlsRejectUnauthorized?: number;
    maxRetries?: number;
    maxWaitInterval?: number;
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
