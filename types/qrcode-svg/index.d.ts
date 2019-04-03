// Type definitions for qrcode-svg 1.0
// Project: https://github.com/papnkukn/qrcode-svg
// Definitions by: Eric Ferreira <https://github.com/ericbf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class QRCode {
	constructor(content: string);
	constructor(options: QRCode.Options);

    qrcode: QRCode.Model;
    options: QRCode.Options;

	/**
	 * Generates QR Code as SVG image
	 * @param  opt Set the container. Defaults to `{ container: "svg" }`.
	 * @return The svg string.
	 */
	svg(opt?: {
		container: "svg" | "g" | "none"
	}): string;
	/**
	 * Writes QR Code image to a file. Requires `fs`.
	 * @param  file The filename to write to
	 * @param  callback The callback that will be called, possibly with an error, when done.
	 */
	save(file: string, callback: (error?: Error) => void): void;
}

declare namespace QRCode {
    interface Options {
        /** Default is `"#ffffff"`. */
        background?: string;
        /** Default is `"#000000"`. */
        color?: string;
        /** The actual content of the QR code */
        content: string;
        /** Default is `"M"`. */
        ecl?: "L" | "M" | "H" | "Q";
        /** Default is `256`. */
        height?: number;
        /** Default is `4`. */
        padding?: number;
        /** Default is `256`. */
        width?: number;
        /** Default is `4`. */
        typeNumber?: number;
    }

    interface Model {
        modules: boolean[][];
        typeNumber: number;
        errorCorrectLevel: number;
        moduleCount: number;
        dataCache: number[] | null;
        dataList: Array<{
            data: string;
            mode: number;
            parsedData: number[];
        }>;

        addData(data: string): void;
        isDark(row: number, col: number): boolean;
        getModuleCount(): number;
        make(): void;
    }
}

export = QRCode;
