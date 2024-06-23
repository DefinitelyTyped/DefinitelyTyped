export interface ProxyAgentConfigurationInputType {
    environmentVariableNamespace?: string | undefined;
    forceGlobalAgent?: boolean | undefined;
    socketConnectionTimeout?: number | undefined;
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
