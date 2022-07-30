import * as React from "react";
import Datepicker from "react-native-modern-datepicker";

const Comp = () => {

    const [time, setTime] = React.useState('');

    return (
        <>
            <Datepicker
             mode="time"
             minuteInterval={3}
             onTimeChange={selectedTime => setTime(selectedTime)}
            />
        </>
    )
}
