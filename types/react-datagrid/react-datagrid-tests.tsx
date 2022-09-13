import * as React from "react";
import ReactDataGrid = require("react-datagrid");

var data: any[] = [];

var columns = [
  { name: 'index', title: '#', width: 50 },
    { name: 'firstName', style: { color: 'red' }, visible: true},
    { name: 'lastName', render: (v: any) => {return v + " Phd"}},
    { name: 'city', textAlign: 'right', defaultVisible: true},
    { name: 'email', defaultHidden: true }
];
var selected = {};
var sortInfo = [ { name: 'country', dir: 'asc'}]

export module X {
export class ExampleBasic extends React.Component {
  render(): React.ReactElement {
      return (
          <ReactDataGrid
            key={0}
            ref='dlgBasic'
            idProperty='id'
            dataSource={data}
            columns={columns}/>
        );
    }
}
}

class ExampleFull extends React.Component {

    render(): React.ReactElement {
            return (
            <ReactDataGrid
              key={1}
              ref='dlgFull'
                    idProperty='id'
                    dataSource={data}
                    columns={columns}
                    style={{height: 500}}
              withColumnMenu={false}
              selected={selected}
              sortInfo={sortInfo}
              groupBy={['country','grade']}
              liveFilter={true}
              emptyText={'No records'}
              loading={true}
              loadMaskOverHeader={false}
              rowStyle={{color: 'blue'}}
              showCellBorders="vertical"
              rowHeight={50}
              defaultPageSize={110}
              paginationToolbarProps={{
                      pageSizes: [100, 1000,2000],
                  showPageSize: false,
                  showRefreshIcon: false,
                          iconSize: 30,
                          iconProps: {
                        style: {fill: '#FF8484'},
                    overStyle: {fill: 'red'},
                    disabledStyle: { fill: '#808080'}
                  }
              }}
              pagination={true}
              page={1}
                      pageSize={100}
              onPageChange={(page: number) => {}}
              onPageSizeChange={(pageSize: number, props: any) => {}}
              onColumnOrderChange={(index: number, dropIndex: number) => {}}
              onColumnResize={(firstCol: any, firstSize: number, secondCol: any, secondSize: number) => {}}
              onSelectionChange={(newSelectedId: string, data: any) => {}}
              onSortChange={(sortInfo: any) => {}}
              onFilter={(column: any, value: any, allFilterValues: any[]) => {} }
              />
            );
   }
}
