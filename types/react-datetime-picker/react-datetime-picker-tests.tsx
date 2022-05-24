import * as React from 'react';
import DateTimePicker from 'react-datetime-picker';

// full test of all props available
function Test1() {
    const [value, onChange] = React.useState(new Date());

    return (
        <div>
            <DateTimePicker
                amPmAriaLabel={'AM / PM Label'}
                autoFocus={false}
                calendarAriaLabel={'Calendar ARIA Label'}
                calendarClassName={['class1', 'class2']}
                calendarIcon={<span>some icon</span>}
                className={['class1', 'class2']}
                clearAriaLabel={'Clear ARIA Label'}
                clearIcon={<span>some icon</span>}
                clockClassName={['class1', 'class2']}
                closeWidgets={false}
                dayAriaLabel={'Day ARIA Label'}
                dayPlaceholder={'Day Placeholder'}
                disabled={false}
                disableCalendar={false}
                disableClock={false}
                format={'y-MM-dd h:mm:ss a'}
                hourAriaLabel={'Hour ARIA Label'}
                hourPlaceholder={'Hour Placeholder'}
                isCalendarOpen={false}
                isClockOpen={false}
                locale={'en-US'}
                maxDate={new Date()}
                maxDetail={'second'}
                minDate={new Date()}
                minDetail={'month'}
                minuteAriaLabel={'Minute ARIA Label'}
                minutePlaceholder={'Minute Placeholder'}
                monthAriaLabel={'Month ARIA Label'}
                monthPlaceholder={'Month Placeholder'}
                name={'myCustomName'}
                nativeInputAriaLabel={'Native input ARIA Label'}
                onCalendarClose={() => {
                    console.log('calendar closed');
                }}
                onCalendarOpen={() => {
                    console.log('calendar opened');
                }}
                onChange={onChange}
                onClockClose={() => {
                    console.log('clock closed');
                }}
                onClockOpen={() => {
                    console.log('clock opened');
                }}
                openWidgetsOnFocus={false}
                returnValue={'start'}
                required={false}
                secondAriaLabel={'Second ARIA Label'}
                secondPlaceholder={'Second Placeholder'}
                showLeadingZeros={false}
                value={[new Date(), new Date()]}
                yearAriaLabel={'Year ARIA Label'}
                yearPlaceholder={'Year Placeholder'}
            />
        </div>
    );
}

// simple test from docs:
// https://github.com/wojtekmaj/react-datetime-picker
function Test2() {
    const [value, onChange] = React.useState(new Date());

    return (
        <div>
            <DateTimePicker onChange={onChange} value={value} />
        </div>
    );
}
