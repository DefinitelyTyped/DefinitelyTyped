export interface RuntimeConfig {
    serverRuntimeConfig: any;
    publicRuntimeConfig?: any;
}
export function setConfig(configValue: any): void;
export default function(): RuntimeConfig;
