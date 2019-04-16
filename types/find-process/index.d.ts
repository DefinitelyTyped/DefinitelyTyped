// Type definitions for find-process 1.1
// Project: https://github.com/yibn2008/find-process
// Definitions by: Buaban Buataitom <https://github.com/buaban>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function find(by: string, value: string | number): Promise<Array<{ pid: string, ppid: string, uid: string, gid: string, name: string, cmd: string }>>;
declare namespace find {}

export = find;
