// Type definitions for react-select-country-list 2.2
// Project: https://github.com/Chun-Lin/react-select-country-list
// Definitions by: My Self <https://github.com/kieran6roberts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ReactSelectCountries {
    interface CountryData {
        label: string;
        value: string
    }
    
    interface LabelValueMap {
        [key: string]: string
    }
    
    interface Countries {
        data: Array<CountryData>;
        labelMap: LabelValueMap;
        valueMap: LabelValueMap;
    }
}

declare module "react-select-country-list" {
    export type CountryData = ReactSelectCountries.CountryData

    class CountryList {
        data: Array<ReactSelectCountries.CountryData>;
        labelMap: ReactSelectCountries.LabelValueMap;
        valueMap: ReactSelectCountries.LabelValueMap;

        getValue(label: string): string;
        getLabel(value: string): string;
        getValues(): Array<string>;
        getLabels(): Array<string>;
        getLabelList(): ReactSelectCountries.LabelValueMap;
        getValueList(): ReactSelectCountries.LabelValueMap;
        getData(): Array<ReactSelectCountries.CountryData>;
        setLabel(value: string, label: string): ReactSelectCountries.Countries;
        setEmpty(label: string): ReactSelectCountries.Countries;
        native(): ReactSelectCountries.Countries;
    }

    const countryList: () => CountryList;

    export default countryList;
}
