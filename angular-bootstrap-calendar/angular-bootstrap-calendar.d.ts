// Type definitions for angular-bootstrap-calendar
// Project: https://github.com/mattlewis92/angular-bootstrap-calendar
// Definitions by: Egor Komarov <https://github.com/Odrin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../moment/moment.d.ts" />

declare module angular.bootstrap.calendar {
    interface IEvent {
        /**
         * The title of the event
         */
        title: string;
        /**
         * The type of the event (determines its color). Can be important, warning, info, inverse, success or special
         */
        type: string;
        /**
         * A javascript date object for when the event starts
         */
        startsAt: Date;
        /**
         * Optional - a javascript date object for when the event ends
         */
        endsAt?: Date;
        /**
         * If edit-event-html is set and this field is explicitly set to false then dont make it editable.
         */
        editable?: boolean;
        /**
         * If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
         */
        deletable?: boolean;
        /**
         * Allow an event to be dragged and dropped
         */
        draggable?: boolean;
        /**
         * Allow an event to be resizable
         */
        resizable?: boolean;
        /**
         * If set to false then will not count towards the badge total amount on the month and year view
         */
        incrementsBadgeTotal?: boolean;
        /**
         * If set the event will recur on the given period. Valid values are year or month
         */
        recursOn?: string;
        /**
         * A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
         */
        cssClass?: string;
    }

    interface ICalendarConfig {
        allDateFormats: {
            angular: IFormats;
            moment: IFormats;
        };
        dateFormats: IDateFormats;
        titleFormats: ITitleFormats;
        dateFormatter: string;
        displayEventEndTimes: boolean;
        showTimesOnWeekView: boolean;
        displayAllMonthEvents: boolean;
        i18nStrings: { weekNumber: string; };
        templates: {
            calendarDayView: string;
            calendarHourList: string;
            calendarMonthCell: string;
            calendarMonthCellEvents: string;
            calendarMonthView: string;
            calendarSlideBox: string;
            calendarWeekView: string;
            calendarYearView: string;
        };
    }

    interface IFormats {
        date: IDateFormats;
        title: ITitleFormats;
    }

    interface IDateFormats {
        hour: string;
        day: string;
        month: string;
        weekDay: string;
        time: string;
        datetime: string;
    }

    interface ITitleFormats {
        day: string;
        week: string;
        month: string;
        year: string;
    }

    interface ICalendarCell {
        label: number;
        date: moment.Moment;
        inMonth: boolean;
        isPast: boolean;
        isToday: boolean;
        isFuture: boolean;
        isWeekend: boolean;
        events: IEvent[];
        badgeTotal: number;
    }

    module events {
        interface IOnEventClick {
            (calendarEvent: IEvent): void;
        }

        interface IOnEventTimesChanged {
            (calendarEvent: IEvent, calendarNewEventStart: Date, calendarNewEventEnd: Date): void;
        }

        interface IOnEditEventClick {
            (calendarEvent: IEvent): void;
        }

        interface IOnDeleteEventClick {
            (calendarEvent: IEvent): void;
        }

        interface IOnTimespanClick {
            (calendarDate: Date, calendarCell: ICalendarCell): void;
        }

        interface IOnViewChangeClick {
            (calendarDate: Date, calendarNextView: string): void;
        }
    }
}