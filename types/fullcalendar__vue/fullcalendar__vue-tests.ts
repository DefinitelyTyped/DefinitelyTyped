import Vue from 'vue';
import FullCalendar, { FullCalendarComponent } from '@fullcalendar/vue';

new Vue({
    el: '#app',
    components: {
        'full-calendar': FullCalendar,
    },
    template: `
        <full-calendar defaultView="dayGridMonth" :plugins="calendarPlugins" ref="fullCalendar"/>
    `,
    data() {
        return { calendarPlugins: [] };
    },
    methods: {
        next() {
            const calendarApi = (this.$refs.fullCalendar as FullCalendarComponent).getApi();
            calendarApi.next();
        },
    },
});
