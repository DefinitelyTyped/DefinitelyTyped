/*
 * Copyright (c) 2020 Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Tools.
 *
 *   The Moddable SDK Tools is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   The Moddable SDK Tools is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

declare module 'pins/audioout' {
    type MixerSamples = 1;
    type MixerFlush = 2;
    type MixerCallback = 3;
    type MixerVolume = 4;
    type MixerRawSamples = 5;
    type MixerTone = 6;
    type MixerSilence = 7;
    type MixerKind = (
        MixerSamples |
        MixerFlush |
        MixerCallback |
        MixerVolume |
        MixerRawSamples |
        MixerTone |
        MixerSilence
    );
    type MixerOptions = {
        sampleRate?: number,
        bitsPerSample?: number,
        numChannels?: number,
        streams?: number,
    };

    export class Mixer {
        constructor(options: MixerOptions);
        close(): void;
        enqueue(stream: number, kind: MixerKind): void;
        enqueue(stream: number, kind: MixerKind, buffer: HostBuffer): void;
        enqueue(stream: number, kind: MixerCallback, value: number): void;
        enqueue(stream: number, kind: MixerKind, buffer: HostBuffer, repeat: number): void;
        enqueue(stream: number, kind: MixerKind, buffer: HostBuffer, repeat: number, offset: number): void;
        enqueue(stream: number, kind: MixerKind, buffer: HostBuffer, repeat: number, offset: number, count: number): void;
        enqueue(stream: number, kind: MixerTone, frequency: number, samples: number): void;
        enqueue(stream: number, kind: MixerSilence, samples: number): void;
        mix: ((samplesNeeded: number) => HostBuffer)
            | ((buffer: BufferLike) => void)
            | undefined;
        length(stream: number): number;
        readonly sampleRate: number;
        readonly bitsPerSample: number;
        readonly numChannels: number;
        readonly streams: number;
        static readonly Samples: MixerSamples;
        static readonly Flush: MixerFlush;
        static readonly Callback: MixerCallback;
        static readonly Volume: MixerVolume;
        static readonly RawSamples: MixerRawSamples;
        static readonly Tone: MixerTone;
        static readonly Silence: MixerSilence;
    }

    type AudioOutCallback = (value: number) => void;
    class AudioOut extends Mixer {
        start(): void;
        stop(): void;
        callback: AudioOutCallback;
        callbacks: AudioOutCallback[];
        readonly mix: undefined;
    }
    export { AudioOut as default };
}
