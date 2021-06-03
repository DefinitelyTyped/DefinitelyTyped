import * as React from 'react';
import {
    StripeProvider,
    CardElement,
    Elements,
    injectStripe,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    CardCVCElement,
    IbanElement,
    IdealBankElement,
    PostalCodeElement,
    PaymentRequestButtonElement,
    ReactStripeElements,
} from 'react-stripe-elements';
import InjectedStripeProps = ReactStripeElements.InjectedStripeProps;

import ElementChangeResponse = stripe.elements.ElementChangeResponse;
import ElementsOptions = stripe.elements.ElementsOptions;
import ElementsCreateOptions = stripe.elements.ElementsCreateOptions;
import HTMLStripeElement = ReactStripeElements.HTMLStripeElement;
import TokenResponse = ReactStripeElements.TokenResponse;

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
            cssSrc: 'https://fonts.googleapis.com/css?family=Dosis',
        },
        {
            family: 'Dosis, sanz',
            src: 'url(https://somewebsite.com/path/to/font.woff)',
            style: 'normal',
            weight: 'bold',
            unicodeRange: 'U+26',
        },
    ],
    locale: 'es',
};

const ElementsWithPropsTest: React.FC = () => (
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
        <CardCvcElement
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
        <IbanElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={(el: HTMLStripeElement) => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
        />
        <IdealBankElement
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
        <PaymentRequestButtonElement
            {...cardElementProps}
            onChange={(event: ElementChangeResponse) => void 0}
            onBlur={(event: ElementChangeResponse) => void 0}
            onReady={(el: HTMLStripeElement) => void 0}
            onFocus={(event: ElementChangeResponse) => void 0}
            onClick={(event: ElementChangeResponse) => void 0}
        />
    </div>
);

interface ComponentProps {
    tokenCallback(token: TokenResponse): void;
}

class WrappedComponent extends React.Component<ComponentProps & InjectedStripeProps> {
    constructor(props: ComponentProps & InjectedStripeProps) {
        super(props);
        // Test for paymentRequest
        const paymentRequest =
            props.stripe &&
            props.stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Demo total',
                    amount: 1,
                },
            });
        if (paymentRequest) {
            paymentRequest.on('token', ({ complete, token, ...data }) => undefined);
            paymentRequest.canMakePayment().then(res => undefined);
        }
    }

    onSubmit = () => {
        const elements = this.props.elements;

        // createToken(options?: TokenOptions)
        this.props
            .stripe!.createToken({
                name: '',
                address_line1: '',
                address_line2: '',
                address_city: '',
                address_state: '',
                address_zip: '',
                address_country: '',
                currency: '',
            })
            .then((response: TokenResponse) => this.props.tokenCallback(response));

        // createToken(options?: BankAccountTokenOptions)
        this.props
            .stripe!.createToken({
                country: '',
                currency: '',
                routing_number: '',
                account_number: '',
                account_holder_name: '',
                account_holder_type: 'individual',
            })
            .then((response: TokenResponse) => this.props.tokenCallback(response));
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
    onTokenReceived = (token: TokenResponse) => void 0;

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
const ElementsDefaultPropsTest: React.FC = () => (
    <div>
        <CardElement />
        <CardNumberElement />
        <CardExpiryElement />
        <CardCvcElement />
        <CardCVCElement />
        <PostalCodeElement />
    </div>
);

/**
 * StripeProvider should either receive `apiKey` or `stripe`, but not both.
 * See: https://github.com/stripe/react-stripe-elements/blob/d30b32b6b8df282dd8880a3521667c371e90083f/src/components/Provider.js#L83-L86
 */
const TestStripeProviderProps1: React.FC = () => <StripeProvider apiKey="" />;

const TestStripeProviderProps2: React.FC<{
    stripe: stripe.Stripe;
}> = props => <StripeProvider stripe={props.stripe} />;

/**
 * props.stripe is null until loaded.
 * See: https://github.com/stripe/react-stripe-elements#props-shape
 */
const TestStripeProviderProps3: React.FC<{
    stripe: stripe.Stripe;
}> = props => <StripeProvider stripe={null} />;

/**
 * End-to-end usage of loading stripe.js asynchronously.
 * See: https://github.com/stripe/react-stripe-elements#loading-stripejs-asynchronously
 */
const TestStripeProviderProps4: React.FC<{
    stripe: null | stripe.Stripe;
}> = props => (
    <StripeProvider stripe={props.stripe}>
        <Elements>
            <div />
        </Elements>
    </StripeProvider>
);

/**
 * StripeProvider should be able to accept options.
 * See: https://stripe.com/docs/stripe-js/reference#stripe-function for options.
 */
const TestStripeProviderOptions: React.FC = () => <StripeProvider apiKey="" stripeAccount="" />;

class CreatePaymentMethod extends React.Component<InjectedStripeProps> {
    testCreatePaymentMethod = () => {
        this.props
            .stripe!.createPaymentMethod('card')
            .then((response) => response.paymentMethod);
    }

    testCreatePaymentMethodWithData = () => {
        this.props
            .stripe!.createPaymentMethod('card', {
                billing_details: {
                    name: 'John Doe'
                },
                metadata: {
                    foo: 'bar'
                }
            })
            .then((response) => response.paymentMethod);
    }

    testCreatePaymentMethodWithNewData = () => {
        const cardEl = this.props.elements!.getElement('card') || undefined;
        this.props
            .stripe!.createPaymentMethod({
                type: 'card',
                card: cardEl,
                billing_details: {
                    name: 'Jenny Rosen'
                }
            })
            .then((response) => response.paymentMethod);
    }

    testCreatePaymentMethodWithError = () => {
        this.props
            .stripe!.createPaymentMethod('card')
            .then((response) => response.error);
    }
}

class HandleCardPayment extends React.Component<InjectedStripeProps> {
    testHandleCardAction = () => {
        this.props
            .stripe!.handleCardAction('{PAYMENT_INTENT_CLIENT_SECRET}')
            .then((response) => response.paymentIntent);
    }

    testHandleCardPayment = () => {
        this.props
            .stripe!.handleCardPayment('clientSecret')
            .then((response) => response.paymentIntent);
    }

    testHandleCardPaymentWithOptions = () => {
        this.props
            .stripe!.handleCardPayment('clientSecret', {
                payment_method_data: {
                    billing_details: {
                        name: 'John Doe'
                    }
                },
                receipt_email: 'john@doe.com'
            })
            .then((response) => response.paymentIntent);
    }

    testHandleCardPaymentWithError = () => {
        this.props
            .stripe!.handleCardPayment('clientSecret')
            .then((response) => response.error);
    }
}

class HandleCardSetup extends React.Component<InjectedStripeProps> {
    testHandleCardSetup = () => {
        this.props
            .stripe!.handleCardSetup('clientSecret')
            .then((response) => response.setupIntent);
    }

    testHandleCardSetupWithData = () => {
        this.props
            .stripe!.handleCardSetup('clientSecret', {
                payment_method_data: {
                    billing_details: {
                        name: 'John Doe'
                    }
                }
            })
            .then((response) => response.setupIntent);
    }

    testHandleCardSetupWithError = () => {
        this.props
            .stripe!.handleCardSetup('clientSecret')
            .then((response) => response.error);
    }
}

class ConfirmPaymentPayment extends React.Component<InjectedStripeProps> {
    testConfirmCardPayment = () => {
        const el = this.props.elements!.getElement('card');
        this.props
            .stripe!.confirmCardPayment('clientSecret', {
                payment_method: {
                    card: el || { token: 'test token' },
                    billing_details: {
                        name: 'Jenny Rosen'
                    }
                }
            })
            .then((response) => response.paymentIntent);
    }

    testConfirmCardPaymentWithError = () => {
        this.props
            .stripe!.handleCardSetup('clientSecret')
            .then((response) => response.error);
    }
}

class ConfirmCardSetup extends React.Component<InjectedStripeProps> {
    testConfirmCardSetup = () => {
        const el = this.props.elements!.getElement('cardNumber');
        this.props
            .stripe!.confirmCardSetup('clientSecret', {
                payment_method: {
                    card: el || { token: 'test with token' },
                    billing_details: {
                        name: 'Jenny Rosen'
                    }
                }
            })
            .then((response) => response.setupIntent);
    }

    testConfirmCardSetupWithError = () => {
        this.props
            .stripe!.handleCardSetup('clientSecret')
            .then((response) => response.error);
    }
}
