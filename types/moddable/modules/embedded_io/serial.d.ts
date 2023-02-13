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

declare module "embedded:io/serial" {
    import { Buffer, PinSpecifier, PortSpecifier } from "embedded:io/_common";
    class Serial {
        constructor(options: ({
            receive: PinSpecifier;
            transmit?: PinSpecifier;
        } | {
            recevice?: PinSpecifier;
            transmit: PinSpecifier;
        }) & {
            baud: number;
            flowControl?: "hardware" | "none";
            dataTerminalReady?: PinSpecifier;
            requestToSend?: PinSpecifier;
            clearToSend?: PinSpecifier;
            dataSetReady?: PinSpecifier;
            port: PortSpecifier;
            onReadable?: (this: Serial, bytes: number) => void;
            onWritable?: (this: Serial, bytes: number) => void;
            format?: "number" | "buffer";
            target?: any;
        });
        readonly resolution: number;
        close(): void;
        read(): number | ArrayBuffer | undefined;
        read(byteLength: number): ArrayBuffer | undefined;
        read(buffer: Buffer): number | undefined;
        write(value: number | Buffer): void;
        flush(): void;
        flush(input: number, output: number): void;
        set(options: {
            dataTerminalReady?: PinSpecifier;
            requestToSend?: PinSpecifier;
            break?: boolean;
        }): void;
        get format(): "number" | "buffer";
        set format(value: "number" | "buffer");
    }

    export default Serial;
}
