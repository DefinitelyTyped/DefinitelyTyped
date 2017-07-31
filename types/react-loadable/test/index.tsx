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

// dynamic import syntax confuses tslint@5.5.0, so some disable comments were necessary.
// all of these disables are specifically for working around this issue,
// no rules were intended to be skipped.

// tslint:disable-next-line one-variable-per-declaration
const WithImport = Loadable({
  loader: () => import('./imports/with-default'),
  loading: LoadingComponent // tslint:disable-line semicolon
  // render is optional
}); // tslint:disable-line semicolon

const usedImport = <WithImport foo={false}/>;

// tslint:disable-next-line one-variable-per-declaration
const WithImportNoDefault = Loadable({
  loader: () => import('./imports/no-default'),
  loading: LoadingComponent,
  // render is mandatory
  render(loaded, props: { text: string }) { // tslint:disable-line whitespace
    return <loaded.AComponent {...props}/>;
  } // tslint:disable-line semicolon
}); // tslint:disable-line semicolon

const usedImportNodefault = <WithImportNoDefault text='import'/>;
