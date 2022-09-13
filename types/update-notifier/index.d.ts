// Type definitions for update-notifier 6.0
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>
//                 Noah Chen <https://github.com/nchen63>
//                 Jason Dreyzehner <https://github.com/bitjson>
//                 Michael Grinich <https://github.com/grinich>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import UpdateNotifier, { NotifyOptions, Package, Settings, UpdateInfo } from './update-notifier';

/** Checks if there is an available update */
export default function updateNotifier(settings?: Settings): UpdateNotifier;

export type { NotifyOptions, Package, Settings, UpdateInfo };
