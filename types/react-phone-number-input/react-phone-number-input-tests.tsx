import * as React from "react";
import PhoneInput from "react-phone-number-input";

const [value, setValue] = React.useState();

const test1 = (
    <PhoneInput
        value={value}
        onChange={setValue}
        displayInitialValueAsLocalNumber={false}
        disabled={false}
        autoComplete="tel"
        defaultCountry="NZ"
        countries={["NZ", "US", "FR"]}
    >
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PhoneInput>
);
