import Memcached = require('memcached');

export function ec(conn: string | null): Memcached;
export function get(key: string): Promise<any>;
export function set(key: string, val: any, lifetime: number): Promise<boolean>;
export function del(key: string): Promise<boolean>;
