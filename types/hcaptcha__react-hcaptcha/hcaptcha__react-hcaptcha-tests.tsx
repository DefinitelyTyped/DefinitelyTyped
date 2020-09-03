import * as React from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Test: React.FC = () => {
    const captchaRef = React.createRef<HCaptcha>();

    const logTokenAndResetCaptcha = (token: string) => {
        console.log(`Passed: ${token}`);
        captchaRef.current && captchaRef.current.resetCaptcha();
    };

    return (
        <div>
            <form>
                <HCaptcha sitekey="test-site-id" onVerify={logTokenAndResetCaptcha} />
            </form>
        </div>
    );
};
