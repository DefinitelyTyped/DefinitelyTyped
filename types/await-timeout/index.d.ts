export = Timeout;

declare class Timeout {
    static set(delay: number): Promise<undefined>;
    static set(delay: number, message: string): Promise<never>;

    static wrap(promise: Promise<any>, delay: number, error?: string): Promise<any>;

    set(delay: number): Promise<undefined>;
    set(delay: number, message: string): Promise<never>;
    clear(): void;
}
