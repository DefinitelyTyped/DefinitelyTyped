import "./global";

declare global {
    interface Target {
        (...args: any[]): void;
        result?: any;
        done?: boolean;
    }
    const target: {
        all?: Target;
        [s: string]: Target | undefined;
    };

}
