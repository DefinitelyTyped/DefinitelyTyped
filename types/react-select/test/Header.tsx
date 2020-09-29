import * as React from 'react';
import Select from 'react-select';
import { ControlProps } from 'react-select/src/components/Control';

const headerSelectStyles = {
    control: (base: React.CSSProperties, { isFocused }: ControlProps<{}>) => ({
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
