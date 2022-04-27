import * as React from "react";
import { usePaymentInputs, PaymentInputsWrapper, ErrorMessages, CardType } from "react-payment-inputs";
import { images } from 'react-payment-inputs/images';

const App: React.FC = () => {
  const cardNumberValidator = ({
    cardNumber, cardType, errorMessages}: {cardNumber: string, cardType: CardType, errorMessages: ErrorMessages}
  ) => {
    if (cardType.displayName === 'Visa' || cardType.displayName === 'Mastercard') {
      return '';
    }
    return 'Card must be Visa or Mastercard';
  };

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs({cardNumberValidator});

  return (
    <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
    </PaymentInputsWrapper>
  );
};
