import * as React from 'react';
import LoadableComponentVisibilityAsDefaultImport from 'react-loadable-visibility';
import LoadableComponentVisibility from 'react-loadable-visibility/loadable-components';
import ReactLoadableVisibility from 'react-loadable-visibility/react-loadable';

interface Props {
    title: string;
}

const TestComponent: React.FunctionComponent<Props> = ({ title }) => {
    return <div>{title} component</div>;
};

const testComponentModule = Promise.resolve(TestComponent);

function Loading() {
  return <div>Loading...</div>;
}

const LoadableComponentAsDefaultImportComponent = LoadableComponentVisibilityAsDefaultImport(
  () => testComponentModule,
  {
    fallback: <Loading />,
  },
);

const LoadableComponentComponent = LoadableComponentVisibility(
  () => testComponentModule,
  {
    fallback: <Loading />,
  },
);

const ReactLoadableComponent = ReactLoadableVisibility({
  loader: () => testComponentModule,
  loading: Loading,
});

function App() {
  return (
    <div>
      <LoadableComponentAsDefaultImportComponent title='test' />
      <LoadableComponentComponent title='test' />
      <ReactLoadableComponent title='test' />
    </div>
  );
}
