export interface EtherPortClientConstructorArgs {
    host: string;
    port: number;
    reconnectTimeout?: number;
}

// tslint:disable-next-line:no-unnecessary-class
export class EtherPortClient {
    constructor(options: EtherPortClientConstructorArgs);
}
