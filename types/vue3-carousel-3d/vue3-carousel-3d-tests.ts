import { createApp } from "vue";
import { Carousel3d, Slide } from "vue3-carousel-3d";
import "vue3-carousel-3d/dist/index.css";

createApp({
    components: {
        "carousel-3d": Carousel3d,
        slide: Slide,
    },
    template: `
    <carousel-3d
        :controls-visible="true"
        :autoplay="true"
        :autoplay-timeout="1000"
        :count="0"
        :perspective="35"
        :display="5"
        bias="left"
        :loop="true"
        :animationSpeed="500"
        dir="rtl"
        :width="360"
        :height="270"
        :border="1"
        :space="100"
        :startIndex="0"
        :clickable="true"
        :disable3d="false"
        :minSwipeDistance="10"
        :inverseScaling="300"
        :controlsVisible="false"
        controlsPrevHtml="&rsaquo;"
        controlsNextHtml="&rsaquo;"
        :controlsWidth="50"
        :controlsHeight="60"
    >
        <slide :index="0">
        Slide 1 Content
        </slide>
    </carousel-3d>
`,
}).mount("#app");
