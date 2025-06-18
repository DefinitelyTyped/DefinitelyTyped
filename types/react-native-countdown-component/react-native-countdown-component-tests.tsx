import * as React from "react";
import CountDown from "react-native-countdown-component";

const onFinish = () => {};

const days = () => <CountDown until={100} timeToShow={["D"]} timeLabels={{}} showSeparator={true} />;

const hourMinutesSeconds = () => (
    <CountDown
        until={200}
        timeToShow={["H", "M", "S"]}
        timeLabels={{}}
        showSeparator={true}
        size={24}
        onFinish={onFinish}
    />
);
