/// <reference path="datepicker.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

module ngCordova {
    function smoketest($cordovaDatePicker: IDatePickerService, isIos: boolean) {
    
        // minDate is a Date object for iOS and a millisecond precision unix timestamp
        // for Android, so you need to account for that when using the plugin. Also,
        // on Android, only the date is enforced (time is not).
        // - from https://github.com/VitaliiBlagodir/cordova-plugin-datepicker
        var minDate = isIos ? new Date() : (new Date()).valueOf();

        var options: DatePickerOptions = {
            date: new Date(),
            mode: 'date',
            minDate: minDate,
            maxDate: '',
            allowOldDates: true,
            allowFutureDates: false,
            doneButtonLabel: 'DONE',
            doneButtonColor: '#F2F3F4',
            cancelButtonLabel: 'CANCEL',
            cancelButtonColor: '#000000',
            androidTheme: AndroidTheme.HoloDark
        };

        $cordovaDatePicker.show(options).then(function(date) {
            alert(date);
        });
    };
}
