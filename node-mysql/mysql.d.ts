declare module "mysql"
{
    export function createConnection(config);
    export function createPool(config);
    export function createPoolCluster(config);

    export interface OkPacket
    {
        fieldCount:number;
        affectedRows:number;
        insertId:number;
        serverStatus:number;
        warningCount:number;
        message:string;
    }
}
