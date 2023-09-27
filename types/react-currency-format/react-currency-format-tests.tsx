import React = require("react");
import CurrencyFormat = require("react-currency-format");

// When displayType is text, the component should have attributes of a span element.
<CurrencyFormat displayType="text" contentEditable />;

// Should have input attributes
<CurrencyFormat displayType="input" checked />;

// Can be used without props
<CurrencyFormat />;

// Examples from https://github.com/mohitgupta8888/react-currency-format#examples
<CurrencyFormat
    value=""
    thousandSeparator
    prefix="$"
    onValueChange={values => {
        const { formattedValue, value } = values;
        console.log(formattedValue, value);
    }}
/>;

<CurrencyFormat value={2456981} displayType="text" thousandSeparator prefix="$" />;

<CurrencyFormat
    value={2456981}
    displayType="text"
    thousandSeparator
    prefix="$"
    renderText={value => <div>{value}</div>}
/>;

<CurrencyFormat value={4111111111111111} displayType="text" format="#### #### #### ####" />;

<CurrencyFormat thousandSeparator prefix="$" />;

<CurrencyFormat format="#### #### #### ####" />;

<CurrencyFormat format="#### #### #### ####" mask="_" />;

<CurrencyFormat format="##/##" placeholder="MM/YY" mask={["M", "M", "Y", "Y"]} />;

function limit(val: string, max: string) {
    if (val.length === 1 && val[0] > max[0]) {
        val = "0" + val;
    }

    if (val.length === 2) {
        if (Number(val) === 0) {
            val = "01";
        } else if (val > max) {
            val = max;
        }
    }

    return val;
}

function cardExpiry(val: string) {
    const month = limit(val.substring(0, 2), "12");
    const year = val.substring(2, 4);

    return month + (year.length ? "/" + year : "");
}

<CurrencyFormat format={cardExpiry} />;

<CurrencyFormat format="+1 (###) ###-####" mask="_" />;

const TextField = ({ title }: { title: string }) => <input title={title} />;

TextField.displayName = "Custom Text Field";

<CurrencyFormat title="Input title" customInput={TextField} format="#### #### #### ####" />;

<CurrencyFormat
    title="Input title"
    hintText="Some placeholder"
    value="value"
    customInput={TextField}
    format="#### #### #### ####"
/>;
