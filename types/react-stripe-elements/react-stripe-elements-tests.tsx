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
import HTMLStripeElement = ReactStripeElements.HTMLStripeElement;

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

<CardElement
    {...cardElementProps}
    onReady={(el: HTMLStripeElement) => el.clear()}
/>;

const ElementsWithPropsTest: React.SFC = () => (
    <div>
        <CardElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={(el: HTMLStripeElement) => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <CardNumberElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={(el: HTMLStripeElement) => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <CardExpiryElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={(el: HTMLStripeElement) => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <CardCVCElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={(el: HTMLStripeElement) => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <PostalCodeElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={(el: HTMLStripeElement) => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
    </div>
);

interface ComponentProps {
    tokenCallback(token: PatchedTokenResponse): void;
}

class WrappedComponent extends React.Component<
    ComponentProps & InjectedStripeProps
> {
    constructor(props: ComponentProps & InjectedStripeProps) {
        super(props);
        // Test for paymentRequest
        const paymentRequest = props.stripe && props.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Demo total',
                amount: 1
            }
        });
        if (paymentRequest) {
            paymentRequest.on('token', ({complete, token, ...data}) => undefined);
            paymentRequest.canMakePayment().then(res => undefined);
        }
    }
    onSubmit = () => {
        this.props.stripe!
            .createToken({
                name: '',
                address_line1: '',
                address_line2: '',
                address_city: '',
                address_state: '',
                address_zip: '',
                address_country: '',
                currency: '',
            })
            .then((response: PatchedTokenResponse) =>
                this.props.tokenCallback(response)
            );
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

/**
 * StripeProvider should either receive `apiKey` or `stripe`, but not both.
 * See: https://github.com/stripe/react-stripe-elements/blob/d30b32b6b8df282dd8880a3521667c371e90083f/src/components/Provider.js#L83-L86
 */
const TestStripeProviderProps1: React.SFC = () => <StripeProvider apiKey="" />;

const TestStripeProviderProps2: React.SFC<{
    stripe: stripe.Stripe;
}> = props => <StripeProvider stripe={props.stripe} />;

/**
 * props.stripe is null until loaded.
 * See: https://github.com/stripe/react-stripe-elements#props-shape
 */
const TestStripeProviderProps3: React.SFC<{
    stripe: stripe.Stripe;
}> = props => <StripeProvider stripe={null} />;

/**
 * End-to-end usage of loading stripe.js asynchronously.
 * See: https://github.com/stripe/react-stripe-elements#loading-stripejs-asynchronously
 */
const TestStripeProviderProps4: React.SFC<{
    stripe: null | stripe.Stripe
}> = props =>
    <StripeProvider stripe={props.stripe}>
        <Elements>
            <div />
        </Elements>
    </StripeProvider>;

/**
 * StripeProvider should be able to accept options.
 * See: https://stripe.com/docs/stripe-js/reference#stripe-function for options.
 */
const TestStripeProviderOptions: React.SFC = () => <StripeProvider apiKey="" stripeAccount="" />;
