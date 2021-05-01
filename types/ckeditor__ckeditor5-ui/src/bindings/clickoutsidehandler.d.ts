import { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";

export default function clickOutsideHandler(options?: {
    emitter: Emitter;
    activator: () => boolean;
    contextElements: HTMLElement[];
    callback: () => void;
}): void;
