// Type definitions for react-select-country-list 2.2
// Project: https://github.com/Chun-Lin/react-select-country-list
// Definitions by: Kieran Roberts <https://github.com/kieran6roberts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ReactSelectCountries {
    interface CountryData {
        label: string;
        value: string;
    }

    interface LabelValueMap {
        [key: string]: string;
    }

    interface Countries {
        data: CountryData[];
        labelMap: LabelValueMap;
        valueMap: LabelValueMap;
    }
}

declare class CountryList {
    data: ReactSelectCountries.CountryData[];
    labelMap: ReactSelectCountries.LabelValueMap;
    valueMap: ReactSelectCountries.LabelValueMap;

    getValue(label: string): string;
    getLabel(value: string): string;
    getValues(): string[];
    getLabels(): string[];
    getLabelList(): ReactSelectCountries.LabelValueMap;
    getValueList(): ReactSelectCountries.LabelValueMap;
    getData(): ReactSelectCountries.CountryData[];
    setLabel(value: string, label: string): ReactSelectCountries.Countries;
    setEmpty(label: string): ReactSelectCountries.Countries;
    native(): ReactSelectCountries.Countries;
}

declare function countryList(): CountryList;

export = countryList;
