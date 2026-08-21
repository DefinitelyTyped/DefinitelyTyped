/// <reference types="jquery" />

type Options = Partial<{
    afterInit: (...args: any[]) => void;
    afterSelect: (...args: any[]) => void;
    afterDeselect: (...args: any[]) => void;
    selectableHeader: string | HTMLElement;
    selectionHeader: string | HTMLElement;
    selectableFooter: string | HTMLElement;
    selectionFooter: string | HTMLElement;
    disabledClass: string;
    selectableOptgroup: boolean;
    keepOrder: boolean;
    dblClick: boolean;
    cssClass: string;
}>;

interface AddOption {
    value: string;
    text: string;
    index?: number | undefined;
    nested?: string | undefined;
}

type Method = "select_all" | "deselect_all" | "refresh";

interface JQuery {
    multiSelect(methodOrOptions?: Method | Options): JQuery;
    multiSelect(method: "addOption", addOption: AddOption): JQuery;
    multiSelect(method: "select" | "deselect", options?: string | any[]): JQuery;
}
