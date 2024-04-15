import { CleaveOptions } from "./options";

interface Properties extends CleaveOptions {
    result: string;
}

declare class Cleave {
    constructor(selector: string | HTMLElement, options: CleaveOptions);

    properties: Properties;

    getRawValue(): string;

    setRawValue(value: string): void;

    getFormattedValue(): string;

    getISOFormatDate(): string;

    destroy(): void;

    setPhoneRegionCode(regionCode: string): void;
}

export = Cleave;
