import Vue from 'vue';
import DatePicker from 'vue2-datepicker';
import Component from 'vue-class-component';

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
        return { dateOfBirth: new Date() };
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