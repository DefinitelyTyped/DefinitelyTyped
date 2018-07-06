import Vue from 'vue';
import DatePicker from "vue2-datepicker";

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
