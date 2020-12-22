import * as React from 'react';
import Select, { StylesConfig } from 'react-select';
import { PlaceholderProps } from 'react-select/src/components/Placeholder';

const placeholderSelectStyles: StylesConfig = {
    placeholder: (base, { isDisabled, isFocused }) => ({
        // TODO Do something
    }),
};

export const Content = () => <Select styles={placeholderSelectStyles} />;
