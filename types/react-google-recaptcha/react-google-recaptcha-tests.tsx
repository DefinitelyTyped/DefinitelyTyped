import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const handleRef = (ref: ReCAPTCHA | null): void => { return; };

const basicRecapchta = <ReCAPTCHA ref={handleRef} sitekey="xxx" onChange={a => a} className="mockclass" />;
const invisibleRecaptcha: React.FC = () => {
    const recaptchaRef = React.createRef<ReCAPTCHA>();

    return <ReCAPTCHA ref={recaptchaRef} sitekey="xxx" size="invisible" asyncScriptOnLoad={() => { }} className="mockclass" />;
};

const basicRecapchta2 = <ReCAPTCHA ref={handleRef} sitekey="xxx" onChange={a => a} className="mockclass" />;
const invisibleRecaptcha2: React.FC = () => {
    const recaptchaRef = React.createRef<ReCAPTCHA>();

    const handleOnSubmit = async () => {
        if (recaptchaRef.current) {
            const token = await recaptchaRef.current.executeAsync();
        }
    };

    return <ReCAPTCHA ref={recaptchaRef} sitekey="xxx" size="invisible" grecaptcha={{}} className="mockclass" />;
};
