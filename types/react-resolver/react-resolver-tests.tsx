import * as React from 'react';
import { Resolver, resolve, context } from 'react-resolver';

interface OwnProps {
  thing: number;
}

interface ResolvedProps {
  data: string;
}

class Page extends React.Component<OwnProps & ResolvedProps> {
  render() {
    return <div>Hello, {this.props.data}!</div>;
  }
}

const ResolvedPageWithSingleProp = resolve('data', async () => {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve('World'), 500);
  });
})(Page);

const ResolvedPageWithPropMap = resolve({
  data: async () => {
    return new Promise<string>(resolve => {
      setTimeout(() => resolve('World'), 500);
    });
  },
})(Page);

const PageWithContext = context('history')(Page);

<ResolvedPageWithSingleProp />;
<ResolvedPageWithPropMap />;

// Resolver.render(() => <ResolvedPageWithPropMap />, document.getElementById('app'));

Resolver.resolve(() => {
  return <ResolvedPageWithPropMap />;
}).then(({ data, Resolved }) => {
  data === 'World';
});
