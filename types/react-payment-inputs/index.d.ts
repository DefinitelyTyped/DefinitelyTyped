// Type definitions for react-payment-inputs 1.1
// Project: https://github.com/medipass/react-payment-inputs
// Definitions by: Timothy Odei Yirenkyi <https://github.com/tyirenkyi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

interface ErroredInputs {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  zipField: string;
}

interface CardType {
  displayName: string;
  type: string;
  format: RegExp;
  startPattern: RegExp;
  gaps: number[];
  lengths: number[];
  code: { name: string, length: number };
}

interface ErrorMessages {
  emptyCardNumber: string;
  invalidCardNumber: string;
  emptyExpiryDate: string;
  monthOutOfRange: string;
  yearOutOfRange: string;
  dateOutOfRange: string;
  invalidExpiryDate: string;
  emptyCVC: string;
  invalidCVC: string;
}

interface CardImages {
  amex: React.ReactElement;
  dinersclub: React.ReactElement;
  discover: React.ReactElement;
  hipercard: React.ReactElement;
  jcb: React.ReactElement;
  unionpay: React.ReactElement;
  mastercard: React.ReactElement;
  placeholder: React.ReactElement;
  visa: React.ReactElement;
}

type InputValidationErrorCallback = (error: string, erroredInputs: ErroredInputs) => void;

interface usePaymentInputsOptions {
  autoFocus?: boolean;
  /**
   * custom error messages for the inputs.
   */
  errorMessages?: ErrorMessages;
  /**
   * Function to handle the blur event on the inputs. It is invoked when any of the inputs blur.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /**
   * Function to handle the change event on the inputs. It is invoked when any of the inputs change.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Function to invoke when any of the inputs error.
   */
  onError?: InputValidationErrorCallback;
  /**
   * Function to invoke when any of the inputs are touched.
   */
  onTouch?: any;
  /**
   * Set custom card number validator function
   */
  cardNumberValidator?: (props: {
    cardNumber: string,
    cardType: CardType,
    errorMessages: ErrorMessages,
  }) => string;
  /**
   * Set custom cvc validator function
   */
  cvcValidator?: (props: {
    cvc: string,
    cardType: CardType,
    errorMessages: ErrorMessages
  }) => string;
  /**
   * Set expiry validator function
   */
  expiryValidator?: (props: {
    expiryDate: { month: string, year: string },
    errorMessages: ErrorMessages
  }) => string;
}

interface usePaymentInputsData {
  /**
   * Returns the props to apply to the card image SVG.
   */
  getCardImageProps: (
    props?: {
    images: CardImages
  }) => {
    'aria-label': string,
    children: React.ReactElement,
    width: string,
    height: string,
    viewBox: string,
  };
  /**
   * Returns the props to apply to the card number input.
   */
  getCardNumberProps: (
    props?: { onChange?: any, onBlur?: any, onFocus?: any, onKeyPress?: any, value?: string }
  ) => {
    'aria-label': string,
    autoComplete: string,
    id: string,
    name: string,
    placeholder: string,
    type: string,
    onBlur: any,
    onChange: any,
    onFocus: any,
    onKeyPress: any,
  };
  /**
   * Returns the props to apply to the expiry date input.
   */
  getExpiryDateProps: (
    props?: {
      onChange?: any,
      onBlur?: any,
      onFocus?: any,
      onKeyDown?: any,
      onKeyPress?: any
    }
  ) => {
    'aria-label': string,
    autoComplete: string,
    id: string,
    name: string,
    placeholder: string,
    type: string,
    'ref': React.MutableRefObject<any>,
    onBlur: any,
    onChange: any,
    onFocus: any,
    onKeyPress: any,
    onKeyDown: any,
  };
  /**
   * Returns the props to apply to the CVC input.
   */
  getCVCProps: (
    props?: {
      onBlur?: any,
      onChange?: any,
      onFocus?: any,
      onKeyPress?: any,
      onKeyDown?: any,
    }
  ) => {
    'aria-label': string,
    autoComplete: string,
    id: string,
    name: string,
    placeholder: string,
    type: string,
    'ref': React.MutableRefObject<any>,
    onBlur: any,
    onChange: any,
    onFocus: any,
    onKeyPress: any,
    onKeyDown: any,
  };
  /**
   * Returns the props to apply to the ZIP input.
   */
  getZipProps: (
    props?: {
      onChange?: any,
      onBlur?: any,
      onFocus?: any,
      onKeyDown?: any,
      onKeyPress?: any,
    }
  ) => {
    autoComplete: string,
    id: string,
    name: string,
    placeholder: string,
    type: string,
    'ref': React.MutableRefObject<any>,
    onBlur: any,
    onChange: any,
    onFocus: any,
    onKeyPress: any,
    onKeyDown: any,
  };
  /**
   * Returns the props to apply to <PaymentInputsWrapper>.
   */
  wrapperProps: {
    error: string,
    focused: boolean,
    isTouched: boolean
  };
  meta: {
    /**
     * Returns information about the current card type, including: name, lengths and formats.
     */
    cardType: CardType,
    /**
     * Returns the error message of each rendered input.
     */
    erroredInputs: ErroredInputs,
    /**
     * Returns the current global error between all rendered inputs.
     */
    error: string,
    /**
     * Returns the current focused input.
     */
    focused: boolean,
    /**
     * Returns the current global touched state between all rendered inputs.
     */
    isTouched: boolean,
    /**
     * Returns the touch state of each rendered input.
     */
    touchedInputs: {
      cardNumber: boolean,
      expiryDate: boolean,
      cvc: boolean,
      zip: boolean
    }
  };
}

interface PaymentInputsWrapperProps {
  children: React.ReactNode;
  error: string;
  focused: boolean;
  isTouched: boolean;
  /**
   * Custom styling to pass through to the wrapper. Either a styled-component's css or an Object can be passed.
   */
  styles?: {
    fieldWrapper: {
      base: string | {},
      errored: string | {}
    },
    inputWrapper: {
      base: string | {},
      errored: string | {},
      focused: string | {}
    },
    input: {
      base: string | {},
      errored: string | {},
      cardNumber: string | {},
      expiryDate: string | {},
      cvc: string | {}
    },
    errorText: {
      base: string | {}
    }
  };
  /**
   * Custom props to pass to the error text component.
   */
  errorTextProps?: {
    [x: string]: any
  };
  /**
   * Custom props to pass to the input wrapper component.
   */
  inputWrapperProps?: {
    [x: string]: any
  };
}

export function usePaymentInputs(options?: usePaymentInputsOptions): usePaymentInputsData;

export function getCardNumberError(
  cardNumber: string,
  cardNumberValidator: (props: { cardNumber: string, cardType: CardType, errorMessages: ErrorMessages }) => string,
  { errorMessages }: { errorMessages: ErrorMessages }
): string;

export function getExpiryDateError(
  expiryDate: string,
  expiryValidator: (props: { expiryDate: { month: string, year: string }, errorMessages: ErrorMessages }) => string,
  { errorMessages }: { errorMessages: ErrorMessages }
): string;

export function getCVCError(
  cvc: string,
  cvcValidator: (props: { cvc: string, cardType: CardType, errorMessages: ErrorMessages }) => string,
  { errorMessages }: { errorMessages: ErrorMessages }
): string;

export function getZIPError(
  zip: string,
  { errorMessages }: { errorMessages: ErrorMessages }
): string;

export const PaymentInputsContainer: React.FC<usePaymentInputsOptions>;

export const PaymentInputsWrapper: React.FC<PaymentInputsWrapperProps>;

export {};
