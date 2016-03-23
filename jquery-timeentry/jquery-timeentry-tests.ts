/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery-timeentry.d.ts"/>

var selector = '#example';

// basic
$(selector).timeEntry();

var options: ITimeEntryOptions = {};
options.show24Hours = true;
options.showSeconds = true;
options.unlimitedHours = true;
options.separator = '!';
options.ampmPrefix = 'x';
options.ampmNames = ['am','pm'];
options.appendText = 'foo';
options.timeSteps = [1,1,1];
options.initialField = 0;
options.noSeparatorEntry = false;
options.tabToExit = true;
options.useMouseWheel = false;

options.defaultTime = new Date(0, 0, 0, 11, 30, 0);
options.defaultTime = '11:30AM';
options.defaultTime= +20;
options.defaultTime= '!+2h +30m';

options.minTime = new Date(0, 0, 0, 8, 30, 0);
options.minTime = '08:30AM';
options.minTime = -15;
options.minTime = '-1h -10m';

options.maxTime = new Date(0, 0, 0, 17, 30, 0);
options.maxTime = '05:30pM';
options.maxTime = +30;
options.maxTime = '+20h +10s';

options.spinnerImage = 'foo.png';
options.spinnerSize = [1, 2, 3];

options.spinnerBigImage = 'big.png';
options.spinnerBigSize = [4, 5, 6];

options.spinnerIncDecOnly = true;
options.spinnerTexts = ['Now', 'Prev', 'Next', 'incr', 'decr'];
options.spinnerRepeat = [500, 250];

options.beforeShow = (input: any): void => {
    console.log(input.id);
};
options.beforeSetTime = (oldTime: Date, newTime: Date, minTime: Date, maxTime: Date): Date => {
    return newTime;
};

$(selector).timeEntry(options);

// functions by name
$(selector).timeEntry('option', {show24Hours: true});
$(selector).timeEntry('option', 'show24Hours', true);

// global settings
$.timeEntry.setDefaults(options);
var fr: ITimeEntryRegionalOptions = $.timeEntry.regionalOptions['fr'];
