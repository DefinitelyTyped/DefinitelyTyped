import Vue from 'vue';
import VueSimpleMde from 'vue-simplemde';

new Vue({
    el: '#app',
    data: {
        value: "",
        configs: {}
    },
    components: {
        'vue-simplemde': VueSimpleMde
    },
    template: `
    <vue-simplemde v-model="value" name="editor" preview-class="editor-class" autoint highlight sanitize :configs="configs"></vue-simplemde>
`
});
