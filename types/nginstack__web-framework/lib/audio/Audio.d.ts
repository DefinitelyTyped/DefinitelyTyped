export = Audio;
declare function Audio(process: any): void;
declare class Audio {
    constructor(process: any);
    process: any;
    sources: any[];
    autoplay: boolean;
    preload: string;
    visible: boolean;
    loop: boolean;
    id: string;
    write(): void;
    play(): void;
    private _formatAudioVariable;
    _createId(): string;
}
declare namespace Audio {
    const _lastId: number;
}
