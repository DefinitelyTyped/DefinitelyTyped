// Type definitions for react-flags-select 1.1
// Project: https://github.com/ekwonye-richard/react-flags-select#readme
// Definitions by: Artur Sianiuk <https://github.com/senukartur>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";

interface Props {
    countries?: string[] | undefined;
    blackList?: boolean | undefined;
    customLabels?: { [propName: string]: string } | undefined;
    selectedSize?: number | undefined;
    optionsSize?: number | undefined;
    defaultCountry?: string | undefined;
    placeholder?: string | undefined;
    className?: string | undefined;
    showSelectedLabel?: boolean | undefined;
    showOptionLabel?: boolean | undefined;
    alignOptions?: string | undefined;
    onSelect?: ((countryCode: string) => void) | undefined;
    disabled?: boolean | undefined;
    searchable?: boolean | undefined;
}
declare class ReactFlagsSelect extends Component<Props> {
    updateSelected(countryCode: string): void;
}

export default ReactFlagsSelect;
