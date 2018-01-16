import { Instance } from 'flatpickr';
import * as React from 'react';
import DatePicker from 'react-flatpickr';

const noParamsElement = <DatePicker/>;

const defaultValueElement = <DatePicker defaultValue={ 'Default value' }/>;

const options = {
    dateFormat: 'YYYY-MM-DD'
};
const optionsElement = <DatePicker options={ options }/>;

const onChange = (
    selectedDates: Date[], dateStr: string, instance: Instance,
    elem: HTMLElement
) => null;
const onChangeElement = <DatePicker onChange={ onChange }/>;

const valueElement = <DatePicker value={ 'Value' }/>;
