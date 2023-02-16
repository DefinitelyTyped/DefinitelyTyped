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

declare module "file" {
    /**
     * The `File` class provides access to files.
     */
    class File {
        constructor(path: string, write?: boolean);

        read<T extends (
            typeof ArrayBuffer | typeof String
        )>(
            type: T,
            bytes?: number
        ): T extends typeof String ? string : InstanceType<T>;

        write(
            value: ArrayBufferLike | ArrayBuffer | string,
            ...moreValues: Array<ArrayBuffer | string>,
        ): void;

        close(): void;

        readonly length: number;
        position: number;

        static delete(path: string): boolean;
        static exists(path: string): boolean;
        static rename(from: string, to: string): boolean;
    }

    interface IteratorDirectoryEntry {
        name: string; length: undefined;
    }
    interface IteratorFileEntry {
        name: string; length: number;
    }
    class Iterator {
        constructor(path: string);
        next(): IteratorDirectoryEntry | IteratorFileEntry | undefined;
    }

    class Directory {
        static create(path: any): void;
        static delete(path: any): void;
    }

    class System {
        static config(): { maxPathLength: number };
        static info(): { used: number, total: number };
    }
}
