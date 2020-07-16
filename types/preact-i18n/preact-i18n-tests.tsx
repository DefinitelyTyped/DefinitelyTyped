import { IntlProvider, Text, withText } from "preact-i18n";
import { h, render, Component } from "preact";

interface P {
    foo: string;
}

@withText<P>({ exampleText2: "someText2" })
class Example extends Component<P> {
    render({ }: P) {
        return <IntlProvider definition={{ exampleText1: "someText1"}}>
            <p>
                <Text id="exampleText1">fallbackText</Text>
            </p>
        </IntlProvider>;
    }
}

render(<Example foo="bar" />, document);
