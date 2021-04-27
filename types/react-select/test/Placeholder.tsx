import * as React from 'react';
import Select from 'react-select';
import { StylesConfig } from 'react-select/src/styles';

const placeholderSelectStyles: StylesConfig<any, false> = {
    placeholder: (base, { isDisabled }) => ({
        ...base,
        color: isDisabled ? '#222222' : '#000000',
    }),
};

export const Content = () => <Select styles={placeholderSelectStyles} />;
