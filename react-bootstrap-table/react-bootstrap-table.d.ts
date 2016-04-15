// Type definitions for react-bootstrap-table v1.4.6
// Project: https://github.com/AllenFang/react-bootstrap-table
// Definitions by: Frank Laub <https://github.com/flaub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../node/node.d.ts" />

declare module "react-bootstrap-table" {
	import { ComponentClass, Props, ReactElement } from 'react';
	import { EventEmitter } from 'events';

	interface SelectRow {
		mode?: string;
		bgColor?: string;
		selected?: any[];
		onSelect?: Function;
		onSelectAll?: Function;
		clickToSelect?: boolean;
		hideSelectColumn?: boolean;
		clickToSelectAndEditCell?: boolean;
		showOnlySelected?: boolean;
	}

	interface CellEdit {
		mode?: string;
		blurToSave?: boolean;
		afterSaveCell?: Function;
	}

	interface Options {
		sortName?: string;
		sortOrder?: string;
		afterTableComplete?: Function;
		afterDeleteRow?: Function;
		afterInsertRow?: Function;
		afterSearch?: Function;
		afterColumnFilter?: Function;
		onRowClick?: Function;
		page?: number;
		sizePerPageList?: number[];
		sizePerPage?: number;
		paginationSize?: number;
		onSortChange?: Function;
		onPageChange?: Function;
		onSizePerPageList?: Function;
		noDataText?: string;
		handleConfirmDeleteRow?: Function;
	}

	interface FetchInfo {
		dataTotalSize?: number;
	}

	interface BootstrapTableProps extends Props<BootstrapTable> {
		keyField?: string;
		height?: string;
		maxHeight?: string;
		data?: any;
		remote?: boolean;
		striped?: boolean;
		bordered?: boolean;
		hover?: boolean;
		condensed?: boolean;
		pagination?: boolean;
		searchPlaceholder?: string;
		selectRow?: SelectRow;
		cellEdit?: CellEdit;
		insertRow?: boolean;
		deleteRow?: boolean;
		search?: boolean;
		columnFilter?: boolean;
		trClassName?: any;
		options?: Options;
		fetchInfo?: FetchInfo;
		exportCSV?: boolean;
		csvFileName?: string;
	}

	interface BootstrapTable extends ComponentClass<BootstrapTableProps> { }
	const BootstrapTable: BootstrapTable;

	interface TableHeaderColumnProps extends Props<TableHeaderColumn> {
		dataField?: string;
		dataAlign?: string;
		dataSort?: boolean;
		onSort?: Function;
		dataFormat?: Function;
		isKey?: boolean;
		editable?: any;
		hidden?: boolean;
		className?: string;
		width?: string;
		sortFunc?: Function;
		columnClassName?: any;
		filterFormatted?: boolean;
		sort?: string;
	}

	interface TableHeaderColumn extends ComponentClass<TableHeaderColumnProps> { }
	const TableHeaderColumn: TableHeaderColumn;

	class TableDataSet extends EventEmitter {
		constructor(data: any);
		setData(data: any): void;
		clear(): void;
		getData(): any;
	}

	export {
		BootstrapTable,
		TableHeaderColumn,
		TableDataSet
	}
}
