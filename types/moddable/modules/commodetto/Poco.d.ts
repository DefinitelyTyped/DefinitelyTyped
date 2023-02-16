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

declare module "commodetto/Poco" {
    import PixelsOut from "commodetto/PixelsOut";
    import Bitmap from "commodetto/Bitmap";

    interface Rectangle {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    type Font = any;    // @@ share full interface with commodetto/parseBMF

    export interface PocoPrototype {
        close(): void;
        begin(x?: number, y?: number, width?: number, height?: number): void;
        begin(rectangle: Rectangle): void;
        end(): void;
        continue(x: number, y: number, width: number, height: number): void;

        clip(x: number, y: number, width: number, height: number): void;
        clip(): void;
        origin(x: number, y: number): void;
        origin(): void;

        makeColor(r: number, g: number, b: number): number;
        fillRectangle(color: number, x: number, y: number, width: number, height: number): void;
        blendRectangle(color: number, blend: number, x: number, y: number, width: number, height: number): void;
        drawPixel(color: number, x: number, y: number): void;

        drawBitmap(bits: Bitmap, x: number, y: number): void;
        drawBitmap(bits: Bitmap, x: number, y: number, sx: number, sy: number): void;
        drawBitmap(bits: Bitmap, x: number, y: number, sx: number, sy: number, sw: number, sh: number): void;

        drawMonochrome(monochrome: object, fore: number | undefined, back: number | undefined, x: number, y: number): void;
        drawMonochrome(monochrome: object, fore: number | undefined, back: number | undefined, x: number, y: number, sx: number, sy: number): void;
        drawMonochrome(monochrome: object, fore: number | undefined, back: number | undefined, x: number, y: number, sx: number, sy: number, sw: number, sh: number): void;

        drawGray(bits: Bitmap, color: number, x: number, y: number): void;
        drawGray(bits: Bitmap, color: number, x: number, y: number, sx: number, sy: number): void;
        drawGray(bits: Bitmap, color: number, x: number, y: number, sx: number, sy: number, sw: number, sh: number): void;
        drawGray(bits: Bitmap, color: number, x: number, y: number, sx: number, sy: number, sw: number, sh: number, blend: number): void;

        drawMasked(bits: Bitmap, x: number, y: number, sx: number, sy: number, sw: number, sh: number, mask: Bitmap, mask_sx: number, mask_sy: number): void;
        drawMasked(bits: Bitmap, x: number, y: number, sx: number, sy: number, sw: number, sh: number, mask: Bitmap, mask_sx: number, mask_sy: number, blend: number): void;

        fillPattern(bits: Bitmap, x: number, y: number, w: number, h: number): void;
        fillPattern(bits: Bitmap, x: number, y: number, w: number, h: number, sx: number, sy: number, sw: number, sh: number): void;

        drawFrame(frame: ArrayBuffer | HostBuffer, stream: { width: number, height: number }, x: number, y: number): void;

        drawText(text: string, font: Font, color: number, x: number, y: number, width?: number): void;
        getTextWidth(text: string, font: Font): number;

        adaptInvalid(area: Rectangle): void;

        bitmapChanged(bits: Bitmap): void;
        bitmapRemove(bits: Bitmap): void;
        compact(): void;

        readonly width: number;
        readonly height: number;
        readonly pixelsOut: PixelsOut;
    }

    interface PocoDictionary {
        pixels?: number;
        displayListLength?: number;
        rotation?: (0 | 90 | 180 | 270);
    }

    export interface PocoConstructor {
        new(pixelsOut: PixelsOut, options?: PocoDictionary): PocoPrototype;
    }

    var Poco: PocoConstructor;

    global {
        const screen: PixelsOut;
    }

    export default Poco;
}
