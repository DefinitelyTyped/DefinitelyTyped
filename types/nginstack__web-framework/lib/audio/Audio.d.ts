export = Audio;
declare function Audio(process: Process): void;
declare class Audio {
    constructor(process: Process);
    process: import('../process/Process');
    sources: any[];
    autoplay: boolean;
    preload: string;
    visible: boolean;
    loop: boolean;
    id: string;
    write(): void;
    play(): void;
    private _formatAudioVariable;
    private _createId;
}
declare namespace Audio {
    export { Process };
}
type Process = import('../process/Process');
