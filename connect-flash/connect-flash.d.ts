interface ConnectFlash
{
    (options?:any):Function;
}

declare var connectFlash:ConnectFlash;

declare module "connect-flash"
{
    export = connectFlash
}