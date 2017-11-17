import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Name",
    columns: [
      {Header: "First Name", accessor: "firstName"},
      {Header: "Last Name", id: "lastName"}
    ]
  },
  {
    Header: "Info",
    columns: [
      {Header: "Age", accessor: "age"},
      {Header: "Status", accessor: "status"}
    ]
  },
  {
    Header: 'Stats',
    columns: [
      {Header: "Visits", accessor: "visits"}
    ]
  }
];

const Component = (props: {}) => {
  const data = [
    {firstName: "plastic", lastName: "leather", age: 1, visits: 87, progress: 53},
    {firstName: "eggs", lastName: "quartz", age: 13, visits: 78, progress: 82},
    {firstName: "wash", lastName: "wrench", age: 29, visits: 75, progress: 49},
    {firstName: "introduction", lastName: "impression", age: 2, visits: 35, progress: 51},
    {firstName: "steel", lastName: "difference", age: 9, visits: 64, progress: 94},
    {firstName: "snakes", lastName: "corn", age: 17, visits: 55, progress: 47},
    {firstName: "ocean", lastName: "definition", age: 26, visits: 17, progress: 22},
    {firstName: "drawing", lastName: "fifth", age: 15, visits: 84, progress: 12},
    {firstName: "silver", lastName: "riddle", age: 15, visits: 59, progress: 24},
    {firstName: "surprise", lastName: "zinc", age: 23, visits: 7, progress: 48},
    {firstName: "riddle", lastName: "information", age: 2, visits: 63, progress: 3}
  ];
  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
      />
      <br />
    </div>
  );
};

ReactDOM.render(<Component />, document.getElementById("root"));
