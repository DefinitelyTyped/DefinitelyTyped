// Type definitions for Microsoft InfoPath 3.0 Type Library - InfoPath 3.0
// Project: https://msdn.microsoft.com/en-us/library/jj602751.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="activex-adodb" />
/// <reference types="activex-msxml2" />
/// <reference types="activex-mshtml" />
/// <reference types="activex-stdole" />

declare namespace InfoPath {
    const enum CommandIds {
        AddWordToDictionary = 131,
        AlignTextCenter = 33,
        AlignTextJustify = 35,
        AlignTextLeft = 32,
        AlignTextRight = 34,
        ClearAutoSpace = 85,
        ClearBulletedList = 59,
        ClearFontFormatting = 109,
        ClearNumberedList = 58,
        Close = 4,
        Copy = 53,
        CorrectAllOfMisspelledWord = 134,
        CorrectMisspelledWord = 133,
        Cut = 52,
        DecreaseFontSizeBy2 = 117,
        DecreaseIndent = 60,
        DeleteMisspelledWord = 135,
        DeleteSelectedColumns = 68,
        DeleteSelectedRows = 67,
        DeleteSelectedTable = 66,
        DrawTable = 50,
        EraseTable = 51,
        FindNextMisspelledWord = 132,
        FindReplaceFindNext = 119,
        FormatPainterApplyFormatting = 23,
        FormatPainterApplyFormattingPersistent = 25,
        FormatPainterCopyFormatting = 24,
        FormatPainterCopyFormattingPersistent = 172,
        GetCurrentMisspelledWord = 139,
        GetDefaultFontColor = 98,
        GetDefaultHighlightColor = 97,
        GetFindReplaceOptionSearchDirection = 94,
        GetFindReplaceState = 171,
        GetFindString = 87,
        GetFontAvailableByIndex = 102,
        GetFontsAvailableCount = 101,
        GetFontSizeAvailableByIndex = 104,
        GetFontSizesAvailableCount = 103,
        GetHyperlinkAddress = 159,
        GetHyperlinkDisplayText = 158,
        GetPictureAlternativeText = 169,
        GetPictureHeight = 167,
        GetPictureTextWrapping = 170,
        GetPictureWidth = 168,
        GetReplaceWithString = 89,
        GetSelectedCellBottomPadding = 151,
        GetSelectedCellLeftPadding = 150,
        GetSelectedCellRightPadding = 152,
        GetSelectedCellTopPadding = 149,
        GetSelectedCellVerticalAlignment = 148,
        GetSelectedColumnWidth = 142,
        GetSelectedRowHeight = 140,
        GetSelectedTextBackgroundColor = 127,
        GetSelectedTextFont = 124,
        GetSelectedTextFontColor = 125,
        GetSelectedTextFontSize = 123,
        GetSelectedTextHighlightColor = 126,
        GetSpellingSuggestion = 138,
        GetSpellingSuggestionsCount = 137,
        GetSubmitButtonCaption = 9,
        GetTableDirection = 77,
        GetTableHorizontalAlignment = 75,
        GotoFirstErrorOnView = 107,
        GotoNextErrorOnView = 10,
        IgnoreAllOfMisspelledWord = 130,
        IgnoreMisspelledWord = 129,
        IncreaseFontSizeBy2 = 118,
        IncreaseIndent = 61,
        InsertBulletedList = 22,
        InsertBulletedListEmptyCircle = 48,
        InsertBulletedListSolidCircle = 47,
        InsertBulletedListSolidSquare = 49,
        InsertColumnLeft = 64,
        InsertColumnRight = 65,
        InsertHorizontalLine = 78,
        InsertHyperlink = 81,
        InsertImage = 80,
        InsertNumberedList = 21,
        InsertNumberedListAlphaLowercase = 43,
        InsertNumberedListAlphaUppercase = 44,
        InsertNumberedListDecimal = 42,
        InsertNumberedListRomanLowercase = 45,
        InsertNumberedListRomanUppercase = 46,
        InsertPictureFromFile = 13,
        InsertRowAbove = 62,
        InsertRowBelow = 63,
        InsertTable = 128,
        IsFormDirectionLeftToRight = 175,
        IsFormDirectionRightToLeft = 174,
        MergeCells = 73,
        Paste = 54,
        PasteAsText = 178,
        PasteKeepSourceFormatting = 176,
        PasteMatchDestination = 177,
        Redo = 57,
        RemoveHyperlink = 160,
        Replace = 95,
        ReplaceAll = 96,
        Save = 5,
        SaveAs = 6,
        SelectAll = 55,
        SelectCell = 72,
        SelectColumns = 71,
        SelectHyperlink = 82,
        SelectNextColumn = 146,
        SelectNextRow = 144,
        SelectPreviousColumn = 147,
        SelectPreviousRow = 145,
        SelectRows = 70,
        SelectTable = 69,
        Set15LineSpacing = 40,
        SetAutoSpaceBetweenAsianAndLatinText = 83,
        SetAutoSpaceBetweenAsianTextAndNumbers = 84,
        SetDoubleLineSpacing = 41,
        SetFindReplaceOptionMatchCase = 91,
        SetFindReplaceOptionSearchDirection = 93,
        SetFindReplaceOptionUseWildcards = 92,
        SetFindReplaceOptionWholeWordOnly = 90,
        SetFindString = 86,
        SetFontFormattingBold = 26,
        SetFontFormattingHeading1 = 110,
        SetFontFormattingHeading2 = 111,
        SetFontFormattingHeading3 = 112,
        SetFontFormattingHeading4 = 113,
        SetFontFormattingHeading5 = 114,
        SetFontFormattingHeading6 = 115,
        SetFontFormattingItalic = 27,
        SetFontFormattingNormal = 116,
        SetFontFormattingStrikethrough = 31,
        SetFontFormattingSubscript = 30,
        SetFontFormattingSuperscript = 29,
        SetFontFormattingUnderline = 28,
        SetPictureAlternativeText = 166,
        SetPictureHeight = 164,
        SetPictureInlineWithText = 161,
        SetPictureToLeftOfText = 162,
        SetPictureToRightOfText = 163,
        SetPictureWidth = 165,
        SetReplaceWithString = 88,
        SetSelectedCellAlignmentBottom = 156,
        SetSelectedCellAlignmentMiddle = 154,
        SetSelectedCellAlignmentTop = 155,
        SetSelectedCellPadding = 153,
        SetSelectedColumnWidth = 143,
        SetSelectedRowHeight = 141,
        SetSelectedTextBackgroundColor = 122,
        SetSelectedTextFont = 106,
        SetSelectedTextFontColor = 121,
        SetSelectedTextFontSize = 105,
        SetSelectedTextHighlightColor = 120,
        SetSingleLineSpacing = 39,
        SetSpellingOptionCheckAsYouType = 136,
        SetTableDirection = 76,
        SetTableHorizontalAlignment = 74,
        SetTextDirectionDefault = 36,
        SetTextDirectionLeftToRight = 37,
        SetTextDirectionRightToLeft = 38,
        ShowBordersShadingDialog = 18,
        ShowCurrentErrorMessage = 11,
        ShowDigitalSignaturesDialog = 108,
        ShowEditHyperlinkDialog = 20,
        ShowExportToExcelDialog = 7,
        ShowExportToPDFXPSDialog = 173,
        ShowExportToWebDialog = 2,
        ShowFormatPictureDialog = 17,
        ShowImportFormDataDialog = 1,
        ShowInsertHyperlinkDialog = 19,
        ShowInsertSymbolDialog = 79,
        ShowInsertTableDialog = 14,
        ShowMergeFormDialog = 0,
        ShowSetLanguageDialog = 12,
        ShowSetSelectedTextFontColorDialog = 99,
        ShowSetSelectedTextHighlightColorDialog = 100,
        ShowSplitCellsDialog = 15,
        ShowTablePropertiesDialog = 16,
        SplitCells = 157,
        Submit = 8,
        Undo = 56,
        WorkOffline = 3,
    }

    const enum XdAttachmentType {
        xdNone = 2,
        xdXml = 0,
        xdXmlXsn = 1,
    }

    const enum XdCertificateStatus {
        xdCertificateStatusError = 0,
        xdCertificateStatusExpired = 2,
        xdCertificateStatusNotTrusted = 3,
        xdCertificateStatusRevoked = 4,
        xdCertificateStatusValid = 1,
    }

    const enum XdConfirmButtons {
        xdOKCancel = 1,
        xdYesNo = 4,
        xdYesNoCancel = 3,
    }

    const enum XdConfirmChoice {
        xdCancel = 2,
        xdNo = 7,
        xdOK = 1,
        xdYes = 6,
    }

    const enum XdDocumentVersionMode {
        xdCanOpenInReadOnlyMode = 8,
        xdCanTransformSigned = 16,
        xdDoNotInstallActiveXCabs = 128,
        xdFailOnVersionMismatch = 0,
        xdFailOnVersionOlder = 1,
        xdIgnoreDataAdaptersQueryFailure = 64,
        xdPromptTransformSigned = 32,
        xdUseExistingVersion = 2,
    }

    const enum XdMachineOnlineState {
        xdIEIsInOfflineMode = 2,
        xdOffline = 0,
        xdOnline = 1,
    }

    const enum XdReadOnlyViewMode {
        xdDefault = 0,
        xdFrozen = 2,
        xdNonEditable = 1,
    }

    const enum XdSignatureAppearanceType {
        xdSignatureAppearanceTypeLine = 0,
        xdSignatureAppearanceTypeStamp = 1,
    }

    const enum XdSignatureRelation {
        xdSignatureRelationCoSign = 2,
        xdSignatureRelationCounterSign = 3,
        xdSignatureRelationSingle = 1,
    }

    const enum XdSignatureStatus {
        xdSignatureStatusError = 0,
        xdSignatureStatusInvalid = 2,
        xdSignatureStatusUnsupported = 3,
        xdSignatureStatusValid = 1,
    }

    const enum XdTaskPaneType {
        xdTaskPaneBulletsNumbering = 9,
        xdTaskPaneClipArt = 5,
        xdTaskPaneDesignerNew = 2,
        xdTaskPaneFillOutAForm = 1,
        xdTaskPaneFind = 6,
        xdTaskPaneFormatting = 8,
        xdTaskPaneHelp = 4,
        xdTaskPaneHTML = 0,
        xdTaskPaneHWSWorkflow = 12,
        xdTaskPaneParaFormatting = 11,
        xdTaskPaneReplace = 7,
        xdTaskPaneSearchResults = 3,
        xdTaskPaneSpelling = 10,
    }

    const enum XdWindowState {
        xdWindowStateMaximize = 1,
        xdWindowStateMinimize = 3,
        xdWindowStateNormal = 2,
    }

    const enum XdWindowType {
        xdDesignerWindow = 1,
        xdEditorWindow = 0,
    }

    class _XDocument {
        private 'InfoPath._XDocument_typekey': _XDocument;
        private constructor();
        readonly DataObjects: DataObjectsCollection;
        readonly DOM: MSXML2.IXMLDOMDocument;
        readonly Errors: ADODB.Errors;
        readonly Extension: any;
        GetDataVariable(lVariableNumber: number): string;
        GetDOM(bstrName: string): MSXML2.IXMLDOMDocument;
        ImportFile(bstrFileURI: string): void;
        readonly IsDirty: boolean;
        readonly IsDOMReadOnly: boolean;
        readonly IsNew: boolean;
        readonly IsReadOnly: boolean;
        readonly IsSigned: boolean;
        Language: string;
        PrintOut(): void;
        Query(): void;
        readonly QueryAdapter: any;
        Save(): void;
        SaveAs(bstrFileUrl: string): void;
        SetDataVariable(lVariableNumber: number, bstrVariableValue: string): void;
        readonly Solution: SolutionObject;
        Submit(): void;
        readonly UI: UI;
        readonly URI: string;
        readonly View: ViewObject;
        readonly ViewInfos: ViewInfosCollection;
    }

    class ADOAdapterObject {
        private 'InfoPath.ADOAdapterObject_typekey': ADOAdapterObject;
        private constructor();
        BuildSQLFromXMLNodes(pXmlNode: MSXML2.IXMLDOMNode): string;
        Command: string;
        Connection: string;
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        Submit(): void;
        readonly SubmitAllowed: boolean;
        Timeout: number;
    }

    class Application {
        private 'InfoPath.Application_typekey': Application;
        private constructor();
        readonly ActiveWindow: Window;
        CacheSolution(bstrSolutionURI: string): void;
        FormatString(varInput: any, bstrCategory: string, bstrOptions: string): string;
        IsDestinationReachable(bstrDestination: string): boolean;
        readonly LanguageSettings: any;
        readonly MachineOnlineState: XdMachineOnlineState;
        readonly Name: string;
        NewADODBConnection(): ADODB.Connection;
        NewADODBRecordset(): ADODB.Recordset;

        /** @param boolean [bForce=false] */
        Quit(bForce?: boolean): void;

        /** @param string [bstrBehavior='overwrite'] */
        RegisterSolution(bstrSolutionURL: string, bstrBehavior?: string): void;
        UnregisterSolution(bstrSolutionURI: string): void;
        readonly UsableHeight: number;
        readonly UsableWidth: number;
        readonly User: UserObject;
        readonly Version: string;
        readonly Windows: WindowsCollection;
        readonly XDocuments: XDocuments;
    }

    class ApplicationEvents {
        private 'InfoPath.ApplicationEvents_typekey': ApplicationEvents;
        private constructor();
    }

    class BDCAdapterObject {
        private 'InfoPath.BDCAdapterObject_typekey': BDCAdapterObject;
        private constructor();
        readonly EntityName: string;
        readonly EntityNamespace: string;
        readonly LOBSystemInstance: string;
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        readonly SpecificFinder: string;
        Submit(): void;
        readonly SubmitAdapterName: string;
        readonly SubmitAllowed: boolean;
    }

    class Button {
        private 'InfoPath.Button_typekey': Button;
        private constructor();
    }

    class CertificateObject {
        private 'InfoPath.CertificateObject_typekey': CertificateObject;
        private constructor();
        readonly ExpirationDate: string;
        readonly IssuedBy: string;
        readonly IssuedTo: string;
        readonly Status: XdCertificateStatus;
    }

    class DataAdaptersCollection {
        private 'InfoPath.DataAdaptersCollection_typekey': DataAdaptersCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): any;
    }

    class DataDOM {
        private 'InfoPath.DataDOM_typekey': DataDOM;
        private constructor();
    }

    class DataDOMEventObject {
        private 'InfoPath.DataDOMEventObject_typekey': DataDOMEventObject;
        private constructor();
        readonly IsUndoRedo: boolean;
        readonly MatchExpression: string;
        readonly NewValue: any;
        readonly OldValue: any;
        readonly Operation: string;
        readonly Parent: MSXML2.IXMLDOMNode;

        /**
         * @param string [bstrDetailedErrorMessage='']
         * @param number [lErrorCode=0]
         * @param string [bstrType='modeless']
         */
        ReportError(varNode: any, bstrShortErrorMessage: string, fSiteIndependent: boolean, bstrDetailedErrorMessage?: string, lErrorCode?: number, bstrType?: string): ErrorObject;
        ReturnMessage: string;
        ReturnStatus: boolean;
        readonly Site: MSXML2.IXMLDOMNode;
        readonly Source: MSXML2.IXMLDOMNode;
        readonly XDocument: _XDocument;
    }

    class DataObjectsCollection {
        private 'InfoPath.DataObjectsCollection_typekey': DataObjectsCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): DataSourceObject;
    }

    class DataSourceObject {
        private 'InfoPath.DataSourceObject_typekey': DataSourceObject;
        private constructor();
        readonly DOM: MSXML2.IXMLDOMDocument;
        readonly Name: string;
        Query(): void;
        readonly QueryAdapter: any;
    }

    class DateObject {
        private 'InfoPath.DateObject_typekey': DateObject;
        private constructor();
        AddDays(pvarDate: any, pvarDays: any): any;
        AddSeconds(pvarTime: any, pvarSeconds: any): any;
        Now(): any;
        Today(): any;
    }

    class DAVAdapterObject {
        private 'InfoPath.DAVAdapterObject_typekey': DAVAdapterObject;
        private constructor();
        FileName: string;
        FolderURL: string;
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        Submit(): void;
        readonly SubmitAllowed: boolean;
        SubmitData(pData: MSXML2.IXMLDOMNode): void;
    }

    class DocActionEventObject {
        private 'InfoPath.DocActionEventObject_typekey': DocActionEventObject;
        private constructor();
        ReturnStatus: boolean;
        readonly Source: MSXML2.IXMLDOMNode;
        readonly XDocument: _XDocument;
    }

    class DocContextChangeEventObject {
        private 'InfoPath.DocContextChangeEventObject_typekey': DocContextChangeEventObject;
        private constructor();
        readonly Context: MSXML2.IXMLDOMNode;
        readonly IsUndoRedo: boolean;
        readonly Type: string;
        readonly XDocument: _XDocument;
    }

    class DocEventObject {
        private 'InfoPath.DocEventObject_typekey': DocEventObject;
        private constructor();
        readonly XDocument: _XDocument;
    }

    class DocReturnEventObject {
        private 'InfoPath.DocReturnEventObject_typekey': DocReturnEventObject;
        private constructor();
        ReturnStatus: boolean;
        readonly XDocument: _XDocument;
    }

    class EmailAdapterObject {
        private 'InfoPath.EmailAdapterObject_typekey': EmailAdapterObject;
        private constructor();
        AttachmentFileName: string;
        AttachmentType: XdAttachmentType;
        BCC: string;
        CC: string;
        Intro: string;
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        Subject: string;
        Submit(): void;
        readonly SubmitAllowed: boolean;
        SubmitData(pData: MSXML2.IXMLDOMNode): void;
        To: string;
    }

    class ErrorObject {
        private 'InfoPath.ErrorObject_typekey': ErrorObject;
        private constructor();
        readonly ConditionName: any;
        DetailedErrorMessage: string;
        ErrorCode: number;
        readonly Node: MSXML2.IXMLDOMNode;
        ShortErrorMessage: string;
        readonly Type: string;
    }

    class ErrorsCollection {
        private 'InfoPath.ErrorsCollection_typekey': ErrorsCollection;
        private constructor();

        /**
         * @param string [bstrDetailedErrorMessage='']
         * @param number [lErrorCode=0]
         * @param string [bstrType='modeless']
         */
        Add(varNode: any, bstrConditionName: string, bstrShortErrorMessage: string, bstrDetailedErrorMessage?: string, lErrorCode?: number, bstrType?: string): ADODB.Error;
        readonly Count: number;
        Delete(varNode: any, bstrConditionName: string): void;
        DeleteAll(): void;
        Item(index: number): ADODB.Error;
    }

    class ExternalApplication {
        private 'InfoPath.ExternalApplication_typekey': ExternalApplication;
        private constructor();
        CacheSolution(bstrSolutionURI: string): void;
        Close(bstrDocumentURI: string): void;

        /** @param number [dwBehavior=1] */
        New(bstrDocumentURI: string, dwBehavior?: number): void;
        NewFromSolution(bstrSolutionURI: string): void;
        NewFromSolutionWithInputParameters(bstrSolutionURI: string, bstrInputParameters: string): void;

        /** @param number [dwBehavior=1] */
        Open(bstrDocumentURI: string, dwBehavior?: number): void;
        Quit(): void;

        /** @param string [bstrBehavior='overwrite'] */
        RegisterSolution(bstrSolutionURL: string, bstrBehavior?: string): void;
        UnregisterSolution(bstrSolutionURI: string): void;
    }

    class HTMLTaskPaneObject {
        private 'InfoPath.HTMLTaskPaneObject_typekey': HTMLTaskPaneObject;
        private constructor();
        readonly HTMLDocument: MSHTML.IHTMLDocument2;
        readonly HTMLWindow: MSHTML.IHTMLWindow2;
        Navigate(bstrURL: string): void;
        readonly Type: XdTaskPaneType;
        Visible: boolean;
    }

    class HWSAdapterObject {
        private 'InfoPath.HWSAdapterObject_typekey': HWSAdapterObject;
        private constructor();
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        Submit(): void;
        readonly SubmitAllowed: boolean;
    }

    class IInitEventHandler {
        private 'InfoPath.IInitEventHandler_typekey': IInitEventHandler;
        private constructor();
        InitEventHandler(punkSender: any, pDocument: _XDocument, pROMode: XdReadOnlyViewMode): void;
    }

    class InfoPathEditorObject {
        private 'InfoPath.InfoPathEditorObject_typekey': InfoPathEditorObject;
        private constructor();
        CloseDocument(): void;
        DataConnectionBaseUrl: string;
        FlushDocument(): void;
        Host: any;
        HostName: string;
        Load(bstrURL: string): void;
        LoadFromStream(punkStream: any): void;
        NewFromSolution(bstrSolutionURI: string): void;
        NewFromSolutionWithData(bstrURLXSN: string, punkStream: any, dwBehavior: number): void;
        SetInitEventHandler(handler: IInitEventHandler): void;
        SetNotifyHostEventHandler(pHandler: INotifyHostEventHandler): void;
        SetSubmitToHostEventHandler(pHandler: ISubmitToHostEventHandler): void;
        readonly XDocument: _XDocument;
    }

    class INotifyHostEventHandler {
        private 'InfoPath.INotifyHostEventHandler_typekey': INotifyHostEventHandler;
        private constructor();
        NotifyHostEventHandler(punkSender: any, bstrNotification: string): void;
    }

    class InputParameterCollection {
        private 'InfoPath.InputParameterCollection_typekey': InputParameterCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): InputParameterObject;
    }

    class InputParameterObject {
        private 'InfoPath.InputParameterObject_typekey': InputParameterObject;
        private constructor();
        readonly Name: string;
        readonly Value: string;
    }

    class ISubmitToHostEventHandler {
        private 'InfoPath.ISubmitToHostEventHandler_typekey': ISubmitToHostEventHandler;
        private constructor();
        SubmitToHostEventHandler(punkSender: any, bstrAdapterName: string, pbstrErrorMessage: string): number;
    }

    class MailEnvelopeObject {
        private 'InfoPath.MailEnvelopeObject_typekey': MailEnvelopeObject;
        private constructor();
        BCC: string;
        CC: string;
        Subject: string;
        To: string;
        Visible: boolean;
    }

    class MathObject {
        private 'InfoPath.MathObject_typekey': MathObject;
        private constructor();
        Avg(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
        Eval(pxmllistContext: MSXML2.IXMLDOMNodeList, bstrExpression: string): any;
        Max(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
        Min(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
        Nz(pxmllistInput: MSXML2.IXMLDOMNodeList): any;
    }

    class MergeEventObject {
        private 'InfoPath.MergeEventObject_typekey': MergeEventObject;
        private constructor();
        readonly Count: number;
        readonly DOM: MSXML2.IXMLDOMDocument;
        readonly index: number;
        ReturnStatus: boolean;
        RollBack: boolean;
        readonly XDocument: _XDocument;
    }

    class PermissionObject {
        private 'InfoPath.PermissionObject_typekey': PermissionObject;
        private constructor();
        Add(bstrUserId: string, varPermission?: any, varExpirationDate?: any): UserPermissionObject;
        ApplyPolicy(bstrFileName: string): void;
        readonly Count: number;
        DocumentAuthor: string;
        Enabled: boolean;
        Item(varIndex: any): UserPermissionObject;
        readonly PermissionFromPolicy: boolean;
        readonly PolicyDescription: string;
        readonly PolicyName: string;
        RemoveAll(): void;
        RequestPermissionURL: string;
        StoreLicenses: boolean;
    }

    class SaveEventObject {
        private 'InfoPath.SaveEventObject_typekey': SaveEventObject;
        private constructor();
        readonly FileName: string;
        IsCancelled: boolean;
        readonly IsSaveAs: boolean;
        PerformSaveOperation(): boolean;
        ReturnStatus: boolean;
        readonly XDocument: _XDocument;
    }

    class ServerInfoObject {
        private 'InfoPath.ServerInfoObject_typekey': ServerInfoObject;
        private constructor();
        readonly SharePointListUrl: string;
        readonly SharePointServerRootUrl: string;
        readonly SharePointSiteCollectionUrl: string;
        readonly SharePointSiteUrl: string;
    }

    class SharepointListAdapterObject {
        private 'InfoPath.SharepointListAdapterObject_typekey': SharepointListAdapterObject;
        private constructor();
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        readonly SiteUrl: string;
        Submit(): void;
        readonly SubmitAllowed: boolean;
    }

    class SharePointListAdapterRWObject {
        private 'InfoPath.SharePointListAdapterRWObject_typekey': SharePointListAdapterRWObject;
        private constructor();
        ContentTypeId: string;
        ListId: string;
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        SiteUrl: string;
        Submit(): void;
        readonly SubmitAllowed: boolean;
    }

    class SignatureLineObject {
        private 'InfoPath.SignatureLineObject_typekey': SignatureLineObject;
        private constructor();
        readonly Id: string;
        Sign(bstrImageURL: string, bstrSuggestedSigner: string, bstrSuggestedSignerTitle: string, bstrSuggestedSignerEmailAddress: string): boolean;
        readonly Signature: SignatureObject;
        readonly SignatureAppearanceType: XdSignatureAppearanceType;
        SuggestedSigner: string;
        SuggestedSignerEmailAddress: string;
        SuggestedSignerTitle: string;
    }

    class SignatureLinesCollection {
        private 'InfoPath.SignatureLinesCollection_typekey': SignatureLinesCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): SignatureLineObject;
    }

    class SignatureObject {
        private 'InfoPath.SignatureObject_typekey': SignatureObject;
        private constructor();
        readonly Certificate: CertificateObject;
        readonly Comment: string;
        Sign(): void;
        readonly SignatureBlockXmlNode: MSXML2.IXMLDOMNode;
        readonly Status: XdSignatureStatus;
    }

    class SignaturesCollection {
        private 'InfoPath.SignaturesCollection_typekey': SignaturesCollection;
        private constructor();
        readonly Count: number;
        Create(): SignatureObject;
        Item(varIndex: any): SignatureObject;
    }

    class SignedDataBlockObject {
        private 'InfoPath.SignedDataBlockObject_typekey': SignedDataBlockObject;
        private constructor();
        readonly Caption: string;
        readonly Name: string;
        Sign(): void;
        readonly SignatureContainer: MSXML2.IXMLDOMNode;
        readonly SignatureRelation: XdSignatureRelation;
        readonly Signatures: SignaturesCollection;
        readonly XPath: string;
        readonly XPathNamespaceDeclarations: string;
    }

    class SignedDataBlocksCollection {
        private 'InfoPath.SignedDataBlocksCollection_typekey': SignedDataBlocksCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): SignedDataBlockObject;
    }

    class SignEventObject {
        private 'InfoPath.SignEventObject_typekey': SignEventObject;
        private constructor();
        ReturnStatus: boolean;
        readonly SignedDataBlock: SignedDataBlockObject;
        readonly XDocument: _XDocument;
    }

    class SolutionObject {
        private 'InfoPath.SolutionObject_typekey': SolutionObject;
        private constructor();
        readonly DOM: MSXML2.IXMLDOMDocument;
        readonly PackageURL: string;
        readonly URI: string;
        readonly Version: string;
    }

    class SubmitToHostAdapterObject {
        private 'InfoPath.SubmitToHostAdapterObject_typekey': SubmitToHostAdapterObject;
        private constructor();
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        Submit(): void;
        readonly SubmitAllowed: boolean;
    }

    class TaskPaneObject {
        private 'InfoPath.TaskPaneObject_typekey': TaskPaneObject;
        private constructor();
        readonly Type: XdTaskPaneType;
        Visible: boolean;
    }

    class TaskPanesCollection {
        private 'InfoPath.TaskPanesCollection_typekey': TaskPanesCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): TaskPaneObject;
    }

    class UI {
        private 'InfoPath.UI_typekey': UI;
        private constructor();
        Alert(bstrAlertString: string): void;
        ShowMailItem(bstrTo: string, bstrCC: string, bstrBCC: string, bstrSubject: string, bstrBody: string): void;
        ShowModalDialog(bstrName: string, varArguments?: any, varHeight?: any, varWidth?: any, varTop?: any, varLeft?: any): any;
        ShowSignatureDialog(): void;
    }

    class UIObject {
        private 'InfoPath.UIObject_typekey': UIObject;
        private constructor();
        Alert(bstrAlertString: string): void;
        Confirm(bstrPrompt: string, lButtons: XdConfirmButtons): XdConfirmChoice;
        SetSaveAsDialogFileName(bstrFileName: string): void;
        SetSaveAsDialogLocation(bstrLocation: string): void;
        ShowMailItem(bstrTo: string, bstrCC: string, bstrBCC: string, bstrSubject: string, bstrBody: string): void;
        ShowModalDialog(bstrName: string, varArguments?: any, varHeight?: any, varWidth?: any, varTop?: any, varLeft?: any): any;
        ShowSignatureDialog(): void;
    }

    class UserObject {
        private 'InfoPath.UserObject_typekey': UserObject;
        private constructor();
        IsCurrentUser(bstrUsername: string): boolean;
        IsUserMemberOf(bstrGroupname: string): boolean;
    }

    class UserPermissionObject {
        private 'InfoPath.UserPermissionObject_typekey': UserPermissionObject;
        private constructor();
        ExpirationDate: any;
        readonly Parent: any;
        Permission: number;
        Remove(): void;
        readonly UserId: string;
    }

    class UtilObject {
        private 'InfoPath.UtilObject_typekey': UtilObject;
        private constructor();
        readonly Date: VarDate;
        Match(bstrValue: string, bstrPattern: string): boolean;
        readonly Math: MathObject;
    }

    class VersionUpgradeEventObject {
        private 'InfoPath.VersionUpgradeEventObject_typekey': VersionUpgradeEventObject;
        private constructor();
        readonly DocumentVersion: string;
        ReturnStatus: boolean;
        readonly SolutionVersion: string;
        readonly XDocument: _XDocument;
    }

    class ViewInfoObject {
        private 'InfoPath.ViewInfoObject_typekey': ViewInfoObject;
        private constructor();
        IsDefault: boolean;
        readonly Name: string;
    }

    class ViewInfosCollection {
        private 'InfoPath.ViewInfosCollection_typekey': ViewInfosCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): ViewInfoObject;
    }

    class ViewObject {
        private 'InfoPath.ViewObject_typekey': ViewObject;
        private constructor();
        DisableAutoUpdate(): void;
        EnableAutoUpdate(): void;
        ExecuteAction(bstrAction: string, varXmlToEdit?: any): void;
        Export(bstrURL: string, bstrFormat: string): void;
        ForceUpdate(): void;
        GetContextNodes(varNode?: any, varViewContext?: any): XMLNodesCollection;
        GetSelectedNodes(): XMLNodesCollection;
        readonly Name: string;
        SelectNodes(pxnStartNode: MSXML2.IXMLDOMNode, varEndNode?: any, varViewContext?: any): void;
        SelectText(pxnField: MSXML2.IXMLDOMNode, varViewContext?: any): void;
        SwitchView(bstrName: string): void;
        readonly Window: Window;
    }

    class WebServiceAdapterObject {
        private 'InfoPath.WebServiceAdapterObject_typekey': WebServiceAdapterObject;
        private constructor();
        readonly ErrorsLocation: MSXML2.IXMLDOMNode;
        GenerateDataSetDiffGram(pNode: MSXML2.IXMLDOMNode): MSXML2.IXMLDOMNode;
        Input: string;
        readonly Name: string;
        Operation: string;
        readonly OutputLocation: MSXML2.IXMLDOMNode;
        Query(): void;
        readonly QueryAllowed: boolean;
        Submit(): void;
        readonly SubmitAllowed: boolean;
        Timeout: number;
        readonly WSDLURL: string;
    }

    class Window {
        private 'InfoPath.Window_typekey': Window;
        private constructor();
        Activate(): void;
        readonly Active: boolean;

        /** @param boolean [fForce=false] */
        Close(fForce?: boolean): void;
        readonly CommandBars: any;
        readonly MailEnvelope: MailEnvelopeObject;
        readonly TaskPanes: TaskPanesCollection;
        readonly Type: XdWindowType;
        readonly XDocument: _XDocument;
    }

    class WindowObject {
        private 'InfoPath.WindowObject_typekey': WindowObject;
        private constructor();
        Activate(): void;
        readonly Active: boolean;
        Caption: string;

        /** @param boolean [fForce=false] */
        Close(fForce?: boolean): void;
        readonly CommandBars: any;
        Height: number;
        Left: number;
        readonly MailEnvelope: MailEnvelopeObject;
        readonly TaskPanes: TaskPanesCollection;
        Top: number;
        readonly Type: XdWindowType;
        Width: number;
        WindowState: XdWindowState;
        readonly XDocument: _XDocument;
    }

    class WindowsCollection {
        private 'InfoPath.WindowsCollection_typekey': WindowsCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): Window;
    }

    class XDNetworkState {
        private 'InfoPath.XDNetworkState_typekey': XDNetworkState;
        private constructor();
        IsDestinationReachable(bstrDestination: string): boolean;
        readonly MachineOnlineState: XdMachineOnlineState;
    }

    class XDocument {
        private 'InfoPath.XDocument_typekey': XDocument;
        private constructor();
        CreateDOM(): MSXML2.IXMLDOMDocument;
        readonly DataAdapters: DataAdaptersCollection;
        readonly DataObjects: DataObjectsCollection;
        readonly DOM: MSXML2.IXMLDOMDocument;
        readonly Errors: ADODB.Errors;
        readonly Extension: any;
        GetDataVariable(lVariableNumber: number): string;
        GetDOM(bstrName: string): MSXML2.IXMLDOMDocument;
        GetNamedNodeProperty(varMainDOMNode: any, bstrPropertyName: string, bstrDefaultValue: string): string;
        ImportDOM(pxDoc: MSXML2.IXMLDOMDocument): void;
        ImportFile(bstrFileURI: string): void;
        readonly IsDirty: boolean;
        readonly IsDOMReadOnly: boolean;
        readonly IsNew: boolean;
        readonly IsReadOnly: boolean;
        readonly IsRecovered: boolean;
        readonly IsSigned: boolean;
        Language: string;
        PrintOut(): void;
        Query(): void;
        readonly QueryAdapter: any;
        Role: string;
        Save(): void;
        SaveAs(bstrFileUrl: string): void;
        SetDataVariable(lVariableNumber: number, bstrVariableValue: string): void;
        SetDirty(vfIsDirty: boolean): void;
        SetNamedNodeProperty(pxmlMainDOMNode: MSXML2.IXMLDOMNode, bstrPropertyName: string, bstrValue: string): void;
        readonly SignedDataBlocks: SignedDataBlocksCollection;
        readonly Solution: SolutionObject;
        Submit(): void;
        readonly UI: UI;
        readonly URI: string;
        readonly Util: UtilObject;
        readonly View: ViewObject;
        readonly ViewInfos: ViewInfosCollection;
    }

    class XDocuments {
        private 'InfoPath.XDocuments_typekey': XDocuments;
        private constructor();
        Close(varIndex: any): void;
        readonly Count: number;
        Item(varIndex: any): _XDocument;

        /** @param number [dwBehavior=1] */
        New(varURI: any, dwBehavior?: number): _XDocument;
        NewFromSolution(varURI: any): _XDocument;

        /** @param number [dwBehavior=1] */
        Open(varURI: any, dwBehavior?: number): _XDocument;
    }

    class XDocumentsCollection {
        private 'InfoPath.XDocumentsCollection_typekey': XDocumentsCollection;
        private constructor();
        Close(varIndex: any): void;
        readonly Count: number;
        Item(varIndex: any): _XDocument;

        /** @param number [dwBehavior=1] */
        New(varURI: any, dwBehavior?: number): _XDocument;
        NewFromSolution(varURI: any): _XDocument;

        /** @param number [dwBehavior=1] */
        NewFromSolutionWithData(varXMLData: any, varSolutionURI: any, dwBehavior?: number): XDocument;

        /** @param number [dwBehavior=1] */
        Open(varURI: any, dwBehavior?: number): _XDocument;
    }

    class XMLFileAdapterObject {
        private 'InfoPath.XMLFileAdapterObject_typekey': XMLFileAdapterObject;
        private constructor();
        FileURL: string;
        readonly Name: string;
        Query(): void;
        readonly QueryAllowed: boolean;
        Submit(): void;
        readonly SubmitAllowed: boolean;
    }

    class XMLNodesCollection {
        private 'InfoPath.XMLNodesCollection_typekey': XMLNodesCollection;
        private constructor();
        readonly Count: number;
        Item(varIndex: any): MSXML2.IXMLDOMNode;
    }

    namespace EventHelperTypes {
        type Button_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type DataDOM_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type XDocument_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        interface Button_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface DataDOM_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface XDocument_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }
    }
}

interface ActiveXObject {
    on(
        obj: InfoPath.ApplicationEvents, event: 'NewXDocument' | 'XDocumentOpen', argNames: ['pDocument'], handler: (
            this: InfoPath.ApplicationEvents, parameter: {readonly pDocument: InfoPath._XDocument}) => void): void;
    on(
        obj: InfoPath.ApplicationEvents, event: 'WindowActivate' | 'WindowDeactivate' | 'WindowSize', argNames: ['pDocument', 'pWindow'],
        handler: (this: InfoPath.ApplicationEvents, parameter: {readonly pDocument: InfoPath._XDocument, readonly pWindow: InfoPath.Window}) => void): void;
    on(
        obj: InfoPath.ApplicationEvents, event: 'XDocumentBeforeClose' | 'XDocumentBeforePrint' | 'XDocumentBeforeSave', argNames: ['pDocument', 'pfCancel'],
        handler: (this: InfoPath.ApplicationEvents, parameter: {readonly pDocument: InfoPath._XDocument, pfCancel: boolean}) => void): void;
    on(
        obj: InfoPath.Button, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: InfoPath.Button, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: InfoPath.Button, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: InfoPath.Button, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: InfoPath.Button, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: InfoPath.Button, parameter: {pctinfo: number}) => void): void;
    on(
        obj: InfoPath.Button, event: 'Invoke', argNames: InfoPath.EventHelperTypes.Button_Invoke_ArgNames, handler: (
            this: InfoPath.Button, parameter: InfoPath.EventHelperTypes.Button_Invoke_Parameter) => void): void;
    on(obj: InfoPath.Button, event: 'OnClick', argNames: ['pEvent'], handler: (this: InfoPath.Button, parameter: {readonly pEvent: InfoPath.DocActionEventObject}) => void): void;
    on(obj: InfoPath.Button, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: InfoPath.Button, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: InfoPath.DataDOM, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: InfoPath.DataDOM, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: InfoPath.DataDOM, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: InfoPath.DataDOM, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: InfoPath.DataDOM, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: InfoPath.DataDOM, parameter: {pctinfo: number}) => void): void;
    on(
        obj: InfoPath.DataDOM, event: 'Invoke', argNames: InfoPath.EventHelperTypes.DataDOM_Invoke_ArgNames, handler: (
            this: InfoPath.DataDOM, parameter: InfoPath.EventHelperTypes.DataDOM_Invoke_Parameter) => void): void;
    on(
        obj: InfoPath.DataDOM, event: 'OnAfterChange' | 'OnBeforeChange' | 'OnValidate', argNames: ['pDataDOMEvent'], handler: (
            this: InfoPath.DataDOM, parameter: {readonly pDataDOMEvent: InfoPath.DataDOMEventObject}) => void): void;
    on(obj: InfoPath.DataDOM, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: InfoPath.DataDOM, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: InfoPath.XDocument, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: InfoPath.XDocument, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: InfoPath.XDocument, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: InfoPath.XDocument, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: InfoPath.XDocument, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: InfoPath.XDocument, parameter: {pctinfo: number}) => void): void;
    on(
        obj: InfoPath.XDocument, event: 'Invoke', argNames: InfoPath.EventHelperTypes.XDocument_Invoke_ArgNames, handler: (
            this: InfoPath.XDocument, parameter: InfoPath.EventHelperTypes.XDocument_Invoke_Parameter) => void): void;
    on(
        obj: InfoPath.XDocument, event: 'OnAfterImport' | 'OnSwitchView', argNames: ['pEvent'], handler: (
            this: InfoPath.XDocument, parameter: {readonly pEvent: InfoPath.DocEventObject}) => void): void;
    on(obj: InfoPath.XDocument, event: 'OnContextChange', argNames: ['pEvent'], handler: (this: InfoPath.XDocument, parameter: {readonly pEvent: InfoPath.DocContextChangeEventObject}) => void): void;
    on(
        obj: InfoPath.XDocument, event: 'OnLoad' | 'OnSubmitRequest', argNames: ['pEvent'], handler: (
            this: InfoPath.XDocument, parameter: {readonly pEvent: InfoPath.DocReturnEventObject}) => void): void;
    on(obj: InfoPath.XDocument, event: 'OnMergeRequest', argNames: ['pEvent'], handler: (this: InfoPath.XDocument, parameter: {readonly pEvent: InfoPath.MergeEventObject}) => void): void;
    on(obj: InfoPath.XDocument, event: 'OnSaveRequest', argNames: ['pEvent'], handler: (this: InfoPath.XDocument, parameter: {readonly pEvent: InfoPath.SaveEventObject}) => void): void;
    on(obj: InfoPath.XDocument, event: 'OnSign', argNames: ['pEvent'], handler: (this: InfoPath.XDocument, parameter: {readonly pEvent: InfoPath.SignEventObject}) => void): void;
    on(obj: InfoPath.XDocument, event: 'OnVersionUpgrade', argNames: ['pEvent'], handler: (this: InfoPath.XDocument, parameter: {readonly pEvent: InfoPath.VersionUpgradeEventObject}) => void): void;
    on(obj: InfoPath.XDocument, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: InfoPath.XDocument, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: InfoPath.ApplicationEvents, event: 'Quit' | 'XDocumentChange', handler: (this: InfoPath.ApplicationEvents, parameter: {}) => void): void;
    on(obj: InfoPath.Button, event: 'AddRef' | 'Release', handler: (this: InfoPath.Button, parameter: {}) => void): void;
    on(obj: InfoPath.DataDOM, event: 'AddRef' | 'Release', handler: (this: InfoPath.DataDOM, parameter: {}) => void): void;
    on(obj: InfoPath.XDocument, event: 'AddRef' | 'Release', handler: (this: InfoPath.XDocument, parameter: {}) => void): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'InfoPath.Application': InfoPath.Application;
    'InfoPath.Editor': InfoPath.InfoPathEditorObject;
    'InfoPath.ExternalApplication': InfoPath.ExternalApplication;
}

interface EnumeratorConstructor {
    new(col: InfoPath.DataAdaptersCollection): Enumerator<any>; // tslint:disable-line:use-default-type-parameter
    new(col: InfoPath.DataObjectsCollection): Enumerator<InfoPath.DataSourceObject>;
    new(col: InfoPath.ErrorsCollection): Enumerator<ADODB.Error>;
    new(col: InfoPath.InputParameterCollection): Enumerator<InfoPath.InputParameterObject>;
    new(col: InfoPath.PermissionObject): Enumerator<InfoPath.UserPermissionObject>;
    new(col: InfoPath.SignatureLinesCollection): Enumerator<InfoPath.SignatureLineObject>;
    new(col: InfoPath.SignaturesCollection): Enumerator<InfoPath.SignatureObject>;
    new(col: InfoPath.SignedDataBlocksCollection): Enumerator<InfoPath.SignedDataBlockObject>;
    new(col: InfoPath.TaskPanesCollection): Enumerator<InfoPath.TaskPaneObject>;
    new(col: InfoPath.ViewInfosCollection): Enumerator<InfoPath.ViewInfoObject>;
    new(col: InfoPath.WindowsCollection): Enumerator<InfoPath.Window>;
    new(col: InfoPath.XDocuments | InfoPath.XDocumentsCollection): Enumerator<InfoPath._XDocument>;
    new(col: InfoPath.XMLNodesCollection): Enumerator<MSXML2.IXMLDOMNode>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
