/*
Licensed under the MIT License (MIT)

Copyright (c) 2016 David Hara
*/

import * as React from 'react';
import Griddle, { CustomColumnComponentProps } from 'griddle-react';

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

class CustomColumnComponentGrid extends React.Component {
  render() {
    type TypedGriddle = new () => Griddle<MyCustomResult>;
    const TypedGriddle = Griddle as TypedGriddle;

    return (
      <TypedGriddle
        results={results}
        columnMetadata={columnMeta}
        rowMetadata={rowMetaData}
        sortAscendingComponent={<span className="fa fa-sort-alpha-asc"/>}
        sortDescendingComponent={<span className="fa fa-sort-alpha-desc"/>}
        customRowComponent={LinkComponent} />
    );
  }
}

export default CustomColumnComponentGrid;
