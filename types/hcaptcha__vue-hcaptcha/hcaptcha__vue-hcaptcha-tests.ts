import HCaptcha from "@hcaptcha/vue-hcaptcha";
import Vue from "vue";

new Vue({
    el: "#app",
    components: {
        hcaptcha: HCaptcha,
    },
});
