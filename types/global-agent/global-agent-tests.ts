import { bootstrap, createGlobalProxyAgent, ProxyAgentConfigurationInputType } from 'global-agent';

bootstrap(); // $ExpectType boolean
const opt: ProxyAgentConfigurationInputType = {
    environmentVariableNamespace: '',
    forceGlobalAgent: false,
    socketConnectionTimeout: 0,
};
createGlobalProxyAgent(opt); // $ExpectType ProxyAgentConfigurationType
