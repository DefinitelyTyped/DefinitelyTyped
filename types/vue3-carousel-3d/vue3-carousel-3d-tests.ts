import { createApp } from 'vue/dist/vue.esm-bundler';
import { Carousel3d, Slide } from 'vue3-carousel-3d';
import 'vue3-carousel-3d/dist/index.css';

createApp({
    components: {
        Carousel3d: Carousel3d,
        Slide: Slide,
    },
    template: `
    <carousel-3d :controls-visible="true">
        <slide :index="0">
        Slide 1 Content
        </slide>
        <slide :index="1">
        Slide 2 Content
        </slide>
        <slide :index="2">
        Slide 3 Content
        </slide>
        <slide :index="3">
        Slide 4 Content
        </slide>
        <slide :index="4">
        Slide 5 Content
        </slide>
    </carousel-3d>
`,
}).mount('#app');
