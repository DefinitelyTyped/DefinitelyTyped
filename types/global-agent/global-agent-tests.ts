import { bootstrap, createGlobalProxyAgent, ProxyAgentConfigurationInputType } from "global-agent";

bootstrap(); // $ExpectType boolean
const opt: ProxyAgentConfigurationInputType = {
    environmentVariableNamespace: "",
    forceGlobalAgent: false,
    socketConnectionTimeout: 0,
};
createGlobalProxyAgent(opt); // $ExpectType ProxyAgentConfigurationType

const globalProxyAgent = createGlobalProxyAgent(); // $ExpectType ProxyAgentConfigurationType

// Enable proxy server
globalProxyAgent.HTTP_PROXY = "http://127.0.0.1:8080";
globalProxyAgent.HTTPS_PROXY = "http://127.0.0.1:8080";
globalProxyAgent.NO_PROXY = "localhost";

// Disable proxy server
globalProxyAgent.HTTP_PROXY = null;
globalProxyAgent.HTTPS_PROXY = null;
globalProxyAgent.NO_PROXY = null;
