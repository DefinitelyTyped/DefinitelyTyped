// Type definitions for Messenger.js 1.2.1
// Project: https://github.com/HubSpot/messenger
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IMessenger {
    (): Messenger;
    options: MessengerOptions;
}

interface Messenger {
    post(message: Message): void;
    hideAll(): void;
}

interface Message {
    message: string;
    hideAfter?: number;
    showCloseButton?: boolean;
    type?: string;
}

interface MessengerOptions {
    theme?: string;
}

declare var Messenger: IMessenger;
