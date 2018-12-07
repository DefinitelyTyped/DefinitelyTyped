import Vue from "vue";
import * as VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);

class Test extends Vue {
    mounted() {
        this.$scrollTo(this.$el, {offset: -100});
        this.$scrollTo("#id");
    }
}
