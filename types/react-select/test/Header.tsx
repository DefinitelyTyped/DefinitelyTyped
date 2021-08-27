import * as React from 'react';
import Select, { ControlProps, OptionTypeBase, StylesConfig } from 'react-select';

const headerSelectStyles: StylesConfig<OptionTypeBase, boolean> = {
    control: (base, { isFocused }) => ({
        ...base,
        backgroundClip: 'padding-box',
        borderColor: 'rgba(0,0,0,0.1)',
        boxShadow: isFocused ? '0 0 0 1px #4C9AFF' : undefined,

        ':hover': {
            borderColor: 'rgba(0,0,0,0.2)',
        },
    }),
};

export const Content = () => <Select styles={headerSelectStyles} />;
