import * as React from 'react';
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHA2 } from 'react-google-recaptcha';

const basicRecapchta = <ReCAPTCHA sitekey="xxx" onChange={a => a} className="mockclass" />;
const invisibleRecaptcha: React.FC = () => {
    const recaptchaRef = React.createRef<ReCAPTCHA>();

    return <ReCAPTCHA ref={recaptchaRef} sitekey="xxx" size="invisible" asyncScriptOnLoad={() => { }} className="mockclass" />;
};

const basicRecapchta2 = <ReCAPTCHA2 sitekey="xxx" onChange={a => a} className="mockclass" />;
const invisibleRecaptcha2: React.FC = () => {
    const recaptchaRef = React.createRef<ReCAPTCHA2>();

    const handleOnSubmit = async () => {
        if (recaptchaRef.current) {
            const token = await recaptchaRef.current.executeAsync();
        }
    };

    return <ReCAPTCHA2 ref={recaptchaRef} sitekey="xxx" size="invisible" grecaptcha={{}} className="mockclass" />;
};
