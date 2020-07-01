import * as React from 'react';
import DataTable, { Column } from 'material-ui-datatables';

interface Book {
    name: string;
    author: string;
}

const title = '';
const titleStyle: React.CSSProperties = {};
const filterHintText = '';
const fixedHeader = false;
const fixedFooter = false;
const footerToolbarStyle: React.CSSProperties = {};
const stripedRows = false;
const showRowHover = false;
const selectable = false;
const multiSelectable = false;
const enableSelectAll = false;
const deselectOnClickaway = false;
const showCheckboxes = false;
const height: any = {};
const showHeaderToolbar = false;
const showFooterToolbar = false;
const rowSize = 1;
const rowSizeLabel = '';
const rowSizeList: number[] = [1];
const showRowSizeControls = false;
const summaryLabelTemplate: (start: number, end: number, count: number) => any = (start, end, count) => "";
const columns: Column[] = [{ key: '', render: (value, row: Book) => "" }];
const book: Book = { author: 'asdf', name: 'asdf' };
const data: Book[] = [book];
const page = 1;
const toolbarIconRight: any = {};
const count = 1;
const tableStyle: React.CSSProperties = {};
const tableBodyStyle: React.CSSProperties = {};
const tableHeaderColumnStyle: React.CSSProperties = {};
const tableHeaderStyle: React.CSSProperties = {};
const tableRowColumnStyle: React.CSSProperties = {};
const tableRowStyle: React.CSSProperties = {};
const tableWrapperStyle: React.CSSProperties = {};
const headerToolbarMode = 'filter';
const filterValue = '';
const showHeaderToolbarFilterIcon = false;

const test = (<DataTable
    title={title}
    titleStyle={titleStyle}
    filterHintText={filterHintText}
    fixedHeader={fixedHeader}
    fixedFooter={fixedFooter}
    footerToolbarStyle={footerToolbarStyle}
    stripedRows={stripedRows}
    showRowHover={showRowHover}
    selectable={selectable}
    multiSelectable={multiSelectable}
    enableSelectAll={enableSelectAll}
    deselectOnClickaway={deselectOnClickaway}
    showCheckboxes={showCheckboxes}
    height={height}
    showHeaderToolbar={showHeaderToolbar}
    showFooterToolbar={showFooterToolbar}
    rowSize={rowSize}
    rowSizeLabel={rowSizeLabel}
    rowSizeList={rowSizeList}
    showRowSizeControls={showRowSizeControls}
    summaryLabelTemplate={summaryLabelTemplate}
    columns={columns}
    data={data}
    page={page}
    toolbarIconRight={toolbarIconRight}
    count={count}
    tableStyle={tableStyle}
    tableBodyStyle={tableBodyStyle}
    tableHeaderColumnStyle={tableHeaderColumnStyle}
    tableHeaderStyle={tableHeaderStyle}
    tableRowColumnStyle={tableRowColumnStyle}
    tableRowStyle={tableRowStyle}
    tableWrapperStyle={tableWrapperStyle}
    headerToolbarMode={headerToolbarMode}
    filterValue={filterValue}
    showHeaderToolbarFilterIcon={showHeaderToolbarFilterIcon}>
</DataTable>);
