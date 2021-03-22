import { Control } from './Control';

export class MediaControl extends Control {
    pausePlayer(): void;
    cleanupPlayer(): void;
    openFrame(event: JQuery.Event): void;
    initFrame(): void;
    select(): void;
    restoreDefault(event: JQuery.Event): void;
    removeFile(event: JQuery.Event): void;
}
