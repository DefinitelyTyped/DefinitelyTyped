import { FluentBundle, ftl } from "fluent";
import { GetString, LocalizationProvider, Localized, withLocalization } from "fluent-react";

// Localized examples:
const Test = () => (
    <Localized id="hello-world">
        <p>Hello, world!</p>
    </Localized>
);

// LocalizationProvider examples:
function* generateBundles(currentLocales: string[]) {
    for (const locale of currentLocales) {
        const bundle = new FluentBundle(locale);
        bundle.addMessages(ftl`some-message = Hello`);
        yield bundle;
    }
}

<LocalizationProvider bundles={generateBundles(["en-US"])}>
    <div />
</LocalizationProvider>;

// withLocalization examples:
interface Props {
    getString: GetString;
    otherProp: number;
    someOtherProp: string;
}
function HelloButton(props: Props) {
    const { getString } = props;

    return (
        <button onClick={() => alert(getString("hello"))}>
            👋
        </button>
    );
}

const LocalizedHelloButton = withLocalization(HelloButton);

// Remove `getString` from list of required props:
const Test2 = () => <LocalizedHelloButton otherProp={2} someOtherProp="abc" />;
// Should not allow `getString` prop:
const Test3 = () => (
    // @ts-expect-error
    <LocalizedHelloButton otherProp={2} someOtherProp="abc" getString={() => {}} />
);

// Should not allow any other props to be omitted:
const Test4 = () => (
    // @ts-expect-error
    <LocalizedHelloButton otherProp={2} />
);
