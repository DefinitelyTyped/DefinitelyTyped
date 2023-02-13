/*
 * Copyright (c) 2020 Moddable Tech, Inc
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

declare module "worker" {
    export interface Self {
        onmessage(message: any): void;
        postMessage(message: any): void;
    }

    class Worker implements Self {
        constructor(module: string, options?: object);
        terminate(): void;

        onmessage(message: any): void;
        postMessage(message: any): void;
    }

    export class SharedWorker {
        constructor(module: string, options?: object);
    }

    global {
        const self: Self;
    }

    export { Worker as default };
}
