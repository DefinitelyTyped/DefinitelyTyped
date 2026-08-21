/// <reference lib="dom" />

interface ScreenDetailsEventHandlersEventMap {
    currentscreenchange: Event;
    screenschange: Event;
}

interface ScreenEventHandlersEventMap {
    change: Event;
}

interface ScreenDetailedEventHandlersEventMap {
    change: Event;
}

interface ScreenDetailsEventHandlers extends EventTarget {
    oncurrentscreenchange: ((this: ScreenDetails, ev: Event) => any) | null;
    onscreenschange: ((this: ScreenDetails, ev: Event) => any) | null;
    addEventListener<K extends keyof ScreenDetailsEventHandlersEventMap>(
        type: K,
        listener: (this: ScreenDetails, ev: ScreenDetailsEventHandlersEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: AddEventListenerOptions | boolean,
    ): void;
}

interface ScreenEventHandlers extends EventTarget {
    onchange: ((this: Screen, ev: Event) => any) | null;
    addEventListener<K extends keyof ScreenEventHandlersEventMap>(
        type: K,
        listener: (this: Screen, ev: ScreenEventHandlersEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: AddEventListenerOptions | boolean,
    ): void;
}

interface ScreenDetailedEventHandlers extends EventTarget {
    onchange: ((this: ScreenDetailed, ev: Event) => any) | null;
    addEventListener<K extends keyof ScreenDetailedEventHandlersEventMap>(
        type: K,
        listener: (this: Screen, ev: ScreenDetailedEventHandlersEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: AddEventListenerOptions | boolean,
    ): void;
}

// enhance window.Window with getScreenDetails method.
interface Window {
    getScreenDetails(): Promise<ScreenDetails>;
}

// enhance window.Screen with isExtended property
// enhance window.Screen with event handling
interface Screen extends ScreenEventHandlers {
    isExtended: boolean;
}

// enhance element.requestFullScreen(options)
interface FullscreenOptions {
    screen?: ScreenDetailed;
}

interface ScreenDetails extends ScreenDetailsEventHandlers {
    screens: ScreenDetailed[];
    currentScreen: ScreenDetailed;
}

// Extend window.Screen
// This should ideally extend ScreenDetailsEventHandlers also, but TS doesn't like it.
interface ScreenDetailed extends Screen /*, ScreenDetailsEventHandlers*/ {
    left: number;
    top: number;
    isPrimary: boolean;
    isInternal: boolean;
    devicePixelRatio: number;
    label: string;
}

// enhance window.navigator.permissions.query({ name });
// Failed Attempts on adding an additional value to PermissionName type
// // TSError Duplicate identifier 'PermissionName'.
// type PermissionName = PermissionName | 'window-placement';
//
// interface PermissionDescriptor {
//   // TSError Subsequent property declarations must have the same type.
//   name: PermissionName | 'window-placement';
// }
//
// How I achieved it, but I am not happy about it.
type PermissionDescriptorWithWindowPlacement =
    | PermissionDescriptor
    | {
        name: "window-placement";
    };
interface Permissions {
    query(permissionDesc: PermissionDescriptorWithWindowPlacement): Promise<PermissionStatus>;
}
