/**
 * Created by Bruno Grieder and Christian Droulers
 * Updated by Fedor Nezhivoi
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import * as reactMixin from "react-mixin";

import {
    IntlProvider,
    InjectedIntl,
    InjectedIntlProps,
    addLocaleData,
    injectIntl,
    intlShape,
    defineMessages,
    FormattedRelative,
    FormattedMessage,
    FormattedHTMLMessage,
    FormattedNumber,
    FormattedPlural,
    FormattedDate,
    FormattedTime
} from "react-intl";

import reactIntlEn = require("react-intl/locale-data/en");

addLocaleData(reactIntlEn);

interface SomeComponentProps {
    className: string;
}

const SomeFunctionalComponentWithIntl: React.ComponentClass<SomeComponentProps> = injectIntl<SomeComponentProps & InjectedIntlProps>(({
    intl: {
        formatDate,
        formatHTMLMessage,
        formatNumber,
        formatMessage,
        formatPlural,
        formatRelative,
        formatTime,
        locale,
        defaultLocale
    },
    className
}) => {
    const formattedDate = formatDate(new Date(), { format: "short" });
    const formattedTime = formatTime(new Date(), { format: "short" });
    const formattedRelative = formatRelative(new Date().getTime(), { format: "short" });
    const formattedNumber = formatNumber(123, { format: "short" });
    const formattedPlural = formatPlural(1, { style: "ordinal" });
    const formattedMessage = formatMessage({ id: "hello", defaultMessage: "Hello {name}!" }, { name: "Roger", nullAllowed: null, undefinedAllowed: undefined });
    const formattedMessagePlurals = formatMessage({
        id: "hello",
        defaultMessage: "Hello {name} you have {unreadCount, number} {unreadCount, plural, one {message} other {messages}}!"
    }, { name: "Roger", unreadCount: 123 });
    const formattedHTMLMessage = formatHTMLMessage({ id: "hello", defaultMessage: "Hello <strong>{name}</strong>!" }, { name: "Roger", nullAllowed: null, undefinedAllowed: undefined });
    return (
        <div className={className}>
        </div>
    );
});

class SomeComponent extends React.Component<SomeComponentProps & InjectedIntlProps> {
    static propTypes: React.ValidationMap<SomeComponentProps & InjectedIntlProps> = {
        intl: intlShape.isRequired,
        className: PropTypes.string.isRequired
    };
    render(): React.ReactElement<{}> {
        const intl = this.props.intl;
        const formattedDate = intl.formatDate(new Date(), { format: "short" });
        const formattedTime = intl.formatTime(new Date(), { format: "short" });
        const formattedRelative = intl.formatRelative(new Date().getTime(), { format: "short" });
        const formattedNumber = intl.formatNumber(123, { format: "short" });
        const formattedPlural = intl.formatPlural(1, { style: "ordinal" });
        const formattedMessage = intl.formatMessage({ id: "hello", defaultMessage: "Hello {name}!" }, { name: "Roger" });
        const formattedMessageNumber = intl.formatMessage({ id: "hello", defaultMessage: "Hello {num}!" }, { num: 1 });
        const formattedMessageDate = intl.formatMessage({ id: "hello", defaultMessage: "Hello {date}!" }, { date: new Date() });
        const formattedMessageBool = intl.formatMessage({ id: "hello", defaultMessage: "Hello {bool}!" }, { bool: true });
        const formattedMessagePlurals = intl.formatMessage({
            id: "hello",
            defaultMessage: "Hello {name} you have {unreadCount, number} {unreadCount, plural, one {message} other {messages}}!" },
            { name: "Roger", unreadCount: 123 });
        const formattedHTMLMessage = intl.formatHTMLMessage({ id: "hello", defaultMessage: "Hello <strong>{name}</strong>!" }, { name: "Roger" });
        const formattedHTMLMessageNumber = intl.formatHTMLMessage({ id: "hello", defaultMessage: "Hello <strong>{num}</strong>!" }, { num: 1 });
        const formattedHTMLMessageDate = intl.formatHTMLMessage({ id: "hello", defaultMessage: "Hello <strong>{date}</strong>!" }, { date: new Date() });
        const formattedHTMLMessageBool = intl.formatHTMLMessage({ id: "hello", defaultMessage: "Hello <strong>{bool}</strong>!" }, { bool: true });
        return <div className={this.props.className}>
            <FormattedRelative
                value={new Date().getTime()}
                units="hour"
                style="numeric"
                format="yyyy-MM-dd"
                updateInterval={123}
                initialNow={new Date()} />

            <FormattedRelative
                value={new Date().getTime()}
                units="hour"
                style="numeric"
                format="yyyy-MM-dd"
                updateInterval={123}
                initialNow={new Date()}
            >
                {formattedRelative => formattedRelative.toUpperCase()}
            </FormattedRelative>

            <FormattedMessage
                id="test"
                description="Test"
                defaultMessage="Hi, {name}!"
                values={{ name: "bob" }}
                tagName="div" />

            <FormattedMessage
                id="test"
                description="Test"
                defaultMessage="Hi nested component {name}!"
                values={{ name: <p>p</p> }}
                tagName="div" />

            <FormattedMessage
                id="test"
                description="Test"
                defaultMessage="Hi numbers {count}!"
                values={{ count: 123 }}
                tagName="div" />

            <FormattedMessage
                id="test"
                description="Test"
                defaultMessage="Hi {bool}!"
                values={{ bool: false }}
                tagName="div" />

            <FormattedMessage
                id="test"
                description="Test"
                defaultMessage="Hi {date}!"
                values={{ date: new Date() }}
                tagName="div" />

            <FormattedMessage
                id="test"
                description="Test"
                defaultMessage="Hi plurals: {valueOne, number} {valueOne, plural, one {plural} other {plurals}} {valueTen, number} {valueTen, plural, one {plural} other {plurals}} !"
                values={{ valueOne: 1, valueTen: 10 }}
                tagName="div" />

            <FormattedMessage
                id="test"
                description="Test"
                defaultMessage="Hi {blank} and {empty}!"
                values={{ blank: null, empty: undefined }}
                tagName="div" />

            <FormattedMessage
                id="test"
                description="Test"
            >
                {(text) => <div className="messageDiv">{text}</div>}
            </FormattedMessage>

            <FormattedMessage
                id="test"
                description="Test"
            >
                {(text) => <input placeholder={text as string} />}
            </FormattedMessage>

            <FormattedMessage
                id="test"
                description="Test"
            >
                {(...text) => <ul>{text.map(t => <li>{t}</li>)}</ul>}
            </FormattedMessage>

            <FormattedMessage
                id="legal-statement"
                values={{
                    privacy_policy: (
                        <a href="/privacy-policy">
                            <FormattedMessage id="request_invite.privacy_policy" />
                        </a>
                    ),
                    terms_of_service: (
                        <a href="/terms-of-service">
                            <FormattedMessage id="request_invite.terms_of_service" />
                        </a>
                    )
                }}
            >
                {(...messages) => messages.map(message => <>{message}</>)}
            </FormattedMessage>

            <FormattedHTMLMessage
                id="test"
                description="Test"
                defaultMessage="Hi, {name}!"
                values={{ name: "bob" }}
                tagName="div" />

            <FormattedHTMLMessage
                id="test"
                description="Test"
                defaultMessage="Hi, {name}!"
                values={{ name: "bob" }}
                tagName="div" />

            <FormattedHTMLMessage
                id="test"
                description="Test"
                defaultMessage="Hi numbers {count}!"
                values={{ count: 123 }}
                tagName="div" />

            <FormattedHTMLMessage
                id="test"
                description="Test"
                defaultMessage="Hi {bool}!"
                values={{ bool: false }}
                tagName="div" />

            <FormattedHTMLMessage
                id="test"
                description="Test"
                defaultMessage="Hi {date}!"
                values={{ date: new Date() }}
                tagName="div" />

            <FormattedNumber
                value={123456.78}
                format="N"
                localeMatcher="lookup"
                style="currency"
                currency="USD"
                currencyDisplay="name"
                useGrouping={false}
                minimumIntegerDigits={1}
                minimumFractionDigits={1}
                minimumSignificantDigits={2}
                maximumFractionDigits={3}
                maximumSignificantDigits={3} />

            <FormattedNumber value={123}>
                {formattedNum => (
                    <span className="number">{formattedNum}</span>
                )}
            </FormattedNumber>

            <FormattedPlural
                style="cardinal"
                value={3}
                other="hai?"
                zero="no hai"
                one="hai"
                two="hai2"
                few="haifew"
                many="haiku" />

            <FormattedPlural
                style="cardinal"
                value={3}
                other="hai?"
                zero="no hai"
                one="hai"
                two="hai2"
                few="haifew"
                many="haiku"
            >
                {formattedPlural => (
                    <span className="number">{formattedPlural}</span>
                )}
            </FormattedPlural>

            <FormattedDate
                value={new Date()}
                format="short"
                localeMatcher="best fit"
                formatMatcher="basic"
                timeZone="EDT"
                hour12={false}
                weekday="short"
                era="short"
                year="2-digit"
                month="2-digit"
                day="2-digit"
                hour="2-digit"
                minute="2-digit"
                second="2-digit"
                timeZoneName="short" />

            <FormattedDate
                value={Date.now()}
                format="short"
                localeMatcher="best fit"
                formatMatcher="basic"
                timeZone="EDT"
                hour12={false}
                weekday="short"
                era="short"
                year="2-digit"
                month="2-digit"
                day="2-digit"
                hour="2-digit"
                minute="2-digit"
                second="2-digit"
                timeZoneName="short" />

            <FormattedDate
                value={Date.now()}
                format="short"
                localeMatcher="best fit"
                formatMatcher="basic"
                timeZone="EDT"
                hour12={false}
                weekday="short"
                era="short"
                year="2-digit"
                month="2-digit"
                day="2-digit"
                hour="2-digit"
                minute="2-digit"
                second="2-digit"
                timeZoneName="short"
            >
                {formattedDate => formattedDate.toUpperCase()}
            </FormattedDate>

            <FormattedTime
                value={new Date()}
                format="short"
                localeMatcher="best fit"
                formatMatcher="basic"
                timeZone="EDT"
                hour12={false}
                weekday="short"
                era="short"
                year="2-digit"
                month="2-digit"
                day="2-digit"
                hour="2-digit"
                minute="2-digit"
                second="2-digit"
                timeZoneName="short" />

            <FormattedTime
                value={Date.now()}
                format="short"
                localeMatcher="best fit"
                formatMatcher="basic"
                timeZone="EDT"
                hour12={false}
                weekday="short"
                era="short"
                year="2-digit"
                month="2-digit"
                day="2-digit"
                hour="2-digit"
                minute="2-digit"
                second="2-digit"
                timeZoneName="short" />

            <FormattedTime
                value={Date.now()}
                format="short"
                localeMatcher="best fit"
                formatMatcher="basic"
                timeZone="EDT"
                hour12={false}
                weekday="short"
                era="short"
                year="2-digit"
                month="2-digit"
                day="2-digit"
                hour="2-digit"
                minute="2-digit"
                second="2-digit"
                timeZoneName="short"
            >
                {formattedTime => formattedTime.toUpperCase()}
            </FormattedTime>
        </div>;
    }
}

const SomeComponentWithIntl = injectIntl(SomeComponent);

class TestApp extends React.Component {
    render(): React.ReactElement<{}> {
        const definedMessages = defineMessages({
            sup: {
                id: "sup",
                defaultMessage: "Hai mom"
            }
        });

        const messages = {
            hello: "Hello, {name}!"
        };
        return (
            <IntlProvider locale="en" formats={{}} messages={messages} defaultLocale="en" defaultFormats={messages}>
                <SomeComponentWithIntl className="just-for-test" />
                <SomeFunctionalComponentWithIntl className="another-one" />
            </IntlProvider>
        );
    }
}

const intlProvider = new IntlProvider({ locale: 'en' }, {});
const { intl } = intlProvider.getChildContext();
const wrappedComponent = <SomeComponentWithIntl.WrappedComponent className="test" intl={intl}/>;

export default {
    TestApp,
    SomeComponent: SomeComponentWithIntl
};
