import MaterialUiPhoneNumber, { MaterialUiPhoneNumberProps } from "material-ui-phone-number";
import * as React from "react";

const PhoneNumberTest: React.FC<MaterialUiPhoneNumberProps> = props => {
    return (
        <>
            <MaterialUiPhoneNumber defaultCountry="us" {...props} />
            <MaterialUiPhoneNumber disableCountryCode={false} {...props} />
        </>
    );
};
