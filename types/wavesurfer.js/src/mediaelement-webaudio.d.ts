import { WaveSurferParams } from "../types/params";
import MediaElement = require("./mediaelement");

export = MediaElementWebAudio;

declare class MediaElementWebAudio extends MediaElement {
    constructor(params: WaveSurferParams);

    createMediaElementSource(mediaElement: HTMLMediaElement): void;
    destroy(): void;
    init(): void;
    play(start: number, end: number): Promise<void>;
}
