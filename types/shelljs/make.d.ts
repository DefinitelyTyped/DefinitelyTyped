import * as shelljs from './'
declare global {
    type Target = {
        (...args: any[]): void,
        result?: any,
        done?: boolean
    };
    export const target: {
        all?: Target;
        [s: string]: Target;
    };
    export const cd: typeof shelljs.cd;
    export const pwd: typeof shelljs.pwd;
    export const ls: typeof shelljs.ls;
    export const find: typeof shelljs.find;
    export const cp: typeof shelljs.cp;
    export const rm: typeof shelljs.rm;
    export const mv: typeof shelljs.mv;
    export const mkdir: typeof shelljs.mkdir;
    export const cat: typeof shelljs.cat;
    export const sed: typeof shelljs.sed;
    export const grep: typeof shelljs.grep;
    export const echo: typeof shelljs.echo;
    export const pushd: typeof shelljs.pushd;
    export const popd: typeof shelljs.popd;
    export const dirs: typeof shelljs.dirs;
    export const ln: typeof shelljs.ln;
    export const exit: typeof shelljs.exit;
    export const env: typeof shelljs.env;
    export const exec: typeof shelljs.exec;
    export const chmod: typeof shelljs.chmod;
    export const tempdir: typeof shelljs.tempdir;
    export const error: typeof shelljs.error;
    export const touch: typeof shelljs.touch;
    export const head: typeof shelljs.head;
    export const sort: typeof shelljs.sort;
    export const tail: typeof shelljs.tail;
    export const uniq: typeof shelljs.uniq;
    export const set: typeof shelljs.set;
    export const config: typeof shelljs.config;
}
