import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import React Table
import ReactTable, { Column } from "react-table";
import "react-table/react-table.css";

const columns: Column[] = [
  {
    Header: "Name",
    columns: [
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", id: "lastName" }
    ]
  },
  {
    Header: "Info",
    columns: [
      { Header: "Age", accessor: "age" },
      { Header: "Status", accessor: "status" }
    ]
  },
  {
    Header: 'Stats',
    columns: [
      { Header: "Visits", accessor: (row: any) => row.visits }
    ]
  }
];

const Component = (props: {}) => {
  const data = [
    { firstName: "plastic", lastName: "leather", age: 1, visits: 87, progress: 53 },
    { firstName: "eggs", lastName: "quartz", age: 13, visits: 78, progress: 82 },
    { firstName: "wash", lastName: "wrench", age: 29, visits: 75, progress: 49 },
    { firstName: "introduction", lastName: "impression", age: 2, visits: 35, progress: 51 },
    { firstName: "steel", lastName: "difference", age: 9, visits: 64, progress: 94 },
    { firstName: "snakes", lastName: "corn", age: 17, visits: 55, progress: 47 },
    { firstName: "ocean", lastName: "definition", age: 26, visits: 17, progress: 22 },
    { firstName: "drawing", lastName: "fifth", age: 15, visits: 84, progress: 12 },
    { firstName: "silver", lastName: "riddle", age: 15, visits: 59, progress: 24 },
    { firstName: "surprise", lastName: "zinc", age: 23, visits: 7, progress: 48 },
    { firstName: "riddle", lastName: "information", age: 2, visits: 63, progress: 3 }
  ];
  return (
    <div>
      <ReactTable
        data={data}
        loading={false}
        showPagination={true}
        showPaginationTop={true}
        showPaginationBottom={true}
        showPageSizeOptions={true}
        pageSizeOptions={[5, 10, 20, 25, 50, 100]}
        defaultPageSize={20}
        minRows={undefined}
        showPageJump={true}
        collapseOnSortingChange={true}
        collapseOnPageChange={true}
        collapseOnDataChange={true}
        freezeWhenExpanded={false}
        sortable={true}
        multiSort={true}
        resizable={true}
        filterable={false}
        defaultSortDesc={false}
        defaultSorted={[]}
        defaultFiltered={[]}
        defaultResized={[]}
        defaultExpanded={{}}
        defaultFilterMethod={(filter, row, column) => {
          const id = filter.pivotId || filter.id;
          return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
        }}
        columns={columns}
        defaultSortMethod={(a, b, desc) => {
          // force null and undefined to the bottom
          a = (a === null || a === undefined) ? -Infinity : a;
          b = (b === null || b === undefined) ? -Infinity : b;
          // force any string values to lowercase
          a = a === 'string' ? a.toLowerCase() : a;
          b = b === 'string' ? b.toLowerCase() : b;
          // Return either 1 or -1 to indicate a sort priority
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          // returning 0, undefined or any falsey value will use subsequent sorts or the index as a tiebreaker
          return 0;
        }}
        PadRowComponent={() => <span>&nbsp;</span>}
        page={undefined}
        pageSize={undefined}
        sorted={[]}
        filtered={[]}
        resized={[]}
        expanded={{}}
        pivotValKey='_pivotVal'
        pivotIDKey='_pivotID'
        subRowsKey='_subRows'
        aggregatedKey='_aggregated'
        nestingLevelKey='_nestingLevel'
        originalKey='_original'
        indexKey='_index'
        groupedByPivotKey='_groupedByPivot'
        className=''
        onFetchData={() => null}
        style={{}}
        column={{
          Cell: undefined,
          Header: undefined,
          Footer: undefined,
          Aggregated: undefined,
          Pivot: undefined,
          PivotValue: undefined,
          Expander: undefined,
          sortable: undefined,
          resizable: undefined,
          filterable: undefined,
          show: true,
          minWidth: 100,
          className: '',
          style: {},
          getProps: () => { },
          headerClassName: '',
          headerStyle: {},
          getHeaderProps: () => { },
          footerClassName: '',
          footerStyle: {},
          getFooterProps: () => { },
          filterAll: false,
          filterMethod: undefined,
          sortMethod: undefined,
          defaultSortDesc: undefined,
        }}
        expanderDefaults={{
          sortable: false,
          resizable: false,
          filterable: false,
        }}
        pivotDefaults={{}}
        previousText='Previous'
        nextText='Next'
        loadingText='Loading...'
        noDataText='No rows found'
        pageText='Page'
        ofText='of'
        rowsText='rows'
      />
      <br />
    </div>
  );
};

ReactDOM.render(<Component />, document.getElementById("root"));
