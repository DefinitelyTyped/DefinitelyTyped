/*
 * Copyright (c) 2020 Shinya Ishikawa
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
declare module "piu/Sound" {
    import AudioOut from "pins/audioout";
    class Sound {
        constructor(dictionary: {
            path: string;
            offset?: number;
            size?: number;
        });
        constructor(tones: Array<{
            frequency: number,
            samples?: number
        }>);
        static callback(index: number): void;
        static readonly bitsPerSample: number;
        static readonly numChannels: number;
        static readonly sampleRate: number;
        static get volume(): number;
        static set volume(it: number);
        static close(): void;
        static open(stream?: number): AudioOut;
        play(stream?: number, repeat?: number, callback?: () => void): void;
    }
    export { Sound as default };
}
