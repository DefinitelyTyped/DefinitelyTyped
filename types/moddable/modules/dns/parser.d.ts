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

declare module "dns/parser" {
    class Parser {
        constructor(buffer: ArrayBuffer);
        get id(): number;
        get flags(): number;
        get questions(): number;
        get answers(): number;
        get authorities(): number;
        get additionals(): number;
        // TODO: not use unknown
        question(index: number): unknown;
        answer(index: number): unknown;
        authority(index: number): unknown;
        additional(index: number): unknown;
    }
    export { Parser as default };
}
