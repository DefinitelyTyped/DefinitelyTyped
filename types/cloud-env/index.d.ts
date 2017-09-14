// Type definitions for cloud-env 0.2.2
// Project: https://github.com/ryanj/cloud-env
// Definitions by: Ben Davies <https://github.com/Morfent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface DefaultSettings {
	PORT?: number;
	IP?: string;
	HOSTNAME?: string;
	APP_NAME?: string;
	MONGODB_DB_URL?: string;
	MONGODB_DB_HOST?: string;
	MONGODB_DB_PORT?: number;
	MONGODB_DB_USERNAME?: string;
	MONGODB_DB_PASSWORD?: string;
	POSTGRESQL_DB_URL?: string;
	POSTGRESQL_DB_HOST?: string;
	POSTGRESQL_DB_PORT?: number;
	POSTGRESQL_DB_USERNAME?: string;
	POSTGRESQL_DB_PASSWORD?: string;
	MYSQL_DB_URL?: string;
	MYSQL_DB_HOST?: string;
	MYSQL_DB_PORT?: number;
	MYSQL_DB_USERNAME?: string;
	MYSQL_DB_PASSWORD?: string;
}

declare type MaybeNum = number | void;
declare type MaybeStr = string | void;

export const get: (key: string, default_key?: string) => MaybeStr;
export const defaults: { [key: string]: DefaultSettings; };
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
