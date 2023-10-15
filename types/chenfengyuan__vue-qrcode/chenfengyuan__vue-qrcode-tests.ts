import VueQrCode from "@chenfengyuan/vue-qrcode";
import Vue from "vue";

new Vue({
    el: "#app",
    components: {
        VueQrCode,
    },
    template: `<vue-qr-code :value="'http://example.com/'"></vue-qr-code>`,
});
