export interface ProxyAgentConfigurationInputType {
    environmentVariableNamespace?: string | undefined;
    forceGlobalAgent?: boolean | undefined;
    socketConnectionTimeout?: number | undefined;
}

export interface ProxyAgentConfigurationType {
    HTTP_PROXY: string | null;
    HTTPS_PROXY: string | null;
    NO_PROXY: string | null;
}

export function bootstrap(configurationInput?: ProxyAgentConfigurationInputType): boolean;
export function createGlobalProxyAgent(
    configurationInput?: ProxyAgentConfigurationInputType,
): ProxyAgentConfigurationType;
