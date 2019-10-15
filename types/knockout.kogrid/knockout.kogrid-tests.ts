import ko = require('knockout');

export interface IGridItem {
	name: string;
}

export class Tests {
	public items: ko.ObservableArray<IGridItem>;
	public selectedItems: ko.ObservableArray<IGridItem>;
	public gridOptionsAlarms: kg.GridOptions<IGridItem>;

	constructor() {
		this.items = ko.observableArray<IGridItem>();
		this.selectedItems = ko.observableArray<IGridItem>();
		this.gridOptionsAlarms = this.createDefaultGridOptions(this.items, this.selectedItems);
	}

	public createDefaultGridOptions<Type>(dataArray: ko.ObservableArray<Type>, selectedItems: ko.ObservableArray<Type>): kg.GridOptions<Type> {
		return {
			data: dataArray,
			displaySelectionCheckbox: false,
			footerVisible: false,
			multiSelect: false,
			showColumnMenu: false,
			plugins: null,
			selectedItems: selectedItems
		};
	}
}
