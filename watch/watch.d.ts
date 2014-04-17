declare module "watch"
{
    export function createMonitor(root:string, options:any, callback:Function);
    export function createMonitor(root:string, callback:Function);
}