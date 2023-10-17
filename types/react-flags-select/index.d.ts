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
