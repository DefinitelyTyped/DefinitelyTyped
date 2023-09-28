import Vue, { ComponentOptions } from "vue";
import VueJsonCompare from "vue-json-compare";

// excerpt from vue-class-component/src/declarations.ts
type VueClass<V> = {
    new(...args: any[]): V & Vue;
} & typeof Vue;

// excerpt from vue-class-component/src/index.ts
declare function Component<V extends Vue>(
    options: ComponentOptions<V> & ThisType<V>,
): <VC extends VueClass<V>>(target: VC) => VC;

new Vue({
    el: "#app",
    components: {
        VueJsonCompare,
    },
    template: `
        <vue-json-compare
          :old-data="oldData"
          :new-data="newData"
        />
    `,
    data() {
        return {
            oldData: [{ prop1: "A", prop2: "B" }, { prop1: "C", prop2: "D" }],
            newData: [{ prop1: "A", prop2: "B" }, { prop1: "C", prop2: "E" }],
        };
    },
});

@Component({
    components: {
        VueJsonCompare,
    },
    template: `
        <vue-json-compare
          :old-data="oldData"
          :new-data="newData"
        />
    `,
})
class App extends Vue {
    oldData = { prop1: "A", prop2: "B" };
    newData = { prop1: "A", prop2: "C" };
}
