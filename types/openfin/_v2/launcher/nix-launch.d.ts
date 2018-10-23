/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ConfigWithRuntime } from '../transport/wire';
export declare function getUrl(version: string, urlPath: string): string;
export declare function download(version: string, folder: string, osConfig: OsConfig): Promise<string>;
export declare function getRuntimePath(version: string): Promise<string>;
export declare function install(versionOrChannel: string, osConfig: OsConfig): Promise<string>;
export interface OsConfig {
    manifestLocation: string;
    namedPipeName: string;
    urlPath: string;
    executablePath: string;
}
export default function launch(config: ConfigWithRuntime, osConfig: OsConfig): Promise<ChildProcess>;
