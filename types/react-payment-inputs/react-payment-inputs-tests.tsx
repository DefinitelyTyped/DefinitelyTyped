import * as React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { images } from "react-payment-inputs/images";

const App: React.FC = () => {
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
    } = usePaymentInputs();

    return (
        <PaymentInputsWrapper {...wrapperProps}>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
        </PaymentInputsWrapper>
    );
};
