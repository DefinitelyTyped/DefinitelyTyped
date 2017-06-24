import * as React from 'react';
import Loadable, { LoadingComponentProps } from 'react-loadable';

class LoadingComponent extends React.Component<LoadingComponentProps> {
  render() {
    return (
      <div>
        {this.props.error}
        {this.props.isLoading}
        {this.props.pastDelay}
        {this.props.timedOut}
      </div>
    );
  }
}

interface ComponentProps {
  text: string;
}

const Component: React.SFC<ComponentProps> = ({ text }) => <div>{text}</div>;

const Loadable100 = Loadable({
  // a module shape with 'export = Component' / 'module.exports = Component'
  loader: () => Promise.resolve(Component),
  loading: LoadingComponent,
  delay: 100,
  timeout: 10000
});

const Loadable200 = Loadable({
  // a module shape with 'export default Component'
  loader: () => Promise.resolve({ default: Component }),
  loading: LoadingComponent,
  delay: null,
  timeout: null
});

const Loadable300 = Loadable({
  // a module shape with 'export { Component }'
  loader: () => Promise.resolve({ Component }),
  loading: LoadingComponent,
  delay: false,
  timeout: false,
  render(loaded, props: ComponentProps) {
    const { Component } = loaded;
    return <Component {...props} />;
  }
});

const Loadable400 = Loadable({
  // a module shape with both 'export default Component' and 'export { Component }'
  loader: () => Promise.resolve({ default: Component, Component }),
  loading: () => null,
  delay: 300,
  render(loaded, props) {
    const Component = loaded.default;
    const NamedComponent = loaded.Component;
    return (
      <Component {...props}>
        <NamedComponent {...props} />
      </Component>
    );
  }
});

const LoadableMap = Loadable.Map({
  loading: () => null,
  loader: {
    Component: () => Promise.resolve({ default: Component }),
    text: () => Promise.resolve("test text")
  },
  render(loaded, props: ComponentProps) {
    let Component = loaded.Component.default;
    return <Component {...props} text={loaded.text} />;
  }
});

const used100 = <Loadable100 text='100' />;
const used200 = <Loadable200 text='200' />;
const used300 = <Loadable300 text='300' />;
const used400 = <Loadable400 text='400' />;

Loadable100.preload();
