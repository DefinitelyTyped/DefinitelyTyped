// Type definitions for global-agent 2.1
// Project: https://github.com/gajus/global-agent#readme
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ProxyAgentConfigurationInputType {
    environmentVariableNamespace?: string;
    forceGlobalAgent?: boolean;
    socketConnectionTimeout?: number;
}

export interface ProxyAgentConfigurationType {
    readonly HTTP_PROXY: string | null;
    readonly HTTPS_PROXY: string | null;
    readonly NO_PROXY: string | null;
}

export function bootstrap(configurationInput?: ProxyAgentConfigurationInputType): boolean;
export function createGlobalProxyAgent(
    configurationInput: ProxyAgentConfigurationInputType,
): ProxyAgentConfigurationType;
