import * as React from 'react';
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHA2 } from 'react-google-recaptcha';

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

const basicRecapchta2 = <ReCAPTCHA2 sitekey="xxx" onChange={a => a}/>;
const invisibleRecaptcha2: React.SFC = () => {
    const recaptchaRef = React.createRef<ReCAPTCHA2>();

    return (
	    <ReCAPTCHA2
  	        ref={recaptchaRef}
	        sitekey="xxx"
            size="invisible"
            grecaptcha={{}}
	    />
    );
};
