import Vue, { ComponentOptions } from 'vue';
import DatePicker from 'vue2-datepicker';

// excerpt from vue-class-component/src/declarations.ts
type VueClass<V> = {
    new(...args: any[]): V & Vue;
} & typeof Vue;

// excerpt from vue-class-component/src/index.ts
declare function Component<V extends Vue>(options: ComponentOptions<V> & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC;

new Vue({
    el: '#app',
    components: {
        DatePicker
    },
    template: `
        <date-picker
            :placeholder="placeholder"
            v-model="dateOfBirth"
            format="YYYY-MM-DD"
            lang="en">
            <template slot="calendar-icon">
                <span class="input-datepicker__icon"></span>
            </template>
        </date-picker>
    `,
    data() {
        return {dateOfBirth: new Date()};
    }
});

@Component({
    components: {
        DatePicker
    },
    template: `
        <date-picker
            :placeholder="placeholder"
            v-model="dateOfBirth"
            format="YYYY-MM-DD"
            lang="en">
            <template slot="calendar-icon">
                <span class="input-datepicker__icon"></span>
            </template>
        </date-picker>
    `
})
class App extends Vue {
    dateOfBirth = new Date();
}
