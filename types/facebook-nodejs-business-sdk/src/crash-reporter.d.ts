export default class CrashReporter {
    static _instance: CrashReporter;
    _active: boolean;
    constructor();
    static enable(): void;
    static disable(): void;
}
