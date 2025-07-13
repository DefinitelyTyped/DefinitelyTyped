import type escape from "./implementation";

declare global {
    interface RegExpConstructor {
        escape: typeof escape;
    }
}
