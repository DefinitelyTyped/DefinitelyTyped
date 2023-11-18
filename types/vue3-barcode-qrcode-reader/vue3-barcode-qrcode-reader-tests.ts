import { createApp } from "vue";
import { StreamQrcodeBarcodeReader, IconCamera } from "vue3-barcode-qrcode-reader";

createApp({
    components: {
        "stream-qrcode-barcode-reader": StreamQrcodeBarcodeReader,
        "icon-camera": IconCamera,

    },
    template: `
        <stream-qrcode-barcode-reader :capture="shoot"></stream-qrcode-barcode-reader>
        <icon-camera></icon-camera>
    `,
}).mount("#app");
