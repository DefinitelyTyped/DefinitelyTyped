import Vue from 'vue';
import draggable from 'vuedraggable';

new Vue({
    el: '#app',
    template: `<draggable v-model="list"></draggable>`,
    components: {
        draggable,
    },
    data: {
        list: []
    }
});
