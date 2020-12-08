import Vue from 'vue';
import { DatePicker, DateRangePicker, START_DATE, END_DATE } from 'vue-nice-dates';
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
            START_DATE,
            END_DATE,
            locale: enGB,
        };
    },
    template: `
    <div>
        <DatePicker
            :date.sync="date"
            :locale="locale"
            enable-grid-switch
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
                :data-nice-dates="START_DATE"
                >
                <input
                v-model.trim="endDate"
                type="text"
                :data-nice-dates="END_DATE"
                >
            </div>
        </DateRangePicker>
    </div>
    `,
});
