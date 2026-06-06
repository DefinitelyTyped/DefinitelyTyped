export const CTRL_PATH: symbol;

export const MIDDLEWARES: symbol;

export const OPTIONS: symbol;

export const ROUTES: symbol;

export function controller(path: any, opts?: any, ...args: any[]): any;

export function route(method: string, path: any, opts?: any, ...args: any[]): any;

export function get(...args: any[]): any;

export function head(...args: any[]): any;

export function patch(...args: any[]): any;

export function post(...args: any[]): any;

export function put(...args: any[]): any;

export function del(...args: any[]): any;

export function all(...args: any[]): any;

export default function(opts: any): any;
