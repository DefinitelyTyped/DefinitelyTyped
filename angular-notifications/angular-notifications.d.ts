// Type definitions for angular-notifications
// Project: https://github.com/DerekRies/angular-notifications
// Definitions by: Tomasz Ducin <https://github.com/ducin/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.notifications {

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

    info(title): INotification;
    info(title, content): INotification;
    info(title, content, userData): INotification;
    error(title): INotification;
    error(title, content): INotification;
    error(title, content, userData): INotification;
    success(title): INotification;
    success(title, content): INotification;
    success(title, content, userData): INotification;
    warning(title): INotification;
    warning(title, content): INotification;
    warning(title, content, userData): INotification;
    awesomeNotify(type, icon, title, content, userData): INotification;
    notify(image, title, content, userData): INotification;
    makeNotification(type: string, image: string, icon: string, title: string, content: string, userData: string): INotification;

    /* ============ PERSISTENCE METHODS ============ */

    save(): void;
    restore(): void;
    clear(): void;
  }

}

