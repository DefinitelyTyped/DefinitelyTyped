import * as React from 'react';
import { render } from 'react-dom';
import {
  ApplyFilterParameter,
  BootstrapTable,
  ButtonGroupProps,
  CellEdit,
  ColumnDescription,
  CustomSelectProps,
  DeleteButton,
  EditableAttrs,
  EditValidatorObject,
  ExpandColumnComponentProps,
  ExpandColumnOptions,
  ExportCSVButton,
  Filter,
  FilterData,
  FooterData,
  InsertButton,
  InsertModalColumnDescription,
  InsertModalFooter,
  InsertModalHeader,
  ModalBodyInterface,
  Options,
  PaginationPanelProps,
  SearchField,
  SearchFieldInterface,
  SearchFieldProps,
  SearchPanelProps,
  SelectRow,
  ShowSelectedOnlyButton,
  SizePerPageDropDown,
  SortOrder,
  TableHeaderColumn,
  ToolBarProps
} from 'react-bootstrap-table';

interface Product {
  id: number;
  name: string;
  price?: number;
  quality?: number;
  inStockStatus?: number;
  sales?: number;
}
const products: Product[] = [{
  id: 1,
  name: "Item name 1",
  price: 100
}, {
  id: 2,
  name: "Item name 2",
  price: 100
}];

type JobType = 'A' | 'B' | 'C' | 'D';
interface Job {
  id: number;
  status: string;
  name: string;
  type: JobType;
  active: 'Y' | 'N';
}
const jobs = [
  { id: 1, status: '200', name: 'Item name 1', type: 'B', active: 'N' },
  { id: 2, status: '200', name: 'Item name 2', type: 'B', active: 'Y' }
];
const jobTypes = ['A', 'B', 'C', 'D'];

interface ExtendedJob {
  id: number;
  name: string;
  type1: JobType;
  type2: JobType;
  active: 'Y' | 'N';
  datetime: Date;
}
const extendedJobs = [
  { id: 1, name: 'Item name 1', type1: 'A', type2: 'B', active: 'N', datetime: '2001-12-28T14:57:00' },
  { id: 2, name: 'Item name 2', type1: 'A', type2: 'B', active: 'Y', datetime: '2002-12-28T14:57:00' }
];

const inStockStatus = {
  1: 'yes',
  2: 'no'
};

// It's a data format example.
function priceFormatter(cell: number, row: Product) {
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

function enumFormatter(cell: any, row: any, enumObject: any, rowIndex: number) {
  console.log(`The row index: ${rowIndex}`);
  return enumObject[cell];
}

class SelectFilterWithDefaultValue extends React.Component {
  render() {
    return (
      <BootstrapTable data={products}>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality' filterFormatted dataFormat={enumFormatter}
          formatExtraData={qualityType} filter={{ type: 'SelectFilter', options: qualityType, defaultValue: 1 }}>Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

class TextFilterWithCondition extends React.Component {
  render() {
    return (
      <BootstrapTable data={products}>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 1000, condition: 'eq' }}>Product Name</TableHeaderColumn>
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
    const filter: Filter = { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' } };
    return (
      <BootstrapTable data={products}>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='isInStock' filter={filter}>Product Is In Stock</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

class RemoteProps extends React.Component {
  render() {
    const filter: Filter = { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' } };
    return (
      <BootstrapTable
        data={products}
        remote={(remoteObj) => {
          remoteObj.cellEdit = true;
          return remoteObj;
        }}
        options={{
          onCellEdit: (row: any, fieldName: string, value: any) => { console.info(row); return value; }
        }}
      >
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='isInStock' filter={filter}>Product Is In Stock</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

class RemoteBool extends React.Component {
  render() {
    const filter: Filter = { type: 'CustomFilter', getElement: getCustomFilter, customFilterParameters: { textOK: 'yes', textNOK: 'no' } };
    return (
      <BootstrapTable
        data={products}
        remote
      >
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='isInStock' filter={filter}>Product Is In Stock</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * See http://allenfang.github.io/react-bootstrap-table/docs.html#tdAttr
 */
const tdAttrExample = <BootstrapTable data={ products } search>
    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
    <TableHeaderColumn dataField='name' tdAttr={ { "data-attr": 'test' } }>Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
</BootstrapTable>;

/**
 * See http://allenfang.github.io/react-bootstrap-table/docs.html#tdStyle
 */
const tdStyleExample = <BootstrapTable data={ products } search>
    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
    <TableHeaderColumn dataField='name' tdStyle={ { whiteSpace: 'normal' } }>Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
</BootstrapTable>;

/**
 * See http://allenfang.github.io/react-bootstrap-table/docs.html#thStyle
 */
const thStyleExample = <BootstrapTable data={ products } search>
    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
    <TableHeaderColumn dataField='name' thStyle={ { fontWeight: 'lighter' } }>Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
</BootstrapTable>;

/**
 * Adopted from https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-header-span/column-header-span-complex.js
 */
class ColumnHeaderSpanComplex extends React.Component {
  render() {
    const options: Options = { exportCSVSeparator: '##' };
    return (
      <BootstrapTable data={products} insertRow deleteRow exportCSV options={options}>
        <TableHeaderColumn row={0} rowSpan={2} dataField='id' isKey={true} >ID</TableHeaderColumn>
        <TableHeaderColumn row={0} colSpan={3} dataSort csvHeader='Product' headerAlign='right'>Product</TableHeaderColumn>
        <TableHeaderColumn row={1} dataField='name' width='175' dataAlign='center'>name</TableHeaderColumn>
        <TableHeaderColumn row={1} dataField='price' dataSort>price</TableHeaderColumn>
        <TableHeaderColumn row={1} dataField='coupon' width='70'>Coupon</TableHeaderColumn>
        <TableHeaderColumn row={0} csvHeader='In stock' rowSpan={2} dataField='status' export={false}>In stock</TableHeaderColumn>
        <TableHeaderColumn row={0} colSpan={2} csvHeader='Customer' filter={{ type: 'TextFilter', delay: 1000 }}>Customer</TableHeaderColumn>
        <TableHeaderColumn row={1} csvHeader='name' dataField='customer'>name</TableHeaderColumn>
        <TableHeaderColumn row={1} csvHeader='order' dataField='order' dataSort>order</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Pagination options
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/pagination/custom-pagination-table.js
 */
class PaginationTable extends React.Component {
  sizePerPageListChange = (sizePerPage: number) => {
    alert(`sizePerPage: ${sizePerPage}`);
  }

  onPageChange = (page: number, sizePerPage: number) => {
    alert(`page: ${page}, sizePerPage: ${sizePerPage}`);
  }

  renderShowsTotal = (start: number, to: number, total: number) => {
    return (
      <p style={{ color: 'blue' }}>
        From {start} to {to}, totals is {total}&nbsp;&nbsp;(its a customize text)
      </p>
    );
  }

  render() {
    const options: Options<Product> = {
      onPageChange: this.onPageChange,
      onSizePerPageList: this.sizePerPageListChange,
      page: 2,  // which page you want to show as default
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: products.length
      }], // you can change the dropdown list for size per page
      sizePerPage: 5, // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3, // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      prePageTitle: 'Go to previous', // Previous page button title
      nextPageTitle: 'Go to next', // Next page button title
      firstPageTitle: 'Go to first', // First page button title
      lastPageTitle: 'Go to Last', // Last page button title
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      paginationPosition: 'top', // default is bottom, top and both is all available
      keepSizePerPageState: true, // default is false, enable will keep sizePerPage dropdown state(open/clode) when external rerender happened
      hideSizePerPage: true, // You can hide the dropdown for sizePerPage
      alwaysShowAllBtns: true, // Always show next and previous button
      withFirstAndLast: false, // Hide the going to First and Last page button
      hidePageListOnlyOnePage: true // Hide the page list if only one page.
    };

    return (
      <BootstrapTable data={products} pagination={true} options={options}>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Adopted from https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/blur-to-escape-table.js
 */
class BlurToEscapeTable extends React.Component {
  render() {
    const cellEditProp: CellEdit<Product> = {
      mode: 'click',
      blurToEscape: true
    };

    return (
      <BootstrapTable data={products} cellEdit={cellEditProp} striped={true} hover={true} condensed={true} bordered={false}>
        <TableHeaderColumn width='150px' dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Cell classnames, row saving hooks.
 * @see https://githum.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/cell-edit-classname.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/cell-edit-hook-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/insert-row-table.js
 */
class EditCellClassNameTable extends React.Component {
  jobNameValidator = (value: string) => {
    const response: EditValidatorObject = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must be inserted';
      response.notification.title = 'Requested Value';
    } else if (value.length < 10) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = 'Value must have 10+ characters';
      response.notification.title = 'Invalid Value';
    }
    return response;
  }

  jobStatusValidator = (value: string) => {
    const nan = isNaN(parseInt(value, 10));
    if (nan) {
      return 'Job Status must be a integer!';
    }
    return true;
  }

  invalidJobStatus = (cell: string, row: Job) => {
    console.log(`${cell} at row id: ${row.id} fails on editing`);
    return 'invalid-jobstatus-class';
  }

  editingJobStatus = (cell: string, row: Job) => {
    console.log(`${cell} at row id: ${row.id} in current editing`);
    return 'editing-jobstatus-class';
  }

  onBeforeSaveCellAsync = <K extends keyof Job>(row: Job, cellName: K, cellValue: Job[K], done: (ok: boolean) => void): boolean | 1 => {
    setTimeout(() => {
      done(false);   // it's not ok to save :(
    }, 3000);
    return 1;  // return 1 === async operation.
  }

  onAfterSaveCell(row: Job, cellName: string, cellValue: any) {
    alert(`Save cell ${cellName} with value ${cellValue}`);
    let rowStr = '';
    for (const prop in row) {
      rowStr += `${prop}: ${row[prop as keyof Job]}\n`;
    }
    alert('The whole row :\n' + rowStr);
  }

  onAfterInsertRow = (row: any) => {
    let newRowStr = '';

    for (const prop in row) {
      newRowStr += `${prop}: ${row[prop]} \n`;
    }
    alert('The new row is:\n ' + newRowStr);
  }

  render() {
    const cellEditProp: CellEdit<Job> = {
      mode: 'dbclick',
      blurToSave: true,
      beforeSaveCell: this.onBeforeSaveCellAsync,
      afterSaveCell: this.onAfterSaveCell
    };
    const options: Options<Job> = {
      afterInsertRow: this.onAfterInsertRow   // A hook for after insert rows
    };

    return (
      <BootstrapTable data={jobs} cellEdit={cellEditProp} insertRow={true} options={options}>
        <TableHeaderColumn dataField='id' isKey={true} editable={false}>Job ID</TableHeaderColumn>
        <TableHeaderColumn dataField='status' editable={{ validator: this.jobStatusValidator }}
          editColumnClassName={this.editingJobStatus} invalidEditColumnClassName={this.invalidJobStatus}>Job Status</TableHeaderColumn>
        <TableHeaderColumn dataField='name' editable={{ type: 'textarea', validator: this.jobNameValidator }}
          editColumnClassName='editing-jobsname-class' invalidEditColumnClassName='invalid-jobsname-class'>Job Name</TableHeaderColumn>
        <TableHeaderColumn dataField='type' editable={{ type: 'select', options: { values: jobTypes } }}>Job Type</TableHeaderColumn>
        <TableHeaderColumn dataField='active' editable={{ type: 'checkbox', options: { values: 'Y:N' } }}>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Multiple field sorting, filtering, searching and clearing
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/filter-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/multi-search-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/search-clear-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/strict-multi-search-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/remote/remote-store-search.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/custom-caret-sort-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/custom-sort-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/sort-style-table.js
 */
class MultiSortAndFiltering extends React.Component {
  tableRef: BootstrapTable | null;
  idRef: TableHeaderColumn | null;
  state = { data: products };

  onSortChange = (name: string, order: SortOrder) => {
    console.log(`Next sort = ${name}:${order}`);
  }

  cleanSort = () => { this.tableRef.cleanSort(); };

  cleanSelected = () => { this.tableRef.cleanSelected(); };

  onFilterChange = (filter: FilterData) => {
    Object.keys(filter).forEach((column) => {
      console.log(`Filtering ${column}: ${JSON.stringify(filter[column])}`);
    });
  }

  cleanFilters = () => { this.idRef.cleanFiltered(); };

  afterColumnFilter = (filterConds: ReadonlyArray<FilterData>, result: ReadonlyArray<Product>) => {
    console.log('Filter Conditions: ');
    filterConds.forEach((filterCond: FilterData) => {
      Object.keys(filterCond).forEach((fieldName: string) =>
        console.log(`Filter column = ${fieldName}, Filter value = ${filterCond[fieldName]}`));
    });
    console.log('Result is:');
    for (const resultItem of result) {
      console.log(`Product: ${resultItem.id}, ${resultItem.name}, ${resultItem.price}`);
    }
  }

  onSearchChange = (searchText: string, colInfos: ReadonlyArray<ColumnDescription<Product>>, multiColumnSearch: boolean) => {
    this.setState({ data: products.filter((product) => product.name = searchText) });
  }

  afterSearch = (searchText: string, result: ReadonlyArray<Product>) => {
    console.log(`Your search text is ${searchText}`);
    console.log('Result is:');
    for (const resultItem of result) {
      console.log(`Product: ${resultItem.id}, ${resultItem.name}, ${resultItem.price}`);
    }
  }

  getNameCaret = (direction: SortOrder | null, fieldName: string) =>
    (direction === 'asc')
      ? (<span> up</span>)
      : (direction === 'desc')
        ? (<span> down</span>)
        : (<span> up/down</span>)

  revertSortFunc = (a: Product, b: Product, order: SortOrder) =>
    (order === 'desc') ? a.price - b.price : b.price - a.price

  customSortStyle = (order: SortOrder, dataField: string) =>
    (order === 'desc') ? 'sort-desc' : 'sort-asc'

  render() {
    const options: Options<Product> = {
      onSortChange: this.onSortChange,
      onFilterChange: this.onFilterChange,
      noDataText: 'This is custom text for empty data',
      withoutNoDataText: false,
      afterColumnFilter: this.afterColumnFilter,
      onSearchChange: this.onSearchChange,
      afterSearch: this.afterSearch,
      clearSearch: true,
      sortIndicator: true
    };
    return (
      <div>
        <button className='btn ben-default' onClick={this.cleanSort}>Clean</button>
        <BootstrapTable data={this.state.data} options={options} multiColumnSort={2}
          multiColumnSearch={true} scrollTop={'Bottom'} strictSearch={true} fetchInfo={{ dataTotalSize: 5 }}>
          <TableHeaderColumn dataField='id' isKey={true} searchable={false} dataSort={true}
            filter={{ type: 'TextFilter', delay: 500 }} sortHeaderColumnClassName='sorted'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' defaultASC={true} dataSort={true} caretRender={this.getNameCaret}
            sortHeaderColumnClassName={this.customSortStyle}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' sortFunc={this.revertSortFunc}
            filter={{ type: 'NumberFilter', options: [10, 50, 100], numberComparators: ['>=', '<=', '='] }}>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

/**
 * Sort with extra data.
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/sort/custom-sort-with-extra-data-table.js
 */
class CustomSortWithExtraDataTable extends React.Component {
  sortByName = (a: any, b: any, order: SortOrder, field: string, enumObject: any) => {
    if (order === 'desc') {
      if (enumObject[a[field]] > enumObject[b[field]]) {
        return -1;
      } else if (enumObject[a[field]] < enumObject[b[field]]) {
        return 1;
      }
      return 0;
    }
    if (enumObject[a[field]] < enumObject[b[field]]) {
      return -1;
    } else if (enumObject[a[field]] > enumObject[b[field]]) {
      return 1;
    }
    return 0;
  }

  render() {
    return (
      <BootstrapTable data={products}>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality'
          dataFormat={enumFormatter} formatExtraData={qualityType}
          dataSort={true}
          sortFunc={this.sortByName} sortFuncExtraData={qualityType}>
          Product Quality</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Render custom pagination with provided SizePerPageDropDown component.
 */
class CustomPagination extends React.Component {
  renderPagination = (props: PaginationPanelProps) => (
    <div>
      <SizePerPageDropDown variation='dropup' options={props.sizePerPageList} btnContextual='primary' currSizePerPage={props.sizePerPage.toString()} />
      <div>
        <button onClick={() => props.changeSizePerPage(25)} className='btn btn-default'>Click to force size per page as 25</button>
        <button onClick={() => props.toggleDropDown()} className='btn btn-default'>Click to force toggle dropdown</button>
        <button onClick={() => props.changePage(3)} className='btn btn-default'>Jump to page 3</button>
      </div>
    </div>
  )

  render() {
    const options: Options = {
      paginationPanel: this.renderPagination
    };

    return (
      <BootstrapTable data={products} options={options} pagination>
        <TableHeaderColumn dataField='id' />
        <TableHeaderColumn dataField='name' />
        <TableHeaderColumn dataField='price' />
      </BootstrapTable>
    );
  }
}

/**
 * Customize the entire insert modal.
 * Adapted from https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-modal/custom-insert-modal.js
 */
class CustomModal extends React.Component {
  handleSaveBtnClick = (columns: ReadonlyArray<InsertModalColumnDescription<Product>>, onSave: (row: any) => void) => {
    const newRow: {[field: string]: string} = {};
    columns.forEach((column, i) => {
      newRow[column.field] = (this.refs[column.field] as HTMLInputElement).value;
    }, this);
    onSave(newRow);
  }

  createCustomModal = (
    onModalClose: () => void,
    onSave: (row: any) => void,
    columns: ReadonlyArray<InsertModalColumnDescription<Product>>,
    validateState: { [dataField: string]: string },
    ignoreEditable: boolean
  ) => (
    <div style={{ backgroundColor: '#eeeeee' }} className='modal-content'>
      <h2 style={{ color: 'red' }}>Custom Insert Modal</h2>
      <div>
        {
          columns.map((column, i) => {
            const {
              editable,
              format,
              field,
              name,
              hiddenOnInsert
            } = column;

            if (hiddenOnInsert) {
              return null;
            }
            const error = validateState[field] ?
              (<span className='help-block bg-danger'>{validateState[field]}</span>) :
              null;
            return (
              <div className='form-group' key={field}>
                <label>{name} : </label>
                <input ref={field} type='text' defaultValue={''} />
                {error}
              </div>
            );
          })
        }
      </div>
      <div>
        <button className='btn btn-danger' onClick={onModalClose}>Leave</button>
        <button className='btn btn-success' onClick={(e) => this.handleSaveBtnClick(columns, onSave)}>Confirm</button>
      </div>
    </div>
  )

  render() {
    const options: Options<Product> = {
      insertModal: this.createCustomModal
    };
    return (
      <BootstrapTable data={products} options={options} insertRow>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Custom Insert Modal Fields, both as a custom component and as custom fields.
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-modal/custom-insert-modal-field.js
 */
class SalesRadioField extends React.Component<{editorClass: string, ignoreEditable: boolean}> {
  yes: HTMLInputElement | null;
  no: HTMLInputElement | null;

  getFieldValue = () => {
    return this.yes.checked ? 'Yes' : 'No';
  }

  render() {
    return (
      <div>
        <label className='radio-inline'>
          <input ref={(node) => { this.yes = node; }} type='radio' name='optradio' value='Yes' />Yes
        </label>
        <label className='radio-inline'>
          <input ref={(node) => { this.no = node; }} type='radio' name='optradio' value='No' />No
        </label>
      </div>
    );
  }
}
class CustomInsertModalFieldTable extends React.Component {
  customKeyField = (
    column: InsertModalColumnDescription<Product>,
    attr: EditableAttrs,
    editorClass: string,
    ignoreEditable: boolean
  ) => {
    const seqId = products.length;
    return (
      <input type='text' { ...attr } disabled value={seqId} className={`${editorClass}`} />
    );
  }

  customNameField = (
    column: InsertModalColumnDescription<Product>,
    attr: EditableAttrs,
    editorClass: string,
    ignoreEditable: boolean,
    defaultValue: any) => {
    const fruits = ['banana', 'apple', 'orange', 'tomato', 'strawberries'];
    return (
      <select className={`${editorClass}`} { ...attr }>
        {
          fruits.map(name => (<option key={name} value={name}>{name}</option>))
        }
      </select>
    );
  }

  customSaleField = (
    column: InsertModalColumnDescription<Product>,
    attr: EditableAttrs,
    editorClass: string,
    ignoreEditable: boolean,
    defaultValue: any) => {
    return (
      <SalesRadioField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
    );
  }

  render() {
    return (
      <BootstrapTable ref='table' data={products} insertRow={true}>
        <TableHeaderColumn dataField='id' isKey={true} customInsertEditor={{ getElement: this.customKeyField }}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' customInsertEditor={{ getElement: this.customNameField }}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='sales' customInsertEditor={{ getElement: this.customSaleField }}>On Sales?</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Custom modal header, body & footer.
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-modal/default-custom-insert-modal-header.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-modal/custom-insert-modal-body.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-modal/default-custom-insert-modal-footer.js
 */
interface MyCustomBodyProps {
  columns: ReadonlyArray<InsertModalColumnDescription<Product>>;
  validateState: { [dataField: string]: string };
  ignoreEditable: boolean;
}
class MyCustomBody extends React.Component<MyCustomBodyProps> implements ModalBodyInterface<Product> {
  getFieldValue() {
    const newRow: Partial<Product> = {};
    this.props.columns.forEach((column, i) => {
      newRow[column.field] = (this.refs[column.field] as HTMLInputElement).value;
    }, this);
    return newRow as Product;
  }

  render() {
    const { columns, validateState } = this.props;
    return (
      <div className='modal-body'>
        <h2 style={{ color: 'red' }}>Custom body</h2>
        <div>
          {
            this.props.columns.map((column, i) => {
              const {
                editable,
                format,
                field,
                name,
                hiddenOnInsert
              } = column;

              if (hiddenOnInsert) {
                return null;
              }
              const error = validateState[field] ?
                (<span className='help-block bg-danger'>{validateState[field]}</span>) :
                null;
              return (
                <div className='form-group' key={field}>
                  <label>{name}</label>
                  <input ref={field} type='text' defaultValue={''} />
                  {error}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
class DefaultCustomInsertModalHeaderFooterTable extends React.Component {
  createCustomModalFooter = (closeModal: () => void, save: () => void) => {
    return (
      <InsertModalFooter
        className='my-custom-class'
        saveBtnText='CustomSaveText'
        closeBtnText='CustomCloseText'
        closeBtnContextual='btn-warning'
        saveBtnContextual='btn-success'
        closeBtnClass='my-close-btn-class'
        saveBtnClass='my-save-btn-class'
        beforeClose={(e) => {}}
        beforeSave={(e) => {}}
        onModalClose={closeModal}
        onSave={save} />
    );
  }

  createCustomModalHeader = (closeModal: () => void, save: () => void) => {
    return (
      <InsertModalHeader
        className='my-custom-class'
        title='This is my custom title'
        beforeClose={(e) => { }}
        onModalClose={closeModal}
        hideClose={true} />
    );
  }

  createCustomModalBody = (
    columns: ReadonlyArray<InsertModalColumnDescription<Product>>,
    validateState: { [dataField: string]: string },
    ignoreEditable: boolean
  ) => (
    <MyCustomBody
      columns={columns}
      validateState={validateState}
      ignoreEditable={ignoreEditable}
    />
  )

  render() {
    const options: Options<Product> = {
      insertModalFooter: this.createCustomModalFooter,
      insertModalHeader: this.createCustomModalHeader,
      insertModalBody: this.createCustomModalBody
    };
    return (
      <BootstrapTable data={products} options={options} insertRow={true}>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Custom Toolbar, including Search Panel & Buttons, and custom delete confirmation.
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/toolbar/custom-button-group.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/toolbar/custom-toolbar-1.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/search/default-custom-search-field.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/search/custom-search-panel-1.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/search/fully-custom-search-field.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/insert-button/default-custom-insert-button.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/delete-button/default-custom-delete-button.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/custom/csv-button/default-custom-csv-button.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/manipulation/del-row-custom-confirm.js
 */
class MySearchField extends React.Component<SearchFieldProps> implements SearchFieldInterface {
  field: SearchField | null;

  getValue() {
    return this.field.getValue();
  }

  setValue(search: string) {
    this.field.setValue(search);
  }

  render() {
    const { ...rest} = this.props;
    return (
      <SearchField
        className={this.props.className}
        defaultValue={this.props.defaultValue}
        placeholder={this.props.placeholder}
        onKeyUp={this.props.onKeyUp}
        ref={(node) => { this.field = node; }}
      />
    );
  }
}
class CustomButtonGroup extends React.Component {
  createInsertButton = (onClick: (e: React.MouseEvent<{}>) => void) => (
    <InsertButton
      btnText='CustomInsertText'
      btnContextual='btn-warning'
      className='my-custom-class'
      btnGlyphicon='glyphicon-edit'
      onClick={onClick} />
  )

  createDeleteButton = (onClick: (e: React.MouseEvent<{}>) => void) => (
    <DeleteButton
      btnText='CustomDeleteText'
      btnContextual='btn-danger'
      className='my-custom-class'
      btnGlyphicon='glyphicon-edit'
      onClick={onClick} />
  )

  createExportCSVButton = (onClick: (e: React.MouseEvent<{}>) => void) => (
      <ExportCSVButton
        btnText='CustomExportText'
        btnContextual='btn-danger'
        className='my-custom-class'
        btnGlyphicon='glyphicon-edit'
        onClick={onClick} />
  )

  createShowSelectedOnlyButton = (onClick: (e: React.MouseEvent<{}>) => void, showSelected: boolean) => (
    <ShowSelectedOnlyButton
      showAllText='Show All'
      showOnlySelectText='Show Selected'
      btnContextual='btn-info'
      className='my-custom-class'
      onClick={onClick} />
  )

  createCustomButtonGroup = (props: ButtonGroupProps) => (
    <div className='my-custom-class'>
      {props.showSelectedOnlyBtn}
      {props.exportCSVBtn}
      {props.insertBtn}
      {props.deleteBtn}
      <button type='button'
        className={`btn btn-primary`}>
        MyCustomBtn
        </button>
    </div>
  )

  createCustomSearchField = (props: SearchFieldProps) => (
    <MySearchField
      className='my-custom-class'
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onKeyUp={props.onKeyUp}
    />
  )

  createCustomClearSearch = (onClick: (e: React.MouseEvent<{}>) => void) => (
    <button
      className='btn btn-success'
      onClick={onClick}>
      Clear Search
    </button>
  )

  createCustomSearchPanel = (props: SearchPanelProps) => (
    <div>
      <div className='input-group'>
        <span className='input-group-btn'>
          {props.clearBtn}
        </span>
      </div>
      {props.searchField}
    </div>
  )

  createCustomToolBar = (props: ToolBarProps) => {
    return (
      <div style={{ margin: '15px' }}>
        {props.components.btnGroup}
        <div className='col-xs-8 col-sm-4 col-md-4 col-lg-2'>
          {props.components.searchPanel}
        </div>
      </div>
    );
  }

  customConfirm = (next: () => void, dropRowKeys: ReadonlyArray<number>) => {
    const dropRowKeysStr = dropRowKeys.join(',');
    if (confirm(`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
      next();
    }
  }

  render() {
    const selectRow: SelectRow = {
      mode: 'checkbox',
      showOnlySelected: true
    };
    const options: Options<Product> = {
      insertBtn: this.createInsertButton,
      deleteBtn: this.createDeleteButton,
      exportCSVBtn: this.createExportCSVButton,
      showSelectedOnlyBtn: this.createShowSelectedOnlyButton,
      btnGroup: this.createCustomButtonGroup,
      clearSearch: true,
      clearSearchBtn: this.createCustomClearSearch,
      searchField: this.createCustomSearchField,
      searchPanel: this.createCustomSearchPanel,
      toolBar: this.createCustomToolBar,
      searchDelayTime: 3000,
      handleConfirmDeleteRow: this.customConfirm
    };
    return (
      <BootstrapTable data={products}
        options={options}
        selectRow={selectRow}
        insertRow={true}
        deleteRow={true}
        exportCSV={true}
        search={true}>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Expanding Rows & Selection
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/expand-row-by-column.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/expand-row-with-selection.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/custom-expand-indicator.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/custom-expand-class.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/auto-collapse.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/expandRow/manage-expanding.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/all-select.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/custom-multi-select-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/default-select-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/select-bgcolor-dynamic-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/select-filter-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/select-hook-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/selection/select-row-class-table.js
 */
class ExpandRowExample extends React.Component<{}, {expanding: number[]}> {
  isExpandableRow = (row: any) => row.id === 2;

  expandComponent = (row: any) => (
      <div>You expanded the row.</div>
  )

  expandColumnComponent = ({ isExpandableRow, isExpanded }: ExpandColumnComponentProps) => {
    const content = isExpandableRow
      ? (isExpanded ? '(-)' : '(+)')
      : ' ';
    return (
      <div> {content} </div>
    );
  }

  handleExpand = (rowKey: number, isExpand: boolean) => {
    if (isExpand) {
      this.setState({ expanding: [...this.state.expanding] });
    } else {
      this.setState({ expanding: [...this.state.expanding.filter(id => id !== rowKey)] });
    }
  }

  onSelectAll = (isSelected: boolean) => (isSelected) ? products.map(row => row.id) : [];

  onSelect = (row: Product, isSelected: boolean, e: React.MouseEvent<any>, rowIndex: number) => {
    const rowStr = `id: "${row.id}", name: ${row.name}, price: ${row.price}`;
    console.log(e);
    alert(`Selected: ${isSelected}, rowIndex: ${rowIndex}, row: ${rowStr}`);
  }

  customMultiSelect = (props: CustomSelectProps) => (
      <div className='checkbox-personalized'>
        <input
          type={props.type}
          name={'checkbox' + props.rowIndex}
          id={'checkbox' + props.rowIndex}
          checked={props.checked}
          disabled={props.disabled}
          onChange={e => props.onChange(e, props.rowIndex)}
          ref={input => {
            if (input) {
              input.indeterminate = props.indeterminate;
            }
          }} />
        <label htmlFor={'checkbox' + props.rowIndex}>
          <div className='check'></div>
        </label>
    </div>
  )

  selectedRowClass = (row: Product, isSelect: boolean) =>
    (isSelect)
      ? ((row.id >= 3) ? 'bigger-than-three-select-row' : 'less-than-three-select-row')
      : ''

  render() {
    const options: Options<Product> = {
      expandRowBgColor: 'rgb(242, 255, 163)',
      expandBy: 'column',
      onlyOneExpanding: true,
      expanding: this.state.expanding,
      onExpand: this.handleExpand,
      expandParentClass: 'custom-expand-parent',
      expandBodyClass: (row, rowIndex, isExpanding) => {
        return (!isExpanding)
          ? 'current-is-hidden'
          : (rowIndex > 1)
            ? 'custom-expand-body-1'
            : 'custom-expand-body-0';
      }
    };
    const selectRow: SelectRow<Product> = {
      mode: 'checkbox',
      bgColor: (row: Product, isSelect: boolean) =>
        (isSelect)
          ?  ((row.id < 2) ? 'blue' : ((row.id < 4) ?  'red' : 'yellow'))
          : null,
      clickToSelect: true,  // click to select, default is false
      clickToExpand: true,  // click to expand row, default is false
      onSelect: this.onSelect,
      onSelectAll: this.onSelectAll,
      customComponent: this.customMultiSelect,
      hideSelectColumn: false,
      selected: [0, 2],
      showOnlySelected: true,
      onlyUnselectVisible: true,
      className: this.selectedRowClass,
      columnWidth: '60px',
      unselectable: [1, 3]
    };
    const expandColumnOptions: ExpandColumnOptions = {
      expandColumnVisible: true,
      expandColumnBeforeSelectColumn: false,
      expandColumnComponent: this.expandColumnComponent,
      columnWidth: 50
    };
    return (
      <BootstrapTable data={products}
        options={options}
        expandableRow={this.isExpandableRow}
        expandComponent={this.expandComponent}
        expandColumnOptions={expandColumnOptions}
        autoCollapse={{ sort: true, search: true, filter: true }}
        selectRow={selectRow}>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' expandable={false}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' expandable={false}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Table mouse enter/leave events
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/others/mouse-event-table.js
 */
class MouseEventTable extends React.Component {
  render() {
    const options: Options<Product> = {
      onMouseLeave: () => { console.log('mouse left table'); },
      onMouseEnter: () => { console.log('mouse entered table'); },
      onRowMouseOut: (row: any, e: React.MouseEvent<{}>) => {
        console.log(e);
        console.log('mouse left row ' + row.id);
      },
      onRowMouseOver: (row: any, e: React.MouseEvent<{}>) => {
        console.log(e);
        console.log('mouse entered row ' + row.id);
      }
    };

    return (
      <BootstrapTable data={products} options={options}>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Hidden on insert modal with async row error callback & read-only field
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/hide-on-insert-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/insert-error-handle-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/validator-table-read-only.js
 */
class HideOnInsertTable extends React.Component {
  handleAddRowWithASyncError = (row: any, colInfo: ReadonlyArray<ColumnDescription<Job>>, errorCallback: (msg: string) => void) => {
    setTimeout(() => {
      errorCallback('Sorry, There\'s some error happend');
    }, 5000);
    return false;
  }
  render() {
    const options: Options<Job> = {
      onAddRow: this.handleAddRowWithASyncError
    };
    return (
      <BootstrapTable data={jobs} insertRow={true} options={options}>
        <TableHeaderColumn dataField='id' isKey={true} autovalue>Job ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' hiddenOnInsert>Job Name</TableHeaderColumn>
        <TableHeaderColumn dataField='type' editable={{ type: 'select', options: { values: jobTypes }, readOnly: true }}>Job Type</TableHeaderColumn>
        <TableHeaderColumn dataField='active' editable={{ type: 'checkbox', options: { values: 'Y:N' } }}>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Edit field types
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/edit-type-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/insert-default-value-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/advance/insert-error-handle-table.js
 */
class EditTypeTable extends React.Component {
  formatType = (cell: string) => `TYPE_${cell}`;

  jobTypes = (row: ExtendedJob) => (row.id > 2) ? ['A', 'B'] : ['B', 'C', 'D', 'E'];

  handleAddRowWithSyncError = () => {
    return 'Sorry, There\'s some error happend';
  }

  render() {
    const attrs = {
      rows: 10,
      onKeyDown: () => { console.log('keydown event trigger'); }
    };
    const cellEditProp: CellEdit<ExtendedJob> = {
      mode: 'click',
      blurToSave: true
    };
    const options: Options<ExtendedJob> = {
      onAddRow: this.handleAddRowWithSyncError
    };
    return (
      <BootstrapTable data={extendedJobs} cellEdit={cellEditProp} options={options} insertRow={true}>
        <TableHeaderColumn dataField='id' isKey={true}>Job ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' editable={{ type: 'textarea', attrs, defaultValue: 'Default Job Name' }}>Job Name</TableHeaderColumn>
        <TableHeaderColumn dataField='type1' dataFormat={this.formatType} editable={{ type: 'select', options: { values: jobTypes }, defaultValue: 'C' }}>Job Type1</TableHeaderColumn>
        <TableHeaderColumn dataField='type2' editable={{ type: 'select', options: { values: this.jobTypes }, defaultValue: 'A' }}>Job Type2</TableHeaderColumn>
        <TableHeaderColumn dataField='active' editable={{ type: 'checkbox', options: { values: 'Y:N' }, defaultValue: 'N' }}>Active</TableHeaderColumn>
        <TableHeaderColumn dataField='datetime' editable={{ type: 'datetime', defaultValue: new Date() }}>Date Time</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * React component format for column.
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-format/react-column-format-table.js
 */
class ActiveFormatter extends React.Component<{ active: boolean }> {
  render() {
    return (
      <input type='checkbox' checked={this.props.active} />
    );
  }
}

export default class ReactColumnFormatTable extends React.Component {
  activeFormatter = (cell: boolean, row: ExtendedJob) => (<ActiveFormatter active={cell} />);
  render() {
    return (
      <BootstrapTable data={extendedJobs}>
        <TableHeaderColumn dataField='id' isKey={true} hidden={true}>Job ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Job Name</TableHeaderColumn>
        <TableHeaderColumn dataField='active' dataFormat={this.activeFormatter}>Active</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Format Extra Data
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-format/extra-data-column-format-table.js
 */
class ExtraDataColumnFormatTable extends React.Component {
  enumFormatter = (cell: number, row: Product, enumObject: {[id: number]: string}) => enumObject[cell];
  render() {
    return (
      <BootstrapTable data={products} >
        <TableHeaderColumn dataField='id' isKey={true} dataAlign='center'>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' headerAlign='center' dataAlign='right'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quality' dataFormat={enumFormatter} formatExtraData={qualityType}>Product Quality</TableHeaderColumn>
        <TableHeaderColumn dataField='inStock' dataFormat={enumFormatter} formatExtraData={inStockStatus}>Product Stock Status</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Column titles
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column/column-title-table.js
 */
class ColumnAlignTable extends React.Component {
  customTitle = (cell: number, row: any, rowIndex: number, colIndex: number) => `${row.name} for ${cell}`;

  render() {
    const options: Options<Product> = {
      exportCSVText: 'my_export',
      insertText: 'my_insert',
      deleteText: 'my_delete',
      saveText: 'my_save',
      closeText: 'my_close'
    };
    return (
      <BootstrapTable data={products} options={options}>
        <TableHeaderColumn dataField='id' isKey={true} columnTitle={this.customTitle} >Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' width='50%' headerTitle={false} columnTitle={true}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' columnTitle='Hard code string' headerText='Custom Title'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Table Footer
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/footer/footer-table.js
 */
class FooterTable extends React.Component {
  render() {
    const footerData: FooterData[][] = [
      [
        { label: 'Total', columnIndex: 0 },
        {
          label: 'Total value',
          columnIndex: 2,
          align: 'right',
          formatter: (tableData: Array<{price: number}>) => {
            let label = 0;
            for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
              label += tableData[i].price;
            }
            return (
              <strong>{label}</strong>
            );
          }
        }
      ]
    ];

    return (
      <div>
        <BootstrapTable data={products} footerData={footerData} footer pagination search keyBoardNav>
          <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

/**
 * Keyboard navigation
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/keyboard-nav/custom-style-nav-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/keyboard-nav/custom-style-nav-with-cell-edit-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/keyboard-nav/disable-click-to-nav-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/keyboard-nav/enter-to-edit-with-nav-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/keyboard-nav/nav-with-expand-table.js
 */
class CustomStyleNavTable extends React.Component {
  customStyle = (cell: any, row: any) => {
    return {
      backgroundColor: 'red'
    };
  }

  render() {
    const cellEdit: CellEdit<Product> = {
      mode: 'click',
      blurToSave: true
    };
    const keyBoardNav = {
      customStyleOnEditCell: this.customStyle,
      customStyle: this.customStyle,
      clickToNav: false,
      enterToEdit: true,
      enterToExpand: false
    };
    return (
      <BootstrapTable data={products} keyBoardNav={keyBoardNav} cellEdit={cellEdit}>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Table body styles
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/inline-style-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/table-class-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/td-class-string-table.js
 */
class TrClassStringTable extends React.Component {
  render() {
    return (
      <BootstrapTable insertRow exportCSV data={products}
        tableStyle={{ border: '#0000FF 2.5px solid' }}
        containerStyle={{ border: '#FFBB73 2.5px solid' }}
        headerStyle={{ border: 'red 1px solid' }}
        bodyStyle={{ border: 'green 1px solid' }}
        tableHeaderClass='my-header-class'
        tableBodyClass='my-body-class'
        containerClass='my-container-class'
        tableContainerClass='my-table-container-class'
        headerContainerClass='my-header-container-class'
        bodyContainerClass='my-body-container-class'
        trClassName='tr-string-example'>
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' columnClassName='td-column-string-example'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' className='td-header-string-example'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Table styles set by functions.
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/td-class-function-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/tr-class-function-table.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/style/tr-style-table.js
 */
class TrClassFunctionTable extends React.Component {
  headerColumnClassNameFormat = () => 'th-string-example';

  columnClassNameFormat = (fieldValue: string | number, row: Product, rowIdx: number, colIdx: number) =>
    rowIdx % 2 === 0 ? 'td-column-function-even-example' : 'td-column-function-odd-example'

  trClassFormat = (rowData: ReadonlyArray<Product>, rIndex: number) =>
    rIndex % 3 === 0 ? 'tr-function-example' : ''

  trStyle = (row: Product, rowIndex: number) => ({ backgroundColor: '#FFFAFA' });

  render() {
    return (
      <BootstrapTable data={products} trClassName={this.trClassFormat} trStyle={this.trStyle} >
        <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' className={this.headerColumnClassNameFormat}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' columnClassName={this.columnClassNameFormat}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Filter types.
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/all-filters.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/date-filter-programmatically.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/number-filter-programmatically.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/regex-filter-programmatically.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/select-filter-programmatically.js
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/text-filter-programmatically.js
 */
class AllFilters extends React.Component {
  name1: TableHeaderColumn | null;
  name2: TableHeaderColumn | null;
  quality: TableHeaderColumn | null;
  price: TableHeaderColumn | null;
  satisfaction: TableHeaderColumn | null;
  inStockDate: TableHeaderColumn | null;

  handlerClickCleanFiltered = () => {
    this.name1.cleanFiltered();
    this.name2.cleanFiltered();
    this.quality.cleanFiltered();
    this.price.cleanFiltered();
    this.satisfaction.cleanFiltered();
    this.inStockDate.cleanFiltered();
  }

  applyFiltersProgramatically = () => {
    this.name1.applyFilter('Item 1');
    this.name2.applyFilter('[name]');
    this.quality.applyFilter(1);
    this.price.applyFilter({
      number: 10.5,
      comparator: '<='
    });
    this.satisfaction.applyFilter({
      number: 2,
      comparator: '>'
    });
    this.inStockDate.applyFilter({
      date: new Date(2015, 0, 1),
      comparator: '='
    });
  }

  dateFormatter = (cell: Date, row: any) => {
    if (typeof cell !== 'object') {
      cell = new Date(cell);
    }

    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }

  render() {
    const satisfaction = [0, 1, 2, 3, 4, 5];
    return (
      <BootstrapTable ref='table' data={products}>
        <TableHeaderColumn dataField='id' isKey={true}>
          Product ID
          <br /><a onClick={this.handlerClickCleanFiltered} style={{ cursor: 'pointer' }}>clear filters</a>
        </TableHeaderColumn>
        <TableHeaderColumn ref={(node) => { this.name1 = node; }} dataField='name' filter={{ type: 'TextFilter', placeholder: 'Please enter a value' }}>Product Name</TableHeaderColumn>
        <TableHeaderColumn ref={(node) => { this.name2 = node; }} dataField='name' filter={{ type: 'RegexFilter', placeholder: 'Please enter a regex' }}>Product Name</TableHeaderColumn>
        < TableHeaderColumn ref={(node) => { this.quality = node; }} dataField='quality' filter={{ type: 'SelectFilter', options: qualityType }}
          dataFormat={enumFormatter} formatExtraData={qualityType}>Product Quality</TableHeaderColumn>
        <TableHeaderColumn ref={(node) => { this.price = node; }} dataField='price' filter={{ type: 'NumberFilter', delay: 1000 }}>Product Price</TableHeaderColumn>
        < TableHeaderColumn ref= {(node) => { this.satisfaction = node; }} dataField='satisfaction' filter={{ type: 'NumberFilter', options: satisfaction }}>Buyer Satisfaction</TableHeaderColumn>
        < TableHeaderColumn ref= {(node) => { this.inStockDate = node; }} dataField='inStockDate' filter={{ type: 'DateFilter' }} dataFormat={this.dateFormatter}>In Stock From</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

/**
 * Set Array filter programatically
 * @see https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/column-filter/array-filter-programmatically.js
 */
class ProgrammaticallyArrayFilter extends React.Component {
  table: BootstrapTable | null;

  /* Filtering passing an array of values */
  handleBtnClick = () => {
    this.table.handleFilterData({
      name: { type: 'ArrayFilter', value: ['Item name 3', 'Item name 4'] },
      price: { type: 'ArrayFilter', value: [2100, 2104] }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBtnClick} className='btn btn-default'>Click to apply text filter</button>
        <BootstrapTable ref={(node) => { this.table = node; }} data={products}>
          <TableHeaderColumn dataField='id' isKey={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 1000 }}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
