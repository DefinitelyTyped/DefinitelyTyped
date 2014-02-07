declare module "mysql"
{
    export function createConnection(config);
    export function createPool(config);
    export function createPoolCluster(config);
}
