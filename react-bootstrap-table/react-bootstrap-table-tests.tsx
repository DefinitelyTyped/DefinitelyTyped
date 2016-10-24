/// <reference path="react-bootstrap-table.d.ts"/>
/// <reference path="../react/react-dom.d.ts"/>

import * as React from 'react';
import { render } from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

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
