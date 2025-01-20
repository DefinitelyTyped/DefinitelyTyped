/// <reference types="node" />

import * as events from "events";
import * as express from "express";
import * as uuid from "node-uuid";

export class Server extends events.EventEmitter {
    constructor(options: ServerOptions);
    start(): void;
    stop(): void;
    corsOptionsAppsDelegate(req: string, callback: (err: any, data: CorsOptions) => void): void;
}

export interface CorsOptions {
    origin: boolean;
    methods: string[];
    exposedHeaders: string[];
}

export interface ServerOptions {
    expressApp: express.Express;
    prefix: string;
    port: number;
    host?: string | undefined;
    uuid?: uuid.UUIDOptions | undefined;
    friendlyName?: string | undefined;
    manufacturer: string;
    modelName: string;
    maxContentLength?: number | undefined;
    extraHeaders?: object | undefined;
    delegate: Delegate;
    corsAllowOrigins: string | boolean;
}

export interface Delegate {
    getApp(appName: string): App;
    launchApp(appName: string, launchData: string, callback: (data: string) => void): void;
    stopApp(appName: string, pid: string, callback: (data: boolean) => void): void;
}

export interface App {
    name: string;
    state: string;
    allowStop: boolean;
    pid: string;
    launch(launchData: string): void;
}

export interface AppInfo {
    dialVer: string;
    name: string;
    options: AppInfoOptions;
    state: string;
    xmlns: string;
}

export interface AppInfoOptions {
    allowStop: string;
}

export class Client extends events.EventEmitter {
    getDialDevice(deviceDescriptionUrl: string, callback?: (data: DialDevice, err: any) => void): void;
    start(): void;
    refresh(): void;
    stop(): void;
}

export class DialDevice {
    constructor(deviceInfo: DeviceInfo);
    getAppInfoXml(appName: string, callback?: (data: string, err: any) => void): void;
    getAppInfo(appName: string, callback?: (data: AppInfo, err: any) => void): void;
    launchApp(
        appName: string,
        launchData: string,
        contentType: string,
        callback?: (data: string, err: any) => void,
    ): void;
    stopApp(appName: string, pid: string, callback?: (data: number, err: any) => void): void;
}

export interface DeviceInfo {
    descriptionUrl: string;
    applicationUrl: string;
    deviceType: string;
    friendlyName: string;
    manufacturer: string;
    modelName: string;
    UDN: string;
    iconList: object[] | {
        icon: object;
    };
}
