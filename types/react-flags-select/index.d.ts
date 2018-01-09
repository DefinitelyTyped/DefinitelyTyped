// Type definitions for react-flags-select 1.1.2
// Project: https://github.com/ekwonye-richard/react-flags-select#readme
// Definitions by: Artur Sianiuk <https://github.com/senukartur>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } React from 'react';

export = ReactFlagSelect;

interface Props {
    countries?: string[];
    blackList?: boolean;
    customLabels?: string[];
    selectedSize?: number;
    optionsSize?: number;
    defaultCountry?: string;
    placeholder?: string;
    className?: string;
    showSelectedLabel?: boolean;
    showOptionLabel?: boolean;
    alignOptions?: string;
    onSelect?: (countryCode: string) => void;
    disabled?: boolean;
    searchable?: boolean;
}
declare class ReactFlagsSelect extends Component<Props> {
    updateSelected(countryCode: string): void;
}