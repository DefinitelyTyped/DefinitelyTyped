// Type definitions for cordova-universal-links-plugin 1.2
// Project: https://github.com/nordnet/cordova-universal-links-plugin#readme
// Definitions by: David Broder-Rodgers <https://github.com/broder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface EventData {
    url: string;
    scheme: string;
    host: string;
    path: string;
    params: { [key: string]: string };
    hash: string;
}

interface UniversalLinks {
    subscribe(eventName: string | null, callback: (data: EventData) => void): void;
    unsubscribe(eventName: string | null): void;
}

interface Window {
	universalLinks: UniversalLinks;
}

declare var universalLinks: UniversalLinks;
