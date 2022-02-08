import * as React from "react";
import MaterialUiPhoneNumber, { MaterialUiPhoneNumberProps } from "material-ui-phone-number";

const PhoneNumberTest: React.FC<MaterialUiPhoneNumberProps> = props => {
    return (
        <>
            <MaterialUiPhoneNumber defaultCountry="us" {...props} />
            <MaterialUiPhoneNumber disableCountryCode={false} {...props} />
        </>
    );
};
