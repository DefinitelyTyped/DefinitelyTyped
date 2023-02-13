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

declare module 'pins/digital' {
    type Input = 0;
    type InputPullUp = 1;
    type InputPullDown = 2;
    type InputPullUpDown = 3;
    type Output = 8;
    type OutputOpenDrain = 9;
    type Mode = Input | InputPullUp | InputPullDown | InputPullUpDown | Output | OutputOpenDrain;
    export class Digital {
        constructor(dictionary: { pin: number; mode: number; port?: string });
        constructor(pin: number, mode: number);
        constructor(port: string, pin: number, mode: number);
        read(): number;
        write(value: number): void;
        mode(mode: Mode): void;
        static read(pin: number): number;
        static write(pin: number, value: number): void;
        static readonly Input: Input;
        static readonly InputPullUp: InputPullUp;
        static readonly InputPullDown: InputPullDown;
        static readonly InputPullUpDown: InputPullUpDown;
        static readonly Output: Output;
        static readonly OutputOpenDrain: OutputOpenDrain;
    }
    export { Digital as default };
}
