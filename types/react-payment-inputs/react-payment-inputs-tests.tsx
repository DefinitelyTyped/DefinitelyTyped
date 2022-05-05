import * as React from "react";
import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs";
import { images } from 'react-payment-inputs/images';

const App: React.FC = () => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
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
