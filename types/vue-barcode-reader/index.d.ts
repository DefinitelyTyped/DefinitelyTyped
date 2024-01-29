import Vue from "vue";

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
