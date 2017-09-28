/*
Licensed under the MIT License (MIT)

Copyright (c) 2016 David Hara
*/

import * as _ from 'lodash';
import * as React from 'react';
import Griddle, { CustomFilterComponentProps } from 'griddle-react';

const CustomFilterFunction = (items: ResultType[], query: string): ResultType[] => {
  return _.filter(items, (item) => {
    let match = false;
    _.forIn(item, (value, key) => {
      if (String(value).toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        match = true;
        return;
      }
    });

    return match;
  });
};

class CustomFilterComponent extends React.Component<CustomFilterComponentProps> {
  query = '';

  searchChange(event: React.FormEvent<HTMLInputElement>) {
    this.query = event.currentTarget.value;
    this.props.changeFilter(this.query);
  }

  render() {
    return (
      <div className="filter-container">
        <input type="text"
               name="search"
               placeholder="Search..."
               onChange={this.searchChange.bind(this)}/>
      </div>
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

const someData: ResultType[] = [
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

class CustomFilterComponentGrid extends React.Component {
  render() {
    type TypedGriddle = new () => Griddle<ResultType>;
    const TypedGriddle = Griddle as TypedGriddle;

    return (
      <TypedGriddle results={someData} showFilter={true}
                    useCustomFilterer={true} customFilterer={CustomFilterFunction}
                    useCustomFilterComponent={true} customFilterComponent={CustomFilterComponent}/>
    );
  }
}

export default CustomFilterComponentGrid;
