import * as React from "react";
import countryList = require("react-select-country-list");

function CountrySelector() {
    const options = React.useMemo(() => countryList().getData(), []);
    const labels = React.useMemo(() => countryList().getLabels(), []);
    const values = React.useMemo(() => countryList().getValues(), []);
    const labelList = React.useMemo(() => countryList().getLabelList(), []);
    const valueList = React.useMemo(() => countryList().getValueList(), []);

    const getLabel = countryList().getLabel("");
    const getValue = countryList().getValue("");
    const setLabel = countryList().setLabel("", "");
    const setEmpty = countryList().setEmpty("");
    const native = countryList().native();

    return (
        <select>
            {options.map(option => <option key={option.value}>{option.label}</option>)}
        </select>
    );
}
