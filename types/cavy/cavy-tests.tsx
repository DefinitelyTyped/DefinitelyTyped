import * as React from 'react';
import { TextInput, View, Text } from 'react-native';

import { hook, TestScope, WithTestHook, Tester, TestHookStore, useCavy, TestReport } from 'cavy';

type Props = WithTestHook<{
  foo: string;
}>;

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
    return (
      <View ref={this.props.generateTestHook('View.Sample')}>
        <Text>{this.props.foo}</Text>
        <TextInput ref={this.props.generateTestHook("Input.Sample", this.setTextInputRef)} />
      </View>
    );
  }
}

const HookedSampleComponent = hook(SampleComponent); // $ExpectType ComponentClass<{ foo: string; }, any>

const SampleFunctionComponent: React.FunctionComponent = () => {
  const generateTestHook = useCavy();
  const ref = React.createRef();
  return <View ref={generateTestHook(`FunctionView.Sample`, ref)}></View>;
};

function sampleSpec(spec: TestScope) {
  spec.describe('it has a name and callback', () => {
    spec.beforeEach(() => {});

    spec.it('it has a name and callback', async () => {
      spec.component.reRender(); // $ExpectType void
      spec.component.clearAsync(); // $ExpectType Promise<void>
      spec.findComponent('View.Sample'); // $ExpectType Promise<Component<{}, {}, any>>
      spec.press('View.Sample'); // $ExpectType Promise<void>
      spec.fillIn('Input.Sample', "hello world"); // $ExpectType Promise<void>
      spec.pause(1000); // $ExpectType Promise<void>
      spec.exists('View.Sample'); // $ExpectType Promise<true>
      spec.notExists('View.MissingSample'); // $ExpectType Promise<true>
      spec.containsText('Input.Sample', "hello"); // $ExpectType Promise<void>
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
