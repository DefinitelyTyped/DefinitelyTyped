import * as React from "react";
import Card, { CallbackArgument, ReactCreditCardProps } from "react-credit-cards";

const defaultProps: ReactCreditCardProps = {
    acceptedCards: [],
    callback: (type: CallbackArgument, isValid: boolean) => {},
    cvc: "123",
    expiry: "04/18",
    focused: "number",
    issuer: "visa",
    locale: {valid: "valid through"},
    name: "Name Surname",
    number: "4111111111111111",
    placeholders: {name: "YOUR NAME"},
    preview: true
};

class CardTest extends React.Component {
    render() {
        return (<Card {...defaultProps} />);
    }
}
