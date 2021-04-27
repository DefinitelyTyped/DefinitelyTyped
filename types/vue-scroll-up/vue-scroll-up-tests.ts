import Vue, { ComponentOptions } from 'vue';
import VueScrollUp from 'vue-scroll-up';

// excerpt from vue-class-component/src/declarations.ts
type VueClass<V> = {
    new(...args: any[]): V & Vue;
} & typeof Vue;

// excerpt from vue-class-component/src/index.ts
declare function Component<V extends Vue>(options: ComponentOptions<V> & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC;

new Vue({
    el: '#app',
    components: {
        VueScrollUp
    },
    template: `
        <vue-scroll-up />
    `,
});

@Component({
    components: {
        VueScrollUp
    },
    template: `
        <vue-scroll-up
          :scroll-duration="500"
          :scroll-y="500"
        />
    `
})
class App extends Vue {
}
