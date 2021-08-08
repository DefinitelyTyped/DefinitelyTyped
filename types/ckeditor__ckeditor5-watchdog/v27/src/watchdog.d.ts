import { Editor } from "@ckeditor/ckeditor5-core";
import { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";

export default abstract class Watchdog {
    constructor(config: WatchdogConfig);
    crashes: Array<{
        message: string;
        stack: string;
        date: number;
        filename?: string | undefined;
        lineno?: number | undefined;
        colno?: number | undefined;
    }>;
    state: "initializing" | "ready" | "crashed" | "crashedPermanently" | "destroyed";
    destroy(): void;
    off(eventName: string, callback: (...args: any[]) => any): void;
    on(eventName: string, callback: (...args: any[]) => any): void;
    setCreator(creator: (element: HTMLElement, config?: EditorConfig) => Promise<Editor>): void;
    setDestructor(destructor: (editor: Editor) => Promise<void>): void;
}

export interface WatchdogConfig {
    crashNumberLimit?: number | undefined;
    minimumNonErrorTimePeriod?: number | undefined;
    saveInterval?: number | undefined;
}
