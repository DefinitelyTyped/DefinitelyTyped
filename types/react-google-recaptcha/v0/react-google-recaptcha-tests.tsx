import ReCAPTCHA from 'react-google-recaptcha';
import * as React from 'react';

const basicRecapchta = <ReCAPTCHA sitekey="xxx" onChange={a => a}/>;
const invisibleRecaptcha: React.SFC = () => {
    const recaptchaRef = React.createRef<ReCAPTCHA>();

    return (
        <ReCAPTCHA
              ref={recaptchaRef}
            sitekey="xxx"
            size="invisible"
        />
    );
};
