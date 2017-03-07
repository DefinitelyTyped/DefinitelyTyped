/*
Licensed under the MIT License (MIT)

Copyright (c) 2016 David Hara
*/

import * as React from 'react';
import { render } from 'react-dom';
import Griddle, { CustomColumnComponentProps } from 'griddle-react';
import CustomColumnComponentGrid from './test/CustomColumnComponent';
import CustomHeaderComponentGrid from './test/CustomHeaderComponent';
import CustomFilterComponentGrid from './test/CustomFilterComponent';

interface MyCustomResult {
  name: string,
  test: string
}

class LinkComponent extends React.Component<CustomColumnComponentProps<MyCustomResult>, any> {
  render() {
    var url = "speakers/" + this.props.rowData.test + "/" + this.props.data;
    return <a href={url}>{this.props.data}</a>
  }
}

const StatelessFunctionComponent = (props: CustomColumnComponentProps<MyCustomResult>) => {
  var url = "speakers/" + props.rowData.test + "/" + props.data;
  return <a href={url}>{props.data}</a>
};

var columnMeta = [
  {
    columnName: "name",
    order: 1,
    locked: false,
    visible: true,
    customComponent: StatelessFunctionComponent
  }];

var results: MyCustomResult[] = [
  {
    name: 'David Hara',
    test: 'blah'
  },
  {
    name: 'Hara, David',
    test: 'blah2'
  }
];

var rowMetaData = {
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
