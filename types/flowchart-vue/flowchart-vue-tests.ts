import Vue from 'vue';
import flowchart from 'flowchart-vue';

new Vue({
    el: '#app',
    template: `<flowchart v-model="list"></flowchart>`,
    components: {
        flowchart,
    },
    data: {
        nodes: [],
        connections: [],
    },
});
