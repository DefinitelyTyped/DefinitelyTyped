/**
 * Created by Bruno Grieder and Christian Droulers
 * Updated by Fedor Nezhivoi
 */

///<reference types="react" />

import * as React from "react"
import * as reactMixin from "react-mixin"

import {
IntlProvider,
InjectedIntl,
addLocaleData,
hasLocaleData,
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
} from "react-intl"

import reactIntlEn = require("react-intl/locale-data/en");

addLocaleData(reactIntlEn);
console.log(hasLocaleData("en"));

interface SomeComponentProps {
  intl: InjectedIntl
}

class SomeComponent extends React.Component<SomeComponentProps, void> {
    static propTypes: React.ValidationMap<any> = {
        intl: intlShape.isRequired
    };
    public render(): React.ReactElement<{}> {
        const intl = this.props.intl;
        const formattedDate = intl.formatDate(new Date(), { format: "short" });
        const formattedTime = intl.formatTime(new Date(), { format: "short" });
        const formattedRelative = intl.formatRelative(new Date().getTime(), { format: "short" });
        const formattedNumber = intl.formatNumber(123, { format: "short" });
        const formattedPlural = intl.formatPlural(1, { one: "hai!" });
        const formattedMessage = intl.formatMessage({ id: "hello", defaultMessage: "Hello {name}!" }, { name: "Roger" });
        const formattedHTMLMessage = intl.formatHTMLMessage({ id: "hello", defaultMessage: "Hello <strong>{name}</strong>!" }, { name: "Roger" });
        return <div>
            <FormattedRelative
                value={new Date().getTime() }
                units="hour"
                style="numeric"
                format="yyyy-MM-dd"
                updateInterval={123}
                initialNow={new Date() } />

            <FormattedMessage
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
                defaultMessage="Hi, {name}!"
                values={{ name: "bob" }}
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

            <FormattedPlural
                style="cardinal"
                value={3}
                other="hai?"
                zero="no hai"
                one="hai"
                two="hai2"
                few="haifew"
                many="haiku" />

            <FormattedDate
                value={new Date() }
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
                value={new Date() }
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

            <FormattedNumber value={123}>
                {(formattedNum: string) => (
                    <span className="number">{formattedNum}</span>
                ) }
                </FormattedNumber>
            </div>
    }
}

const SomeComponentWithIntl = injectIntl(SomeComponent);

class TestApp extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        const definedMessages = defineMessages({
            "sup": {
                id: "sup",
                defaultMessage: "Hai mom"
            }
        });

        const messages = {
            "hello": "Hello, {name}!"
        };
        return (
          <IntlProvider locale="en" formats={{}} messages={messages} defaultLocale="en" defaultFormats={messages}>
            <SomeComponentWithIntl />
          </IntlProvider>
        );
    }
}

export default {
    TestApp,
    SomeComponent: SomeComponentWithIntl
}
