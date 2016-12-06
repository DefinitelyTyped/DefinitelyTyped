// Type definitions for SharePoint JSOM
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class SPClientAutoFill {
    static MenuOptionType: {
        Option: number;
        Footer: number;
        Separator: number;
        Loading: number;
    }

    static KeyProperty: string; //= 'AutoFillKey';
    static DisplayTextProperty: string;// = 'AutoFillDisplayText';
    static SubDisplayTextProperty: string; //= 'AutoFillSubDisplayText';
    static TitleTextProperty: string; //= 'AutoFillTitleText';
    static MenuOptionTypeProperty: string;//= 'AutoFillMenuOptionType';

    static GetAutoFillObjFromInput(elmText: HTMLInputElement): SPClientAutoFill;
    static GetAutoFillObjFromContainer(elmChild: HTMLElement): SPClientAutoFill;
    static GetAutoFillMenuItemFromOption(elmChild: HTMLElement): HTMLElement;

    constructor(elmTextId: string, elmContainerId: string, fnPopulateAutoFill: (targetElement: HTMLInputElement) => void);
    public TextElementId: string;
    public AutoFillContainerId: string;
    public AutoFillMenuId: string;
    public VisibleItemCount: number;
    public CurrentFocusOption: number;
    public AutoFillMinTextLength: number;
    public AutoFillTimeout: number;
    public AutoFillCallbackTimeoutID: string;
    public FuncOnAutoFillClose: (elmTextId: string, ojData: ISPClientAutoFillData) => void;
    public FuncPopulateAutoFill: (targetElement: HTMLElement) => void;
    public AllOptionData: { [key: string]: ISPClientAutoFillData };

    PopulateAutoFill(jsonObjSuggestions: ISPClientAutoFillData[], fnOnAutoFillCloseFuncName: (elmTextId: string, objData: ISPClientAutoFillData) => void): void;
    IsAutoFillOpen(): boolean;
    SetAutoFillHeight(): void;
    SelectAutoFillOption(elemOption: HTMLElement): void;
    FocusAutoFill(): void;
    BlurAutoFill(): void;
    CloseAutoFill(ojData: ISPClientAutoFillData): void;
    UpdateAutoFillMenuFocus(bMoveNextLink: boolean): void;
    UpdateAutoFillPosition(): void;
}

interface ISPClientAutoFillData {
    AutoFillKey?: any;
    AutoFillDisplayText?: string;
    AutoFillSubDisplayText?: string;
    AutoFillTitleText?: string;
    AutoFillMenuOptionType?: number;
}