import Vue from 'vue';
import { ImageBarcodeReader, StreamBarcodeReader } from 'vue-barcode-reader';

new Vue({
    el: '#app',
    components: {
        'stream-barcode-reader': StreamBarcodeReader,
        'image-barcode-reader': ImageBarcodeReader,
    },
    template: `
        <stream-barcode-reader></stream-barcode-reader>
        <image-barcode-reader></image-barcode-reader>
    `,
});
