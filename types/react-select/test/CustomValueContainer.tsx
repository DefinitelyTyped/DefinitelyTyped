import * as React from 'react';
import Select, { OptionTypeBase, ValueContainerProps } from "react-select";

const ValueContainer = (props: ValueContainerProps<OptionTypeBase, false>) => {
    console.log(props.getValue());

    return <div>{props.children}</div>;
};

const SelectWithCustomValueContainer = (
    <Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        options={[]}
        components={{
            ValueContainer
        }}
        isMulti={false}
    />
);
