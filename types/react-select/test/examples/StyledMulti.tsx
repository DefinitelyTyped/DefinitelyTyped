import * as React from 'react';
import * as chroma from 'chroma-js';

import { ColourOption, colourOptions } from '../data';
import Select, { StylesConfig } from 'react-select';

const colourStyles: StylesConfig<ColourOption, true> = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled ? null : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                ? chroma.contrast(color, 'white') > 2
                    ? 'white'
                    : 'black'
                : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

export default () => (
    <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={colourOptions}
        styles={colourStyles}
    />
);
