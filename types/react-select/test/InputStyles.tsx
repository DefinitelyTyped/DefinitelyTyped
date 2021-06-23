import * as React from 'react';
import Select, { OptionTypeBase, StylesConfig } from 'react-select';

const inputStyles: StylesConfig<OptionTypeBase, boolean> = {
    input: (base , { isDisabled }) => ({
        ...base,
        backgroundClip: 'padding-box',
        borderColor:  isDisabled ? 'rgba(0,0,0,0.1)' : 'red',
        opacity: 0
    }),
};

export const Content = () => <Select styles={inputStyles} />;
