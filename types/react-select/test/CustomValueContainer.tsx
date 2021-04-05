import * as React from 'react';
import Select, { OptionTypeBase, ValueContainerProps } from 'react-select';
import { ColourOption, colourOptions } from './data';

const ValueContainer = (props: ValueContainerProps<ColourOption, false>) => {
    console.log(props.getValue());

    return <div>{props.children}</div>;
};

const SelectWithCustomValueContainer = (
    <Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        options={colourOptions}
        components={{
            ValueContainer,
        }}
        isMulti={false}
    />
);
