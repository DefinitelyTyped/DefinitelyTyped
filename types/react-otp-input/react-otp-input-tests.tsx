import * as React from "react";
import OtpInput from 'react-otp-input';

interface InputOtpProps {
    inputCount: number;
}

interface OtpInputState {
    otp: number;
}

class OtpInputPage extends React.Component<InputOtpProps, OtpInputState> {
    state = {
        otp: 123456
    };

    handleChange = (otp: number) => {
        this.setState({ otp });
    }

    render() {
        const { otp } = this.state;

        return (
            <>
                <OtpInput
                    value={otp}
                    onChange={this.handleChange}
                    numInputs={6}
                    separator={<span>-</span>}
                />
            </>
        );
    }
}
