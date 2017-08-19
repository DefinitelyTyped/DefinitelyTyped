import * as React from 'react';
import * as ReactGridLayout from 'react-grid-layout';

const ReactGridLayoutResponsive = ReactGridLayout.Responsive;
const ReactGridLayoutResponsiveWidth = ReactGridLayout.WidthProvider(ReactGridLayout.Responsive);

class DefaultGridTest extends React.Component<any, any> {
  render() {
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
      <ReactGridLayout
        cols={12}
        rowHeight={30}
        width={1200}
        layout={layout}
        autoSize={true}
        verticalCompact={true}
      >
        <div key={'a'}>a</div>
        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
      </ReactGridLayout>
    );
  }
}

class ResponsiveGridTest extends React.Component<any, any> {
  render() {
    return (
      <ReactGridLayoutResponsive
        width={800}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
      >
        <div key="1">a</div>
        <div key="2">b</div>
        <div key="3">c</div>
      </ReactGridLayoutResponsive>
    );
  }
}

class ResponsiveGridWidthProviderTest extends React.Component<any, any> {
  render() {
    return (
      <ReactGridLayoutResponsiveWidth
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
      >
        <div key="1">a</div>
        <div key="2">b</div>
        <div key="3">c</div>
      </ReactGridLayoutResponsiveWidth>
    );
  }
}
