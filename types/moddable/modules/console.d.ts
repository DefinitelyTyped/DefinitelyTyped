/*
* Copyright (c) 2022 Richard Lea
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

/**
 * The `console` module uses `cli` modules to implement the terminal commands.
 */
declare module "console" {
    /**
     * The `Console` class implements a serial terminal for debugging and diagnostic purposes.
     */
    export class Console {
        receive(): number;
        write(...items: string[]): void;
        resume(): void;
        suspend(): void;
        prompt(): void;
        line(...items: string[]): void;
    }

    export { Console as default };
}
