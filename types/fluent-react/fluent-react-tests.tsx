import { Localized, LocalizationProvider, withLocalization, GetString } from 'fluent-react';
import { FluentBundle, ftl } from 'fluent';
import * as ReactDOM from 'react-dom';

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

ReactDOM.render(
  <LocalizationProvider bundles={generateBundles(['en-US'])}>
    <div />
  </LocalizationProvider>,
  document.getElementById('root')
);

// withLocalization examples:
interface Props {
  getString: GetString;
  otherProp: number;
  someOtherProp: string;
}
function HelloButton(props: Props) {
    const { getString } = props;

    return (
        <button onClick={() => alert(getString('hello'))}>
            👋
        </button>
    );
}

const LocalizedHelloButton = withLocalization(HelloButton);

// Remove `getString` from list of required props:
const Test2 = () => (
  <LocalizedHelloButton otherProp={2} someOtherProp='abc'/>
);
// Should not allow `getString` prop:
const Test3 = () => (
  // @ts-expect-error
  <LocalizedHelloButton otherProp={2} someOtherProp='abc' getString={() => {}}/>
);

// Should not allow any other props to be omitted:
const Test4 = () => (
  // @ts-expect-error
  <LocalizedHelloButton otherProp={2}/>
);
