// Type definitions for Microsoft Forms 2.0 Object Library - MSForms 2.0
// Project: https://msdn.microsoft.com/VBA/Language-Reference-VBA/articles/reference-microsoft-forms
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        private 'MSForms.CheckBox_typekey': CheckBox;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public Alignment: fmAlignment;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BordersSuppress: boolean;
        public Caption: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public GroupName: string;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmButtonEffect;
        public TextAlign: fmTextAlign;
        public TripleState: boolean;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class CheckBox2 {
        private 'MSForms.CheckBox2_typekey': CheckBox2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public Alignment: fmAlignment;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BordersSuppress: boolean;
        public Caption: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public GroupName: string;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmButtonEffect;
        public TextAlign: fmTextAlign;
        public TripleState: boolean;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class ComboBox {
        private 'MSForms.ComboBox_typekey': ComboBox;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public AddItem(pvargItem?: any, pvargIndex?: any): void;
        public AutoSize: boolean;
        public AutoTab: boolean;
        public AutoWordSelect: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BordersSuppress: boolean;
        public BorderStyle: fmBorderStyle;
        public BoundColumn: any;
        public readonly CanPaste: boolean;
        public Clear(): void;
        public Column(pvargColumn?: any, pvargIndex?: any): any;
        public ColumnCount: number;
        public ColumnHeads: boolean;
        public ColumnWidths: string;
        public Copy(): void;
        public readonly CurTargetX: number;
        public readonly CurTargetY: number;
        public CurX: number;
        public Cut(): void;
        public readonly DisplayStyle: fmDisplayStyle;
        public DragBehavior: fmDragBehavior;
        public DropButtonStyle: fmDropButtonStyle;
        public DropDown(): void;
        public Enabled: boolean;
        public EnterFieldBehavior: fmEnterFieldBehavior;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public HideSelection: boolean;
        public IMEMode: fmIMEMode;
        public readonly LineCount: number;
        public List(pvargIndex?: any, pvargColumn?: any): any;
        public readonly ListCount: number;
        public ListCursor: any;
        public ListIndex: any;
        public ListRows: number;
        public ListStyle: fmListStyle;
        public ListWidth: any;
        public Locked: boolean;
        public MatchEntry: fmMatchEntry;
        public readonly MatchFound: boolean;
        public MatchRequired: boolean;
        public MaxLength: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Paste(): void;
        public RemoveItem(pvargIndex: any): void;
        public SelectionMargin: boolean;
        public SelLength: number;
        public SelStart: number;
        public SelText: string;
        public ShowDropButtonWhen: fmShowDropButtonWhen;
        public SpecialEffect: fmSpecialEffect;
        public Style: fmStyle;
        public Text: string;
        public TextAlign: fmTextAlign;
        public TextColumn: any;
        public readonly TextLength: number;
        public TopIndex: any;
        public readonly Valid: boolean;
        public Value: any;
    }

    class ComboBox2 {
        private 'MSForms.ComboBox2_typekey': ComboBox2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public AddItem(pvargItem?: any, pvargIndex?: any): void;
        public AutoSize: boolean;
        public AutoTab: boolean;
        public AutoWordSelect: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BordersSuppress: boolean;
        public BorderStyle: fmBorderStyle;
        public BoundColumn: any;
        public readonly CanPaste: boolean;
        public Clear(): void;
        public Column(pvargColumn?: any, pvargIndex?: any): any;
        public ColumnCount: number;
        public ColumnHeads: boolean;
        public ColumnWidths: string;
        public Copy(): void;
        public readonly CurTargetX: number;
        public readonly CurTargetY: number;
        public CurX: number;
        public Cut(): void;
        public readonly DisplayStyle: fmDisplayStyle;
        public DragBehavior: fmDragBehavior;
        public DropButtonStyle: fmDropButtonStyle;
        public DropDown(): void;
        public Enabled: boolean;
        public EnterFieldBehavior: fmEnterFieldBehavior;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public HideSelection: boolean;
        public IMEMode: fmIMEMode;
        public readonly LineCount: number;
        public List(pvargIndex?: any, pvargColumn?: any): any;
        public readonly ListCount: number;
        public ListCursor: any;
        public ListIndex: any;
        public ListRows: number;
        public ListStyle: fmListStyle;
        public ListWidth: any;
        public Locked: boolean;
        public MatchEntry: fmMatchEntry;
        public readonly MatchFound: boolean;
        public MatchRequired: boolean;
        public MaxLength: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Paste(): void;
        public RemoveItem(pvargIndex: any): void;
        public SelectionMargin: boolean;
        public SelLength: number;
        public SelStart: number;
        public SelText: string;
        public ShowDropButtonWhen: fmShowDropButtonWhen;
        public SpecialEffect: fmSpecialEffect;
        public Style: fmStyle;
        public Text: string;
        public TextAlign: fmTextAlign;
        public TextColumn: any;
        public readonly TextLength: number;
        public TopIndex: any;
        public readonly Valid: boolean;
        public Value: any;
    }

    class CommandButton {
        private 'MSForms.CommandButton_typekey': CommandButton;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public Caption: string;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public TakeFocusOnClick: boolean;
        public Value: boolean;
        public WordWrap: boolean;
    }

    class CommandButton2 {
        private 'MSForms.CommandButton2_typekey': CommandButton2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public Caption: string;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public TakeFocusOnClick: boolean;
        public Value: boolean;
        public WordWrap: boolean;
    }

    class Control {
        private 'MSForms.Control_typekey': Control;
        private constructor();
        public _GetHeight(Height: number): void;
        public _GethWnd(): number;
        public _GetID(): number;
        public _GetLeft(Left: number): void;
        public _GetOldHeight(OldHeight: number): void;
        public _GetOldLeft(OldLeft: number): void;
        public _GetOldTop(OldTop: number): void;
        public _GetOldWidth(OldWidth: number): void;
        public _GetTop(Top: number): void;
        public _GetWidth(Width: number): void;
        public _Move(Left: number, Top: number, Width: number, Height: number): void;
        public _SetHeight(Height: number): void;
        public _SetLeft(Left: number): void;
        public _SetTop(Top: number): void;
        public _SetWidth(Width: number): void;
        public _ZOrder(zPosition: fmZOrder): void;
        public BoundValue: any;
        public Cancel: boolean;
        public ControlSource: string;
        public ControlTipText: string;
        public Default: boolean;
        public Height: number;
        public HelpContextID: number;
        public InSelection: boolean;
        public readonly LayoutEffect: fmLayoutEffect;
        public Left: number;
        public Move(Left?: any, Top?: any, Width?: any, Height?: any, Layout?: any): void;
        public Name: string;
        public readonly Object: any;
        public readonly OldHeight: number;
        public readonly OldLeft: number;
        public readonly OldTop: number;
        public readonly OldWidth: number;
        public readonly Parent: any;
        public RowSource: string;
        public RowSourceType: number;
        public Select(SelectInGroup: boolean): void;
        public SetFocus(): void;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public Visible: boolean;
        public Width: number;
        public ZOrder(zPosition?: any): void;
    }

    class Controls {
        private 'MSForms.Controls_typekey': Controls;
        private constructor();
        public _AddByClass(clsid: number): Control;
        public _GetItemByID(ID: number): Control;
        public _GetItemByIndex(lIndex: number): Control;
        public _GetItemByName(pstr: string): Control;
        public _Move(cx: number, cy: number): void;
        public Add(bstrProgID: string, Name?: any, Visible?: any): Control;
        public AlignToGrid(): void;
        public BringForward(): void;
        public BringToFront(): void;
        public Clear(): void;
        public Copy(): void;
        public readonly Count: number;
        public Cut(): void;
        public Enum(): any;
        public Item(varg: any): any;
        public Move(cx: number, cy: number): void;
        public Remove(varg: any): void;
        public SelectAll(): void;
        public SendBackward(): void;
        public SendToBack(): void;
    }

    class DataObject {
        private 'MSForms.DataObject_typekey': DataObject;
        private constructor();
        public Clear(): void;
        public GetFormat(Format: any): boolean;
        public GetFromClipboard(): void;
        public GetText(Format?: any): string;
        public PutInClipboard(): void;
        public SetText(Text: string, Format?: any): void;
        public StartDrag(OKEffect?: any): fmDropEffect;
    }

    class DataObject2 {
        private 'MSForms.DataObject2_typekey': DataObject2;
        private constructor();
        public Clear(): void;
        public GetFormat(Format: any): boolean;
        public GetFromClipboard(): void;
        public GetText(Format?: any): string;
        public PutInClipboard(): void;
        public SetText(Text: string, Format?: any): void;
        public StartDrag(OKEffect?: any): fmDropEffect;
    }

    class Frame {
        private 'MSForms.Frame_typekey': Frame;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetGridX(GridX: number): void;
        public _GetGridY(GridY: number): void;
        public _GetInsideHeight(InsideHeight: number): void;
        public _GetInsideWidth(InsideWidth: number): void;
        public _GetScrollHeight(ScrollHeight: number): void;
        public _GetScrollLeft(ScrollLeft: number): void;
        public _GetScrollTop(ScrollTop: number): void;
        public _GetScrollWidth(ScrollWidth: number): void;
        public _SetGridX(GridX: number): void;
        public _SetGridY(GridY: number): void;
        public _SetScrollHeight(ScrollHeight: number): void;
        public _SetScrollLeft(ScrollLeft: number): void;
        public _SetScrollTop(ScrollTop: number): void;
        public _SetScrollWidth(ScrollWidth: number): void;
        public readonly ActiveControl: Control;
        public BackColor: number;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public readonly CanPaste: boolean;
        public readonly CanRedo: boolean;
        public readonly CanUndo: boolean;
        public Caption: string;
        public readonly Controls: Controls;
        public Copy(): void;
        public Cut(): void;
        public Cycle: fmCycle;
        public DesignMode: fmMode;
        public Enabled: boolean;
        public Font: NewFont;
        public ForeColor: number;
        public GridX: number;
        public GridY: number;
        public readonly InsideHeight: number;
        public readonly InsideWidth: number;
        public KeepScrollBarsVisible: fmScrollBars;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Paste(): void;
        public Picture: stdole.StdPicture;
        public PictureAlignment: fmPictureAlignment;
        public PictureSizeMode: fmPictureSizeMode;
        public PictureTiling: boolean;
        public RedoAction(): void;
        public Repaint(): void;
        public Scroll(xAction?: any, yAction?: any): void;
        public ScrollBars: fmScrollBars;
        public ScrollHeight: number;
        public ScrollLeft: number;
        public ScrollTop: number;
        public ScrollWidth: number;
        public readonly Selected: Controls;
        public SetDefaultTabOrder(): void;
        public ShowGridDots: fmMode;
        public ShowToolbox: fmMode;
        public SnapToGrid: fmMode;
        public SpecialEffect: fmSpecialEffect;
        public UndoAction(): void;
        public VerticalScrollBarSide: fmVerticalScrollBarSide;
        public Zoom: number;
    }

    class Frame2 {
        private 'MSForms.Frame2_typekey': Frame2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetGridX(GridX: number): void;
        public _GetGridY(GridY: number): void;
        public _GetInsideHeight(InsideHeight: number): void;
        public _GetInsideWidth(InsideWidth: number): void;
        public _GetScrollHeight(ScrollHeight: number): void;
        public _GetScrollLeft(ScrollLeft: number): void;
        public _GetScrollTop(ScrollTop: number): void;
        public _GetScrollWidth(ScrollWidth: number): void;
        public _SetGridX(GridX: number): void;
        public _SetGridY(GridY: number): void;
        public _SetScrollHeight(ScrollHeight: number): void;
        public _SetScrollLeft(ScrollLeft: number): void;
        public _SetScrollTop(ScrollTop: number): void;
        public _SetScrollWidth(ScrollWidth: number): void;
        public readonly ActiveControl: Control;
        public BackColor: number;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public readonly CanPaste: boolean;
        public readonly CanRedo: boolean;
        public readonly CanUndo: boolean;
        public Caption: string;
        public readonly Controls: Controls;
        public Copy(): void;
        public Cut(): void;
        public Cycle: fmCycle;
        public DesignMode: fmMode;
        public Enabled: boolean;
        public Font: NewFont;
        public ForeColor: number;
        public GridX: number;
        public GridY: number;
        public readonly InsideHeight: number;
        public readonly InsideWidth: number;
        public KeepScrollBarsVisible: fmScrollBars;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Paste(): void;
        public Picture: stdole.StdPicture;
        public PictureAlignment: fmPictureAlignment;
        public PictureSizeMode: fmPictureSizeMode;
        public PictureTiling: boolean;
        public RedoAction(): void;
        public Repaint(): void;
        public Scroll(xAction?: any, yAction?: any): void;
        public ScrollBars: fmScrollBars;
        public ScrollHeight: number;
        public ScrollLeft: number;
        public ScrollTop: number;
        public ScrollWidth: number;
        public readonly Selected: Controls;
        public SetDefaultTabOrder(): void;
        public ShowGridDots: fmMode;
        public ShowToolbox: fmMode;
        public SnapToGrid: fmMode;
        public SpecialEffect: fmSpecialEffect;
        public UndoAction(): void;
        public VerticalScrollBarSide: fmVerticalScrollBarSide;
        public Zoom: number;
    }

    class HTMLCheckbox {
        private 'MSForms.HTMLCheckbox_typekey': HTMLCheckbox;
        private constructor();
        public Checked: boolean;
        public HTMLName: string;
        public HTMLType: string;
        public Value: string;
    }

    class HTMLCheckbox2 {
        private 'MSForms.HTMLCheckbox2_typekey': HTMLCheckbox2;
        private constructor();
        public Checked: boolean;
        public HTMLName: string;
        public HTMLType: string;
        public Value: string;
    }

    class HTMLHidden {
        private 'MSForms.HTMLHidden_typekey': HTMLHidden;
        private constructor();
        public HTMLName: string;
        public HTMLType: string;
        public Value: string;
    }

    class HTMLHidden2 {
        private 'MSForms.HTMLHidden2_typekey': HTMLHidden2;
        private constructor();
        public HTMLName: string;
        public HTMLType: string;
        public Value: string;
    }

    class HTMLImage {
        private 'MSForms.HTMLImage_typekey': HTMLImage;
        private constructor();
        public Action: string;
        public Encoding: string;
        public HTMLName: string;
        public HTMLType: string;
        public Method: string;
        public Source: string;
    }

    class HTMLImage2 {
        private 'MSForms.HTMLImage2_typekey': HTMLImage2;
        private constructor();
        public Action: string;
        public Encoding: string;
        public HTMLName: string;
        public HTMLType: string;
        public Method: string;
        public Source: string;
    }

    class HTMLOption {
        private 'MSForms.HTMLOption_typekey': HTMLOption;
        private constructor();
        public Checked: boolean;
        public readonly DisplayStyle: fmDisplayStyle;
        public HTMLName: string;
        public HTMLType: string;
        public Value: string;
    }

    class HTMLOption2 {
        private 'MSForms.HTMLOption2_typekey': HTMLOption2;
        private constructor();
        public Checked: boolean;
        public readonly DisplayStyle: fmDisplayStyle;
        public HTMLName: string;
        public HTMLType: string;
        public Value: string;
    }

    class HTMLPassword {
        private 'MSForms.HTMLPassword_typekey': HTMLPassword;
        private constructor();
        public HTMLName: string;
        public HTMLType: string;
        public MaxLength: number;
        public Value: string;
        public Width: number;
    }

    class HTMLPassword2 {
        private 'MSForms.HTMLPassword2_typekey': HTMLPassword2;
        private constructor();
        public HTMLName: string;
        public HTMLType: string;
        public MaxLength: number;
        public Value: string;
        public Width: number;
    }

    class HTMLReset {
        private 'MSForms.HTMLReset_typekey': HTMLReset;
        private constructor();
        public Caption: string;
        public HTMLName: string;
        public HTMLType: string;
    }

    class HTMLReset2 {
        private 'MSForms.HTMLReset2_typekey': HTMLReset2;
        private constructor();
        public Caption: string;
        public HTMLName: string;
        public HTMLType: string;
    }

    class HTMLSelect {
        private 'MSForms.HTMLSelect_typekey': HTMLSelect;
        private constructor();
        public DisplayValues: any;
        public HTMLName: string;
        public MultiSelect: boolean;
        public Selected: string;
        public Size: number;
        public Values: any;
    }

    class HTMLSelect2 {
        private 'MSForms.HTMLSelect2_typekey': HTMLSelect2;
        private constructor();
        public DisplayValues: any;
        public HTMLName: string;
        public MultiSelect: boolean;
        public Selected: string;
        public Size: number;
        public Values: any;
    }

    class HTMLSubmit {
        private 'MSForms.HTMLSubmit_typekey': HTMLSubmit;
        private constructor();
        public Action: string;
        public Caption: string;
        public Encoding: string;
        public HTMLName: string;
        public HTMLType: string;
        public Method: string;
    }

    class HTMLSubmit2 {
        private 'MSForms.HTMLSubmit2_typekey': HTMLSubmit2;
        private constructor();
        public Action: string;
        public Caption: string;
        public Encoding: string;
        public HTMLName: string;
        public HTMLType: string;
        public Method: string;
    }

    class HTMLText {
        private 'MSForms.HTMLText_typekey': HTMLText;
        private constructor();
        public HTMLName: string;
        public HTMLType: string;
        public MaxLength: number;
        public Value: string;
        public Width: number;
    }

    class HTMLText2 {
        private 'MSForms.HTMLText2_typekey': HTMLText2;
        private constructor();
        public HTMLName: string;
        public HTMLType: string;
        public MaxLength: number;
        public Value: string;
        public Width: number;
    }

    class HTMLTextArea {
        private 'MSForms.HTMLTextArea_typekey': HTMLTextArea;
        private constructor();
        public Columns: number;
        public HTMLName: string;
        public Rows: number;
        public Value: string;
        public WordWrap: string;
    }

    class HTMLTextArea2 {
        private 'MSForms.HTMLTextArea2_typekey': HTMLTextArea2;
        private constructor();
        public Columns: number;
        public HTMLName: string;
        public Rows: number;
        public Value: string;
        public WordWrap: string;
    }

    class Image {
        private 'MSForms.Image_typekey': Image;
        private constructor();
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public Enabled: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Picture: stdole.StdPicture;
        public PictureAlignment: fmPictureAlignment;
        public PictureSizeMode: fmPictureSizeMode;
        public PictureTiling: boolean;
        public SpecialEffect: fmSpecialEffect;
    }

    class Image2 {
        private 'MSForms.Image2_typekey': Image2;
        private constructor();
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public Enabled: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Picture: stdole.StdPicture;
        public PictureAlignment: fmPictureAlignment;
        public PictureSizeMode: fmPictureSizeMode;
        public PictureTiling: boolean;
        public SpecialEffect: fmSpecialEffect;
    }

    class Label {
        private 'MSForms.Label_typekey': Label;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _Value: string;
        public Accelerator: string;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public Caption: string;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmSpecialEffect;
        public TextAlign: fmTextAlign;
        public WordWrap: boolean;
    }

    class Label2 {
        private 'MSForms.Label2_typekey': Label2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _Value: string;
        public Accelerator: string;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public Caption: string;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmSpecialEffect;
        public TextAlign: fmTextAlign;
        public WordWrap: boolean;
    }

    class ListBox {
        private 'MSForms.ListBox_typekey': ListBox;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public AddItem(pvargItem?: any, pvargIndex?: any): void;
        public BackColor: number;
        public BorderColor: number;
        public BordersSuppress: boolean;
        public BorderStyle: fmBorderStyle;
        public BoundColumn: any;
        public Clear(): void;
        public Column(pvargColumn?: any, pvargIndex?: any): any;
        public ColumnCount: number;
        public ColumnHeads: boolean;
        public ColumnWidths: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public IMEMode: fmIMEMode;
        public IntegralHeight: boolean;
        public List(pvargIndex?: any, pvargColumn?: any): any;
        public readonly ListCount: number;
        public ListCursor: any;
        public ListIndex: any;
        public ListStyle: fmListStyle;
        public ListWidth: any;
        public Locked: boolean;
        public MatchEntry: fmMatchEntry;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public RemoveItem(pvargIndex: any): void;
        public Selected(pvargIndex: any): boolean;
        public SpecialEffect: fmSpecialEffect;
        public Text: string;
        public TextAlign: fmTextAlign;
        public TextColumn: any;
        public TopIndex: any;
        public readonly Valid: boolean;
        public Value: any;
    }

    class ListBox2 {
        private 'MSForms.ListBox2_typekey': ListBox2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public AddItem(pvargItem?: any, pvargIndex?: any): void;
        public BackColor: number;
        public BorderColor: number;
        public BordersSuppress: boolean;
        public BorderStyle: fmBorderStyle;
        public BoundColumn: any;
        public Clear(): void;
        public Column(pvargColumn?: any, pvargIndex?: any): any;
        public ColumnCount: number;
        public ColumnHeads: boolean;
        public ColumnWidths: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public IMEMode: fmIMEMode;
        public IntegralHeight: boolean;
        public List(pvargIndex?: any, pvargColumn?: any): any;
        public readonly ListCount: number;
        public ListCursor: any;
        public ListIndex: any;
        public ListStyle: fmListStyle;
        public ListWidth: any;
        public Locked: boolean;
        public MatchEntry: fmMatchEntry;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public RemoveItem(pvargIndex: any): void;
        public Selected(pvargIndex: any): boolean;
        public SpecialEffect: fmSpecialEffect;
        public Text: string;
        public TextAlign: fmTextAlign;
        public TextColumn: any;
        public TopIndex: any;
        public readonly Valid: boolean;
        public Value: any;
    }

    class MultiPage {
        private 'MSForms.MultiPage_typekey': MultiPage;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetTabFixedHeight(Height: number): void;
        public _GetTabFixedWidth(Width: number): void;
        public _SetTabFixedHeight(Height: number): void;
        public _SetTabFixedWidth(Width: number): void;
        public BackColor: number;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public MultiRow: boolean;
        public readonly Pages: Pages;
        public readonly SelectedItem: Page;
        public Style: fmTabStyle;
        public TabFixedHeight: number;
        public TabFixedWidth: number;
        public TabOrientation: fmTabOrientation;
        public Value: number;
    }

    class MultiPage2 {
        private 'MSForms.MultiPage2_typekey': MultiPage2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetTabFixedHeight(Height: number): void;
        public _GetTabFixedWidth(Width: number): void;
        public _SetTabFixedHeight(Height: number): void;
        public _SetTabFixedWidth(Width: number): void;
        public BackColor: number;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public MultiRow: boolean;
        public readonly Pages: Pages;
        public readonly SelectedItem: Page;
        public Style: fmTabStyle;
        public TabFixedHeight: number;
        public TabFixedWidth: number;
        public TabOrientation: fmTabOrientation;
        public Value: number;
    }

    class NewFont {
        private 'MSForms.NewFont_typekey': NewFont;
        private constructor();
        public readonly Bold: boolean;
        public readonly Charset: number;
        public readonly Italic: boolean;
        public readonly Name: string;
        public readonly Size: number;
        public readonly Strikethrough: boolean;
        public readonly Underline: boolean;
        public readonly Weight: number;
    }

    class OptionButton {
        private 'MSForms.OptionButton_typekey': OptionButton;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public Alignment: fmAlignment;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BordersSuppress: boolean;
        public Caption: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public GroupName: string;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmButtonEffect;
        public TextAlign: fmTextAlign;
        public TripleState: boolean;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class OptionButton2 {
        private 'MSForms.OptionButton2_typekey': OptionButton2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public Alignment: fmAlignment;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BordersSuppress: boolean;
        public Caption: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public GroupName: string;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmButtonEffect;
        public TextAlign: fmTextAlign;
        public TripleState: boolean;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class Page {
        private 'MSForms.Page_typekey': Page;
        private constructor();
        public _GetGridX(GridX: number): void;
        public _GetGridY(GridY: number): void;
        public _GetInsideHeight(InsideHeight: number): void;
        public _GetInsideWidth(InsideWidth: number): void;
        public _GetScrollHeight(ScrollHeight: number): void;
        public _GetScrollLeft(ScrollLeft: number): void;
        public _GetScrollTop(ScrollTop: number): void;
        public _GetScrollWidth(ScrollWidth: number): void;
        public _SetGridX(GridX: number): void;
        public _SetGridY(GridY: number): void;
        public _SetScrollHeight(ScrollHeight: number): void;
        public _SetScrollLeft(ScrollLeft: number): void;
        public _SetScrollTop(ScrollTop: number): void;
        public _SetScrollWidth(ScrollWidth: number): void;
        public Accelerator: string;
        public readonly ActiveControl: Control;
        public readonly CanPaste: boolean;
        public readonly CanRedo: boolean;
        public readonly CanUndo: boolean;
        public Caption: string;
        public readonly Controls: Controls;
        public ControlTipText: string;
        public Copy(): void;
        public Cut(): void;
        public Cycle: fmCycle;
        public DesignMode: fmMode;
        public Enabled: boolean;
        public GridX: number;
        public GridY: number;
        public Index: number;
        public readonly InsideHeight: number;
        public readonly InsideWidth: number;
        public KeepScrollBarsVisible: fmScrollBars;
        public Name: string;
        public readonly Parent: any;
        public Paste(): void;
        public Picture: stdole.StdPicture;
        public PictureAlignment: fmPictureAlignment;
        public PictureSizeMode: fmPictureSizeMode;
        public PictureTiling: boolean;
        public RedoAction(): void;
        public Repaint(): void;
        public Scroll(xAction?: any, yAction?: any): void;
        public ScrollBars: fmScrollBars;
        public ScrollHeight: number;
        public ScrollLeft: number;
        public ScrollTop: number;
        public ScrollWidth: number;
        public readonly Selected: Controls;
        public SetDefaultTabOrder(): void;
        public ShowGridDots: fmMode;
        public ShowToolbox: fmMode;
        public SnapToGrid: fmMode;
        public Tag: string;
        public TransitionEffect: fmTransitionEffect;
        public TransitionPeriod: number;
        public UndoAction(): void;
        public VerticalScrollBarSide: fmVerticalScrollBarSide;
        public Visible: boolean;
        public Zoom: number;
    }

    class Pages {
        private 'MSForms.Pages_typekey': Pages;
        private constructor();
        public _AddCtrl(clsid: number, bstrName: string, bstrCaption: string): Page;
        public _GetItemByIndex(lIndex: number): Control;
        public _GetItemByName(pstrName: string): Control;
        public _InsertCtrl(clsid: number, bstrName: string, bstrCaption: string, lIndex: number): Page;
        public Add(bstrName?: any, bstrCaption?: any, lIndex?: any): Page;
        public Clear(): void;
        public readonly Count: number;
        public Enum(): any;
        public Item(varg: any): any;
        public Remove(varg: any): void;
    }

    class ReturnBoolean {
        private 'MSForms.ReturnBoolean_typekey': ReturnBoolean;
        private constructor();
        public Value: boolean;
    }

    class ReturnEffect {
        private 'MSForms.ReturnEffect_typekey': ReturnEffect;
        private constructor();
        public Value: fmDropEffect;
    }

    class ReturnInteger {
        private 'MSForms.ReturnInteger_typekey': ReturnInteger;
        private constructor();
        public Value: number;
    }

    class ReturnSingle {
        private 'MSForms.ReturnSingle_typekey': ReturnSingle;
        private constructor();
        public Value: number;
    }

    class ReturnString {
        private 'MSForms.ReturnString_typekey': ReturnString;
        private constructor();
        public Value: string;
    }

    class ScrollBar {
        private 'MSForms.ScrollBar_typekey': ScrollBar;
        private constructor();
        public BackColor: number;
        public Delay: number;
        public Enabled: boolean;
        public ForeColor: number;
        public LargeChange: number;
        public Max: number;
        public Min: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Orientation: fmOrientation;
        public ProportionalThumb: boolean;
        public SmallChange: number;
        public Value: number;
    }

    class ScrollBar2 {
        private 'MSForms.ScrollBar2_typekey': ScrollBar2;
        private constructor();
        public BackColor: number;
        public Delay: number;
        public Enabled: boolean;
        public ForeColor: number;
        public LargeChange: number;
        public Max: number;
        public Min: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Orientation: fmOrientation;
        public ProportionalThumb: boolean;
        public SmallChange: number;
        public Value: number;
    }

    class SpinButton {
        private 'MSForms.SpinButton_typekey': SpinButton;
        private constructor();
        public BackColor: number;
        public Delay: number;
        public Enabled: boolean;
        public ForeColor: number;
        public Max: number;
        public Min: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Orientation: fmOrientation;
        public SmallChange: number;
        public Value: number;
    }

    class SpinButton2 {
        private 'MSForms.SpinButton2_typekey': SpinButton2;
        private constructor();
        public BackColor: number;
        public Delay: number;
        public Enabled: boolean;
        public ForeColor: number;
        public Max: number;
        public Min: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Orientation: fmOrientation;
        public SmallChange: number;
        public Value: number;
    }

    class Tab {
        private 'MSForms.Tab_typekey': Tab;
        private constructor();
        public Accelerator: string;
        public Caption: string;
        public ControlTipText: string;
        public Enabled: boolean;
        public Index: number;
        public Name: string;
        public Tag: string;
        public Visible: boolean;
    }

    class Tabs {
        private 'MSForms.Tabs_typekey': Tabs;
        private constructor();
        public _Add(bstrName: string, bstrCaption: string): Tab;
        public _GetItemByIndex(lIndex: number): Tab;
        public _GetItemByName(bstr: string): Tab;
        public _Insert(bstrName: string, bstrCaption: string, lIndex: number): Tab;
        public Add(bstrName?: any, bstrCaption?: any, lIndex?: any): Tab;
        public Clear(): void;
        public readonly Count: number;
        public Enum(): any;
        public Item(varg: any): any;
        public Remove(varg: any): void;
    }

    class TabStrip {
        private 'MSForms.TabStrip_typekey': TabStrip;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetClientHeight(ClientHeight: number): void;
        public _GetClientLeft(ClientLeft: number): void;
        public _GetClientTop(ClientTop: number): void;
        public _GetClientWidth(ClientWidth: number): void;
        public _GetTabFixedHeight(TabFixedHeight: number): void;
        public _GetTabFixedWidth(TabFixedWidth: number): void;
        public _SetTabFixedHeight(TabFixedHeight: number): void;
        public _SetTabFixedWidth(TabFixedWidth: number): void;
        public BackColor: number;
        public readonly ClientHeight: number;
        public readonly ClientLeft: number;
        public readonly ClientTop: number;
        public readonly ClientWidth: number;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiRow: boolean;
        public readonly SelectedItem: Tab;
        public Style: fmTabStyle;
        public TabFixedHeight: number;
        public TabFixedWidth: number;
        public TabOrientation: fmTabOrientation;
        public readonly Tabs: Tabs;
        public Value: number;
    }

    class TabStrip2 {
        private 'MSForms.TabStrip2_typekey': TabStrip2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetClientHeight(ClientHeight: number): void;
        public _GetClientLeft(ClientLeft: number): void;
        public _GetClientTop(ClientTop: number): void;
        public _GetClientWidth(ClientWidth: number): void;
        public _GetTabFixedHeight(TabFixedHeight: number): void;
        public _GetTabFixedWidth(TabFixedWidth: number): void;
        public _SetTabFixedHeight(TabFixedHeight: number): void;
        public _SetTabFixedWidth(TabFixedWidth: number): void;
        public BackColor: number;
        public readonly ClientHeight: number;
        public readonly ClientLeft: number;
        public readonly ClientTop: number;
        public readonly ClientWidth: number;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiRow: boolean;
        public readonly SelectedItem: Tab;
        public Style: fmTabStyle;
        public TabFixedHeight: number;
        public TabFixedWidth: number;
        public TabOrientation: fmTabOrientation;
        public readonly Tabs: Tabs;
        public Value: number;
    }

    class TextBox {
        private 'MSForms.TextBox_typekey': TextBox;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public AutoSize: boolean;
        public AutoTab: boolean;
        public AutoWordSelect: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BordersSuppress: boolean;
        public BorderStyle: fmBorderStyle;
        public readonly CanPaste: boolean;
        public Copy(): void;
        public CurLine: number;
        public readonly CurTargetX: number;
        public readonly CurTargetY: number;
        public CurX: number;
        public CurY: number;
        public Cut(): void;
        public readonly DisplayStyle: fmDisplayStyle;
        public DragBehavior: fmDragBehavior;
        public DropButtonStyle: fmDropButtonStyle;
        public Enabled: boolean;
        public EnterFieldBehavior: fmEnterFieldBehavior;
        public EnterKeyBehavior: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public HideSelection: boolean;
        public IMEMode: fmIMEMode;
        public IntegralHeight: boolean;
        public readonly LineCount: number;
        public Locked: boolean;
        public MaxLength: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiLine: boolean;
        public PasswordChar: string;
        public Paste(): void;
        public ScrollBars: fmScrollBars;
        public SelectionMargin: boolean;
        public SelLength: number;
        public SelStart: number;
        public SelText: string;
        public ShowDropButtonWhen: fmShowDropButtonWhen;
        public SpecialEffect: fmSpecialEffect;
        public TabKeyBehavior: boolean;
        public Text: string;
        public TextAlign: fmTextAlign;
        public readonly TextLength: number;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class TextBox2 {
        private 'MSForms.TextBox2_typekey': TextBox2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public AutoSize: boolean;
        public AutoTab: boolean;
        public AutoWordSelect: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BorderColor: number;
        public BordersSuppress: boolean;
        public BorderStyle: fmBorderStyle;
        public readonly CanPaste: boolean;
        public Copy(): void;
        public CurLine: number;
        public readonly CurTargetX: number;
        public readonly CurTargetY: number;
        public CurX: number;
        public CurY: number;
        public Cut(): void;
        public readonly DisplayStyle: fmDisplayStyle;
        public DragBehavior: fmDragBehavior;
        public DropButtonStyle: fmDropButtonStyle;
        public Enabled: boolean;
        public EnterFieldBehavior: fmEnterFieldBehavior;
        public EnterKeyBehavior: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public HideSelection: boolean;
        public IMEMode: fmIMEMode;
        public IntegralHeight: boolean;
        public readonly LineCount: number;
        public Locked: boolean;
        public MaxLength: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiLine: boolean;
        public PasswordChar: string;
        public Paste(): void;
        public ScrollBars: fmScrollBars;
        public SelectionMargin: boolean;
        public SelLength: number;
        public SelStart: number;
        public SelText: string;
        public ShowDropButtonWhen: fmShowDropButtonWhen;
        public SpecialEffect: fmSpecialEffect;
        public TabKeyBehavior: boolean;
        public Text: string;
        public TextAlign: fmTextAlign;
        public readonly TextLength: number;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class ToggleButton {
        private 'MSForms.ToggleButton_typekey': ToggleButton;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public Alignment: fmAlignment;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BordersSuppress: boolean;
        public Caption: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public GroupName: string;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmButtonEffect;
        public TextAlign: fmTextAlign;
        public TripleState: boolean;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class ToggleButton2 {
        private 'MSForms.ToggleButton2_typekey': ToggleButton2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public Accelerator: string;
        public Alignment: fmAlignment;
        public AutoSize: boolean;
        public BackColor: number;
        public BackStyle: fmBackStyle;
        public BordersSuppress: boolean;
        public Caption: string;
        public readonly DisplayStyle: fmDisplayStyle;
        public Enabled: boolean;
        public Font: NewFont;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontStrikethru: boolean;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public GroupName: string;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public MultiSelect: fmMultiSelect;
        public Picture: stdole.StdPicture;
        public PicturePosition: fmPicturePosition;
        public SpecialEffect: fmButtonEffect;
        public TextAlign: fmTextAlign;
        public TripleState: boolean;
        public readonly Valid: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class UserForm {
        private 'MSForms.UserForm_typekey': UserForm;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetGridX(GridX: number): void;
        public _GetGridY(GridY: number): void;
        public _GetInsideHeight(InsideHeight: number): void;
        public _GetInsideWidth(InsideWidth: number): void;
        public _GetScrollHeight(ScrollHeight: number): void;
        public _GetScrollLeft(ScrollLeft: number): void;
        public _GetScrollTop(ScrollTop: number): void;
        public _GetScrollWidth(ScrollWidth: number): void;
        public _SetGridX(GridX: number): void;
        public _SetGridY(GridY: number): void;
        public _SetScrollHeight(ScrollHeight: number): void;
        public _SetScrollLeft(ScrollLeft: number): void;
        public _SetScrollTop(ScrollTop: number): void;
        public _SetScrollWidth(ScrollWidth: number): void;
        public readonly ActiveControl: Control;
        public BackColor: number;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public readonly CanPaste: boolean;
        public readonly CanRedo: boolean;
        public readonly CanUndo: boolean;
        public Caption: string;
        public readonly Controls: Controls;
        public Copy(): void;
        public Cut(): void;
        public Cycle: fmCycle;
        public DesignMode: fmMode;
        public DrawBuffer: number;
        public Enabled: boolean;
        public Font: NewFont;
        public ForeColor: number;
        public GridX: number;
        public GridY: number;
        public readonly InsideHeight: number;
        public readonly InsideWidth: number;
        public KeepScrollBarsVisible: fmScrollBars;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Paste(): void;
        public Picture: stdole.StdPicture;
        public PictureAlignment: fmPictureAlignment;
        public PictureSizeMode: fmPictureSizeMode;
        public PictureTiling: boolean;
        public RedoAction(): void;
        public Repaint(): void;
        public Scroll(xAction?: any, yAction?: any): void;
        public ScrollBars: fmScrollBars;
        public ScrollHeight: number;
        public ScrollLeft: number;
        public ScrollTop: number;
        public ScrollWidth: number;
        public readonly Selected: Controls;
        public SetDefaultTabOrder(): void;
        public ShowGridDots: fmMode;
        public ShowToolbox: fmMode;
        public SnapToGrid: fmMode;
        public SpecialEffect: fmSpecialEffect;
        public UndoAction(): void;
        public VerticalScrollBarSide: fmVerticalScrollBarSide;
        public Zoom: number;
    }

    class UserForm2 {
        private 'MSForms.UserForm2_typekey': UserForm2;
        private constructor();
        public readonly _Font_Reserved: NewFont;
        public _GetGridX(GridX: number): void;
        public _GetGridY(GridY: number): void;
        public _GetInsideHeight(InsideHeight: number): void;
        public _GetInsideWidth(InsideWidth: number): void;
        public _GetScrollHeight(ScrollHeight: number): void;
        public _GetScrollLeft(ScrollLeft: number): void;
        public _GetScrollTop(ScrollTop: number): void;
        public _GetScrollWidth(ScrollWidth: number): void;
        public _SetGridX(GridX: number): void;
        public _SetGridY(GridY: number): void;
        public _SetScrollHeight(ScrollHeight: number): void;
        public _SetScrollLeft(ScrollLeft: number): void;
        public _SetScrollTop(ScrollTop: number): void;
        public _SetScrollWidth(ScrollWidth: number): void;
        public readonly ActiveControl: Control;
        public BackColor: number;
        public BorderColor: number;
        public BorderStyle: fmBorderStyle;
        public readonly CanPaste: boolean;
        public readonly CanRedo: boolean;
        public readonly CanUndo: boolean;
        public Caption: string;
        public readonly Controls: Controls;
        public Copy(): void;
        public Cut(): void;
        public Cycle: fmCycle;
        public DesignMode: fmMode;
        public DrawBuffer: number;
        public Enabled: boolean;
        public Font: NewFont;
        public ForeColor: number;
        public GridX: number;
        public GridY: number;
        public readonly InsideHeight: number;
        public readonly InsideWidth: number;
        public KeepScrollBarsVisible: fmScrollBars;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: fmMousePointer;
        public Paste(): void;
        public Picture: stdole.StdPicture;
        public PictureAlignment: fmPictureAlignment;
        public PictureSizeMode: fmPictureSizeMode;
        public PictureTiling: boolean;
        public RedoAction(): void;
        public Repaint(): void;
        public Scroll(xAction?: any, yAction?: any): void;
        public ScrollBars: fmScrollBars;
        public ScrollHeight: number;
        public ScrollLeft: number;
        public ScrollTop: number;
        public ScrollWidth: number;
        public readonly Selected: Controls;
        public SetDefaultTabOrder(): void;
        public ShowGridDots: fmMode;
        public ShowToolbox: fmMode;
        public SnapToGrid: fmMode;
        public SpecialEffect: fmSpecialEffect;
        public UndoAction(): void;
        public VerticalScrollBarSide: fmVerticalScrollBarSide;
        public Zoom: number;
    }

    namespace EventHelperTypes {
        type CheckBox_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type CheckBox_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type CheckBox_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type CheckBox2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type CheckBox2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type CheckBox2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ComboBox_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ComboBox_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ComboBox_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ComboBox2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ComboBox2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ComboBox2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type CommandButton_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type CommandButton_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type CommandButton_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type CommandButton2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type CommandButton2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type CommandButton2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type Frame_BeforeDragOver_ArgNames = ['Cancel', 'Control', 'Data', 'X', 'Y', 'State', 'Effect', 'Shift'];

        type Frame_BeforeDropOrPaste_ArgNames = ['Cancel', 'Control', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type Frame_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type Frame_Scroll_ArgNames = ['ActionX', 'ActionY', 'RequestDx', 'RequestDy', 'ActualDx', 'ActualDy'];

        type Frame2_BeforeDragOver_ArgNames = ['Cancel', 'Control', 'Data', 'X', 'Y', 'State', 'Effect', 'Shift'];

        type Frame2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Control', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type Frame2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type Frame2_Scroll_ArgNames = ['ActionX', 'ActionY', 'RequestDx', 'RequestDy', 'ActualDx', 'ActualDy'];

        type Image_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type Image_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type Image_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type Image2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type Image2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type Image2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type Label_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type Label_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type Label_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type Label2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type Label2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type Label2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ListBox_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ListBox_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ListBox_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ListBox2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ListBox2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ListBox2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type MultiPage_BeforeDragOver_ArgNames = ['Index', 'Cancel', 'Control', 'Data', 'X', 'Y', 'State', 'Effect', 'Shift'];

        type MultiPage_BeforeDropOrPaste_ArgNames = ['Index', 'Cancel', 'Control', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type MultiPage_Error_ArgNames = ['Index', 'Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type MultiPage_Scroll_ArgNames = ['Index', 'ActionX', 'ActionY', 'RequestDx', 'RequestDy', 'ActualDx', 'ActualDy'];

        type MultiPage2_BeforeDragOver_ArgNames = ['Index', 'Cancel', 'Control', 'Data', 'X', 'Y', 'State', 'Effect', 'Shift'];

        type MultiPage2_BeforeDropOrPaste_ArgNames = ['Index', 'Cancel', 'Control', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type MultiPage2_Error_ArgNames = ['Index', 'Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type MultiPage2_Scroll_ArgNames = ['Index', 'ActionX', 'ActionY', 'RequestDx', 'RequestDy', 'ActualDx', 'ActualDy'];

        type OptionButton_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type OptionButton_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type OptionButton_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type OptionButton2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type OptionButton2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type OptionButton2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ScrollBar_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ScrollBar_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ScrollBar_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ScrollBar2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ScrollBar2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ScrollBar2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type SpinButton_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type SpinButton_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type SpinButton_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type SpinButton2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type SpinButton2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type SpinButton2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type TabStrip_BeforeDragOver_ArgNames = ['Index', 'Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type TabStrip_BeforeDropOrPaste_ArgNames = ['Index', 'Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type TabStrip_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type TabStrip2_BeforeDragOver_ArgNames = ['Index', 'Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type TabStrip2_BeforeDropOrPaste_ArgNames = ['Index', 'Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type TabStrip2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type TextBox_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type TextBox_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type TextBox_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type TextBox2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type TextBox2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type TextBox2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ToggleButton_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ToggleButton_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ToggleButton_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type ToggleButton2_BeforeDragOver_ArgNames = ['Cancel', 'Data', 'X', 'Y', 'DragState', 'Effect', 'Shift'];

        type ToggleButton2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type ToggleButton2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type UserForm_BeforeDragOver_ArgNames = ['Cancel', 'Control', 'Data', 'X', 'Y', 'State', 'Effect', 'Shift'];

        type UserForm_BeforeDropOrPaste_ArgNames = ['Cancel', 'Control', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type UserForm_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type UserForm_Scroll_ArgNames = ['ActionX', 'ActionY', 'RequestDx', 'RequestDy', 'ActualDx', 'ActualDy'];

        type UserForm2_BeforeDragOver_ArgNames = ['Cancel', 'Control', 'Data', 'X', 'Y', 'State', 'Effect', 'Shift'];

        type UserForm2_BeforeDropOrPaste_ArgNames = ['Cancel', 'Control', 'Action', 'Data', 'X', 'Y', 'Effect', 'Shift'];

        type UserForm2_Error_ArgNames = ['Number', 'Description', 'SCode', 'Source', 'HelpFile', 'HelpContext', 'CancelDisplay'];

        type UserForm2_Scroll_ArgNames = ['ActionX', 'ActionY', 'RequestDx', 'RequestDy', 'ActualDx', 'ActualDy'];

        interface CheckBox_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CheckBox_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CheckBox_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface CheckBox2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CheckBox2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CheckBox2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ComboBox_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ComboBox_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ComboBox_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ComboBox2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ComboBox2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ComboBox2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface CommandButton_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CommandButton_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CommandButton_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface CommandButton2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CommandButton2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface CommandButton2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface Frame_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly State: fmDragState;
            readonly X: number;
            readonly Y: number;
        }

        interface Frame_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Frame_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface Frame_Scroll_Parameter {
            readonly ActionX: fmScrollAction;
            readonly ActionY: fmScrollAction;
            readonly ActualDx: ReturnSingle;
            readonly ActualDy: ReturnSingle;
            readonly RequestDx: number;
            readonly RequestDy: number;
        }

        interface Frame2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly State: fmDragState;
            readonly X: number;
            readonly Y: number;
        }

        interface Frame2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Frame2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface Frame2_Scroll_Parameter {
            readonly ActionX: fmScrollAction;
            readonly ActionY: fmScrollAction;
            readonly ActualDx: ReturnSingle;
            readonly ActualDy: ReturnSingle;
            readonly RequestDx: number;
            readonly RequestDy: number;
        }

        interface Image_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Image_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Image_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface Image2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Image2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Image2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface Label_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Label_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Label_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface Label2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Label2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface Label2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ListBox_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ListBox_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ListBox_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ListBox2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ListBox2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ListBox2_Error_Parameter {
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

        interface MultiPage2_BeforeDragOver_Parameter {
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

        interface MultiPage2_BeforeDropOrPaste_Parameter {
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

        interface MultiPage2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Index: number;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface MultiPage2_Scroll_Parameter {
            readonly ActionX: fmScrollAction;
            readonly ActionY: fmScrollAction;
            readonly ActualDx: ReturnSingle;
            readonly ActualDy: ReturnSingle;
            readonly Index: number;
            readonly RequestDx: number;
            readonly RequestDy: number;
        }

        interface OptionButton_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface OptionButton_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface OptionButton_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface OptionButton2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface OptionButton2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface OptionButton2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ScrollBar_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ScrollBar_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ScrollBar_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ScrollBar2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ScrollBar2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ScrollBar2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface SpinButton_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface SpinButton_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface SpinButton_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface SpinButton2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface SpinButton2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface SpinButton2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
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

        interface TabStrip_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface TabStrip2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Index: number;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface TabStrip2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Index: number;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface TabStrip2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface TextBox_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface TextBox_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface TextBox_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface TextBox2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface TextBox2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface TextBox2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ToggleButton_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ToggleButton_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ToggleButton_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface ToggleButton2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly DragState: fmDragState;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ToggleButton2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface ToggleButton2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface UserForm_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly State: fmDragState;
            readonly X: number;
            readonly Y: number;
        }

        interface UserForm_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface UserForm_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface UserForm_Scroll_Parameter {
            readonly ActionX: fmScrollAction;
            readonly ActionY: fmScrollAction;
            readonly ActualDx: ReturnSingle;
            readonly ActualDy: ReturnSingle;
            readonly RequestDx: number;
            readonly RequestDy: number;
        }

        interface UserForm2_BeforeDragOver_Parameter {
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly State: fmDragState;
            readonly X: number;
            readonly Y: number;
        }

        interface UserForm2_BeforeDropOrPaste_Parameter {
            readonly Action: fmAction;
            readonly Cancel: ReturnBoolean;
            readonly Control: Control;
            readonly Data: DataObject;
            readonly Effect: ReturnEffect;
            readonly Shift: number;
            readonly X: number;
            readonly Y: number;
        }

        interface UserForm2_Error_Parameter {
            readonly CancelDisplay: ReturnBoolean;
            readonly Description: ReturnString;
            readonly HelpContext: number;
            readonly HelpFile: string;
            readonly Number: number;
            readonly SCode: number;
            readonly Source: string;
        }

        interface UserForm2_Scroll_Parameter {
            readonly ActionX: fmScrollAction;
            readonly ActionY: fmScrollAction;
            readonly ActualDx: ReturnSingle;
            readonly ActualDy: ReturnSingle;
            readonly RequestDx: number;
            readonly RequestDy: number;
        }
    }
}

interface ActiveXObject {
    on(
        obj: MSForms.CheckBox, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.CheckBox_BeforeDragOver_ArgNames, handler: (
            this: MSForms.CheckBox, parameter: MSForms.EventHelperTypes.CheckBox_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.CheckBox, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.CheckBox_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.CheckBox, parameter: MSForms.EventHelperTypes.CheckBox_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.CheckBox, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.CheckBox, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.CheckBox, event: 'Error', argNames: MSForms.EventHelperTypes.CheckBox_Error_ArgNames, handler: (
            this: MSForms.CheckBox, parameter: MSForms.EventHelperTypes.CheckBox_Error_Parameter) => void): void;
    on(
        obj: MSForms.CheckBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.CheckBox, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.CheckBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.CheckBox, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.CheckBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.CheckBox, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.CheckBox2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.CheckBox2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.CheckBox2, parameter: MSForms.EventHelperTypes.CheckBox2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.CheckBox2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.CheckBox2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.CheckBox2, parameter: MSForms.EventHelperTypes.CheckBox2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.CheckBox2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.CheckBox2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.CheckBox2, event: 'Error', argNames: MSForms.EventHelperTypes.CheckBox2_Error_ArgNames, handler: (
            this: MSForms.CheckBox2, parameter: MSForms.EventHelperTypes.CheckBox2_Error_Parameter) => void): void;
    on(
        obj: MSForms.CheckBox2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.CheckBox2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.CheckBox2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.CheckBox2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.CheckBox2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.CheckBox2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.ComboBox, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ComboBox_BeforeDragOver_ArgNames, handler: (
            this: MSForms.ComboBox, parameter: MSForms.EventHelperTypes.ComboBox_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ComboBox, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ComboBox_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.ComboBox, parameter: MSForms.EventHelperTypes.ComboBox_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.ComboBox, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.ComboBox, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.ComboBox, event: 'Error', argNames: MSForms.EventHelperTypes.ComboBox_Error_ArgNames, handler: (
            this: MSForms.ComboBox, parameter: MSForms.EventHelperTypes.ComboBox_Error_Parameter) => void): void;
    on(
        obj: MSForms.ComboBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ComboBox, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ComboBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ComboBox, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.ComboBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.ComboBox, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.ComboBox2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ComboBox2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.ComboBox2, parameter: MSForms.EventHelperTypes.ComboBox2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ComboBox2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ComboBox2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.ComboBox2, parameter: MSForms.EventHelperTypes.ComboBox2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.ComboBox2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.ComboBox2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.ComboBox2, event: 'Error', argNames: MSForms.EventHelperTypes.ComboBox2_Error_ArgNames, handler: (
            this: MSForms.ComboBox2, parameter: MSForms.EventHelperTypes.ComboBox2_Error_Parameter) => void): void;
    on(
        obj: MSForms.ComboBox2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ComboBox2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ComboBox2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ComboBox2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.ComboBox2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.ComboBox2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.CommandButton, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.CommandButton_BeforeDragOver_ArgNames,
        handler: (this: MSForms.CommandButton, parameter: MSForms.EventHelperTypes.CommandButton_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.CommandButton, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.CommandButton_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.CommandButton, parameter: MSForms.EventHelperTypes.CommandButton_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.CommandButton, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.CommandButton, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.CommandButton, event: 'Error', argNames: MSForms.EventHelperTypes.CommandButton_Error_ArgNames, handler: (
            this: MSForms.CommandButton, parameter: MSForms.EventHelperTypes.CommandButton_Error_Parameter) => void): void;
    on(
        obj: MSForms.CommandButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.CommandButton, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.CommandButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.CommandButton, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.CommandButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.CommandButton, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.CommandButton2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.CommandButton2_BeforeDragOver_ArgNames,
        handler: (this: MSForms.CommandButton2, parameter: MSForms.EventHelperTypes.CommandButton2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.CommandButton2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.CommandButton2_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.CommandButton2, parameter: MSForms.EventHelperTypes.CommandButton2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.CommandButton2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.CommandButton2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.CommandButton2, event: 'Error', argNames: MSForms.EventHelperTypes.CommandButton2_Error_ArgNames, handler: (
            this: MSForms.CommandButton2, parameter: MSForms.EventHelperTypes.CommandButton2_Error_Parameter) => void): void;
    on(
        obj: MSForms.CommandButton2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.CommandButton2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.CommandButton2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.CommandButton2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.CommandButton2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.CommandButton2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(obj: MSForms.Control, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: MSForms.Control, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(obj: MSForms.Frame, event: 'AddControl' | 'RemoveControl', argNames: ['Control'], handler: (this: MSForms.Frame, parameter: {readonly Control: MSForms.Control}) => void): void;
    on(
        obj: MSForms.Frame, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.Frame_BeforeDragOver_ArgNames, handler: (
            this: MSForms.Frame, parameter: MSForms.EventHelperTypes.Frame_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.Frame, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.Frame_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.Frame, parameter: MSForms.EventHelperTypes.Frame_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.Frame, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.Frame, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.Frame, event: 'Error', argNames: MSForms.EventHelperTypes.Frame_Error_ArgNames, handler: (
            this: MSForms.Frame, parameter: MSForms.EventHelperTypes.Frame_Error_Parameter) => void): void;
    on(
        obj: MSForms.Frame, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.Frame, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.Frame, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.Frame, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.Frame, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.Frame, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.Frame, event: 'Scroll', argNames: MSForms.EventHelperTypes.Frame_Scroll_ArgNames, handler: (
            this: MSForms.Frame, parameter: MSForms.EventHelperTypes.Frame_Scroll_Parameter) => void): void;
    on(obj: MSForms.Frame, event: 'Zoom', argNames: ['Percent'], handler: (this: MSForms.Frame, parameter: {Percent: number}) => void): void;
    on(obj: MSForms.Frame2, event: 'AddControl' | 'RemoveControl', argNames: ['Control'], handler: (this: MSForms.Frame2, parameter: {readonly Control: MSForms.Control}) => void): void;
    on(
        obj: MSForms.Frame2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.Frame2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.Frame2, parameter: MSForms.EventHelperTypes.Frame2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.Frame2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.Frame2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.Frame2, parameter: MSForms.EventHelperTypes.Frame2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.Frame2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.Frame2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.Frame2, event: 'Error', argNames: MSForms.EventHelperTypes.Frame2_Error_ArgNames, handler: (
            this: MSForms.Frame2, parameter: MSForms.EventHelperTypes.Frame2_Error_Parameter) => void): void;
    on(
        obj: MSForms.Frame2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.Frame2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.Frame2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.Frame2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.Frame2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.Frame2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.Frame2, event: 'Scroll', argNames: MSForms.EventHelperTypes.Frame2_Scroll_ArgNames, handler: (
            this: MSForms.Frame2, parameter: MSForms.EventHelperTypes.Frame2_Scroll_Parameter) => void): void;
    on(obj: MSForms.Frame2, event: 'Zoom', argNames: ['Percent'], handler: (this: MSForms.Frame2, parameter: {Percent: number}) => void): void;
    on(
        obj: MSForms.Image, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.Image_BeforeDragOver_ArgNames, handler: (
            this: MSForms.Image, parameter: MSForms.EventHelperTypes.Image_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.Image, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.Image_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.Image, parameter: MSForms.EventHelperTypes.Image_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.Image, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.Image, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.Image, event: 'Error', argNames: MSForms.EventHelperTypes.Image_Error_ArgNames, handler: (
            this: MSForms.Image, parameter: MSForms.EventHelperTypes.Image_Error_Parameter) => void): void;
    on(
        obj: MSForms.Image, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.Image, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.Image2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.Image2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.Image2, parameter: MSForms.EventHelperTypes.Image2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.Image2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.Image2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.Image2, parameter: MSForms.EventHelperTypes.Image2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.Image2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.Image2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.Image2, event: 'Error', argNames: MSForms.EventHelperTypes.Image2_Error_ArgNames, handler: (
            this: MSForms.Image2, parameter: MSForms.EventHelperTypes.Image2_Error_Parameter) => void): void;
    on(
        obj: MSForms.Image2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.Image2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.Label, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.Label_BeforeDragOver_ArgNames, handler: (
            this: MSForms.Label, parameter: MSForms.EventHelperTypes.Label_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.Label, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.Label_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.Label, parameter: MSForms.EventHelperTypes.Label_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.Label, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.Label, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.Label, event: 'Error', argNames: MSForms.EventHelperTypes.Label_Error_ArgNames, handler: (
            this: MSForms.Label, parameter: MSForms.EventHelperTypes.Label_Error_Parameter) => void): void;
    on(
        obj: MSForms.Label, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.Label, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.Label2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.Label2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.Label2, parameter: MSForms.EventHelperTypes.Label2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.Label2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.Label2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.Label2, parameter: MSForms.EventHelperTypes.Label2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.Label2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.Label2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.Label2, event: 'Error', argNames: MSForms.EventHelperTypes.Label2_Error_ArgNames, handler: (
            this: MSForms.Label2, parameter: MSForms.EventHelperTypes.Label2_Error_Parameter) => void): void;
    on(
        obj: MSForms.Label2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.Label2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.ListBox, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ListBox_BeforeDragOver_ArgNames, handler: (
            this: MSForms.ListBox, parameter: MSForms.EventHelperTypes.ListBox_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ListBox, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ListBox_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.ListBox, parameter: MSForms.EventHelperTypes.ListBox_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.ListBox, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.ListBox, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.ListBox, event: 'Error', argNames: MSForms.EventHelperTypes.ListBox_Error_ArgNames, handler: (
            this: MSForms.ListBox, parameter: MSForms.EventHelperTypes.ListBox_Error_Parameter) => void): void;
    on(
        obj: MSForms.ListBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ListBox, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ListBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ListBox, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.ListBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.ListBox, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.ListBox2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ListBox2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.ListBox2, parameter: MSForms.EventHelperTypes.ListBox2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ListBox2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ListBox2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.ListBox2, parameter: MSForms.EventHelperTypes.ListBox2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.ListBox2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.ListBox2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.ListBox2, event: 'Error', argNames: MSForms.EventHelperTypes.ListBox2_Error_ArgNames, handler: (
            this: MSForms.ListBox2, parameter: MSForms.EventHelperTypes.ListBox2_Error_Parameter) => void): void;
    on(
        obj: MSForms.ListBox2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ListBox2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ListBox2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ListBox2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.ListBox2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.ListBox2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'AddControl' | 'RemoveControl', argNames: ['Index', 'Control'], handler: (
            this: MSForms.MultiPage, parameter: {readonly Index: number, readonly Control: MSForms.Control}) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.MultiPage_BeforeDragOver_ArgNames, handler: (
            this: MSForms.MultiPage, parameter: MSForms.EventHelperTypes.MultiPage_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.MultiPage_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.MultiPage, parameter: MSForms.EventHelperTypes.MultiPage_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.MultiPage, event: 'Click' | 'Layout', argNames: ['Index'], handler: (this: MSForms.MultiPage, parameter: {readonly Index: number}) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'DblClick', argNames: ['Index', 'Cancel'], handler: (
            this: MSForms.MultiPage, parameter: {readonly Index: number, readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'Error', argNames: MSForms.EventHelperTypes.MultiPage_Error_ArgNames, handler: (
            this: MSForms.MultiPage, parameter: MSForms.EventHelperTypes.MultiPage_Error_Parameter) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.MultiPage, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.MultiPage, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.MultiPage, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Index', 'Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.MultiPage, parameter: {readonly Index: number, readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.MultiPage, event: 'Scroll', argNames: MSForms.EventHelperTypes.MultiPage_Scroll_ArgNames, handler: (
            this: MSForms.MultiPage, parameter: MSForms.EventHelperTypes.MultiPage_Scroll_Parameter) => void): void;
    on(obj: MSForms.MultiPage, event: 'Zoom', argNames: ['Index', 'Percent'], handler: (this: MSForms.MultiPage, parameter: {readonly Index: number, Percent: number}) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'AddControl' | 'RemoveControl', argNames: ['Index', 'Control'], handler: (
            this: MSForms.MultiPage2, parameter: {readonly Index: number, readonly Control: MSForms.Control}) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.MultiPage2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.MultiPage2, parameter: MSForms.EventHelperTypes.MultiPage2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.MultiPage2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.MultiPage2, parameter: MSForms.EventHelperTypes.MultiPage2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.MultiPage2, event: 'Click' | 'Layout', argNames: ['Index'], handler: (this: MSForms.MultiPage2, parameter: {readonly Index: number}) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'DblClick', argNames: ['Index', 'Cancel'], handler: (
            this: MSForms.MultiPage2, parameter: {readonly Index: number, readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'Error', argNames: MSForms.EventHelperTypes.MultiPage2_Error_ArgNames, handler: (
            this: MSForms.MultiPage2, parameter: MSForms.EventHelperTypes.MultiPage2_Error_Parameter) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.MultiPage2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.MultiPage2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.MultiPage2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Index', 'Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.MultiPage2, parameter: {readonly Index: number, readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.MultiPage2, event: 'Scroll', argNames: MSForms.EventHelperTypes.MultiPage2_Scroll_ArgNames, handler: (
            this: MSForms.MultiPage2, parameter: MSForms.EventHelperTypes.MultiPage2_Scroll_Parameter) => void): void;
    on(obj: MSForms.MultiPage2, event: 'Zoom', argNames: ['Index', 'Percent'], handler: (this: MSForms.MultiPage2, parameter: {readonly Index: number, Percent: number}) => void): void;
    on(
        obj: MSForms.OptionButton, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.OptionButton_BeforeDragOver_ArgNames, handler: (
            this: MSForms.OptionButton, parameter: MSForms.EventHelperTypes.OptionButton_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.OptionButton, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.OptionButton_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.OptionButton, parameter: MSForms.EventHelperTypes.OptionButton_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.OptionButton, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.OptionButton, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.OptionButton, event: 'Error', argNames: MSForms.EventHelperTypes.OptionButton_Error_ArgNames, handler: (
            this: MSForms.OptionButton, parameter: MSForms.EventHelperTypes.OptionButton_Error_Parameter) => void): void;
    on(
        obj: MSForms.OptionButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.OptionButton, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.OptionButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.OptionButton, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.OptionButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.OptionButton, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.OptionButton2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.OptionButton2_BeforeDragOver_ArgNames,
        handler: (this: MSForms.OptionButton2, parameter: MSForms.EventHelperTypes.OptionButton2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.OptionButton2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.OptionButton2_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.OptionButton2, parameter: MSForms.EventHelperTypes.OptionButton2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.OptionButton2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.OptionButton2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.OptionButton2, event: 'Error', argNames: MSForms.EventHelperTypes.OptionButton2_Error_ArgNames, handler: (
            this: MSForms.OptionButton2, parameter: MSForms.EventHelperTypes.OptionButton2_Error_Parameter) => void): void;
    on(
        obj: MSForms.OptionButton2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.OptionButton2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.OptionButton2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.OptionButton2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.OptionButton2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.OptionButton2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.ScrollBar, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ScrollBar_BeforeDragOver_ArgNames, handler: (
            this: MSForms.ScrollBar, parameter: MSForms.EventHelperTypes.ScrollBar_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ScrollBar, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ScrollBar_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.ScrollBar, parameter: MSForms.EventHelperTypes.ScrollBar_BeforeDropOrPaste_Parameter) => void): void;
    on(
        obj: MSForms.ScrollBar, event: 'Error', argNames: MSForms.EventHelperTypes.ScrollBar_Error_ArgNames, handler: (
            this: MSForms.ScrollBar, parameter: MSForms.EventHelperTypes.ScrollBar_Error_Parameter) => void): void;
    on(
        obj: MSForms.ScrollBar, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ScrollBar, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ScrollBar, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ScrollBar, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.ScrollBar2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ScrollBar2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.ScrollBar2, parameter: MSForms.EventHelperTypes.ScrollBar2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ScrollBar2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ScrollBar2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.ScrollBar2, parameter: MSForms.EventHelperTypes.ScrollBar2_BeforeDropOrPaste_Parameter) => void): void;
    on(
        obj: MSForms.ScrollBar2, event: 'Error', argNames: MSForms.EventHelperTypes.ScrollBar2_Error_ArgNames, handler: (
            this: MSForms.ScrollBar2, parameter: MSForms.EventHelperTypes.ScrollBar2_Error_Parameter) => void): void;
    on(
        obj: MSForms.ScrollBar2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ScrollBar2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ScrollBar2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ScrollBar2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.SpinButton, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.SpinButton_BeforeDragOver_ArgNames, handler: (
            this: MSForms.SpinButton, parameter: MSForms.EventHelperTypes.SpinButton_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.SpinButton, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.SpinButton_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.SpinButton, parameter: MSForms.EventHelperTypes.SpinButton_BeforeDropOrPaste_Parameter) => void): void;
    on(
        obj: MSForms.SpinButton, event: 'Error', argNames: MSForms.EventHelperTypes.SpinButton_Error_ArgNames, handler: (
            this: MSForms.SpinButton, parameter: MSForms.EventHelperTypes.SpinButton_Error_Parameter) => void): void;
    on(
        obj: MSForms.SpinButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.SpinButton, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.SpinButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.SpinButton, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.SpinButton2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.SpinButton2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.SpinButton2, parameter: MSForms.EventHelperTypes.SpinButton2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.SpinButton2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.SpinButton2_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.SpinButton2, parameter: MSForms.EventHelperTypes.SpinButton2_BeforeDropOrPaste_Parameter) => void): void;
    on(
        obj: MSForms.SpinButton2, event: 'Error', argNames: MSForms.EventHelperTypes.SpinButton2_Error_ArgNames, handler: (
            this: MSForms.SpinButton2, parameter: MSForms.EventHelperTypes.SpinButton2_Error_Parameter) => void): void;
    on(
        obj: MSForms.SpinButton2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.SpinButton2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.SpinButton2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.SpinButton2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.TabStrip, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.TabStrip_BeforeDragOver_ArgNames, handler: (
            this: MSForms.TabStrip, parameter: MSForms.EventHelperTypes.TabStrip_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.TabStrip, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.TabStrip_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.TabStrip, parameter: MSForms.EventHelperTypes.TabStrip_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.TabStrip, event: 'Click', argNames: ['Index'], handler: (this: MSForms.TabStrip, parameter: {readonly Index: number}) => void): void;
    on(
        obj: MSForms.TabStrip, event: 'DblClick', argNames: ['Index', 'Cancel'], handler: (
            this: MSForms.TabStrip, parameter: {readonly Index: number, readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.TabStrip, event: 'Error', argNames: MSForms.EventHelperTypes.TabStrip_Error_ArgNames, handler: (
            this: MSForms.TabStrip, parameter: MSForms.EventHelperTypes.TabStrip_Error_Parameter) => void): void;
    on(
        obj: MSForms.TabStrip, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.TabStrip, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.TabStrip, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.TabStrip, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.TabStrip, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Index', 'Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.TabStrip, parameter: {readonly Index: number, readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.TabStrip2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.TabStrip2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.TabStrip2, parameter: MSForms.EventHelperTypes.TabStrip2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.TabStrip2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.TabStrip2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.TabStrip2, parameter: MSForms.EventHelperTypes.TabStrip2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.TabStrip2, event: 'Click', argNames: ['Index'], handler: (this: MSForms.TabStrip2, parameter: {readonly Index: number}) => void): void;
    on(
        obj: MSForms.TabStrip2, event: 'DblClick', argNames: ['Index', 'Cancel'], handler: (
            this: MSForms.TabStrip2, parameter: {readonly Index: number, readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.TabStrip2, event: 'Error', argNames: MSForms.EventHelperTypes.TabStrip2_Error_ArgNames, handler: (
            this: MSForms.TabStrip2, parameter: MSForms.EventHelperTypes.TabStrip2_Error_Parameter) => void): void;
    on(
        obj: MSForms.TabStrip2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.TabStrip2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.TabStrip2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.TabStrip2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.TabStrip2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Index', 'Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.TabStrip2, parameter: {readonly Index: number, readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.TextBox, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.TextBox_BeforeDragOver_ArgNames, handler: (
            this: MSForms.TextBox, parameter: MSForms.EventHelperTypes.TextBox_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.TextBox, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.TextBox_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.TextBox, parameter: MSForms.EventHelperTypes.TextBox_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.TextBox, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.TextBox, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.TextBox, event: 'Error', argNames: MSForms.EventHelperTypes.TextBox_Error_ArgNames, handler: (
            this: MSForms.TextBox, parameter: MSForms.EventHelperTypes.TextBox_Error_Parameter) => void): void;
    on(
        obj: MSForms.TextBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.TextBox, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.TextBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.TextBox, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.TextBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.TextBox, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.TextBox2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.TextBox2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.TextBox2, parameter: MSForms.EventHelperTypes.TextBox2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.TextBox2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.TextBox2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.TextBox2, parameter: MSForms.EventHelperTypes.TextBox2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.TextBox2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.TextBox2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.TextBox2, event: 'Error', argNames: MSForms.EventHelperTypes.TextBox2_Error_ArgNames, handler: (
            this: MSForms.TextBox2, parameter: MSForms.EventHelperTypes.TextBox2_Error_Parameter) => void): void;
    on(
        obj: MSForms.TextBox2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.TextBox2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.TextBox2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.TextBox2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.TextBox2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.TextBox2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.ToggleButton, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ToggleButton_BeforeDragOver_ArgNames, handler: (
            this: MSForms.ToggleButton, parameter: MSForms.EventHelperTypes.ToggleButton_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ToggleButton, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ToggleButton_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.ToggleButton, parameter: MSForms.EventHelperTypes.ToggleButton_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.ToggleButton, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.ToggleButton, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.ToggleButton, event: 'Error', argNames: MSForms.EventHelperTypes.ToggleButton_Error_ArgNames, handler: (
            this: MSForms.ToggleButton, parameter: MSForms.EventHelperTypes.ToggleButton_Error_Parameter) => void): void;
    on(
        obj: MSForms.ToggleButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ToggleButton, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ToggleButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ToggleButton, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.ToggleButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.ToggleButton, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.ToggleButton2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.ToggleButton2_BeforeDragOver_ArgNames,
        handler: (this: MSForms.ToggleButton2, parameter: MSForms.EventHelperTypes.ToggleButton2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.ToggleButton2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.ToggleButton2_BeforeDropOrPaste_ArgNames,
        handler: (this: MSForms.ToggleButton2, parameter: MSForms.EventHelperTypes.ToggleButton2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.ToggleButton2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.ToggleButton2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.ToggleButton2, event: 'Error', argNames: MSForms.EventHelperTypes.ToggleButton2_Error_ArgNames, handler: (
            this: MSForms.ToggleButton2, parameter: MSForms.EventHelperTypes.ToggleButton2_Error_Parameter) => void): void;
    on(
        obj: MSForms.ToggleButton2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.ToggleButton2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.ToggleButton2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.ToggleButton2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.ToggleButton2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.ToggleButton2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(obj: MSForms.UserForm, event: 'AddControl' | 'RemoveControl', argNames: ['Control'], handler: (this: MSForms.UserForm, parameter: {readonly Control: MSForms.Control}) => void): void;
    on(
        obj: MSForms.UserForm, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.UserForm_BeforeDragOver_ArgNames, handler: (
            this: MSForms.UserForm, parameter: MSForms.EventHelperTypes.UserForm_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.UserForm, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.UserForm_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.UserForm, parameter: MSForms.EventHelperTypes.UserForm_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.UserForm, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.UserForm, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.UserForm, event: 'Error', argNames: MSForms.EventHelperTypes.UserForm_Error_ArgNames, handler: (
            this: MSForms.UserForm, parameter: MSForms.EventHelperTypes.UserForm_Error_Parameter) => void): void;
    on(
        obj: MSForms.UserForm, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.UserForm, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.UserForm, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.UserForm, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.UserForm, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.UserForm, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.UserForm, event: 'Scroll', argNames: MSForms.EventHelperTypes.UserForm_Scroll_ArgNames, handler: (
            this: MSForms.UserForm, parameter: MSForms.EventHelperTypes.UserForm_Scroll_Parameter) => void): void;
    on(obj: MSForms.UserForm, event: 'Zoom', argNames: ['Percent'], handler: (this: MSForms.UserForm, parameter: {Percent: number}) => void): void;
    on(obj: MSForms.UserForm2, event: 'AddControl' | 'RemoveControl', argNames: ['Control'], handler: (this: MSForms.UserForm2, parameter: {readonly Control: MSForms.Control}) => void): void;
    on(
        obj: MSForms.UserForm2, event: 'BeforeDragOver', argNames: MSForms.EventHelperTypes.UserForm2_BeforeDragOver_ArgNames, handler: (
            this: MSForms.UserForm2, parameter: MSForms.EventHelperTypes.UserForm2_BeforeDragOver_Parameter) => void): void;
    on(
        obj: MSForms.UserForm2, event: 'BeforeDropOrPaste', argNames: MSForms.EventHelperTypes.UserForm2_BeforeDropOrPaste_ArgNames, handler: (
            this: MSForms.UserForm2, parameter: MSForms.EventHelperTypes.UserForm2_BeforeDropOrPaste_Parameter) => void): void;
    on(obj: MSForms.UserForm2, event: 'DblClick', argNames: ['Cancel'], handler: (this: MSForms.UserForm2, parameter: {readonly Cancel: MSForms.ReturnBoolean}) => void): void;
    on(
        obj: MSForms.UserForm2, event: 'Error', argNames: MSForms.EventHelperTypes.UserForm2_Error_ArgNames, handler: (
            this: MSForms.UserForm2, parameter: MSForms.EventHelperTypes.UserForm2_Error_Parameter) => void): void;
    on(
        obj: MSForms.UserForm2, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: MSForms.UserForm2, parameter: {readonly KeyCode: MSForms.ReturnInteger, readonly Shift: number}) => void): void;
    on(obj: MSForms.UserForm2, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: MSForms.UserForm2, parameter: {readonly KeyAscii: MSForms.ReturnInteger}) => void): void;
    on(
        obj: MSForms.UserForm2, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: MSForms.UserForm2, parameter: {readonly Button: number, readonly Shift: number, readonly X: number, readonly Y: number}) => void): void;
    on(
        obj: MSForms.UserForm2, event: 'Scroll', argNames: MSForms.EventHelperTypes.UserForm2_Scroll_ArgNames, handler: (
            this: MSForms.UserForm2, parameter: MSForms.EventHelperTypes.UserForm2_Scroll_Parameter) => void): void;
    on(obj: MSForms.UserForm2, event: 'Zoom', argNames: ['Percent'], handler: (this: MSForms.UserForm2, parameter: {Percent: number}) => void): void;
    on(obj: MSForms.CheckBox, event: 'Change' | 'Click', handler: (this: MSForms.CheckBox, parameter: {}) => void): void;
    on(obj: MSForms.CheckBox2, event: 'Change' | 'Click', handler: (this: MSForms.CheckBox2, parameter: {}) => void): void;
    on(obj: MSForms.ComboBox, event: 'Change' | 'Click' | 'DropButtonClick', handler: (this: MSForms.ComboBox, parameter: {}) => void): void;
    on(obj: MSForms.ComboBox2, event: 'Change' | 'Click' | 'DropButtonClick', handler: (this: MSForms.ComboBox2, parameter: {}) => void): void;
    on(obj: MSForms.CommandButton, event: 'Click', handler: (this: MSForms.CommandButton, parameter: {}) => void): void;
    on(obj: MSForms.CommandButton2, event: 'Click', handler: (this: MSForms.CommandButton2, parameter: {}) => void): void;
    on(obj: MSForms.Control, event: 'AfterUpdate' | 'Enter', handler: (this: MSForms.Control, parameter: {}) => void): void;
    on(obj: MSForms.Frame, event: 'Click' | 'Layout', handler: (this: MSForms.Frame, parameter: {}) => void): void;
    on(obj: MSForms.Frame2, event: 'Click' | 'Layout', handler: (this: MSForms.Frame2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLCheckbox, event: 'Click', handler: (this: MSForms.HTMLCheckbox, parameter: {}) => void): void;
    on(obj: MSForms.HTMLCheckbox2, event: 'Click', handler: (this: MSForms.HTMLCheckbox2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLHidden, event: 'Click', handler: (this: MSForms.HTMLHidden, parameter: {}) => void): void;
    on(obj: MSForms.HTMLHidden2, event: 'Click', handler: (this: MSForms.HTMLHidden2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLImage, event: 'Click', handler: (this: MSForms.HTMLImage, parameter: {}) => void): void;
    on(obj: MSForms.HTMLImage2, event: 'Click', handler: (this: MSForms.HTMLImage2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLOption, event: 'Click', handler: (this: MSForms.HTMLOption, parameter: {}) => void): void;
    on(obj: MSForms.HTMLOption2, event: 'Click', handler: (this: MSForms.HTMLOption2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLPassword, event: 'Click', handler: (this: MSForms.HTMLPassword, parameter: {}) => void): void;
    on(obj: MSForms.HTMLPassword2, event: 'Click', handler: (this: MSForms.HTMLPassword2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLReset, event: 'Click', handler: (this: MSForms.HTMLReset, parameter: {}) => void): void;
    on(obj: MSForms.HTMLReset2, event: 'Click', handler: (this: MSForms.HTMLReset2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLSelect, event: 'Click', handler: (this: MSForms.HTMLSelect, parameter: {}) => void): void;
    on(obj: MSForms.HTMLSelect2, event: 'Click', handler: (this: MSForms.HTMLSelect2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLSubmit, event: 'Click', handler: (this: MSForms.HTMLSubmit, parameter: {}) => void): void;
    on(obj: MSForms.HTMLSubmit2, event: 'Click', handler: (this: MSForms.HTMLSubmit2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLText, event: 'Click', handler: (this: MSForms.HTMLText, parameter: {}) => void): void;
    on(obj: MSForms.HTMLText2, event: 'Click', handler: (this: MSForms.HTMLText2, parameter: {}) => void): void;
    on(obj: MSForms.HTMLTextArea, event: 'Click', handler: (this: MSForms.HTMLTextArea, parameter: {}) => void): void;
    on(obj: MSForms.HTMLTextArea2, event: 'Click', handler: (this: MSForms.HTMLTextArea2, parameter: {}) => void): void;
    on(obj: MSForms.Image, event: 'Click', handler: (this: MSForms.Image, parameter: {}) => void): void;
    on(obj: MSForms.Image2, event: 'Click', handler: (this: MSForms.Image2, parameter: {}) => void): void;
    on(obj: MSForms.Label, event: 'Click', handler: (this: MSForms.Label, parameter: {}) => void): void;
    on(obj: MSForms.Label2, event: 'Click', handler: (this: MSForms.Label2, parameter: {}) => void): void;
    on(obj: MSForms.ListBox, event: 'Change' | 'Click', handler: (this: MSForms.ListBox, parameter: {}) => void): void;
    on(obj: MSForms.ListBox2, event: 'Change' | 'Click', handler: (this: MSForms.ListBox2, parameter: {}) => void): void;
    on(obj: MSForms.MultiPage, event: 'Change', handler: (this: MSForms.MultiPage, parameter: {}) => void): void;
    on(obj: MSForms.MultiPage2, event: 'Change', handler: (this: MSForms.MultiPage2, parameter: {}) => void): void;
    on(obj: MSForms.OptionButton, event: 'Change' | 'Click', handler: (this: MSForms.OptionButton, parameter: {}) => void): void;
    on(obj: MSForms.OptionButton2, event: 'Change' | 'Click', handler: (this: MSForms.OptionButton2, parameter: {}) => void): void;
    on(obj: MSForms.ScrollBar, event: 'Change' | 'Scroll', handler: (this: MSForms.ScrollBar, parameter: {}) => void): void;
    on(obj: MSForms.ScrollBar2, event: 'Change' | 'Scroll', handler: (this: MSForms.ScrollBar2, parameter: {}) => void): void;
    on(obj: MSForms.SpinButton, event: 'Change' | 'SpinDown' | 'SpinUp', handler: (this: MSForms.SpinButton, parameter: {}) => void): void;
    on(obj: MSForms.SpinButton2, event: 'Change' | 'SpinDown' | 'SpinUp', handler: (this: MSForms.SpinButton2, parameter: {}) => void): void;
    on(obj: MSForms.TabStrip, event: 'Change', handler: (this: MSForms.TabStrip, parameter: {}) => void): void;
    on(obj: MSForms.TabStrip2, event: 'Change', handler: (this: MSForms.TabStrip2, parameter: {}) => void): void;
    on(obj: MSForms.TextBox, event: 'Change' | 'DropButtonClick', handler: (this: MSForms.TextBox, parameter: {}) => void): void;
    on(obj: MSForms.TextBox2, event: 'Change' | 'DropButtonClick', handler: (this: MSForms.TextBox2, parameter: {}) => void): void;
    on(obj: MSForms.ToggleButton, event: 'Change' | 'Click', handler: (this: MSForms.ToggleButton, parameter: {}) => void): void;
    on(obj: MSForms.ToggleButton2, event: 'Change' | 'Click', handler: (this: MSForms.ToggleButton2, parameter: {}) => void): void;
    on(obj: MSForms.UserForm, event: 'Click' | 'Layout', handler: (this: MSForms.UserForm, parameter: {}) => void): void;
    on(obj: MSForms.UserForm2, event: 'Click' | 'Layout', handler: (this: MSForms.UserForm2, parameter: {}) => void): void;
    set(obj: MSForms.ComboBox | MSForms.ComboBox2 | MSForms.ListBox | MSForms.ListBox2, propertyName: 'Column' | 'List', parameterTypes: [any, any], newValue: any): void;
    set(obj: MSForms.ListBox | MSForms.ListBox2, propertyName: 'Selected', parameterTypes: [any], newValue: boolean): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'Forms.Image': MSForms.Image;
    'Forms.Image': MSForms.Image2;
}

interface EnumeratorConstructor {
    new(col: MSForms.Controls | MSForms.Pages | MSForms.Tabs): Enumerator<any>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
