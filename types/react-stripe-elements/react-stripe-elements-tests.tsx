import * as React from 'react';
import {
    StripeProvider,
    CardElement,
    Elements,
    injectStripe,
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    PostalCodeElement,
    ReactStripeElements,
} from 'react-stripe-elements';
import InjectedStripeProps = ReactStripeElements.InjectedStripeProps;

import ElementChangeResponse = stripe.elements.ElementChangeResponse;
import ElementsOptions = stripe.elements.ElementsOptions;
import ElementsCreateOptions = stripe.elements.ElementsCreateOptions;
import PatchedTokenResponse = ReactStripeElements.PatchedTokenResponse;

const cardElementProps: ElementsOptions = {
    iconStyle: 'solid',
    style: {
        base: {
            color: '#32325d',
            lineHeight: '24px',
            fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#B71C1C',
            iconColor: '#B71C1C',
        },
    },
    hidePostalCode: true,
    classes: {
        base: 'field',
        complete: 'complete',
        empty: 'is-empty',
        focus: 'is-focused',
        invalid: 'is-invalid',
        webkitAutofill: 'webkit-autofill',
    },
    hideIcon: true,
};

const fontElementsProps: ElementsCreateOptions = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Dosis"
    },
    {
      family: "Dosis, sanz",
      src: "url(https://somewebsite.com/path/to/font.woff)",
      style: "normal",
      weight: "bold",
      unicodeRange: "U+26"
    }
  ],
  locale: "es"
};

const ElementsWithPropsTest: React.SFC = () => (
    <div>
        <CardElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={() => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <CardNumberElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={() => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <CardExpiryElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={() => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <CardCVCElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={() => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <PostalCodeElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={() => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
    </div>
);

interface ComponentProps {
    tokenCallback(token: PatchedTokenResponse): void;
}

class WrappedComponent extends React.Component<ComponentProps & InjectedStripeProps> {
    onSubmit = () => {
        this.props.stripe!.createToken({
            name: '',
            address_line1: '',
            address_line2: '',
            address_city: '',
            address_state: '',
            address_zip: '',
            address_country: '',
            currency: '',
        }).then((response: PatchedTokenResponse) => this.props.tokenCallback(response));
    }

    isFormValid = () => {
        // use onChange callbacks from *Element components to detect if form is valid for submission
        return false;
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <ElementsWithPropsTest />
                <button disabled={!this.isFormValid()} />
            </form>
        );
    }
}

const ExportedComponent: React.ComponentType<ComponentProps> = injectStripe(WrappedComponent);

class MainComponent extends React.Component {
    onTokenReceived = (token: PatchedTokenResponse) => void 0;

    render() {
        return <ExportedComponent tokenCallback={this.onTokenReceived} />;
    }
}

class TestHOCs extends React.Component {
    render() {
        return (
            <StripeProvider apiKey="">
                <Elements {...fontElementsProps}>
                    <MainComponent />
                </Elements>
            </StripeProvider>
        );
    }
}

/**
 * Just an extra test to check default props
 */
const ElementsDefaultPropsTest: React.SFC = () => (
    <div>
        <CardElement />
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <PostalCodeElement />
    </div>
);
