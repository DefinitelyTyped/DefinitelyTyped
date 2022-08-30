import * as React from 'react';
import { TextInput, View, Text } from 'react-native';

import {
  hook,
  wrap,
  TestScope,
  WithTestHook,
  Tester,
  TestHookStore,
  useCavy,
  TestReport
} from 'cavy';

type Props = WithTestHook<{
  foo: string;
}>;

interface FCProps {
  text: string;
}

const FunctionComponent: React.FunctionComponent<FCProps> = ({ text })  => {
  return <Text>{text}</Text>;
};

const WrappedText = wrap(Text);
const WrappedFunctionComponent = wrap(FunctionComponent);

class SampleComponent extends React.Component<Props> {
  textInputRef: React.ReactNode | null;

  constructor(props: Props) {
    super(props);
    this.textInputRef = null;
  }

  setTextInputRef = (el?: React.ReactNode) => {
    this.textInputRef = el;
  }

  render() {
    const { generateTestHook, foo } = this.props;
    return (
      <View ref={generateTestHook('View')}>
        <WrappedFunctionComponent
          ref={generateTestHook('WrappedFunctionComponent')}
          text='text'
        />

        <WrappedText accessibilityRole='button' ref={generateTestHook('WrappedText')}>
          Wrapped text
        </WrappedText>

        <Text>{foo}</Text>

        <TextInput ref={generateTestHook('Input', this.setTextInputRef)} onFocus={() => {}}/>
      </View>
    );
  }
}

const HookedSampleComponent = hook(SampleComponent); // $ExpectType ComponentClass<{ foo: string; }, any>

const SampleFunctionComponent: React.FunctionComponent = () => {
  const generateTestHook = useCavy();
  const ref = React.createRef();
  return <View ref={generateTestHook('FunctionView', ref)}></View>;
};

function sampleSpec(spec: TestScope) {
  spec.describe('it has a name and callback', () => {
    spec.beforeEach(() => {});

    spec.it('it has a name and callback', async () => {
      spec.component.reRender(); // $ExpectType void
      spec.component.clearAsync(); // $ExpectType Promise<void>
      spec.findComponent('View'); // $ExpectType Promise<Component<{}, {}, any>>
      spec.press('View'); // $ExpectType Promise<void>
      spec.fillIn('Input', 'hello world'); // $ExpectType Promise<void>
      spec.focus('Input'); // $ExpectType Promise<void>
      spec.pause(1000); // $ExpectType Promise<void>
      spec.exists('View'); // $ExpectType Promise<true>
      spec.notExists('View.MissingSample'); // $ExpectType Promise<true>
      spec.containsText('Input', 'hello'); // $ExpectType Promise<void>
      // Test wrapped object like Text
      spec.containsText('WrappedText', 'Wrapped text');
      // Test wrapped function component, access to props
      const functionComponent = await spec.findComponent('WrappedFunctionComponent') as React.Component<FCProps>;
      if (functionComponent.props.text !== 'text') {
        throw new Error();
      }
    });
  });
}

function sampleReporter(_report: TestReport) {}

const testHookStore = new TestHookStore();

<Tester
  specs={[sampleSpec]}
  store={testHookStore}
  waitTime={42}
  startDelay={42}
  clearAsyncStorage={true}
  reporter={sampleReporter}
>
  <HookedSampleComponent foo="test" />
</Tester>;
// React.Children.only would throw
// @ts-expect-error
<Tester specs={[sampleSpec]} store={testHookStore} />;
// React.Children.only would throw
// @ts-expect-error
<Tester specs={[sampleSpec]} store={testHookStore}>
  <HookedSampleComponent foo="test" />
  <SampleFunctionComponent />
</Tester>;
