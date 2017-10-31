import * as React from 'react';
import { Column } from './index';
import DataTable from 'material-ui-datatables';

let title: string = '',
    titleStyle: React.CSSProperties = {},
    filterHintText: string = '',
    fixedHeader: boolean = false,
    fixedFooter: boolean = false,
    footerToolbarStyle: React.CSSProperties = {},
    stripedRows: boolean = false,
    showRowHover: boolean = false,
    selectable: boolean = false,
    multiSelectable: boolean = false,
    enableSelectAll: boolean = false,
    deselectOnClickaway: boolean = false,
    showCheckboxes: boolean = false,
    height: any = {},
    showHeaderToolbar: boolean = false,
    showFooterToolbar: boolean = false,
    rowSize: number = 1,
    rowSizeLabel: string = '',
    rowSizeList: number[] = [1],
    showRowSizeControls: boolean = false,
    summaryLabelTemplate: (start: number, end: number, count: number) => any = (start, end, count) => "",
    columns: Column<string>[] = [{ key: '' }],
    data: any[] = [],
    page: number = 1,
    toolbarIconRight: any = {},
    count: number = 1,
    tableStyle: React.CSSProperties = {},
    tableBodyStyle: React.CSSProperties = {},
    tableHeaderColumnStyle: React.CSSProperties = {},
    tableHeaderStyle: React.CSSProperties = {},
    tableRowColumnStyle: React.CSSProperties = {},
    tableRowStyle: React.CSSProperties = {},
    tableWrapperStyle: React.CSSProperties = {},
    headerToolbarMode = 'filter',
    filterValue: string = '',
    showHeaderToolbarFilterIcon: boolean = false;


let test = (<DataTable
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
</DataTable>)