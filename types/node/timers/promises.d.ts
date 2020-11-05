declare module "timers/promises" {
    import { TimerOptions } from "timers";

    namespace promises {
        function setTimeout(ms: number, options?: TimerOptions): Promise<void>;
        function setTimeout<T>(ms: number, value: T, options?: TimerOptions): Promise<T>;

        function setImmediate(options?: TimerOptions): Promise<void>;
        function setImmediate<T>(value: T, options?: TimerOptions): Promise<T>;
    }

    export = promises;
}
