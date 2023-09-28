import { Environment } from "../environment/environment";
import { PortDiscoveryConfig } from "./wire";
export default class PortDiscovery {
    private savedConfig;
    private namedPipeName;
    private manifestLocation;
    private namedPipeServer;
    private pipeConnection;
    private timeoutTimer?;
    private environment;
    constructor(config: PortDiscoveryConfig, environment: Environment);
    retrievePort(): Promise<number>;
    private createDiscoveryNamedPipe;
    private listenDiscoveryMessage;
    private createManifest;
    private cleanup;
}
