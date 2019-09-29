// Type definitions for escpos 2.5
// Project: https://github.com/song940/node-escpos#readme
// Definitions by: Rayo <https://github.com/rayosu>
//                 Gerry <https://github.com/g3rrydanc3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference path="./commands.d.ts" />
/// <reference types="node" />

import * as net from "net";

export namespace Constants {
    enum FEED_CONTROL_TYPE {
        LF = 'LF', // Print and line feed
        GLF = 'GLF', // Print and feed paper (without spaces between lines)
        FF = 'FF', // Form feed
        CR = 'CR', // Carriage return
        HT = 'HT', // Horizontal tab
        VT = 'VT', // Vertical tab
    }

    enum HARDWARE_TYPE {
        HW_INIT = '\x1b\x40', // Clear data in buffer and reset modes
        HW_SELECT = '\x1b\x3d\x01', // Printer select
        HW_RESET = '\x1b\x3f\x0a\x00', // Reset printer hardware
    }

    enum BITMAP_FORMAT_TYPE {
        S8 = 'S8',
        D8 = 'D8',
        S24 = 'S24',
        D24 = 'D24',
    }

    enum QRCODE_LEVEL {
        L = 'L', // correct level 7%
        M = 'M', // correct level 15%
        Q = 'Q', // correct level 25%
        H = 'H', // correct level 30%
    }

    enum TXT_STYLE {
        NORMAL = 'NORMAL',
        TXT_BOLD = 'B',
        TXT_ITALIC = 'I',
        TXT_UNDERL = 'U',
        TXT_UNDERL2 = 'U2',
        TXT_BOLD_ITALIC = 'BI',
        TXT_BOLD_ITALIC_UNDERL = 'BIU',
        TXT_BOLD_ITALIC_UNDERL2 = 'BIU2',
        TXT_BOLD_UNDERL = 'BU',
        TXT_BOLD_UNDERL2 = 'BU2',
        TXT_ITALIC_UNDERL = 'IU',
        TXT_ITALIC_UNDERL2 = 'IU2',
    }

    enum MIME_TYPE {
        PNG = 'image/png',
        JPG = 'image/jpg',
        JPEG = 'image/jpeg',
        GIF = 'image/gif',
        BMP = 'image/bmp',
    }

    enum BARCODE_TYPE {
        UPC_A = 'UPC_A', // Barcode type UPC-A
        UPC_E = 'UPC_E', // Barcode type UPC-E
        EAN13 = 'EAN13', // Barcode type EAN13
        EAN8 = 'EAN8', // Barcode type EAN8
        CODE39 = 'CODE39', // Barcode type CODE39
        ITF = 'ITF', // Barcode type ITF
        NW7 = 'NW7', // Barcode type NW7
        CODE93 = 'CODE93', // Barcode type CODE93
        CODE128 = 'CODE128', // Barcode type CODE128
    }

    enum TXT_ALIGN {
        'LEFT' = 'LT', // Left justification
        'CENTER' = 'CT', // Centering
        'RIGHT' = 'RT', // Right justification
    }
}

export interface Adapter {
    open(callback?: Function): Adapter;

    close(callback?: Function, options?: any): Adapter;

    write(data: any, callback: Function): Adapter;
}

export class USB implements Adapter {
    constructor(vid?: string, pid?: string);

    static findPrinter(): USB[];

    static getDevice(vid?: string, pid?: string): Promise<USB>;

    open(callback?: Function): USB;

    close(callback?: Function): USB;

    write(data: Buffer, callback: Function): USB;
}

export class Serial implements Adapter {
    constructor(port: number, options?: { baudRate: number; autoOpen: boolean });

    open(callback?: Function): Serial;

    close(callback?: Function, timeout?: number): Serial;

    write(data: Buffer, callback: Function): Serial;
}

export class Network implements Adapter {
    constructor(address: string, port: number);

    open(callback?: Function): Network;

    close(callback?: Function): Network;

    write(data: Buffer, callback: Function): Network;
}

export class Console implements Adapter {
    constructor(handler?: (data: any[][]) => any);

    open(callback?: Function): Console;

    /** @deprecated */
    close(callback?: Function, options?: any): Console;

    write(data: Buffer): Console;
}

export class Image {
    constructor(pixels: any);

    static load(url: string, callback?: Function): void;
    static load(url: string, type: Constants.MIME_TYPE, callback?: Function): void;

    size(): { width: number; height: number; colors: number };

    toBitmap(
        density?: number
    ): {
        data: any;
        density: number;
    };

    toRaster(): {
        data: number[];
        width: number;
        height: number;
    };
}

export class Printer {
    constructor(adapter: Adapter, options?: {  encoding: string  });

    static create(device: Adapter): Promise<Printer>;

    /**
     * Set printer model to recognize model-specific commands.
     * Supported models: [ null, 'qsprinter' ]
     *
     * For generic printers, set model to null
     */
    model(_model: string): Printer;

    marginBottom(size: number): Printer;

    marginLeft(size: number): Printer;

    marginRight(size: number): Printer;

    print(content: any): Printer;

    println(content: any): Printer;

    newLine(): Printer;

    text(content: string, encoding?: string): Printer;

    drawLine(): Printer;

    table(data: string[], encoding?: string): Printer;

    tableCustom(data: string[], encoding?: string): Printer;

    pureText(content: string, encoding?: string): Printer;

    encode(encoding: string): Printer;

    feed(n?: number): Printer;

    control(ctrl: Constants.FEED_CONTROL_TYPE): Printer;

    align(align: Constants.TXT_ALIGN): Printer;

    font(family: string): Printer;

    style(type: Constants.TXT_STYLE): Printer;

    size(width: number, height: number): Printer;

    spacing(n?: number): Printer;

    lineSpace(n?: number): Printer;

    hardware(hw: string): Printer;

    barcode(
        code: string,
        type: Constants.BARCODE_TYPE,
        options?: { width: number; height: number; position: number; font: any; includeParity: boolean }
    ): Printer;

    qrcode(
        code: string,
        version: number, level: Constants.QRCODE_LEVEL, size: number
    ): Printer;

    qrimage(content: string, callback?: Function): Printer;
    qrimage(content: string, options?: { type: string; mode: string }, callback?: Function): Printer;

    image(image: Image, density: Constants.BITMAP_FORMAT_TYPE): Printer;

    raster(image: Image, mode?: string): Printer;

    /**
     * Send pulse to kick the cash drawer
     */
    cashdraw(pin?: number): Printer;

    beep(n: number, t: number): Printer;

    flush(callback?: Function): Printer;

    cut(part?: boolean, feed?: number): Printer;

    close(callback?: Function, options?: any): Printer;

    color(color: 0 | 1): Printer;
}

export class Screen {
    constructor(adapter: Adapter, encoding: string);

    static create(device: Adapter): Promise<Screen>;

    clear(callback?: Function): Screen;

    clearLine(callback?: Function): Screen;

    moveUp(callback?: Function): Screen;

    moveLeft(callback?: Function): Screen;

    moveRight(callback?: Function): Screen;

    moveDown(callback?: Function): Screen;

    moveHome(callback?: Function): Screen;

    moveMaxRight(callback?: Function): Screen;

    moveMaxLeft(callback?: Function): Screen;

    moveBottom(callback?: Function): Screen;

    move(n: number, m: number): Screen;

    overwrite(callback?: Function): Screen;

    verticalScroll(callback?: Function): Screen;

    horizontalScroll(callback?: Function): Screen;

    cursor(display: boolean): Screen;

    blink(step: number): Screen;

    timer(h: number, m: number): Screen;

    displayTimer(): Screen;

    brightness(level: number): Screen;

    /**
     * Selects or cancels reverse display of the characters received after this command
     */
    reverse(n: boolean): Screen;

    /**
     * Set status confirmation for DTR signal
     */
    DTR(n: boolean): Screen;

    print(content: string): Screen;

    /**
     * [function Print encoded alpha-numeric text with End Of Line]
     */
    text(content: string, encoding: string): Screen;

    encode(encoding: string): Screen;

    /**
     * Send data to hardware and flush buffer
     */
    flush(callback?: Function): Screen;

    close(callback?: Function, options?: any): Screen;
}

export class Server extends net.Server {
    constructor(device: Adapter);
    request(client: any): void;
}

export function Printer2(adapter: Adapter): any;
