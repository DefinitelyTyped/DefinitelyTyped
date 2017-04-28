import * as React from 'react';
import Loadable, { LoadingComponentProps } from 'react-loadable';

class LoadingComponent extends React.Component<LoadingComponentProps, {}> {
  render() {
    return <div>{this.props.isLoading}</div>;
  }
}

interface ComponentProps {
  text: string;
}

const Component: React.SFC<ComponentProps> = ({ text }) => <div>{text}</div>;

const Loadable100 = Loadable({
  // a module shape with 'export = Component' / 'module.exports = Component'
  loader: () => Promise.resolve(Component),
  LoadingComponent,
  delay: 100
});

const Loadable200 = Loadable({
  // a module shape with 'export default Component'
  loader: () => Promise.resolve({ default: Component }),
  LoadingComponent,
  delay: 200
});

const Loadable300 = Loadable({
  // a module shape with 'export { Component }'
  loader: () => Promise.resolve({ Component }),
  LoadingComponent,
  delay: 300,
  resolveModule: shape => shape.Component
});

const Loadable400 = Loadable({
  // a module shape with both 'export default Component' and 'export { Component }'
  loader: () => Promise.resolve({ default: Component, Component }),
  LoadingComponent: () => null,
  delay: 300,
  resolveModule: shape => shape.Component
});

const used100 = <Loadable100 text='100'/>;
const used200 = <Loadable200 text='200'/>;
const used300 = <Loadable300 text='300'/>;
const used400 = <Loadable400 text='400'/>;

Loadable100.preload();
