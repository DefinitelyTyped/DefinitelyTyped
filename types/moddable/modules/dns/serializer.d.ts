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

declare module "dns/serializer" {
    import DNS from "dns";
    class Serializer {
        constructor(options: {
            opcode?: (typeof DNS.OPCODE)[keyof (typeof DNS.OPCODE)],
            query?: boolean,
            authoritative?: boolean,
            id?: number
        });
        add(
            section: (typeof DNS.SECTION)[keyof (typeof DNS.SECTION)],
            name: string,
            type: (typeof DNS.RR)[keyof (typeof DNS.RR)],
            classType: (typeof DNS.CLASS)[keyof (typeof DNS.CLASS)],
            ttl: number,
            data?: ArrayBuffer
        ): void;
        build(): ArrayBuffer;
    }
    export { Serializer as default };
}
