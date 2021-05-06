import * as React from "react";
import MaterialUiPhoneNumber, { MaterialUiPhoneNumberProps } from "material-ui-phone-number";

const PhoneNumberTest = (props: MaterialUiPhoneNumberProps) => {
    return (
        <div>
            <MaterialUiPhoneNumber defaultCountry="us" {...props} />
            <MaterialUiPhoneNumber disableCountryCode={false} {...props} />
            {/* Handles invalid props */}
            {/* $ExpectError */}
            <MaterialUiPhoneNumber invalidProp={1} {...props} />
        </div>
    );
};
