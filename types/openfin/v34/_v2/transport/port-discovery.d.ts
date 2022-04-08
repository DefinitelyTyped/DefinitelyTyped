import { PortDiscoveryConfig } from './wire';
import { Environment } from '../environment/environment';
export declare class PortDiscovery {
    private savedConfig;
    private namedPipeName;
    private manifestLocation;
    private namedPipeServer;
    private pipeConnection;
    private timeoutTimer;
    private environment;
    constructor(config: PortDiscoveryConfig, environment: Environment);
    retrievePort(): Promise<number>;
    private createDiscoveryNamedPipe;
    private listenDiscoveryMessage;
    private createManifest;
    private cleanup;
}
