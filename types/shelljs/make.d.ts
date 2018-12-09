import * as shelljs from './';
declare global {
    interface Target {
        (...args: any[]): void;
        result?: any;
        done?: boolean;
    }
    const target: {
        all?: Target;
        [s: string]: Target;
    };
    const cd: typeof shelljs.cd;
    const pwd: typeof shelljs.pwd;
    const ls: typeof shelljs.ls;
    const find: typeof shelljs.find;
    const cp: typeof shelljs.cp;
    const rm: typeof shelljs.rm;
    const mv: typeof shelljs.mv;
    const mkdir: typeof shelljs.mkdir;
    const cat: typeof shelljs.cat;
    const sed: typeof shelljs.sed;
    const grep: typeof shelljs.grep;
    const echo: typeof shelljs.echo;
    const pushd: typeof shelljs.pushd;
    const popd: typeof shelljs.popd;
    const dirs: typeof shelljs.dirs;
    const ln: typeof shelljs.ln;
    const exit: typeof shelljs.exit;
    const env: typeof shelljs.env;
    const exec: typeof shelljs.exec;
    const chmod: typeof shelljs.chmod;
    const tempdir: typeof shelljs.tempdir;
    const error: typeof shelljs.error;
    const touch: typeof shelljs.touch;
    const head: typeof shelljs.head;
    const sort: typeof shelljs.sort;
    const tail: typeof shelljs.tail;
    const uniq: typeof shelljs.uniq;
    const set: typeof shelljs.set;
    const config: typeof shelljs.config;
}
