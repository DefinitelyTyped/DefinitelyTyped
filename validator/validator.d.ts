interface Validator
{
    isEmail(val:string):boolean;
}

declare module "validator"
{
    export = Validator
}