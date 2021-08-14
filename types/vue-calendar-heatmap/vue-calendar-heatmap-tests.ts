import Vue from 'vue';
import VueCalendarHeatmap from 'vue-calendar-heatmap';

new Vue({
    el: '#app',
    data: {
        now: '2021-5-22',
    },
    components: {
        'vue-calendar-heatmap': VueCalendarHeatmap,
    },
    /*
    methods: {
        optionConsumer(option: any) {
        },
    },
     */
    template: `
    <vue-calendar-heatmap :value="now">
    </vue-calendar-heatmap>
`,
});
