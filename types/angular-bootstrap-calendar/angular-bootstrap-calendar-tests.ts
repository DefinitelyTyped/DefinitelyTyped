var myApp = angular.module('testModule');

interface MyAppScope extends ng.IScope {
    events: ng.bootstrap.calendar.IEvent[];
}

myApp.config(function (calendarConfig: ng.bootstrap.calendar.ICalendarConfig) {

    calendarConfig.templates.calendarMonthView = 'path/to/custom/template.html'; //change the month view template to a custom template

    calendarConfig.dateFormatter = 'moment'; //use either moment or angular to format dates on the calendar. Default angular. Setting this will override any date formats you have already set.

    calendarConfig.allDateFormats.moment.date.hour = 'HH:mm'; //this will configure times on the day view to display in 24 hour format rather than the default of 12 hour

    calendarConfig.allDateFormats.moment.title.day = 'ddd D MMM'; //this will configure the day view title to be shorter

    calendarConfig.i18nStrings.weekNumber = 'Week {week}'; //This will set the week number hover label on the month view

    calendarConfig.displayAllMonthEvents = true; //This will display all events on a month view even if they're not in the current month. Default false.

    calendarConfig.displayEventEndTimes = true; //This will display event end times on the month and year views. Default false.

    calendarConfig.showTimesOnWeekView = true; //Make the week view more like the day view, with the caveat that event end times are ignored.

});

var someController: Function = ($scope: MyAppScope) => {
    $scope.events = [
        {
            title: 'My event title', // The title of the event
            type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
            startsAt: new Date(2013, 5, 1, 1), // A javascript date object for when the event starts
            endsAt: new Date(2014, 8, 26, 15), // Optional - a javascript date object for when the event ends
            editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
            deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
            draggable: true, //Allow an event to be dragged and dropped
            resizable: true, //Allow an event to be resizable
            incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
            recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
            cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
        }
    ];
};