// Type definitions for vue-barcode-reader 0.0
// Project: https://github.com/olefirenko/vue-barcode-reader
// Definitions by: Julian Schmidt <https://github.com/julisch94>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Vue from 'vue';

/**
 * Emits the following events:
 * - 'decode' with result text
 * - 'loaded' when video stream starts
 */
export class StreamBarcodeReader extends Vue {}

/**
 * Emits the following events:
 * - 'decode' with result text
 * - 'error' when decoding fails
 */
export class ImageBarcodeReader extends Vue {}
