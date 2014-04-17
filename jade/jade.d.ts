declare module "jade"
{
    export function compile(str:string, options?:any):Function;
    export function renderFile(path:string, options:any, fn:Function);
    export function renderFile(path:string, fn:Function);

}