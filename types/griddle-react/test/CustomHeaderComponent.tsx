/*
Licensed under the MIT License (MIT)

Copyright (c) 2016 David Hara
*/

import * as React from 'react';
import Griddle, { ColumnMetaData, CustomHeaderComponentProps } from 'griddle-react';

interface MoreCustomHeaderComponentProps extends CustomHeaderComponentProps {
  color: string;
}

class HeaderComponent extends React.Component<MoreCustomHeaderComponentProps> {
  textOnClick(e: React.FormEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  filterText(e: React.FormEvent<HTMLInputElement>) {
    this.props.filterByColumn(e.currentTarget.value, this.props.columnName);
  }

  render() {
    return (
      <span>
        <div><strong style={{color: this.props.color}}>{this.props.displayName}</strong></div>
        <input type='text' onChange={this.filterText.bind(this)} onClick={this.textOnClick.bind(this)}/>
      </span>
    );
  }
}

interface ResultType {
  id: number;
  name: string;
  city: string;
  state: string;
  country: string;
  company: string;
  favoriteNumber: number;
}

const  someData: ResultType[] = [
  {
    id: 0,
    name: "Mayer Leonard",
    city: "Kapowsin",
    state: "Hawaii",
    country: "United Kingdom",
    company: "Ovolo",
    favoriteNumber: 7
  },
  {
    id: 1,
    name: "Koch Becker",
    city: "Johnsonburg",
    state: "New Jersey",
    country: "Madagascar",
    company: "Eventage",
    favoriteNumber: 2
  }
];

const  columnMeta: Array<ColumnMetaData<ResultType>> = [
  {
    columnName: 'name',
    order: 1,
    sortable: false,
    visible: true,
  },
  {
    columnName: 'city',
    customHeaderComponent: HeaderComponent,
    customHeaderComponentProps: {color: 'red'}
  },
  {
    columnName: 'state',
    customHeaderComponent: HeaderComponent,
    customHeaderComponentProps: {color: 'blue'}
  }
];

class CustomHeaderComponentGrid extends React.Component {
  render() {
    type TypedGriddle = new () => Griddle<ResultType>;
    const TypedGriddle = Griddle as TypedGriddle;

    return (
      <TypedGriddle results={someData} columnMetadata={columnMeta} columns={["name", "city", "state", "country"]}/>
    );
  }
}

export default CustomHeaderComponentGrid;
