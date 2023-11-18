import { createApp } from "vue";
import { StreamQrcodeBarcodeReader } from "vue3-barcode-qrcode-reader";

createApp({
    components: {
        "stream-qrcode-barcode-reader": StreamQrcodeBarcodeReader,
    },
    template: `
        <stream-qrcode-barcode-reader :capture="shoot"></stream-qrcode-barcode-reader>
    `,
}).mount("#app");
