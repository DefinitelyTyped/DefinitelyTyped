declare module "kue"
{
    export var version:string;

    export class Job
    {
        disableSearch:boolean;
        get(id, callback:(err:any, job:Job) => void);
        range(from, to, order, fn);
        rangeByState(state, from, to, order, fn);
        rangeByType(type, state, from, to, order, fn);
        remove(id, fn);
        log(id, fn);
    }
}