/*
Licensed under the MIT License (MIT)

Copyright (c) 2016 David Hara
*/

import * as React from 'react';
import { render } from 'react-dom';
import Griddle, { CustomColumnComponentProps } from 'griddle-react';
import CustomColumnComponentGrid from './CustomColumnComponent';
import CustomHeaderComponentGrid from './CustomHeaderComponent';
import CustomFilterComponentGrid from './CustomFilterComponent';

interface MyCustomResult {
  name: string;
  test: string;
}

class LinkComponent extends React.Component<CustomColumnComponentProps<MyCustomResult>> {
  render() {
    const url = "speakers/" + this.props.rowData.test + "/" + this.props.data;
    return <a href={url}>{this.props.data}</a>;
  }
}

const StatelessFunctionComponent = (props: CustomColumnComponentProps<MyCustomResult>) => {
  const url = "speakers/" + props.rowData.test + "/" + props.data;
  return <a href={url}>{props.data}</a>;
};

const columnMeta = [
  {
    columnName: "name",
    order: 1,
    locked: false,
    visible: true,
    customComponent: StatelessFunctionComponent
  }];

const results: MyCustomResult[] = [
  {
    name: 'David Hara',
    test: 'blah'
  },
  {
    name: 'Hara, David',
    test: 'blah2'
  }
];

const rowMetaData = {
  bodyCssClassName: (rowData: MyCustomResult) => {
    return rowData.test;
  }
};

type TypedGriddle = new () => Griddle<MyCustomResult>;
const TypedGriddle = Griddle as TypedGriddle;

render(
  <div>
    <h1>Custom Column Component Grid</h1>
    <CustomColumnComponentGrid />
    <h1>Custom Header Component Grid</h1>
    <CustomHeaderComponentGrid />
    <h1>Custom Filter Component Grid</h1>
    <CustomFilterComponentGrid />
    <TypedGriddle
      results={results}
      columnMetadata={columnMeta}
      rowMetadata={rowMetaData}
      sortAscendingComponent={<span className="fa fa-sort-alpha-asc"/>}
      sortDescendingComponent={<span className="fa fa-sort-alpha-desc"/>}
      customRowComponent={LinkComponent}
    />
  </div>,
  document.getElementById('root')
);
