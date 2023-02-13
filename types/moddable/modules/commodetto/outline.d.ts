/*
* Copyright (c) 2021-2022 Moddable Tech, Inc.
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

declare module "commodetto/outline" {
    type CommodettoPath = Array<ArrayBuffer>;

    interface CanvasPath extends CommodettoPath {
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
        arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void;
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
        closePath(): void;
        ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
        lineTo(x: number, y: number): void;
        moveTo(x: number, y: number): void;
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        rect(x: number, y: number, w: number, h: number): void;
    }
    interface CanvasPathConstructor {
        new(): CanvasPath;
    }
    interface FreeTypePath extends CommodettoPath {
        beginSubpath(x: number, y: number, open?: boolean): void;
        conicTo(cx: number, cy: number, x: number, y: number): void;
        cubicTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number): void;
        endSubpath(): void;
        lineTo(x: number, y: number): void;
    }
    interface FreeTypePathConstructor {
        new(): FreeTypePath;
    }
    interface PolygonPath {
        (...points: Array<number>): CommodettoPath;
    }
    interface RoundRectPath {
        (x: number, y: number, w: number, h: number, r: number): CommodettoPath;
    }
    interface SVGPath {
        (path: string): CommodettoPath;
    }

    export class Outline {
        clone(): Outline;
        rotate(angle: number): Outline;
        rotate(angle: number, cx: number, cy: number): Outline;
        scale(x: number, y: number): Outline;
        translate(x: number, y: number): Outline;

        readonly bounds: {
            x: number,
            y: number,
            width: number,
            height: number,
        };

        static CanvasPath: CanvasPathConstructor;
        static FreeTypePath: FreeTypePathConstructor;
        static PolygonPath: PolygonPath;
        static RoundRectPath: RoundRectPath;
        static SVGPath: SVGPath;

        static fill(path: CommodettoPath, rule?: number): Outline;
        static stroke(path: CommodettoPath, weight: number, linecap?: number, linejoin?: number, miterLimit?: number): Outline;

        static readonly NON_ZERO_RULE: number;
        static readonly EVEN_ODD_RULE: number;

        static readonly LINECAP_BUTT: number;
        static readonly LINECAP_ROUND: number;
        static readonly LINECAP_SQUARE: number;

        static readonly LINEJOIN_ROUND: number;
        static readonly LINEJOIN_BEVEL: number;
        static readonly LINEJOIN_MITER: number;
    }
}

declare module "commodetto/Poco" {
    import { Outline } from "commodetto/outline";

    interface PocoPrototype {
        blendOutline(color: number, blend: number, outline: Outline, x?: number, y?: number): void;
        blendPolygon(color: number, blend: number, ...points: Array<number>): void;
    }
}
