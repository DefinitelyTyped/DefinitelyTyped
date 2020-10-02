import Cpu from './cpu';
import Drive from './drive';
import Mem from './mem';
import NetStat from './netstat';
import OpenFiles from './openfiles';
import Os from './os';
import OsCmd from './oscmd';
import Proc from './proc';
import Users from './users';

export const cpu: Cpu;
export const drive: Drive;
export const mem: Mem;
export const netstat: NetStat;
export const openfiles: OpenFiles;
export const os: Os;
export const oscmd: OsCmd;
export const proc: Proc;
export const users: Users;

export const options: { NOT_SUPPORTED_VALUE: string, INTERVAL: number };

export function isNotSupported(res: any): boolean;

export * from './cpu';
export * from './drive';
export * from './exec';
export * from './mem';
export * from './netstat';
export * from './openfiles';
export * from './os';
export * from './oscmd';
export * from './proc';
export * from './users';
