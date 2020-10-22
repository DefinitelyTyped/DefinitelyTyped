import { ConnectOptions } from "../connect";

declare function getAddressInfo(args: ConnectOptions): getAddressInfo.AddressInfo;

export = getAddressInfo;

declare namespace getAddressInfo {
    interface AddressInfo {
        connectArgs: ConnectOptions;
        transport: string;
        transportPath: string;
        path?: string;
        host?: string;
        port?: number;
        pseudoUri: string;
    }
}
