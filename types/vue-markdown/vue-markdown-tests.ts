import Vue from 'vue';
import VueMarkdown from 'vue-markdown';

new Vue({
    el: '#app',
    components: {
        VueMarkdown
    },
    template: `
        # Test
    `
});
