import * as React from "react";
import PhoneInput from "react-phone-number-input";

const [value, setValue] = React.useState();

const test1 = (
    <PhoneInput
        value={'+64271231234'}
        onChange={(value: string) => { console.log(value); }}
        displayInitialValueAsLocalNumber={false}
        disabled={false}
        autoComplete="tel"
        defaultCountry="NZ"
        countries={["NZ", "US", "FR"]}
        placeholder="Place holder"
    >
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PhoneInput>
);
