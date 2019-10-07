import * as intl from 'enzyme-react-intl';
import * as React from 'react';

class SampleComponent extends React.Component {
  render() {
    return <div>Sample</div>;
  }
}

interface Props {
  id: number;
}

interface State {
  constructed: boolean;
}

class PropsComponent extends React.Component<Props> {
  render() {
    return <div>{this.props.id}</div>;
  }
}

class StateComponent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      constructed: true
    };
  }

  render() {
    return <div>{this.state.constructed ? 'Constructed' : 'Not constructed'}</div>;
  }
}

class StatePropsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      constructed: true
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.constructed ? 'Constructed' : 'Not constructed'}</div>
        <div>{this.props.id}</div>
      </div>
    );
  }
}

intl.getLocale();
intl.loadTranslation('en');

function mountWithIntlTests() {
  intl.mountWithIntl(<SampleComponent />);

  const propsComponentWrapper = intl.mountWithIntl<Props>(
    <PropsComponent id={4} />,
  );

  propsComponentWrapper.props().id; // $ExpectType number

  const stateComponentWrapper = intl.mountWithIntl<{}, State>(
    <StateComponent />,
  );

  stateComponentWrapper.state().constructed; // $ExpectType boolean
}

function renderWithIntlTests() {
  intl.renderWithIntl(<SampleComponent />);

  const wrapper = intl.renderWithIntl<Props, State>(
    <StatePropsComponent id={1} />,
  );

  wrapper.toggleClass('toggle');
}

function shallowWithIntlTests() {
  intl.shallowWithIntl(<SampleComponent />);

  const propsComponentWrapper = intl.shallowWithIntl<Props>(
    <PropsComponent id={4} />,
  );

  propsComponentWrapper.props().id; // $ExpectType number

  const stateComponentWrapper = intl.shallowWithIntl<{}, State>(
    <StateComponent />,
  );

  stateComponentWrapper.state().constructed; // $ExpectType boolean
}

intl.setLocale('pl');
