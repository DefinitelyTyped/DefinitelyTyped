/// <reference types="node" />

import { I2CBus } from "i2c-bus";

/**
 * OLED display controller for I2C connected monochrome OLED screens.
 * Supports SSD1306 and SH1106 driver chips.
 */
declare class Oled {
    /** Display width in pixels */
    readonly WIDTH: number;
    /** Display height in pixels */
    readonly HEIGHT: number;
    /** Current driver type */
    readonly DRIVER: Oled.DriverType;

    /**
     * Creates a new OLED display instance.
     *
     * @param i2c - An open I2C bus instance from the i2c-bus package
     * @param opts - Configuration options for the display
     *
     * @example
     * ```javascript
     * const i2c = require('i2c-bus');
     * const Oled = require('oled-i2c-bus');
     *
     * const i2cBus = i2c.openSync(1);
     * const oled = new Oled(i2cBus, {
     *   width: 128,
     *   height: 64,
     *   address: 0x3C,
     *   driver: 'SSD1306'
     * });
     * ```
     */
    constructor(i2c: I2CBus, opts: Oled.OledOptions);

    // ==================== Display Control ====================

    /**
     * Turns the display on.
     */
    turnOnDisplay(): void;

    /**
     * Turns the display off.
     */
    turnOffDisplay(): void;

    /**
     * Dims or restores the display contrast.
     *
     * @param bool - true to dim the display, false to restore normal contrast
     */
    dimDisplay(bool: boolean): void;

    /**
     * Inverts the display colors.
     * Black becomes white, white becomes black.
     *
     * @param bool - true for inverted state, false for normal colors
     */
    invertDisplay(bool: boolean): void;

    /**
     * Activates scrolling for the display content.
     * Note: SH1106 does not support scrolling.
     *
     * @param dir - Direction of scrolling: 'left', 'right', 'left diagonal', or 'right diagonal'
     * @param start - Starting row of scrolling area
     * @param stop - End row of scrolling area
     *
     * @example
     * ```javascript
     * // Scroll entire 128x32 screen to the left
     * oled.startScroll('left', 0, 15);
     * ```
     */
    startScroll(dir: Oled.ScrollDirection, start: number, stop: number): void;

    /**
     * Stops all current scrolling behavior.
     */
    stopScroll(): void;

    /**
     * Sends the entire framebuffer to the OLED display.
     * Synchronizes the internal buffer with the display.
     * Usually called automatically by drawing methods when sync is true.
     */
    update(): void;

    // ==================== Drawing Methods ====================

    /**
     * Clears all pixels on the display (fills with black).
     *
     * @param sync - If true, updates the display immediately. Default: true
     */
    clearDisplay(sync?: boolean): void;

    /**
     * Sets the cursor position for text writing.
     * Call this before writeString() to set the starting position.
     *
     * @param x - X coordinate (column)
     * @param y - Y coordinate (row)
     */
    setCursor(x: number, y: number): void;

    /**
     * Draws a byte at a specific page and column.
     * Low-level method for direct buffer manipulation.
     *
     * @param page - Page number (0 to HEIGHT/8 - 1)
     * @param col - Column number (0 to WIDTH - 1)
     * @param byte - Byte value to write
     */
    drawPageCol(page: number, col: number, byte: number): void;

    /**
     * Draws a byte at a specific page and segment.
     * Low-level method for direct buffer manipulation.
     *
     * @param page - Page number (0 to HEIGHT/8 - 1)
     * @param seg - Segment number (0 to WIDTH - 1)
     * @param byte - Byte value to write
     * @param sync - If true, updates the display immediately. Default: false
     */
    drawPageSeg(page: number, seg: number, byte: number, sync?: boolean): void;

    /**
     * Draws one or more pixels on the display.
     *
     * @param pixels - Single pixel [x, y, color] or array of pixels [[x, y, color], ...]
     * @param sync - If true, updates the display immediately. Default: true
     *
     * @example
     * ```javascript
     * // Draw a single pixel
     * oled.drawPixel([64, 32, 1]);
     *
     * // Draw multiple pixels
     * oled.drawPixel([
     *   [0, 0, 1],
     *   [127, 0, 1],
     *   [64, 32, 1]
     * ]);
     * ```
     */
    drawPixel(pixels: Oled.Pixel | Oled.Pixel[], sync?: boolean): void;

    /**
     * Draws a line using Bresenham's line algorithm.
     *
     * @param x0 - Start X coordinate
     * @param y0 - Start Y coordinate
     * @param x1 - End X coordinate
     * @param y1 - End Y coordinate
     * @param color - Pixel color (0 for off/black, 1 for on/white)
     * @param sync - If true, updates the display immediately. Default: true
     *
     * @example
     * ```javascript
     * oled.drawLine(0, 0, 127, 63, 1);
     * ```
     */
    drawLine(
        x0: number,
        y0: number,
        x1: number,
        y1: number,
        color: Oled.Color,
        sync?: boolean,
    ): void;

    /**
     * Draws a filled rectangle.
     *
     * @param x - Top-left X coordinate
     * @param y - Top-left Y coordinate
     * @param w - Width in pixels
     * @param h - Height in pixels
     * @param color - Fill color (0 for off/black, 1 for on/white)
     * @param sync - If true, updates the display immediately. Default: true
     *
     * @example
     * ```javascript
     * oled.fillRect(10, 10, 50, 30, 1);
     * ```
     */
    fillRect(
        x: number,
        y: number,
        w: number,
        h: number,
        color: Oled.Color,
        sync?: boolean,
    ): void;

    /**
     * Writes a string of text to the display.
     * Use setCursor() before this to set the starting position.
     *
     * @param font - Font object (e.g., from oled-font-5x7 or oled-font-pack)
     * @param size - Font size multiplier (1 = normal, 2 = double, etc.)
     * @param string - Text to display
     * @param color - Text color (0 for off/black, 1 for on/white)
     * @param wrap - If true, wraps text at screen edge
     * @param sync - If true, updates the display immediately. Default: true
     *
     * @example
     * ```javascript
     * const font = require('oled-font-5x7');
     * oled.setCursor(0, 0);
     * oled.writeString(font, 1, 'Hello World!', 1, true);
     * ```
     */
    writeString(
        font: Oled.Font,
        size: number,
        string: string,
        color: Oled.Color,
        wrap: boolean,
        sync?: boolean,
    ): void;

    /**
     * Draws an RGBA image at the specified coordinates.
     * Transparent pixels are skipped.
     * Any pixel with RGB color becomes white, (0,0,0) becomes black.
     *
     * @param image - RGBA image object (compatible with pngjs)
     * @param dx - Destination X coordinate
     * @param dy - Destination Y coordinate
     * @param sync - If true, updates the display immediately. Default: true
     *
     * @example
     * ```javascript
     * const PNG = require('pngjs').PNG;
     * const fs = require('fs');
     *
     * fs.createReadStream('image.png')
     *   .pipe(new PNG({ filterType: 4 }))
     *   .on('parsed', function() {
     *     oled.drawRGBAImage(this, 0, 0, true);
     *   });
     * ```
     */
    drawRGBAImage(
        image: Oled.RGBAImage,
        dx: number,
        dy: number,
        sync?: boolean,
    ): void;

    /**
     * Draws a bitmap from raw pixel data.
     * The bitmap must be monochrome and match the display dimensions.
     *
     * @param pixels - Array of pixel values (0 or 1)
     * @param sync - If true, updates the display immediately. Default: true
     *
     * @example
     * ```javascript
     * const pngparse = require('pngparse');
     * pngparse.parseFile('image.png', function(err, image) {
     *   oled.drawBitmap(image.data);
     * });
     * ```
     */
    drawBitmap(pixels: number[], sync?: boolean): void;

    // ==================== Indicator Methods ====================

    /**
     * Draws a battery level indicator icon.
     * Shows 0-3 bars based on percentage level.
     *
     * @param x - Start X coordinate
     * @param y - Start Y coordinate
     * @param percentage - Battery level (0-100)
     *
     * @example
     * ```javascript
     * oled.battery(100, 0, 75); // Shows 3 bars
     * ```
     */
    battery(x: number, y: number, percentage: number): void;

    /**
     * Draws a Bluetooth icon.
     *
     * @param x - Start X coordinate
     * @param y - Start Y coordinate
     */
    bluetooth(x: number, y: number): void;

    /**
     * Draws a WiFi signal strength indicator icon.
     * Shows 0-3 bars based on signal percentage.
     *
     * @param x - Start X coordinate
     * @param y - Start Y coordinate
     * @param percentage - Signal strength (0-100)
     *
     * @example
     * ```javascript
     * oled.wifi(110, 0, 80); // Shows 3 bars
     * ```
     */
    wifi(x: number, y: number, percentage: number): void;

    /**
     * Displays an image with optional animation.
     * A wrapper for drawRGBAImage with additional features.
     *
     * @param x - Start X coordinate (ignored when animated is true)
     * @param y - Start Y coordinate (ignored when animated is true)
     * @param image - Full path to image or filename in resources folder
     * @param font - Font object for error messages
     * @param clear - If true, clears display before drawing
     * @param reset - If true, stops all animations
     * @param animated - If true, enables bouncing animation
     * @param wrapping - If true, wraps error message text
     *
     * @example
     * ```javascript
     * const font = require('oled-font-5x7');
     * oled.image(0, 0, 'logo.png', font, true, false, false, true);
     * ```
     */
    image(
        x: number,
        y: number,
        image: string,
        font: Oled.Font,
        clear: boolean,
        reset: boolean,
        animated: boolean,
        wrapping: boolean,
    ): void;
}

declare namespace Oled {
    /**
     * Color value for drawing operations.
     * 0 = off/black, 1 or any truthy value = on/white
     * Can also use string 'BLACK' or 'WHITE'
     */
    type Color = number | boolean | "BLACK" | "WHITE";

    /**
     * Scroll direction for startScroll method.
     */
    type ScrollDirection = "left" | "right" | "left diagonal" | "right diagonal";

    /**
     * Supported OLED driver types.
     */
    type DriverType = "SSD1306" | "SH1106";

    /**
     * A single pixel definition: [x, y, color]
     */
    type Pixel = [number, number, Color];

    /**
     * Font object structure used by writeString method.
     * Compatible with oled-font-5x7 and oled-font-pack packages.
     */
    interface Font {
        /** Width of each character in pixels */
        width: number;
        /** Height of each character in pixels */
        height: number;
        /** Array of character lookup strings */
        lookup: string[];
        /** Array of font bitmap data */
        fontData: number[];
    }

    /**
     * RGBA Image structure compatible with pngjs.
     * Used by drawRGBAImage method.
     */
    interface RGBAImage {
        /** Width of the image in pixels */
        width: number;
        /** Height of the image in pixels */
        height: number;
        /** Raw RGBA pixel data buffer (4 bytes per pixel) */
        data: Buffer | Uint8Array;
    }

    /**
     * Options for initializing the OLED display.
     */
    interface OledOptions {
        /** Width of the display in pixels. Default: 128 */
        width?: number;
        /** Height of the display in pixels. Default: 64 */
        height?: number;
        /** I2C address of the display. Default: 0x3C */
        address?: number;
        /** I2C bus number. Default: 1 */
        bus?: number;
        /** Driver type: 'SSD1306' or 'SH1106'. Default: 'SSD1306' */
        driver?: DriverType;
        /** Line spacing in pixels for text. Default: 1 */
        linespacing?: number;
        /** Letter spacing in pixels for text. Default: 1 */
        letterspacing?: number;
    }
}

export = Oled;
