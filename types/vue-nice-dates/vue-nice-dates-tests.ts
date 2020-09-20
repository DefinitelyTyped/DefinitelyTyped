import Vue from 'vue';
import { DatePicker, DateRangePicker } from 'vue-nice-dates';
import { enGB } from 'date-fns/locale';

new Vue({
    el: '#app',
    components: {
        DatePicker,
        DateRangePicker,
    },
    data() {
        return {
            date: '',
            startDate: '',
            endDate: '',
            locale: enGB,
        };
    },
    template: `
    <div>
        <DatePicker
            :date.sync="date"
            :locale="locale"
        >
            <input
            v-model.trim="date"
            type="text"
            >
        </DatePicker>

        <DateRangePicker
            :start-date.sync="startDate"
            :end-date.sync="endDate"
            :locale="locale"
            >
            <div class="date-range">
                <input
                v-model.trim="startDate"
                type="text"
                data-nice-dates="startDate"
                >
                <input
                v-model.trim="endDate"
                type="text"
                data-nice-dates="endDate"
                >
            </div>
        </DateRangePicker>
    </div>
    `,
});
