// Type definitions for angular-bootstrap-calendar
// Project: https://github.com/mattlewis92/angular-bootstrap-calendar
// Definitions by: Egor Komarov <https://github.com/Odrin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as moment from 'moment';
import * as angular from 'angular';

declare module 'angular' {
	    export namespace bootstrap.calendar {
	    interface IEventAction {
	        /**
	         * The label of the action
	         */
	        label: string;
	        /**
	         * CSS class to be added to the action element
	         */
	        cssClass?: string;
	        /**
	         * The action that occurs when it's clicked
	         * @param args - the IEvent whose action was clicked
	         */
	        onClick: (args: any) => void;
	    }

	    interface IEventColor {
	        /**
	         * The primary color of the event, should be darker than secondary
	         */
	        primary: string;

	        /**
	         * The secondary color of the event, should be lighter than primary
	         */
	        secondary: string;
	    }

        interface IEvent {
            /**
             * The title of the event
             */
            title: string;
            /**
             * The type of the event (determines its color). Can be important, warning, info, inverse, success or special
             */
            type?: string;
            /**
             * A javascript date object for when the event starts
             */
            startsAt: Date;
            /**
             * Optional - a javascript date object for when the event ends
             */
            endsAt?: Date;
	        /**
	         * Color of the Event
	         */
	        color?: IEventColor;
	        /**
	         * Actions of the Event
	         */
	        actions?: Array<IEventAction>;
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
	        /**
	         * If set the event will display as all-day event
	         */
	        allDay?: boolean;
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

        namespace events {
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
                (calendarDate: Date, calendarNextView: string): boolean;
            }
        }
    }
}
