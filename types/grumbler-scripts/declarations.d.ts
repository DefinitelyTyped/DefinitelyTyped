import { ENV } from './config/constants';

export type $Values<O extends object> = O[keyof O];

export const __TEST__: boolean;
export const __WEB__: boolean;
export const __MIN__: boolean;
export const __DEBUG__: boolean;
export const __ENV__: $Values<typeof ENV>;
export const __TREE_SHAKE__: boolean;
export const __WINDOW__: any;
export const __GLOBAL__: any;
export const __LOCAL__: boolean;
export const __STAGE__: boolean;
export const __SANDBOX__: boolean;
export const __PRODUCTION__: boolean;
export const __UID__: string;
