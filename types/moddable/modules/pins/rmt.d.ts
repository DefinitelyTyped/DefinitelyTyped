/*
 * Copyright (c) 2021 Satoshi Tanaka
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
declare module 'pins/rmt' {
    class RMT {
        constructor(
            dictionary: {
                pin: number,
                channel?: number,
                divider?: number,
                direction?: "tx" | "rx",
                filter?: number,
                timeout?: number,
                ringbufferSize?: number,
                tx_config?: {
                    loop_en: 0 | 1,
                    carrier_freq_hz: number,
                    carrier_duty_percent: number,
                    carrier_level: 0 | 1,
                    carrier_en: 0 | 1,
                    idle_level: 0 | 1,
                    idle_output_en: 0 | 1
                }
            }
        );
        write(firstValue: 0 | 1, durations: number[]): void;
        onWritable: () => void;
        read(buffer: ArrayBuffer | ArrayBufferLike): { buffer: ArrayBuffer, count: number, phase: 0 | 1 };
        close(): void;
    }
    export { RMT as default };
}
