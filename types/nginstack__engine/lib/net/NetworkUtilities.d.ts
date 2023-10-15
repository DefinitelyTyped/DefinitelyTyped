export = NetworkUtilities;
declare function NetworkUtilities(): void;
declare class NetworkUtilities {
    hosts: any;
    networks: any;
    services: any;
    findHostsCache: {};
    findHostsCacheVersion: any;
    findNetworksCache: {};
    findNetworksCacheVersion: any;
    findHosts(ids: string | string[]): number[];
    findNetworks(ids: string | any[]): any[];
    findServices(ids: string | any[], serviceClass: number, port: number): any[];
}
declare namespace NetworkUtilities {
    function findNetworks(address: any): any[];
    function addressToNumber(address: string): number;
    function numberToAddress(num: number): string;
    function getNumberNetworkRange(address: string): any[];
    function getNetworkRange(address: string): any[];
    function isIPv4Address(address: string): boolean;
    function addressInNetworkRange(address: string, network: string): boolean;
    function maskToNumber(mask: string): number;
    function numberToMask(num: number): string;
    function findHosts(ids: any): number[];
    function findServices(host: any, serviceClass: any, port: any): any[];
}
