export default class AltDict {
    readonly data: Record<string, any>;

    get(key: string): any;

    set(key: string, value: any): void;

    values(): any[];
}
