import flatpickr from "flatpickr";
import * as React from "react";
import DatePicker from "react-flatpickr";

const noParamsElement = <DatePicker />;

const classNameElement = <DatePicker className={"test"} />;

const defaultValueElement = <DatePicker defaultValue={"Default value"} />;

const options = {
    dateFormat: "YYYY-MM-DD"
};
const optionsElement = <DatePicker options={options} />;

const hook = (
    selectedDates: Date[],
    dateStr: string,
    instance: flatpickr.Instance,
    elem: HTMLElement
) => null;
const onChangeElement = <DatePicker onChange={hook} />;
const onOpenElement = <DatePicker onOpen={hook} />;
const onCloseElement = <DatePicker onClose={hook} />;
const onMonthChangeElement = <DatePicker onMonthChange={hook} />;
const onYearChangeElement = <DatePicker onYearChange={hook} />;
const onReadyElement = <DatePicker onReady={hook} />;
const onValueUpdateElement = <DatePicker onValueUpdate={hook} />;
const onDayCreateElement = <DatePicker onDayCreate={hook} />;

const valueStringElement = <DatePicker value={"2018-11-29T18:35:50.115Z"} />;
const valueDateElement = <DatePicker value={new Date()} />;
const valueNumberElement = <DatePicker value={1543516477474} />;
const valueStringArrayElement = (
    <DatePicker
        value={["2018-11-29T18:35:50.115Z", "2018-11-29T19:35:50.115Z"]}
    />
);
const valueDateArrayElement = (
    <DatePicker value={[new Date(), new Date(1543516477474)]} />
);
const valueNumberArrayElement = (
    <DatePicker value={[1543516477474, 1544549477474]} />
);
const customRender = (
    <DatePicker render={({value}, ref) => <input ref={ref} value={value ? value.toString() : ''} />} />
);

const extraInputPropertiesElement = <DatePicker placeholder="Enter a date..." id="datepicker-1" />;

const elementWithChildren = (
    <DatePicker>
        <div>Child node</div>
    </DatePicker>
);

const elemntWithMultipleChildren = (
    <DatePicker>
        <div>First child node</div>
        <div>Second child node</div>
    </DatePicker>
);
