/// <reference types="activex-stdole" />

declare namespace MSForms {
    const enum fmAction {
        fmActionCopy = 1,
        fmActionCut = 0,
        fmActionDragDrop = 3,
        fmActionPaste = 2,
    }

    const enum fmAlignment {
        fmAlignmentLeft = 0,
        fmAlignmentRight = 1,
    }

    const enum fmBackStyle {
        fmBackStyleOpaque = 1,
        fmBackStyleTransparent = 0,
    }

    const enum fmBorders {
        fmBordersBox = 1,
        fmBordersLeft = 2,
        fmBordersNone = 0,
        fmBordersTop = 3,
    }

    const enum fmBorderStyle {
        fmBorderStyleNone = 0,
        fmBorderStyleSingle = 1,
    }

    const enum fmButtonEffect {
        fmButtonEffectFlat = 0,
        fmButtonEffectSunken = 2,
    }

    const enum fmButtonStyle {
        fmButtonStylePushButton = 0,
        fmButtonStyleToggleButton = 1,
    }

    const enum fmCycle {
        fmCycleAllForms = 0,
        fmCycleCurrentForm = 2,
    }

    const enum fmDisplayStyle {
        fmDisplayStyleCheckBox = 4,
        fmDisplayStyleCombo = 3,
        fmDisplayStyleDropList = 7,
        fmDisplayStyleList = 2,
        fmDisplayStyleOptionButton = 5,
        fmDisplayStyleText = 1,
        fmDisplayStyleToggle = 6,
    }

    const enum fmDragBehavior {
        fmDragBehaviorDisabled = 0,
        fmDragBehaviorEnabled = 1,
    }

    const enum fmDragState {
        fmDragStateEnter = 0,
        fmDragStateLeave = 1,
        fmDragStateOver = 2,
    }

    const enum fmDropButtonStyle {
        fmDropButtonStyleArrow = 1,
        fmDropButtonStyleEllipsis = 2,
        fmDropButtonStylePlain = 0,
        fmDropButtonStyleReduce = 3,
    }

    const enum fmDropEffect {
        fmDropEffectCopy = 1,
        fmDropEffectCopyOrMove = 3,
        fmDropEffectMove = 2,
        fmDropEffectNone = 0,
    }

    const enum fmEnAutoSize {
        _fmEnAutoSizeBoth = 3,
        _fmEnAutoSizeHorizontal = 1,
        _fmEnAutoSizeNone = 0,
        _fmEnAutoSizeVertical = 2,
    }

    const enum fmEnterFieldBehavior {
        fmEnterFieldBehaviorRecallSelection = 1,
        fmEnterFieldBehaviorSelectAll = 0,
    }

    const enum fmIMEMode {
        fmIMEModeAlpha = 8,
        fmIMEModeAlphaFull = 7,
        fmIMEModeDisable = 3,
        fmIMEModeHangul = 10,
        fmIMEModeHangulFull = 9,
        fmIMEModeHanzi = 12,
        fmIMEModeHanziFull = 11,
        fmIMEModeHiragana = 4,
        fmIMEModeKatakana = 5,
        fmIMEModeKatakanaHalf = 6,
        fmIMEModeNoControl = 0,
        fmIMEModeOff = 2,
        fmIMEModeOn = 1,
    }

    const enum fmLayoutEffect {
        _fmLayoutEffectRespond = 2,
        fmLayoutEffectInitiate = 1,
        fmLayoutEffectNone = 0,
    }

    const enum fmListBoxStyles {
        _fmListBoxStylesComboBox = 2,
        _fmListBoxStylesListBox = 1,
        _fmListBoxStylesNone = 0,
    }

    const enum fmListStyle {
        fmListStyleOption = 1,
        fmListStylePlain = 0,
    }

    const enum fmMatchEntry {
        fmMatchEntryComplete = 1,
        fmMatchEntryFirstLetter = 0,
        fmMatchEntryNone = 2,
    }

    const enum fmMode {
        fmModeInherit = -2,
        fmModeOff = 0,
        fmModeOn = -1,
    }

    const enum fmMousePointer {
        fmMousePointerAppStarting = 13,
        fmMousePointerArrow = 1,
        fmMousePointerCross = 2,
        fmMousePointerCustom = 99,
        fmMousePointerDefault = 0,
        fmMousePointerHelp = 14,
        fmMousePointerHourGlass = 11,
        fmMousePointerIBeam = 3,
        fmMousePointerNoDrop = 12,
        fmMousePointerSizeAll = 15,
        fmMousePointerSizeNESW = 6,
        fmMousePointerSizeNS = 7,
        fmMousePointerSizeNWSE = 8,
        fmMousePointerSizeWE = 9,
        fmMousePointerUpArrow = 10,
    }

    const enum fmMultiSelect {
        fmMultiSelectExtended = 2,
        fmMultiSelectMulti = 1,
        fmMultiSelectSingle = 0,
    }

    const enum fmOrientation {
        fmOrientationAuto = -1,
        fmOrientationHorizontal = 1,
        fmOrientationVertical = 0,
    }

    const enum fmPicPosition {
        fmPicPositionBottomCenter = 7,
        fmPicPositionBottomLeft = 6,
        fmPicPositionBottomRight = 8,
        fmPicPositionCenter = 0,
        fmPicPositionCenterLeft = 4,
        fmPicPositionCenterRight = 5,
        fmPicPositionTopCenter = 2,
        fmPicPositionTopLeft = 1,
        fmPicPositionTopRight = 3,
    }

    const enum fmPictureAlignment {
        fmPictureAlignmentBottomLeft = 3,
        fmPictureAlignmentBottomRight = 4,
        fmPictureAlignmentCenter = 2,
        fmPictureAlignmentTopLeft = 0,
        fmPictureAlignmentTopRight = 1,
    }

    const enum fmPicturePosition {
        fmPicturePositionAboveCenter = 7,
        fmPicturePositionAboveLeft = 6,
        fmPicturePositionAboveRight = 8,
        fmPicturePositionBelowCenter = 10,
        fmPicturePositionBelowLeft = 9,
        fmPicturePositionBelowRight = 11,
        fmPicturePositionCenter = 12,
        fmPicturePositionLeftBottom = 2,
        fmPicturePositionLeftCenter = 1,
        fmPicturePositionLeftTop = 0,
        fmPicturePositionRightBottom = 5,
        fmPicturePositionRightCenter = 4,
        fmPicturePositionRightTop = 3,
    }

    const enum fmPictureSizeMode {
        fmPictureSizeModeClip = 0,
        fmPictureSizeModeStretch = 1,
        fmPictureSizeModeZoom = 3,
    }

    const enum fmRepeatDirection {
        _fmRepeatDirectionHorizontal = 0,
        _fmRepeatDirectionVertical = 1,
    }

    const enum fmScrollAction {
        _fmScrollActionAbsoluteChange = 7,
        fmScrollActionBegin = 5,
        fmScrollActionControlRequest = 9,
        fmScrollActionEnd = 6,
        fmScrollActionFocusRequest = 10,
        fmScrollActionLineDown = 2,
        fmScrollActionLineUp = 1,
        fmScrollActionNoChange = 0,
        fmScrollActionPageDown = 4,
        fmScrollActionPageUp = 3,
        fmScrollActionPropertyChange = 8,
    }

    const enum fmScrollBars {
        fmScrollBarsBoth = 3,
        fmScrollBarsHorizontal = 1,
        fmScrollBarsNone = 0,
        fmScrollBarsVertical = 2,
    }

    const enum fmShowDropButtonWhen {
        fmShowDropButtonWhenAlways = 2,
        fmShowDropButtonWhenFocus = 1,
        fmShowDropButtonWhenNever = 0,
    }

    const enum fmShowListWhen {
        fmShowListWhenAlways = 3,
        fmShowListWhenButton = 1,
        fmShowListWhenFocus = 2,
        fmShowListWhenNever = 0,
    }

    const enum fmSnapPoint {
        fmSnapPointBottomCenter = 7,
        fmSnapPointBottomLeft = 6,
        fmSnapPointBottomRight = 8,
        fmSnapPointCenter = 4,
        fmSnapPointCenterLeft = 3,
        fmSnapPointCenterRight = 5,
        fmSnapPointTopCenter = 1,
        fmSnapPointTopLeft = 0,
        fmSnapPointTopRight = 2,
    }

    const enum fmSpecialEffect {
        fmSpecialEffectBump = 6,
        fmSpecialEffectEtched = 3,
        fmSpecialEffectFlat = 0,
        fmSpecialEffectRaised = 1,
        fmSpecialEffectSunken = 2,
    }

    const enum fmStyle {
        fmStyleDropDownCombo = 0,
        fmStyleDropDownList = 2,
    }

    const enum fmTabOrientation {
        fmTabOrientationBottom = 1,
        fmTabOrientationLeft = 2,
        fmTabOrientationRight = 3,
        fmTabOrientationTop = 0,
    }

    const enum fmTabStyle {
        fmTabStyleButtons = 1,
        fmTabStyleNone = 2,
        fmTabStyleTabs = 0,
    }

    const enum fmTextAlign {
        fmTextAlignCenter = 2,
        fmTextAlignLeft = 1,
        fmTextAlignRight = 3,
    }

    const enum fmTransitionEffect {
        fmTransitionEffectCoverDown = 5,
        fmTransitionEffectCoverLeft = 7,
        fmTransitionEffectCoverLeftDown = 6,
        fmTransitionEffectCoverLeftUp = 8,
        fmTransitionEffectCoverRight = 3,
        fmTransitionEffectCoverRightDown = 4,
        fmTransitionEffectCoverRightUp = 2,
        fmTransitionEffectCoverUp = 1,
        fmTransitionEffectNone = 0,
        fmTransitionEffectPushDown = 11,
        fmTransitionEffectPushLeft = 12,
        fmTransitionEffectPushRight = 10,
        fmTransitionEffectPushUp = 9,
    }

    const enum fmVerticalScrollBarSide {
        fmVerticalScrollBarSideLeft = 1,
        fmVerticalScrollBarSideRight = 0,
    }

    const enum fmZOrder {
        fmZOrderBack = 1,
        fmZOrderFront = 0,
    }

    class CheckBox {
        private "MSForms.CheckBox_typekey": CheckBox;
        private constructor();
        readonly _Font_Reserved: NewFont;
        Accelerator: string;
        Alignment: fmAlignment;
        AutoSize: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        BordersSuppress: boolean;
        Caption: string;
        readonly DisplayStyle: fmDisplayStyle;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        GroupName: string;
        Locked: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        MultiSelect: fmMultiSelect;
        Picture: stdole.StdPicture;
        PicturePosition: fmPicturePosition;
        SpecialEffect: fmButtonEffect;
        TextAlign: fmTextAlign;
        TripleState: boolean;
        readonly Valid: boolean;
        Value: any;
        WordWrap: boolean;
    }

    class ComboBox {
        private "MSForms.ComboBox_typekey": ComboBox;
        private constructor();
        readonly _Font_Reserved: NewFont;
        AddItem(pvargItem?: number, pvargIndex?: number): void;
        AutoSize: boolean;
        AutoTab: boolean;
        AutoWordSelect: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        BorderColor: number;
        BordersSuppress: boolean;
        BorderStyle: fmBorderStyle;
        BoundColumn: number;
        readonly CanPaste: boolean;
        Clear(): void;
        Column(pvargColumn: number, pvargIndex?: number): any;
        Column(): SafeArray;
        ColumnCount: number;
        ColumnHeads: boolean;
        ColumnWidths: string;
        Copy(): void;
        readonly CurTargetX: number;
        readonly CurTargetY: number;
        CurX: number;
        Cut(): void;
        readonly DisplayStyle: fmDisplayStyle;
        DragBehavior: fmDragBehavior;
        DropButtonStyle: fmDropButtonStyle;
        DropDown(): void;
        Enabled: boolean;
        EnterFieldBehavior: fmEnterFieldBehavior;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        HideSelection: boolean;
        IMEMode: fmIMEMode;
        readonly LineCount: number;
        List(pvargIndex: number, pvargColumn?: number): any;
        List(): SafeArray;
        readonly ListCount: number;
        ListCursor: any;
        ListIndex: number;
        ListRows: number;
        ListStyle: fmListStyle;
        ListWidth: number;
        Locked: boolean;
        MatchEntry: fmMatchEntry;
        readonly MatchFound: boolean;
        MatchRequired: boolean;
        MaxLength: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Paste(): void;
        RemoveItem(pvargIndex: number): boolean;
        SelectionMargin: boolean;
        SelLength: number;
        SelStart: number;
        SelText: string;
        ShowDropButtonWhen: fmShowDropButtonWhen;
        SpecialEffect: fmSpecialEffect;
        Style: fmStyle;
        Text: string;
        TextAlign: fmTextAlign;
        TextColumn: number;
        readonly TextLength: number;
        TopIndex: number;
        readonly Valid: boolean;
        Value: any;
    }

    class CommandButton {
        private "MSForms.CommandButton_typekey": CommandButton;
        private constructor();
        readonly _Font_Reserved: NewFont;
        Accelerator: string;
        AutoSize: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        Caption: string;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        Locked: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Picture: stdole.StdPicture;
        PicturePosition: fmPicturePosition;
        TakeFocusOnClick: boolean;
        Value: boolean;
        WordWrap: boolean;
    }

    class Control {
        private "MSForms.Control_typekey": Control;
        private constructor();
        _GetHeight(Height: number): void;
        _GethWnd(): number;
        _GetID(): number;
        _GetLeft(Left: number): void;
        _GetOldHeight(OldHeight: number): void;
        _GetOldLeft(OldLeft: number): void;
        _GetOldTop(OldTop: number): void;
        _GetOldWidth(OldWidth: number): void;
        _GetTop(Top: number): void;
        _GetWidth(Width: number): void;
        _Move(Left: number, Top: number, Width: number, Height: number): void;
        _SetHeight(Height: number): void;
        _SetLeft(Left: number): void;
        _SetTop(Top: number): void;
        _SetWidth(Width: number): void;
        _ZOrder(zPosition: fmZOrder): void;
        BoundValue: any;
        Cancel: boolean;
        ControlSource: string;
        ControlTipText: string;
        Default: boolean;
        Height: number;
        HelpContextID: number;
        InSelection: boolean;
        readonly LayoutEffect: fmLayoutEffect;
        Left: number;
        Move(Left?: any, Top?: any, Width?: any, Height?: any, Layout?: any): void;
        Name: string;
        readonly Object: any;
        readonly OldHeight: number;
        readonly OldLeft: number;
        readonly OldTop: number;
        readonly OldWidth: number;
        readonly Parent: any;
        RowSource: string;
        RowSourceType: number;
        Select(SelectInGroup: boolean): void;
        SetFocus(): void;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        Visible: boolean;
        Width: number;
        ZOrder(zPosition?: any): void;
    }

    interface Controls {
        _AddByClass(clsid: number): Control;
        _GetItemByID(ID: number): Control;
        _GetItemByIndex(lIndex: number): Control;
        _GetItemByName(pstr: string): Control;
        _Move(cx: number, cy: number): void;
        Add(bstrProgID: string, Name?: any, Visible?: any): Control;
        AlignToGrid(): void;
        BringForward(): void;
        BringToFront(): void;
        Clear(): void;
        Copy(): void;
        readonly Count: number;
        Cut(): void;
        Enum(): any;
        Item(varg: any): any;
        Move(cx: number, cy: number): void;
        Remove(varg: any): void;
        SelectAll(): void;
        SendBackward(): void;
        SendToBack(): void;
        (varg: any): any;
    }

    class DataObject {
        private "MSForms.DataObject_typekey": DataObject;
        private constructor();
        Clear(): void;
        GetFormat(Format: any): boolean;
        GetFromClipboard(): void;
        GetText(Format?: any): string;
        PutInClipboard(): void;
        SetText(Text: string, Format?: any): void;
        StartDrag(OKEffect?: any): fmDropEffect;
    }

    class Frame {
        private "MSForms.Frame_typekey": Frame;
        private constructor();
        readonly _Font_Reserved: NewFont;
        _GetGridX(GridX: number): void;
        _GetGridY(GridY: number): void;
        _GetInsideHeight(InsideHeight: number): void;
        _GetInsideWidth(InsideWidth: number): void;
        _GetScrollHeight(ScrollHeight: number): void;
        _GetScrollLeft(ScrollLeft: number): void;
        _GetScrollTop(ScrollTop: number): void;
        _GetScrollWidth(ScrollWidth: number): void;
        _SetGridX(GridX: number): void;
        _SetGridY(GridY: number): void;
        _SetScrollHeight(ScrollHeight: number): void;
        _SetScrollLeft(ScrollLeft: number): void;
        _SetScrollTop(ScrollTop: number): void;
        _SetScrollWidth(ScrollWidth: number): void;
        readonly ActiveControl: Control;
        BackColor: number;
        BorderColor: number;
        BorderStyle: fmBorderStyle;
        readonly CanPaste: boolean;
        readonly CanRedo: boolean;
        readonly CanUndo: boolean;
        Caption: string;
        readonly Controls: Controls;
        Copy(): void;
        Cut(): void;
        Cycle: fmCycle;
        DesignMode: fmMode;
        Enabled: boolean;
        Font: NewFont;
        ForeColor: number;
        GridX: number;
        GridY: number;
        readonly InsideHeight: number;
        readonly InsideWidth: number;
        KeepScrollBarsVisible: fmScrollBars;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Paste(): void;
        Picture: stdole.StdPicture;
        PictureAlignment: fmPictureAlignment;
        PictureSizeMode: fmPictureSizeMode;
        PictureTiling: boolean;
        RedoAction(): void;
        Repaint(): void;
        Scroll(xAction?: any, yAction?: any): void;
        ScrollBars: fmScrollBars;
        ScrollHeight: number;
        ScrollLeft: number;
        ScrollTop: number;
        ScrollWidth: number;
        readonly Selected: Controls;
        SetDefaultTabOrder(): void;
        ShowGridDots: fmMode;
        ShowToolbox: fmMode;
        SnapToGrid: fmMode;
        SpecialEffect: fmSpecialEffect;
        UndoAction(): void;
        VerticalScrollBarSide: fmVerticalScrollBarSide;
        Zoom: number;
    }

    class HTMLCheckbox {
        private "MSForms.HTMLCheckbox_typekey": HTMLCheckbox;
        private constructor();
        Checked: boolean;
        HTMLName: string;
        HTMLType: string;
        Value: string;
    }

    class HTMLHidden {
        private "MSForms.HTMLHidden_typekey": HTMLHidden;
        private constructor();
        HTMLName: string;
        HTMLType: string;
        Value: string;
    }

    class HTMLImage {
        private "MSForms.HTMLImage_typekey": HTMLImage;
        private constructor();
        Action: string;
        Encoding: string;
        HTMLName: string;
        HTMLType: string;
        Method: string;
        Source: string;
    }

    class HTMLOption {
        private "MSForms.HTMLOption_typekey": HTMLOption;
        private constructor();
        Checked: boolean;
        readonly DisplayStyle: fmDisplayStyle;
        HTMLName: string;
        HTMLType: string;
        Value: string;
    }

    class HTMLPassword {
        private "MSForms.HTMLPassword_typekey": HTMLPassword;
        private constructor();
        HTMLName: string;
        HTMLType: string;
        MaxLength: number;
        Value: string;
        Width: number;
    }

    class HTMLReset {
        private "MSForms.HTMLReset_typekey": HTMLReset;
        private constructor();
        Caption: string;
        HTMLName: string;
        HTMLType: string;
    }

    class HTMLSelect {
        private "MSForms.HTMLSelect_typekey": HTMLSelect;
        private constructor();
        DisplayValues: any;
        HTMLName: string;
        MultiSelect: boolean;
        Selected: string;
        Size: number;
        Values: any;
    }

    class HTMLSubmit {
        private "MSForms.HTMLSubmit_typekey": HTMLSubmit;
        private constructor();
        Action: string;
        Caption: string;
        Encoding: string;
        HTMLName: string;
        HTMLType: string;
        Method: string;
    }

    class HTMLText {
        private "MSForms.HTMLText_typekey": HTMLText;
        private constructor();
        HTMLName: string;
        HTMLType: string;
        MaxLength: number;
        Value: string;
        Width: number;
    }

    class HTMLTextArea {
        private "MSForms.HTMLTextArea_typekey": HTMLTextArea;
        private constructor();
        Columns: number;
        HTMLName: string;
        Rows: number;
        Value: string;
        WordWrap: string;
    }

    class Image {
        private "MSForms.Image_typekey": Image;
        private constructor();
        AutoSize: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        BorderColor: number;
        BorderStyle: fmBorderStyle;
        Enabled: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Picture: stdole.StdPicture;
        PictureAlignment: fmPictureAlignment;
        PictureSizeMode: fmPictureSizeMode;
        PictureTiling: boolean;
        SpecialEffect: fmSpecialEffect;
    }

    class Label {
        private "MSForms.Label_typekey": Label;
        private constructor();
        readonly _Font_Reserved: NewFont;
        _Value: string;
        Accelerator: string;
        AutoSize: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        BorderColor: number;
        BorderStyle: fmBorderStyle;
        Caption: string;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Picture: stdole.StdPicture;
        PicturePosition: fmPicturePosition;
        SpecialEffect: fmSpecialEffect;
        TextAlign: fmTextAlign;
        WordWrap: boolean;
    }

    class ListBox {
        private "MSForms.ListBox_typekey": ListBox;
        private constructor();
        readonly _Font_Reserved: NewFont;
        AddItem(pvargItem?: any, pvargIndex?: any): void;
        BackColor: number;
        BorderColor: number;
        BordersSuppress: boolean;
        BorderStyle: fmBorderStyle;
        BoundColumn: any;
        Clear(): void;
        Column(pvargColumn: number, pvargIndex?: number): any;
        Column(): SafeArray;
        ColumnCount: number;
        ColumnHeads: boolean;
        ColumnWidths: string;
        readonly DisplayStyle: fmDisplayStyle;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        IMEMode: fmIMEMode;
        IntegralHeight: boolean;
        List(pvargIndex: number, pvargColumn?: number): any;
        List(): SafeArray;
        readonly ListCount: number;
        ListCursor: any;
        ListIndex: any;
        ListStyle: fmListStyle;
        ListWidth: any;
        Locked: boolean;
        MatchEntry: fmMatchEntry;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        MultiSelect: fmMultiSelect;
        RemoveItem(pvargIndex: any): void;
        Selected(pvargIndex: any): boolean;
        SpecialEffect: fmSpecialEffect;
        Text: string;
        TextAlign: fmTextAlign;
        TextColumn: any;
        TopIndex: any;
        readonly Valid: boolean;
        Value: any;
    }

    class MultiPage {
        private "MSForms.MultiPage_typekey": MultiPage;
        private constructor();
        readonly _Font_Reserved: NewFont;
        _GetTabFixedHeight(Height: number): void;
        _GetTabFixedWidth(Width: number): void;
        _SetTabFixedHeight(Height: number): void;
        _SetTabFixedWidth(Width: number): void;
        BackColor: number;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        MultiRow: boolean;
        readonly Pages: Pages;
        readonly SelectedItem: Page;
        Style: fmTabStyle;
        TabFixedHeight: number;
        TabFixedWidth: number;
        TabOrientation: fmTabOrientation;
        Value: number;
    }

    class NewFont {
        private "MSForms.NewFont_typekey": NewFont;
        private constructor();
        readonly Bold: boolean;
        readonly Charset: number;
        readonly Italic: boolean;
        readonly Name: string;
        readonly Size: number;
        readonly Strikethrough: boolean;
        readonly Underline: boolean;
        readonly Weight: number;
    }

    class OptionButton {
        private "MSForms.OptionButton_typekey": OptionButton;
        private constructor();
        readonly _Font_Reserved: NewFont;
        Accelerator: string;
        Alignment: fmAlignment;
        AutoSize: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        BordersSuppress: boolean;
        Caption: string;
        readonly DisplayStyle: fmDisplayStyle;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        GroupName: string;
        Locked: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        MultiSelect: fmMultiSelect;
        Picture: stdole.StdPicture;
        PicturePosition: fmPicturePosition;
        SpecialEffect: fmButtonEffect;
        TextAlign: fmTextAlign;
        TripleState: boolean;
        readonly Valid: boolean;
        Value: any;
        WordWrap: boolean;
    }

    class Page {
        private "MSForms.Page_typekey": Page;
        private constructor();
        _GetGridX(GridX: number): void;
        _GetGridY(GridY: number): void;
        _GetInsideHeight(InsideHeight: number): void;
        _GetInsideWidth(InsideWidth: number): void;
        _GetScrollHeight(ScrollHeight: number): void;
        _GetScrollLeft(ScrollLeft: number): void;
        _GetScrollTop(ScrollTop: number): void;
        _GetScrollWidth(ScrollWidth: number): void;
        _SetGridX(GridX: number): void;
        _SetGridY(GridY: number): void;
        _SetScrollHeight(ScrollHeight: number): void;
        _SetScrollLeft(ScrollLeft: number): void;
        _SetScrollTop(ScrollTop: number): void;
        _SetScrollWidth(ScrollWidth: number): void;
        Accelerator: string;
        readonly ActiveControl: Control;
        readonly CanPaste: boolean;
        readonly CanRedo: boolean;
        readonly CanUndo: boolean;
        Caption: string;
        readonly Controls: Controls;
        ControlTipText: string;
        Copy(): void;
        Cut(): void;
        Cycle: fmCycle;
        DesignMode: fmMode;
        Enabled: boolean;
        GridX: number;
        GridY: number;
        Index: number;
        readonly InsideHeight: number;
        readonly InsideWidth: number;
        KeepScrollBarsVisible: fmScrollBars;
        Name: string;
        readonly Parent: any;
        Paste(): void;
        Picture: stdole.StdPicture;
        PictureAlignment: fmPictureAlignment;
        PictureSizeMode: fmPictureSizeMode;
        PictureTiling: boolean;
        RedoAction(): void;
        Repaint(): void;
        Scroll(xAction?: any, yAction?: any): void;
        ScrollBars: fmScrollBars;
        ScrollHeight: number;
        ScrollLeft: number;
        ScrollTop: number;
        ScrollWidth: number;
        readonly Selected: Controls;
        SetDefaultTabOrder(): void;
        ShowGridDots: fmMode;
        ShowToolbox: fmMode;
        SnapToGrid: fmMode;
        Tag: string;
        TransitionEffect: fmTransitionEffect;
        TransitionPeriod: number;
        UndoAction(): void;
        VerticalScrollBarSide: fmVerticalScrollBarSide;
        Visible: boolean;
        Zoom: number;
    }

    interface Pages {
        _AddCtrl(clsid: number, bstrName: string, bstrCaption: string): Page;
        _GetItemByIndex(lIndex: number): Control;
        _GetItemByName(pstrName: string): Control;
        _InsertCtrl(clsid: number, bstrName: string, bstrCaption: string, lIndex: number): Page;
        Add(bstrName?: any, bstrCaption?: any, lIndex?: any): Page;
        Clear(): void;
        readonly Count: number;
        Enum(): any;
        Item(varg: any): any;
        Remove(varg: any): void;
        (varg: any): any;
    }

    class ReturnBoolean {
        private "MSForms.ReturnBoolean_typekey": ReturnBoolean;
        private constructor();
        Value: boolean;
    }

    class ReturnEffect {
        private "MSForms.ReturnEffect_typekey": ReturnEffect;
        private constructor();
        Value: fmDropEffect;
    }

    class ReturnInteger {
        private "MSForms.ReturnInteger_typekey": ReturnInteger;
        private constructor();
        Value: number;
    }

    class ReturnSingle {
        private "MSForms.ReturnSingle_typekey": ReturnSingle;
        private constructor();
        Value: number;
    }

    class ReturnString {
        private "MSForms.ReturnString_typekey": ReturnString;
        private constructor();
        Value: string;
    }

    class ScrollBar {
        private "MSForms.ScrollBar_typekey": ScrollBar;
        private constructor();
        BackColor: number;
        Delay: number;
        Enabled: boolean;
        ForeColor: number;
        LargeChange: number;
        Max: number;
        Min: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Orientation: fmOrientation;
        ProportionalThumb: boolean;
        SmallChange: number;
        Value: number;
    }

    class SpinButton {
        private "MSForms.SpinButton_typekey": SpinButton;
        private constructor();
        BackColor: number;
        Delay: number;
        Enabled: boolean;
        ForeColor: number;
        Max: number;
        Min: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Orientation: fmOrientation;
        SmallChange: number;
        Value: number;
    }

    class Tab {
        private "MSForms.Tab_typekey": Tab;
        private constructor();
        Accelerator: string;
        Caption: string;
        ControlTipText: string;
        Enabled: boolean;
        Index: number;
        Name: string;
        Tag: string;
        Visible: boolean;
    }

    interface Tabs {
        _Add(bstrName: string, bstrCaption: string): Tab;
        _GetItemByIndex(lIndex: number): Tab;
        _GetItemByName(bstr: string): Tab;
        _Insert(bstrName: string, bstrCaption: string, lIndex: number): Tab;
        Add(bstrName?: any, bstrCaption?: any, lIndex?: any): Tab;
        Clear(): void;
        readonly Count: number;
        Enum(): any;
        Item(varg: any): any;
        Remove(varg: any): void;
        (varg: any): any;
    }

    class TabStrip {
        private "MSForms.TabStrip_typekey": TabStrip;
        private constructor();
        readonly _Font_Reserved: NewFont;
        _GetClientHeight(ClientHeight: number): void;
        _GetClientLeft(ClientLeft: number): void;
        _GetClientTop(ClientTop: number): void;
        _GetClientWidth(ClientWidth: number): void;
        _GetTabFixedHeight(TabFixedHeight: number): void;
        _GetTabFixedWidth(TabFixedWidth: number): void;
        _SetTabFixedHeight(TabFixedHeight: number): void;
        _SetTabFixedWidth(TabFixedWidth: number): void;
        BackColor: number;
        readonly ClientHeight: number;
        readonly ClientLeft: number;
        readonly ClientTop: number;
        readonly ClientWidth: number;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        MultiRow: boolean;
        readonly SelectedItem: Tab;
        Style: fmTabStyle;
        TabFixedHeight: number;
        TabFixedWidth: number;
        TabOrientation: fmTabOrientation;
        readonly Tabs: Tabs;
        Value: number;
    }

    class TextBox {
        private "MSForms.TextBox_typekey": TextBox;
        private constructor();
        readonly _Font_Reserved: NewFont;
        AutoSize: boolean;
        AutoTab: boolean;
        AutoWordSelect: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        BorderColor: number;
        BordersSuppress: boolean;
        BorderStyle: fmBorderStyle;
        readonly CanPaste: boolean;
        Copy(): void;
        CurLine: number;
        readonly CurTargetX: number;
        readonly CurTargetY: number;
        CurX: number;
        CurY: number;
        Cut(): void;
        readonly DisplayStyle: fmDisplayStyle;
        DragBehavior: fmDragBehavior;
        DropButtonStyle: fmDropButtonStyle;
        Enabled: boolean;
        EnterFieldBehavior: fmEnterFieldBehavior;
        EnterKeyBehavior: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        HideSelection: boolean;
        IMEMode: fmIMEMode;
        IntegralHeight: boolean;
        readonly LineCount: number;
        Locked: boolean;
        MaxLength: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        MultiLine: boolean;
        PasswordChar: string;
        Paste(): void;
        ScrollBars: fmScrollBars;
        SelectionMargin: boolean;
        SelLength: number;
        SelStart: number;
        SelText: string;
        ShowDropButtonWhen: fmShowDropButtonWhen;
        SpecialEffect: fmSpecialEffect;
        TabKeyBehavior: boolean;
        Text: string;
        TextAlign: fmTextAlign;
        readonly TextLength: number;
        readonly Valid: boolean;
        Value: any;
        WordWrap: boolean;
    }

    class ToggleButton {
        private "MSForms.ToggleButton_typekey": ToggleButton;
        private constructor();
        readonly _Font_Reserved: NewFont;
        Accelerator: string;
        Alignment: fmAlignment;
        AutoSize: boolean;
        BackColor: number;
        BackStyle: fmBackStyle;
        BordersSuppress: boolean;
        Caption: string;
        readonly DisplayStyle: fmDisplayStyle;
        Enabled: boolean;
        Font: NewFont;
        FontBold: boolean;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikethru: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        GroupName: string;
        Locked: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        MultiSelect: fmMultiSelect;
        Picture: stdole.StdPicture;
        PicturePosition: fmPicturePosition;
        SpecialEffect: fmButtonEffect;
        TextAlign: fmTextAlign;
        TripleState: boolean;
        readonly Valid: boolean;
        Value: any;
        WordWrap: boolean;
    }

    class UserForm {
        private "MSForms.UserForm_typekey": UserForm;
        private constructor();
        readonly _Font_Reserved: NewFont;
        _GetGridX(GridX: number): void;
        _GetGridY(GridY: number): void;
        _GetInsideHeight(InsideHeight: number): void;
        _GetInsideWidth(InsideWidth: number): void;
        _GetScrollHeight(ScrollHeight: number): void;
        _GetScrollLeft(ScrollLeft: number): void;
        _GetScrollTop(ScrollTop: number): void;
        _GetScrollWidth(ScrollWidth: number): void;
        _SetGridX(GridX: number): void;
        _SetGridY(GridY: number): void;
        _SetScrollHeight(ScrollHeight: number): void;
        _SetScrollLeft(ScrollLeft: number): void;
        _SetScrollTop(ScrollTop: number): void;
        _SetScrollWidth(ScrollWidth: number): void;
        readonly ActiveControl: Control;
        BackColor: number;
        BorderColor: number;
        BorderStyle: fmBorderStyle;
        readonly CanPaste: boolean;
        readonly CanRedo: boolean;
        readonly CanUndo: boolean;
        Caption: string;
        readonly Controls: Controls;
        Copy(): void;
        Cut(): void;
        Cycle: fmCycle;
        DesignMode: fmMode;
        DrawBuffer: number;
        Enabled: boolean;
        Font: NewFont;
        ForeColor: number;
        GridX: number;
        GridY: number;
        readonly InsideHeight: number;
        readonly InsideWidth: number;
        KeepScrollBarsVisible: fmScrollBars;
        MouseIcon: stdole.StdPicture;
        MousePointer: fmMousePointer;
        Paste(): void;
        Picture: stdole.StdPicture;
        PictureAlignment: fmPictureAlignment;
        PictureSizeMode: fmPictureSizeMode;
        PictureTiling: boolean;
        RedoAction(): void;
        Repaint(): void;
        Scroll(xAction?: any, yAction?: any): void;
        ScrollBars: fmScrollBars;
        ScrollHeight: number;
        ScrollLeft: number;
        ScrollTop: number;
        ScrollWidth: number;
        readonly Selected: Controls;
        SetDefaultTabOrder(): void;
        ShowGridDots: fmMode;
        ShowToolbox: fmMode;
        SnapToGrid: fmMode;
        SpecialEffect: fmSpecialEffect;
        UndoAction(): void;
        VerticalScrollBarSide: fmVerticalScrollBarSide;
        Zoom: number;
    }

    namespace EventHelperTypes {
        type Container_BeforeDragOver_ArgNames = ["Cancel", "Control", "Data", "X", "Y", "State", "Effect", "Shift"];

        type Container_BeforeDropOrPaste_ArgNames = [
            "Cancel",
            "Control",
            "Action",
            "Data",
            "X",
            "Y",
            "Effect",
            "Shift",
        ];

        type Container_Scroll_ArgNames = ["ActionX", "ActionY", "RequestDx", "RequestDy", "ActualDx", "ActualDy"];

        type Control_BeforeDragOver_ArgNames = ["Cancel", "Data", "X", "Y", "DragState", "Effect", "Shift"];

        type Control_BeforeDropOrPaste_ArgNames = ["Cancel", "Action", "Data", "X", "Y", "Effect", "Shift"];

        type Error_ArgNames = ["Number", "Description", "SCode", "Source", "HelpFile", "HelpContext", "CancelDisplay"];

        type MultiPage_BeforeDragOver_ArgNames = [
            "Index",
            "Cancel",
            "Control",
            "Data",
            "X",
            "Y",
            "State",
            "Effect",
            "Shift",
        ];

        type MultiPage_BeforeDropOrPaste_ArgNames = [
            "Index",
            "Cancel",
            "Control",
            "Action",
            "Data",
            "X",
            "Y",
            "Effect",
            "Shift",
        ];

        type MultiPage_Error_ArgNames = [
            "Index",
            "Number",
            "Description",
            "SCode",
            "Source",
            "HelpFile",
            "HelpContext",
            "CancelDisplay",
        ];

        type MultiPage_Scroll_ArgNames = [
            "Index",
            "ActionX",
            "ActionY",
            "RequestDx",
            "RequestDy",
            "ActualDx",
            "ActualDy",
        ];

        type TabStrip_BeforeDragOver_ArgNames = ["Index", "Cancel", "Data", "X", "Y", "DragState", "Effect", "Shift"];

        type TabStrip_BeforeDropOrPaste_ArgNames = ["Index", "Cancel", "Action", "Data", "X", "Y", "Effect", "Shift"];

        interface Container_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly State: fmDragState;
            readonly X: number;
            readonly Y: number;
        }

        interface Container_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Container_Scroll_Parameter {
            readonly ActionX: fmScrollAction;
            readonly ActionY: fmScrollAction;
            readonly ActualDx: ReturnSingle;
            readonly ActualDy: ReturnSingle;
            readonly RequestDx: number;
            readonly RequestDy: number;
        }

        interface Control_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Control_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface MultiPage_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Index: number;
            readonly Shift: number;
            readonly State: fmDragState;
            readonly X: number;
            readonly Y: number;
        }

        interface MultiPage_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Index: number;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface MultiPage_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Index: number;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface MultiPage_Scroll_Parameter {
            readonly ActionX: fmScrollAction;
            readonly ActionY: fmScrollAction;
            readonly ActualDx: ReturnSingle;
            readonly ActualDy: ReturnSingle;
            readonly Index: number;
            readonly RequestDx: number;
            readonly RequestDy: number;
        }

        interface TabStrip_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Index: number;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface TabStrip_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Index: number;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }
    }
}

interface ActiveXObject {
    on(
        obj: MSForms.CheckBox,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (this: MSForms.CheckBox, parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter) => void,
    ): void;
    on(
        obj: MSForms.CheckBox,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.CheckBox,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.CheckBox,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.CheckBox, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.CheckBox,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.CheckBox, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.CheckBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.CheckBox,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.CheckBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.CheckBox, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.CheckBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.CheckBox,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (this: MSForms.ComboBox, parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.ComboBox,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.ComboBox, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.ComboBox, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.ComboBox,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.ComboBox, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.ComboBox,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.CommandButton,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.CommandButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.CommandButton,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.CommandButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.CommandButton,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.CommandButton, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.CommandButton,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.CommandButton, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.CommandButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.CommandButton,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.CommandButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.CommandButton, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.CommandButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.CommandButton,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.Control,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: MSForms.Control, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "AddControl" | "RemoveControl",
        argNames: ["Control"],
        handler: (this: MSForms.Frame, parameter: { readonly Control: MSForms.Control }) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Container_BeforeDragOver_ArgNames,
        handler: (this: MSForms.Frame, parameter: MSForms.EventHelperTypes.Container_BeforeDragOver_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Container_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.Frame,
            parameter: MSForms.EventHelperTypes.Container_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.Frame, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.Frame, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.Frame,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.Frame, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.Frame,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "Scroll",
        argNames: MSForms.EventHelperTypes.Container_Scroll_ArgNames,
        handler: (this: MSForms.Frame, parameter: MSForms.EventHelperTypes.Container_Scroll_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Frame,
        event: "Zoom",
        argNames: ["Percent"],
        handler: (this: MSForms.Frame, parameter: { Percent: number }) => void,
    ): void;
    on(
        obj: MSForms.Image,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (this: MSForms.Image, parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Image,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.Image, parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Image,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.Image, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.Image,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.Image, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Image,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.Image,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.Label,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (this: MSForms.Label, parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Label,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.Label, parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Label,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.Label, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.Label,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.Label, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.Label,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.Label,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ListBox,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (this: MSForms.ListBox, parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter) => void,
    ): void;
    on(
        obj: MSForms.ListBox,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.ListBox,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.ListBox,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.ListBox, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.ListBox,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.ListBox, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.ListBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.ListBox,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ListBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.ListBox, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.ListBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.ListBox,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "AddControl" | "RemoveControl",
        argNames: ["Index", "Control"],
        handler: (
            this: MSForms.MultiPage,
            parameter: { readonly Index: number; readonly Control: MSForms.Control },
        ) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.MultiPage_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.MultiPage,
            parameter: MSForms.EventHelperTypes.MultiPage_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.MultiPage_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.MultiPage,
            parameter: MSForms.EventHelperTypes.MultiPage_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "Click" | "Layout",
        argNames: ["Index"],
        handler: (this: MSForms.MultiPage, parameter: { readonly Index: number }) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "DblClick",
        argNames: ["Index", "Cancel"],
        handler: (
            this: MSForms.MultiPage,
            parameter: { readonly Index: number; readonly Cancel: MSForms.ReturnBoolean },
        ) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "Error",
        argNames: MSForms.EventHelperTypes.MultiPage_Error_ArgNames,
        handler: (this: MSForms.MultiPage, parameter: MSForms.EventHelperTypes.MultiPage_Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.MultiPage,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.MultiPage, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Index", "Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.MultiPage,
            parameter: {
                readonly Index: number;
                readonly Button: number;
                readonly Shift: number;
                readonly X: number;
                readonly Y: number;
            },
        ) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "Scroll",
        argNames: MSForms.EventHelperTypes.MultiPage_Scroll_ArgNames,
        handler: (this: MSForms.MultiPage, parameter: MSForms.EventHelperTypes.MultiPage_Scroll_Parameter) => void,
    ): void;
    on(
        obj: MSForms.MultiPage,
        event: "Zoom",
        argNames: ["Index", "Percent"],
        handler: (this: MSForms.MultiPage, parameter: { readonly Index: number; Percent: number }) => void,
    ): void;
    on(
        obj: MSForms.OptionButton,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.OptionButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.OptionButton,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.OptionButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.OptionButton,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.OptionButton, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.OptionButton,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.OptionButton, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.OptionButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.OptionButton,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.OptionButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.OptionButton, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.OptionButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.OptionButton,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ScrollBar,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.ScrollBar,
            parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.ScrollBar,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.ScrollBar,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.ScrollBar,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.ScrollBar, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.ScrollBar,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.ScrollBar,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ScrollBar,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.ScrollBar, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.SpinButton,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.SpinButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.SpinButton,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.SpinButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.SpinButton,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.SpinButton, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.SpinButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.SpinButton,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.SpinButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.SpinButton, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.TabStrip_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.TabStrip,
            parameter: MSForms.EventHelperTypes.TabStrip_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.TabStrip_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.TabStrip,
            parameter: MSForms.EventHelperTypes.TabStrip_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "Click",
        argNames: ["Index"],
        handler: (this: MSForms.TabStrip, parameter: { readonly Index: number }) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "DblClick",
        argNames: ["Index", "Cancel"],
        handler: (
            this: MSForms.TabStrip,
            parameter: { readonly Index: number; readonly Cancel: MSForms.ReturnBoolean },
        ) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.TabStrip, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.TabStrip,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.TabStrip, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.TabStrip,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Index", "Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.TabStrip,
            parameter: {
                readonly Index: number;
                readonly Button: number;
                readonly Shift: number;
                readonly X: number;
                readonly Y: number;
            },
        ) => void,
    ): void;
    on(
        obj: MSForms.TextBox,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (this: MSForms.TextBox, parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter) => void,
    ): void;
    on(
        obj: MSForms.TextBox,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.TextBox,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.TextBox,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.TextBox, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.TextBox,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.TextBox, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.TextBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.TextBox,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.TextBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.TextBox, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.TextBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.TextBox,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Control_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.ToggleButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.ToggleButton,
            parameter: MSForms.EventHelperTypes.Control_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.ToggleButton, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.ToggleButton, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.ToggleButton,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.ToggleButton, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.ToggleButton,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "AddControl" | "RemoveControl",
        argNames: ["Control"],
        handler: (this: MSForms.UserForm, parameter: { readonly Control: MSForms.Control }) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "BeforeDragOver",
        argNames: MSForms.EventHelperTypes.Container_BeforeDragOver_ArgNames,
        handler: (
            this: MSForms.UserForm,
            parameter: MSForms.EventHelperTypes.Container_BeforeDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "BeforeDropOrPaste",
        argNames: MSForms.EventHelperTypes.Container_BeforeDropOrPaste_ArgNames,
        handler: (
            this: MSForms.UserForm,
            parameter: MSForms.EventHelperTypes.Container_BeforeDropOrPaste_Parameter,
        ) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: MSForms.UserForm, parameter: { readonly Cancel: MSForms.ReturnBoolean }) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "Error",
        argNames: MSForms.EventHelperTypes.Error_ArgNames,
        handler: (this: MSForms.UserForm, parameter: MSForms.EventHelperTypes.Error_Parameter) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: MSForms.UserForm,
            parameter: { readonly KeyCode: MSForms.ReturnInteger; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: MSForms.UserForm, parameter: { readonly KeyAscii: MSForms.ReturnInteger }) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: MSForms.UserForm,
            parameter: { readonly Button: number; readonly Shift: number; readonly X: number; readonly Y: number },
        ) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "Scroll",
        argNames: MSForms.EventHelperTypes.Container_Scroll_ArgNames,
        handler: (this: MSForms.UserForm, parameter: MSForms.EventHelperTypes.Container_Scroll_Parameter) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "Zoom",
        argNames: ["Percent"],
        handler: (this: MSForms.UserForm, parameter: { Percent: number }) => void,
    ): void;
    on(
        obj: MSForms.CheckBox,
        event: "Change" | "Click",
        handler: (this: MSForms.CheckBox, parameter: {}) => void,
    ): void;
    on(
        obj: MSForms.ComboBox,
        event: "Change" | "Click" | "DropButtonClick",
        handler: (this: MSForms.ComboBox, parameter: {}) => void,
    ): void;
    on(obj: MSForms.CommandButton, event: "Click", handler: (this: MSForms.CommandButton, parameter: {}) => void): void;
    on(
        obj: MSForms.Control,
        event: "AfterUpdate" | "Enter",
        handler: (this: MSForms.Control, parameter: {}) => void,
    ): void;
    on(obj: MSForms.Frame, event: "Click" | "Layout", handler: (this: MSForms.Frame, parameter: {}) => void): void;
    on(obj: MSForms.HTMLCheckbox, event: "Click", handler: (this: MSForms.HTMLCheckbox, parameter: {}) => void): void;
    on(obj: MSForms.HTMLHidden, event: "Click", handler: (this: MSForms.HTMLHidden, parameter: {}) => void): void;
    on(obj: MSForms.HTMLImage, event: "Click", handler: (this: MSForms.HTMLImage, parameter: {}) => void): void;
    on(obj: MSForms.HTMLOption, event: "Click", handler: (this: MSForms.HTMLOption, parameter: {}) => void): void;
    on(obj: MSForms.HTMLPassword, event: "Click", handler: (this: MSForms.HTMLPassword, parameter: {}) => void): void;
    on(obj: MSForms.HTMLReset, event: "Click", handler: (this: MSForms.HTMLReset, parameter: {}) => void): void;
    on(obj: MSForms.HTMLSelect, event: "Click", handler: (this: MSForms.HTMLSelect, parameter: {}) => void): void;
    on(obj: MSForms.HTMLSubmit, event: "Click", handler: (this: MSForms.HTMLSubmit, parameter: {}) => void): void;
    on(obj: MSForms.HTMLText, event: "Click", handler: (this: MSForms.HTMLText, parameter: {}) => void): void;
    on(obj: MSForms.HTMLTextArea, event: "Click", handler: (this: MSForms.HTMLTextArea, parameter: {}) => void): void;
    on(obj: MSForms.Image, event: "Click", handler: (this: MSForms.Image, parameter: {}) => void): void;
    on(obj: MSForms.Label, event: "Click", handler: (this: MSForms.Label, parameter: {}) => void): void;
    on(obj: MSForms.ListBox, event: "Change" | "Click", handler: (this: MSForms.ListBox, parameter: {}) => void): void;
    on(obj: MSForms.MultiPage, event: "Change", handler: (this: MSForms.MultiPage, parameter: {}) => void): void;
    on(
        obj: MSForms.OptionButton,
        event: "Change" | "Click",
        handler: (this: MSForms.OptionButton, parameter: {}) => void,
    ): void;
    on(
        obj: MSForms.ScrollBar,
        event: "Change" | "Scroll",
        handler: (this: MSForms.ScrollBar, parameter: {}) => void,
    ): void;
    on(
        obj: MSForms.SpinButton,
        event: "Change" | "SpinDown" | "SpinUp",
        handler: (this: MSForms.SpinButton, parameter: {}) => void,
    ): void;
    on(obj: MSForms.TabStrip, event: "Change", handler: (this: MSForms.TabStrip, parameter: {}) => void): void;
    on(
        obj: MSForms.TextBox,
        event: "Change" | "DropButtonClick",
        handler: (this: MSForms.TextBox, parameter: {}) => void,
    ): void;
    on(
        obj: MSForms.ToggleButton,
        event: "Change" | "Click",
        handler: (this: MSForms.ToggleButton, parameter: {}) => void,
    ): void;
    on(
        obj: MSForms.UserForm,
        event: "Click" | "Layout",
        handler: (this: MSForms.UserForm, parameter: {}) => void,
    ): void;
    set(
        obj: MSForms.ComboBox | MSForms.ListBox,
        propertyName: "Column" | "List",
        parameterTypes: [number, number] | [number],
        newValue: any,
    ): void;
    set(
        obj: MSForms.ComboBox | MSForms.ListBox,
        propertyName: "Column" | "List",
        parameterTypes: number[],
        newValue: SafeArray,
    ): void;
    set(obj: MSForms.ListBox, propertyName: "Selected", parameterTypes: [any], newValue: boolean): void;
}

interface ActiveXObjectNameMap {
    "Forms.Image": MSForms.Image;
}
