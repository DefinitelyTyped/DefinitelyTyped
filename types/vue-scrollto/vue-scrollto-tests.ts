import Vue from "vue";
import * as VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {offset: -100});

VueScrollTo.setDefaults({offset: -100});

class Test extends Vue {
    mounted() {
        this.$scrollTo(this.$el, {offset: -100});
        this.$scrollTo("#id");
        VueScrollTo.scrollTo("#id", {offset: -100});
    }
}
