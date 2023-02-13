/*
* Copyright (c) 2022 Shinya Ishikawa
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

declare module "embedded:io/digital" {
    import type { PinSpecifier } from "embedded:io/_common";

    type Edge = number;

    type Mode =
        | typeof Digital.Input
        | typeof Digital.InputPullUp
        | typeof Digital.InputPullDown
        | typeof Digital.InputPullUpDown
        | typeof Digital.Output
        | typeof Digital.OutputOpenDrain;

    class Digital {
        static readonly Input: unknown;
        static readonly InputPullUp: unknown;
        static readonly InputPullDown: unknown;
        static readonly InputPullUpDown: unknown;
        static readonly Output: unknown;
        static readonly OutputOpenDrain: unknown;
        static readonly Rising: Edge;
        static readonly Falling: Edge;

        constructor(options: {
            pin: PinSpecifier;
            mode: Mode;
            format?: "number";
            target?: any;
        } & ({
            onReadable: (this: Digital) => void;
            edge: Edge;
        } | {
            edge?: Edge;
        }));

        write(value: 0 | 1): void;
        read(): 0 | 1;
        close(): void;

        get format(): "number";
        set format(value: "number");
    }

    export default Digital;
}
