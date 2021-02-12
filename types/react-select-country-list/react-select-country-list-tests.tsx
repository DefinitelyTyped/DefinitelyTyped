import * as React from "react";
import Select from "react-select";
import countryList, { CountryData } from "react-select-country-list";


function CountrySelector(): React.ReactElement {
  const [input, setInput] = React.useState<CountryData | {}>({});

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
  

  const changeHandler = (value: any) => setInput(value);

  return (
      <Select 
      onChange={changeHandler} 
      options={options} 
      value={input}
      />
  );
}

export default CountrySelector;