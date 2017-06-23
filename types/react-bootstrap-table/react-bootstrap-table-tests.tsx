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

class SelectFilterWithDefaultValue extends React.Component {
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

class TextFilterWithCondition extends React.Component {
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

class CustomFilter extends React.Component {
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

// Adopted from https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-header-span/column-header-span-complex.js
export default class ColumnHeaderSpanComplex extends React.Component {
  render() {
    const selectRow = {
      mode: 'checkbox',
      bgColor: 'rgb(238, 193, 213)'
    };

    const cellEdit = {
      mode: 'click',
      blurToSave: true
    };
    return (
     <BootstrapTable data={ products }
        insertRow deleteRow exportCSV>
        <TableHeaderColumn row={0} rowSpan={2} dataField='id' isKey={ true } >ID</TableHeaderColumn>
        <TableHeaderColumn row={0} colSpan={3} dataSort csvHeader='Product' headerAlign='right'>Product</TableHeaderColumn>
        <TableHeaderColumn row={1} dataField='name' width='175' dataAlign='center'>name</TableHeaderColumn>
        <TableHeaderColumn row={1} dataField='price' dataSort>price</TableHeaderColumn>
        <TableHeaderColumn row={1} dataField='coupon' width='70'>Coupon</TableHeaderColumn>
        <TableHeaderColumn row={0} csvHeader='In stock' rowSpan={2} dataField='status'>In stock</TableHeaderColumn>
        <TableHeaderColumn row={0} colSpan={2} csvHeader='Customer' filter={ { type: 'TextFilter', delay: 1000 } }>Customer</TableHeaderColumn>
        <TableHeaderColumn row={1} csvHeader='name' dataField='customer'>name</TableHeaderColumn>
        <TableHeaderColumn row={1} csvHeader='order' dataField='order' dataSort>order</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
