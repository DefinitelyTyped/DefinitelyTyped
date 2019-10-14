import moment from 'moment';
import 'moment/locale/de';
import Vue from 'vue';
import VueMoment from 'vue-moment';

Vue.use(VueMoment, {
    moment
});

new Vue({
    el: '#app',
    template: `
    {{ new Date() | moment("dddd, MMMM Do YYYY") }}
`,
});
