import Vue from 'vue';
import { VueHammer } from 'vue2-hammer';

VueHammer.config = {
    pinch: {
        enable: true,
    },
};
Vue.use(VueHammer);

new Vue({
    el: '#app',
    template: `
        <img
            src="https://gist.githubusercontent.com/ptandler/5b676312b58242c801ac1cdabce07902/raw/cb9b8e2cd01f39836023c10c682028c153be4651/Enneagram.svg"
             v-hammer:pinchstart="console.log('onPinchStart')"
             v-hammer:pinch="console.log('onPinch')"
        />
    `,
    data() {
        return {};
    },
});
