import Vue from 'vue';
import VueDateTime from 'vue-datetime';

const options = [
    {
        name: 'SomeName'
    },
    {
        name: 'SomeName2'
    }
];

new Vue({
    el: '#app',
    data: {
        value: null,
    },
    components: {
        'vue-datetime': VueDateTime
    },
    methods: {
        optionConsumer(option: any) {
        },
    },
    template: `
    <vue-datetime :value="value"
                @input="optionConsumer">
    </vue-datetime>
`
});
