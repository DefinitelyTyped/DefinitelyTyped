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

declare module "embedded:io/smbus" {
    import I2C from "embedded:io/i2c";
    import { Buffer } from "embedded:io/_common";

    class SMBus extends I2C {
        constructor(options: ConstructorParameters<typeof I2C> & {
            stop?: boolean;
        });
        readUint8(register: number): number;
        writeUint8(register: number, value: number): void;
        readUint16(register: number, bigEndian?: boolean): number;
        writeUint16(register: number, value: number, bigEndian?: boolean): void;
        readBuffer(register: number, byteLength: number): ArrayBuffer;
        readBuffer(register: number, buffer: Buffer): void;
        writeBuffer(register: number, buffer: Buffer): void;
        readQuick(): void;
        writeQuick(): void;
        receiveByte(): number;
        sendByte(command: number): void;
    }

    export default SMBus;
}
