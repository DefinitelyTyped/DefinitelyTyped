import * as winston from "winston";
import { TransportInstance } from "winston";
export interface DynamoDBTransportOptions {
    useEnvironment?: boolean | undefined;
    accessKeyId?: string | undefined;
    secretAccessKey?: string | undefined;
    region?: string | undefined;
    tableName: string;
    level: string;
    dynamoDoc?: boolean | undefined;
}
export interface DynamoDBTransportInstance extends TransportInstance {
    new(options?: DynamoDBTransportOptions): DynamoDBTransportInstance;
}
export declare class DynamoDB extends winston.Transport implements DynamoDBTransportInstance {
    regions: string[];
    name: string;
    level: string;
    db: any;
    AWS: any;
    region: string;
    tableName: string;
    dynamoDoc: boolean;
    constructor(options?: DynamoDBTransportOptions);
    log(level: any, msg: any, meta: any, callback: any): any;
}
declare module "winston" {
    interface Transports {
        DynamoDB: DynamoDB;
    }
}
