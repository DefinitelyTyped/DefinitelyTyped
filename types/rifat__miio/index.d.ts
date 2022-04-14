// Type definitions for @rifat/miio 2.0
// Project: https://github.com/torifat/miio
// Definitions by: Tadeusz Wyrzykowski <https://github.com/Shaquu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Thing } from "abstract-things";

export interface AirPurifier3 extends Thing {
    matches(type: "type:air-purifier"): true;

    childLock(): Promise<string>;

    updateChildLock(value: string): void;

    filterLifeLevel(): Promise<string>;

    updateFilterLifeLevel(value: string): void;

    changePower(value: string): Promise<string>;

    changeMode(value: string): Promise<string>;

    changeFan(value: string): Promise<string>;

    changeFavoriteSpeed(value: string): Promise<string>;

    changeLEDBrightness(value: string): Promise<string>;

    changeChildLock(value: string): Promise<string>;

    changeBuzzer(value: string): Promise<string>;

    changeFavoriteLevel(value: string): Promise<string>;

    changeFanSpeed(value: string): Promise<string>;
}

export type MiioDevice = Thing | AirPurifier3;

export interface MiioDeviceOptions {
    address: string;
    token?: string | Buffer;
    port?: string;
    model?: string;
    withPlaceholder?: boolean;
}

export function device(options: MiioDeviceOptions): Promise<MiioDevice>;
