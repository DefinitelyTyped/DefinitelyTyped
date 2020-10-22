import Vue, { ComponentOptions } from 'vue';
import { directive, mixin } from 'vue-clickaway';

// excerpt from vue-class-component/src/declarations.ts
type VueClass<V> = { new (...args: any[]): V & Vue } & typeof Vue;
// excerpt from vue-class-component/src/index.ts
function Component(options: ComponentOptions<Vue> | VueClass<Vue>): any {
    return null; // mocked
}

@Component({
    directives: {
        clickaway: directive,
    },
})
export class ComponentWithDirective extends Vue {}

@Component({
    mixins: [mixin],
})
export class ComponentWithMixin extends Vue {}
