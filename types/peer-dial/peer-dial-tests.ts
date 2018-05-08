import { Server, Client, App, AppInfo, CorsOptions, ServerOptions, Delegate, DialDevice, DeviceInfo } from 'peer-dial';
import express = require('express');

class AppImpl implements App {
    name: string;
    state: string;
    allowStop: boolean;
    pid: string;
    launch(launchData: string): void {
    }
}
const app = new AppImpl();
class DelegateImpl implements Delegate {
    getApp(appName: string): App {
        return app;
    }
    launchApp(appName: string, launchData: string, callback: (data: string) => void): void {
    }
    stopApp(appName: string, pid: string, callback: (data: boolean) => void): void {
    }
}
function testServer() {
    const object = new Server({
        expressApp: express(),
        prefix: '/dial',
        port: 3000,
        corsAllowOrigins: '*',
        manufacturer: 'testing',
        modelName: 'testing',
        delegate: new DelegateImpl()
    });
}
function testClient() {
    const client = new Client();
    client.on("ready", () => {
    }).on('found', (deviceDescriptionUrl: string, ssdpHeaders: string) => {
        client.getDialDevice(deviceDescriptionUrl, (dialDevice: DialDevice, err: any) => {
            dialDevice.getAppInfo('YouTube', (appInfo: AppInfo, err: any) => {
                if (appInfo) {
                    dialDevice.launchApp("YouTube", "something", "text/plain", (data: string, err: any) => {
                    });
                }
            });
        });
    });
    client.start();
}
