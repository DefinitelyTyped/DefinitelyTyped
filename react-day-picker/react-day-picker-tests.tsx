import * as React from 'react';
import * as DayPicker2 from "react-day-picker";

function isSunday(day: Date) {
    return day.getDay() === 0;
}

// make sure global variable version works
function MyComponent2() {
    return <DayPicker ref="foo" initialMonth={ new Date(2016, 1) } localeUtils={DayPicker.LocaleUtils} modifiers={{ isSunday }} />
}
DayPicker.DateUtils.clone(new Date());
DayPicker.DateUtils.isDayInRange(new Date(), {from: new Date()});

// make sure imported version works
function MyComponent() {
   return <DayPicker2 ref="foo" initialMonth={ new Date(2016, 1) } localeUtils={DayPicker2.LocaleUtils} modifiers={{ isSunday }} />
}
DayPicker2.DateUtils.clone(new Date());
DayPicker2.DateUtils.isDayInRange(new Date(), { from: new Date() });

// test interface for captionElement prop
interface MyCaptionProps extends ReactDayPicker.CaptionElementProps { }
class Caption extends React.Component<MyCaptionProps, {}> {
    render() {
        const { date, locale, localeUtils, onClick } = this.props;

        if (!date || !localeUtils || typeof locale === 'undefined') {
            return null
        }

        return (
            <div className="DayPicker-Caption" onClick={ onClick }>
              { localeUtils.formatMonthTitle(date, locale) }
            </div>
        );
    }
}
<DayPicker captionElement={<Caption/>}/>
