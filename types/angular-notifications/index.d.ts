// Type definitions for angular-notifications
// Project: https://github.com/DerekRies/angular-notifications
// Definitions by: Tomasz Ducin <https://github.com/ducin/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace notifications {

        interface IAnimation {
        duration: number;
        enabled: boolean;
        }

        interface ISettings {
        info: IAnimation;
        warning: IAnimation;
        error: IAnimation;
        success: IAnimation;
        progress: IAnimation;
        custom: IAnimation;
        details: boolean;
        localStorage: boolean;
        html5Mode: boolean;
        html5DefaultIcon: string;
        }

        interface INotification {
        type: string;
        image: string;
        icon: string;
        title: string;
        content: string;
        timestamp: string;
        userData: string;
        }

        interface INotificationFactory extends angular.IModule {

        /* ========== SETTINGS RELATED METHODS =============*/

        disableHtml5Mode(): void;
        disableType(notificationType: string): void;
        enableHtml5Mode(): void;
        enableType(notificationType: string): void;
        getSettings(): ISettings;
        toggleType(notificationType: string): void;
        toggleHtml5Mode(): void;
        requestHtml5ModePermissions(): boolean;

        /* ============ QUERYING RELATED METHODS ============*/

        getAll(): Array<INotification>;
        getQueue(): Array<INotification>;

        /* ============== NOTIFICATION METHODS ==============*/

        info(title: string): INotification;
        info(title: string, content: string): INotification;
        info(title: string, content: string, userData: any): INotification;
        error(title: string): INotification;
        error(title: string, content: string): INotification;
        error(title: string, content: string, userData: any): INotification;
        success(title: string): INotification;
        success(title: string, content: string): INotification;
        success(title: string, content: string, userData: any): INotification;
        warning(title: string): INotification;
        warning(title: string, content: string): INotification;
        warning(title: string, content: string, userData: any): INotification;
        awesomeNotify(type: string, icon: string, title: string, content: string, userData: any): INotification;
        notify(image: string, title: string, content: string, userData: any): INotification;
        makeNotification(type: string, image: string, icon: string, title: string, content: string, userData: any): INotification;

        /* ============ PERSISTENCE METHODS ============ */

        save(): void;
        restore(): void;
        clear(): void;
        }
}

}

