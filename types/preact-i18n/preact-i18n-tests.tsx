import { Component, h, render } from "preact";
import { IntlProvider, MarkupText, Text, translate, useText, withText } from "preact-i18n";

interface P {
    foo: string;
}

@withText<P>({ exampleText2: "<strong>someText2</strong>" })
class Example extends Component<P> {
    render({}: P) {
        return (
            <IntlProvider definition={{ exampleText1: "someText1" }}>
                <p>
                    <Text id="exampleText1">fallbackText</Text>
                    <MarkupText id="exampleText2">fallbackText2</MarkupText>
                </p>
            </IntlProvider>
        );
    }
}

render(<Example foo="bar" />, document);

const HookExample = () => {
    const { test } = useText(<Text id="test" />);
    return <span>{test}</span>;
};

render(
    <IntlProvider definition={{ test: "Example" }}>
        <HookExample />
    </IntlProvider>,
    document,
);

translate("test", "", { test: "Example {{no}}" }, { no: 2 });
