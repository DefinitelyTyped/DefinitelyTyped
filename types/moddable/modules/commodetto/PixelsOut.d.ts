/*
* Copyright (c) 2019-2020 Bradley Farias
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

declare module "commodetto/PixelsOut" {
    class PixelsOut {
        constructor(width: number, height: number, pixelFormat: number);
        begin(x: number, y: number, width: number, height: number): void;
        end(): void;
        continue(x: number, y: number, width: number, height: number): void;
        send(
            pixels: ArrayBuffer | HostBuffer,
            offset: number,
            count: number
        ): void;

        adaptInvalid(area: { x: number, y: number, width: number, height: number }): void;
        pixelsToBytes(count: number): number;
        /**
         * The width of the PixelsOut instance in pixels.
         */
        readonly width: number;
        /**
         *  The height of the PixelsOut instance in pixels.
         */
        readonly height: number;
        /**
         * Returns true if the PixelsOut supports asynchronous rendering.
         * This means pixels passed to send are not copied, and must remain unchanged through the completion of the next call to send or end.
         */
        readonly pixelFormat: number;
        /**
         * Returns true if the PixelsOut supports asynchronous rendering.
         * This means pixels passed to send are not copied, and must remain unchanged through the completion of the next call to send or end.
         */
        readonly async: boolean;
        /**
         * Optionally returns a pointer to a HostBuffer that contains a native PixelsOutDispatchRecord.
         * Returns undefined if no native dispatch table is available.
         * The native PixelsOutDispatchRecord allows native code to call the PixelsOut's begin, send, continue, end, and adaptInvalid functions directly, without going through the XS virtual machine.
         * The native dispatch table is strictly an optimization and provides only functionality in the JavaScript API.
         */
        readonly c_dispatch: HostBuffer | undefined;
        /**
         * (Not documented yet)
         */
        clut: unknown;
    }

    export { PixelsOut as default };
}
