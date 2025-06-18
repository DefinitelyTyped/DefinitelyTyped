declare interface DefaultSettings {
    PORT?: number | undefined;
    IP?: string | undefined;
    HOSTNAME?: string | undefined;
    APP_NAME?: string | undefined;
    MONGODB_DB_URL?: string | undefined;
    MONGODB_DB_HOST?: string | undefined;
    MONGODB_DB_PORT?: number | undefined;
    MONGODB_DB_USERNAME?: string | undefined;
    MONGODB_DB_PASSWORD?: string | undefined;
    POSTGRESQL_DB_URL?: string | undefined;
    POSTGRESQL_DB_HOST?: string | undefined;
    POSTGRESQL_DB_PORT?: number | undefined;
    POSTGRESQL_DB_USERNAME?: string | undefined;
    POSTGRESQL_DB_PASSWORD?: string | undefined;
    MYSQL_DB_URL?: string | undefined;
    MYSQL_DB_HOST?: string | undefined;
    MYSQL_DB_PORT?: number | undefined;
    MYSQL_DB_USERNAME?: string | undefined;
    MYSQL_DB_PASSWORD?: string | undefined;
}

declare type MaybeNum = number | void;
declare type MaybeStr = string | void;

export const get: (key: string, default_key?: string) => MaybeStr;
export const defaults: { [key: string]: DefaultSettings };
export const PORT: MaybeNum;
export const IP: MaybeStr;
export const HOSTNAME: MaybeStr;
export const APP_NAME: MaybeStr;
export const MONGODB_DB_URL: MaybeStr;
export const MONGODB_DB_HOST: MaybeStr;
export const MONGODB_DB_PORT: MaybeNum;
export const MONGODB_DB_USERNAME: MaybeStr;
export const MONGODB_DB_PASSWORD: MaybeStr;
export const POSTGRESQL_DB_URL: MaybeStr;
export const POSTGRESQL_DB_HOST: MaybeStr;
export const POSTGRESQL_DB_PORT: MaybeNum;
export const POSTGRESQL_DB_USERNAME: MaybeStr;
export const POSTGRESQL_DB_PASSWORD: MaybeStr;
export const MYSQL_DB_URL: MaybeStr;
export const MYSQL_DB_HOST: MaybeStr;
export const MYSQL_DB_PORT: MaybeNum;
export const MYSQL_DB_USERNAME: MaybeStr;
export const MYSQL_DB_PASSWORD: MaybeStr;
