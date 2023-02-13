/*
* Copyright (c) 2020-2022 Moddable Tech, Inc.
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

declare module "commodetto/Bitmap" {
    type PixelFormat = number;

    class Bitmap {
        constructor(width: number, height: number, format: PixelFormat, buffer: BufferLike, offset: number, byteLength?: number)

        readonly pixelFormat: PixelFormat;
        readonly offset: number;
        readonly width: number;
        readonly height: number;

        static depth(pixelFormat: PixelFormat): number;

        static readonly Default = 1;
        static readonly Monochrome = 3;
        static readonly Gray16 = 4;
        static readonly Gray256 = 5;
        static readonly RGB332 = 6;
        static readonly RGB565LE = 7;
        static readonly RGB565BE = 8;
        static readonly RGB24 = 9;
        static readonly RGBA32 = 10;
        static readonly CLUT16 = 11;
        static readonly ARGB4444 = 12;
        static readonly RGB444 = 13;
        static readonly JPEG = 14;
        static readonly PNG = 15;

        static readonly RLE = 0x80;
    }

    export { Bitmap as default };
}
