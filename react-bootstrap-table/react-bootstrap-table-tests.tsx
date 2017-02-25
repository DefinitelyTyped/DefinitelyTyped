/// <reference types="react-dom"/>

import * as React from 'react';
import { render } from 'react-dom';
import { BootstrapTable, TableHeaderColumn, ApplyFilterParameter } from 'react-bootstrap-table';

var products = [{
  id: 1,
  name: "Item name 1",
  price: 100
}, {
  id: 2,
  name: "Item name 2",
  price: 100
}];

// It's a data format example.
function priceFormatter(cell: any, row: any) {
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

render(
  <BootstrapTable data={products} striped={true} hover={true} ignoreSinglePage>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true} editable={{ type: 'textarea', rows: 10 }}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
    </BootstrapTable>,
  document.getElementById("app")
);

const qualityType = {
  0: 'good',
  1: 'bad',
  2: 'unknown'
};

function enumFormatter(cell: any, row: any, enumObject: any) {
  return enumObject[cell];
}

class SelectFilterWithDefaultValue extends React.Component<any, any> {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='quality' filterFormatted dataFormat={ enumFormatter }
            formatExtraData={ qualityType } filter={ { type: 'SelectFilter', options: qualityType, defaultValue: 1 } }>Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

class TextFilterWithCondition extends React.Component<any, any> {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 1000, condition: 'eq' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

function getCustomFilter(filterHandler: (parameters?: ApplyFilterParameter) => void, customFilterParameters: any) {
  return (
    <div />
  );
}

class CustomFilter extends React.Component<any, any> {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='isInStock' filter={ { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' } } }>Product Is In Stock</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
