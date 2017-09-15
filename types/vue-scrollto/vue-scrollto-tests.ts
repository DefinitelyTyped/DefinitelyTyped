import * as Vue from "vue"
import * as VueScrollTo from "vue-scrollto"

Vue.use(VueScrollTo)

class Test extends Vue {
    public mounted() {
        this.$scrollTo(this.$el, {offset: -100})
        this.$scrollTo("#id")
    }
}
