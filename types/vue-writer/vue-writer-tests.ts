import { createApp } from "vue";
import VueWriter from "vue-writer";

createApp({
    components: {
        VueWriter,
    },
    template: `
        <VueWriter
            :array="['Hello World!']"
            :typeSpeed="25"
            :eraseSpeed="100"
            :delay="2000"
            :intervals="500"
            :iterations="0"
            :start="0"
            caret="cursor"
        />
    `,
}).mount("#app");
