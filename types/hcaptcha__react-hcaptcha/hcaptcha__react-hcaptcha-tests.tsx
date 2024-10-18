import HCaptcha from "@hcaptcha/react-hcaptcha";
import * as React from "react";

const Test: React.FC = () => {
    const captchaRef = React.createRef<HCaptcha>();

    const logTokenAndResetCaptcha = (token: string) => {
        console.log(`Passed: ${token}`);
        captchaRef.current && captchaRef.current.resetCaptcha();
    };

    const programmaticallyInvoke = () => {
        captchaRef.current && captchaRef.current.execute();
    };

    return (
        <div>
            <form>
                <HCaptcha sitekey="test-site-id" onVerify={logTokenAndResetCaptcha} />
                <button onClick={programmaticallyInvoke} />
            </form>
        </div>
    );
};
