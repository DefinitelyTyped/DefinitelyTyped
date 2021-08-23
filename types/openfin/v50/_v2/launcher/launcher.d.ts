/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ConfigWithRuntime } from '../transport/wire';
export default class Launcher {
    private os;
    OpenFin_Installer: string;
    Installer_Work_Dir: string;
    Security_Realm_Config_Key: string;
    nixConfig?: any;
    constructor();
    launch(config: ConfigWithRuntime, manifestLocation: string, namedPipeName: string): Promise<ChildProcess>;
    static IS_SUPPORTED(): boolean;
    private macLaunch;
    private winLaunch;
}
