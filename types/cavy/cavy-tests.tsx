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

const SampleFunctionComponent: React.FunctionComponent = () => {
  const generateTestHook = useCavy();
  const ref = React.createRef();
  return <View ref={generateTestHook('FunctionView', ref)}></View>;
};

const WrappedText = wrap(Text);
const WrappedFunctionComponent = wrap(SampleFunctionComponent);

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
        />

        <WrappedText ref={generateTestHook('WrappedText')}>
          Wrapped text
        </WrappedText>

        <Text>{foo}</Text>

        <TextInput ref={generateTestHook('Input', this.setTextInputRef)} />
      </View>
    );
  }
}

const HookedSampleComponent = hook(SampleComponent); // $ExpectType ComponentClass<{ foo: string; }, any>

function sampleSpec(spec: TestScope) {
  spec.describe('it has a name and callback', () => {
    spec.beforeEach(() => {});

    spec.it('it has a name and callback', async () => {
      spec.component.reRender(); // $ExpectType void
      spec.component.clearAsync(); // $ExpectType Promise<void>
      spec.findComponent('View'); // $ExpectType Promise<Component<{}, {}, any>>
      spec.press('View'); // $ExpectType Promise<void>
      spec.fillIn('Input', 'hello world'); // $ExpectType Promise<void>
      spec.pause(1000); // $ExpectType Promise<void>
      spec.exists('View'); // $ExpectType Promise<true>
      spec.notExists('View.MissingSample'); // $ExpectType Promise<true>
      spec.containsText('Input', 'hello'); // $ExpectType Promise<void>
      // Test wrapped object like Text
      spec.containsText('WrappedText', 'Wrapped text');
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
  <SampleFunctionComponent/>
</Tester>;
