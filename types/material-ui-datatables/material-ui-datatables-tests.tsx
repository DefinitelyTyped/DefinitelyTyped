import { CSSProperties } from 'react';
import DataTable from 'material-ui-datatables';
import { Column } from './index';

let title: string,
    titleStyle: CSSProperties,
    filterHintText: string,
    fixedHeader: boolean,
    fixedFooter: boolean,
    footerToolbarStyle: CSSProperties,
    stripedRows: boolean,
    showRowHover: boolean,
    selectable: boolean,
    multiSelectable: boolean,
    enableSelectAll: boolean,
    deselectOnClickaway: boolean,
    showCheckboxes: boolean,
    height: any,
    showHeaderToolbar: boolean,
    showFooterToolbar: boolean,
    rowSize: number,
    rowSizeLabel: string,
    rowSizeList: number[],
    showRowSizeControls: boolean,
    summaryLabelTemplate: (start: number, end: number, count: number) => any,
    columns: Column<string>[],
    data: any[],
    page: number,
    toolbarIconRight: any,
    count: number,
    tableStyle: CSSProperties,
    tableBodyStyle: CSSProperties,
    tableHeaderColumnStyle: CSSProperties,
    tableHeaderStyle: CSSProperties,
    tableRowColumnStyle: CSSProperties,
    tableRowStyle: CSSProperties,
    tableWrapperStyle: CSSProperties,
    headerToolbarMode: 'filter',
    filterValue: string,
    showHeaderToolbarFilterIcon: boolean;


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