import Vue from 'vue';
import {
    Material,
    Compact,
    Swatches,
    Slider,
    Sketch,
    Chrome,
    Photoshop
} from 'vue-color';

const colors = '#194d33';

new Vue({
    el: '#app',
    components: {
        'material-picker': Material,
        'compact-picker': Compact,
        'swatches-picker': Swatches,
        'slider-picker': Slider,
        'sketch-picker': Sketch,
        'chrome-picker': Chrome,
        'photoshop-picker': Photoshop
    },
    template: `
        <material-picker v-model="colors"></material-picker>
        <compact-picker v-model="colors"></compact-picker>
        <swatches-picker v-model="colors"></swatches-picker>
        <slider-picker v-model="colors"></slider-picker>
        <sketch-picker v-model="colors"></sketch-picker>
        <chrome-picker v-model="colors"></chrome-picker>
        <photoshop-picker v-model="colors"></photoshop-picker>
    `,
    data() {
        return { colors };
    }
});
