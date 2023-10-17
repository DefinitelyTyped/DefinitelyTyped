interface Kik {
    enabled: boolean;
    message: KikMessage;

    send(user: string, message: KikMessage): void;
    send(message: KikMessage): void;
    ready(callback: () => void): void;
    hasPermission(): boolean;
    open(url: string, popupMode?: boolean): void;
    on(property: string, eventHandler: () => void): void;
    off(property: string, eventHandler: () => void): void;
    once(property: string, eventHandler: () => void): void;
    trigger(property: string, data?: any): void;
    linkData: string;
    getUser(callback: (user: KikUser) => void): void;
    getAnonymousUser(callback: (token: string) => void): void;
    sign(data: string, callback: (signedData: string, username: string, host: string) => void): void;
    anonymousSign(data: string, callback: (signedData: string, anonToken: string, host: string) => void): void;
    openConversation(username: string): void;
    showProfile(username: string): void;
    pickUsers(options: KikPickUsersOptions, callback: (users: KikUser[]) => void): void;
    pickUsers(callback: (users: KikUser[]) => void): void;

    formHelpers: {
        show(): void;
        hide(): void;
        isEnabled(): boolean;
    };

    metrics: {
        enableGoogleAnalytics(): void;
        enableGoogleAnalytics(trackingId: string, domain: string, oldApi?: boolean): void;
    };

    photo: {
        get(options: KikGetOptions, callback: (photos: string[]) => void): void;
        getFromCamera(callbacks: KikGetFromCameraCallbacks): void;
        getFromCamera(options: KikGetFromCameraOptions, callbacks: KikGetFromCameraCallbacks): void;
        getFromGallery(callback: (photos: string[]) => void): void;
        getFromGallery(options: KikGetOptions, callback: (photos: string[]) => void): void;
        saveToGallery(url: string, callback: (status: boolean) => void): void;
        get(callback: (photos: string[]) => void): void;
    };

    picker: {
        (url: string, data: any, callback: (response: any) => void): void;
        reply: (data: any) => void;
    };

    browser: {
        background: boolean;
        back(callback: () => boolean | void): void;
        unbindBack(callback: () => boolean | void): void;
        on(property: string, callback: () => void): void;
        off(property: string, callback: () => void): void;
        once(property: string, callback: () => void): void;
        trigger(property: string, data?: any): void;
        getOrientationLock(): string;
        setOrientationLock(lock: "free" | "landscape" | "portrait"): void;
        setOrientationLock(lock: string): void;
        statusBar(show: boolean): void;
        backlightTimeout(timeout: boolean): void;
    };

    utils: {
        platform: {
            os: {
                name: string;
                version: string;
            };
            browser: {
                name: string;
                version: string;
            };
            version: {
                name: string;
                version: string;
            };
        };
    };
}

interface KikUser {
    username: string;
    fullName: string;
    firstName: string;
    lastName: string;
    pic: string;
    thumbnail: string;
}

interface KikMessage {
    title: string;
    text: string;
    pic?: string | undefined;
    big?: boolean | undefined;
    noForward?: boolean | undefined;
    data?: any;
}

interface KikPickUsersOptions {
    minResults?: number | undefined;
    maxResults?: number | undefined;
    preselected?: { username: string }[] | undefined;
    filtered?: string[] | undefined;
    filterSelf?: boolean | undefined;
}

interface KikGetOptions {
    quality?: number | undefined;
    minResults?: number | undefined;
    maxResults?: number | undefined;
    maxHeight?: number | undefined;
    maxWidth?: number | undefined;
}

interface KikGetFromCameraOptions {
    quality?: number | undefined;
    maxHeight?: number | undefined;
    maxWidth?: number | undefined;
}

interface KikGetFromCameraCallbacks {
    onSelect: (numPhotos: number) => void;
    onPhoto: (photo: string, index: number) => void;
    onComplete: (photos: string[]) => void;
    onCancel: () => void;
}

declare const kik: Kik;
