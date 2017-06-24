// Type definitions for Microsoft Windows Image Acquisition Library v2.0
// Project: https://msdn.microsoft.com/en-us/library/windows/desktop/ms630827(v=vs.85).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace WIA {

    //Enums
    type CommandID =
        "'{04E725B0-ACAE-11D2-A093-00C04F72DC3C}'" //wiaCommandChangeDocument
        | "'{E208C170-ACAD-11D2-A093-00C04F72DC3C}'" //wiaCommandDeleteAllItems
        | "'{9B26B7B2-ACAD-11D2-A093-00C04F72DC3C}'" //wiaCommandSynchronize
        | "'{AF933CAC-ACAD-11D2-A093-00C04F72DC3C}'" //wiaCommandTakePicture
        | "'{1F3B3D8E-ACAE-11D2-A093-00C04F72DC3C}'"; //wiaCommandUnloadDocument
    const CommandID: {
        wiaCommandChangeDocument: CommandID,
        wiaCommandDeleteAllItems: CommandID,
        wiaCommandSynchronize: CommandID,
        wiaCommandTakePicture: CommandID,
        wiaCommandUnloadDocument: CommandID
    };

    type EventID =
        "'{A28BBADE-64B6-11D2-A231-00C04FA31809}'" //wiaEventDeviceConnected
        | "'{143E4E83-6497-11D2-A231-00C04FA31809}'" //wiaEventDeviceDisconnected
        | "'{4C8F4EF5-E14F-11D2-B326-00C04F68CE61}'" //wiaEventItemCreated
        | "'{1D22A559-E14F-11D2-B326-00C04F68CE61}'" //wiaEventItemDeleted
        | "'{C686DCEE-54F2-419E-9A27-2FC7F2E98F9E}'" //wiaEventScanEmailImage
        | "'{C00EB793-8C6E-11D2-977A-0000F87A926F}'" //wiaEventScanFaxImage
        | "'{9B2B662C-6185-438C-B68B-E39EE25E71CB}'" //wiaEventScanFilmImage
        | "'{A6C5A715-8C6E-11D2-977A-0000F87A926F}'" //wiaEventScanImage
        | "'{FC4767C1-C8B3-48A2-9CFA-2E90CB3D3590}'" //wiaEventScanImage2
        | "'{154E27BE-B617-4653-ACC5-0FD7BD4C65CE}'" //wiaEventScanImage3
        | "'{A65B704A-7F3C-4447-A75D-8A26DFCA1FDF}'" //wiaEventScanImage4
        | "'{9D095B89-37D6-4877-AFED-62A297DC6DBE}'" //wiaEventScanOCRImage
        | "'{B441F425-8C6E-11D2-977A-0000F87A926F}'"; //wiaEventScanPrintImage
    const EventID: {
        wiaEventDeviceConnected: EventID,
        wiaEventDeviceDisconnected: EventID,
        wiaEventItemCreated: EventID,
        wiaEventItemDeleted: EventID,
        wiaEventScanEmailImage: EventID,
        wiaEventScanFaxImage: EventID,
        wiaEventScanFilmImage: EventID,
        wiaEventScanImage: EventID,
        wiaEventScanImage2: EventID,
        wiaEventScanImage3: EventID,
        wiaEventScanImage4: EventID,
        wiaEventScanOCRImage: EventID,
        wiaEventScanPrintImage: EventID
    };

    type FormatID =
        "'{B96B3CAB-0728-11D3-9D7B-0000F81EF32E}'" //wiaFormatBMP
        | "'{B96B3CB0-0728-11D3-9D7B-0000F81EF32E}'" //wiaFormatGIF
        | "'{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}'" //wiaFormatJPEG
        | "'{B96B3CAF-0728-11D3-9D7B-0000F81EF32E}'" //wiaFormatPNG
        | "'{B96B3CB1-0728-11D3-9D7B-0000F81EF32E}'"; //wiaFormatTIFF
    const FormatID: {
        wiaFormatBMP: FormatID,
        wiaFormatGIF: FormatID,
        wiaFormatJPEG: FormatID,
        wiaFormatPNG: FormatID,
        wiaFormatTIFF: FormatID
    };

    type Miscellaneous =
        "'*'" //wiaAnyDeviceID
        | "'{00000000-0000-0000-0000-000000000000}'"; //wiaIDUnknown
    const Miscellaneous: {
        wiaAnyDeviceID: Miscellaneous,
        wiaIDUnknown: Miscellaneous
    };

    const enum WiaDeviceType {
        CameraDeviceType = 2,
        ScannerDeviceType = 1,
        UnspecifiedDeviceType = 0,
        VideoDeviceType = 3
    }

    const enum WiaEventFlag {
        ActionEvent = 2,
        NotificationEvent = 1
    }

    const enum WiaImageBias {
        MaximizeQuality = 131072,
        MinimizeSize = 65536
    }

    const enum WiaImageIntent {
        ColorIntent = 1,
        GrayscaleIntent = 2,
        TextIntent = 4,
        UnspecifiedIntent = 0
    }

    const enum WiaImagePropertyType {
        ByteImagePropertyType = 1001,
        LongImagePropertyType = 1004,
        RationalImagePropertyType = 1006,
        StringImagePropertyType = 1002,
        UndefinedImagePropertyType = 1000,
        UnsignedIntegerImagePropertyType = 1003,
        UnsignedLongImagePropertyType = 1005,
        UnsignedRationalImagePropertyType = 1007,
        VectorOfBytesImagePropertyType = 1101,
        VectorOfLongsImagePropertyType = 1103,
        VectorOfRationalsImagePropertyType = 1105,
        VectorOfUndefinedImagePropertyType = 1100,
        VectorOfUnsignedIntegersImagePropertyType = 1102,
        VectorOfUnsignedLongsImagePropertyType = 1104,
        VectorOfUnsignedRationalsImagePropertyType = 1106
    }

    const enum WiaItemFlag {
        AnalyzeItemFlag = 16,
        AudioItemFlag = 32,
        BurstItemFlag = 2048,
        DeletedItemFlag = 128,
        DeviceItemFlag = 64,
        DisconnectedItemFlag = 256,
        FileItemFlag = 2,
        FolderItemFlag = 4,
        FreeItemFlag = 0,
        GeneratedItemFlag = 16384,
        HasAttachmentsItemFlag = 32768,
        HPanoramaItemFlag = 512,
        ImageItemFlag = 1,
        RemovedItemFlag = -2147483648,
        RootItemFlag = 8,
        StorageItemFlag = 4096,
        TransferItemFlag = 8192,
        VideoItemFlag = 65536,
        VPanoramaItemFlag = 1024
    }

    const enum WiaPropertyType {
        BooleanPropertyType = 1,
        BytePropertyType = 2,
        ClassIDPropertyType = 15,
        CurrencyPropertyType = 12,
        DatePropertyType = 13,
        DoublePropertyType = 11,
        ErrorCodePropertyType = 7,
        FileTimePropertyType = 14,
        HandlePropertyType = 18,
        IntegerPropertyType = 3,
        LargeIntegerPropertyType = 8,
        LongPropertyType = 5,
        ObjectPropertyType = 17,
        SinglePropertyType = 10,
        StringPropertyType = 16,
        UnsignedIntegerPropertyType = 4,
        UnsignedLargeIntegerPropertyType = 9,
        UnsignedLongPropertyType = 6,
        UnsupportedPropertyType = 0,
        VariantPropertyType = 19,
        VectorOfBooleansPropertyType = 101,
        VectorOfBytesPropertyType = 102,
        VectorOfClassIDsPropertyType = 115,
        VectorOfCurrenciesPropertyType = 112,
        VectorOfDatesPropertyType = 113,
        VectorOfDoublesPropertyType = 111,
        VectorOfErrorCodesPropertyType = 107,
        VectorOfFileTimesPropertyType = 114,
        VectorOfIntegersPropertyType = 103,
        VectorOfLargeIntegersPropertyType = 108,
        VectorOfLongsPropertyType = 105,
        VectorOfSinglesPropertyType = 110,
        VectorOfStringsPropertyType = 116,
        VectorOfUnsignedIntegersPropertyType = 104,
        VectorOfUnsignedLargeIntegersPropertyType = 109,
        VectorOfUnsignedLongsPropertyType = 106,
        VectorOfVariantsPropertyType = 119
    }

    const enum WiaSubType {
        FlagSubType = 3,
        ListSubType = 2,
        RangeSubType = 1,
        UnspecifiedSubType = 0
    }

    //Interfaces
    interface CommonDialog {
        ShowAcquireImage: (DeviceType?: WiaDeviceType, Intent?: WiaImageIntent, Bias?: WiaImageBias, FormatID?: string, AlwaysSelectDevice?: boolean, UseCommonUI?: boolean, CancelError?: boolean) => ImageFile;
        ShowAcquisitionWizard: (Device: Device) => any;
        ShowDeviceProperties: (Device: Device, CancelError?: boolean) => void;
        ShowItemProperties: (Item: Item, CancelError?: boolean) => void;
        ShowPhotoPrintingWizard: (Files: any) => void;
        ShowSelectDevice: (DeviceType?: WiaDeviceType, AlwaysSelectDevice?: boolean, CancelError?: boolean) => Device;
        ShowSelectItems: (Device: Device, Intent?: WiaImageIntent, Bias?: WiaImageBias, SingleSelect?: boolean, UseCommonUI?: boolean, CancelError?: boolean) => Items;
        ShowTransfer: (Item: Item, FormatID?: string, CancelError?: boolean) => any;
    }

    interface Device {
        Commands: DeviceCommands;
        DeviceID: string;
        Events: DeviceEvents;
        ExecuteCommand: (CommandID: string) => Item;
        GetItem: (ItemID: string) => Item;
        Items: Items;
        Properties: Properties;
        Type: WiaDeviceType;
        WiaItem: any /*VT_UNKNOWN*/;
    }

    interface DeviceCommand {
        CommandID: string;
        Description: string;
        Name: string;
    }

    interface DeviceCommands {
        Count: number;
        Item: (Index: number) => DeviceCommand;
    }

    interface DeviceEvent {
        Description: string;
        EventID: string;
        Name: string;
        Type: WiaEventFlag;
    }

    interface DeviceEvents {
        Count: number;
        Item: (Index: number) => DeviceEvent;
    }

    interface DeviceInfo {
        Connect: () => Device;
        DeviceID: string;
        Properties: Properties;
        Type: WiaDeviceType;
    }

    interface DeviceInfos {
        Count: number;
        Item: (Index: any) => DeviceInfo;
    }

    interface DeviceManager {
        DeviceInfos: DeviceInfos;
        RegisterEvent: (EventID: string, DeviceID?: string) => void;
        RegisterPersistentEvent: (Command: string, Name: string, Description: string, Icon: string, EventID: string, DeviceID?: string) => void;
        UnregisterEvent: (EventID: string, DeviceID?: string) => void;
        UnregisterPersistentEvent: (Command: string, Name: string, Description: string, Icon: string, EventID: string, DeviceID?: string) => void;
    }

    interface Filter {
        Description: string;
        FilterID: string;
        Name: string;
        Properties: Properties;
    }

    interface FilterInfo {
        Description: string;
        FilterID: string;
        Name: string;
    }

    interface FilterInfos {
        Count: number;
        Item: (Index: any) => FilterInfo;
    }

    interface Filters {
        Add: (FilterID: string, Index?: number) => void;
        Count: number;
        Item: (Index: number) => Filter;
        Remove: (Index: number) => void;
    }

    interface Formats {
        Count: number;
        Item: (Index: number) => string;
    }

    interface ImageFile {
        ActiveFrame: number;
        ARGBData: Vector;
        FileData: Vector;
        FileExtension: string;
        FormatID: string;
        FrameCount: number;
        Height: number;
        HorizontalResolution: number;
        IsAlphaPixelFormat: boolean;
        IsAnimated: boolean;
        IsExtendedPixelFormat: boolean;
        IsIndexedPixelFormat: boolean;
        LoadFile: (Filename: string) => void;
        PixelDepth: number;
        Properties: Properties;
        SaveFile: (Filename: string) => void;
        VerticalResolution: number;
        Width: number;
    }

    interface ImageProcess {
        Apply: (Source: ImageFile) => ImageFile;
        FilterInfos: FilterInfos;
        Filters: Filters;
    }

    interface Item {
        Commands: DeviceCommands;
        ExecuteCommand: (CommandID: string) => Item;
        Formats: Formats;
        ItemID: string;
        Items: Items;
        Properties: Properties;
        Transfer: (FormatID?: string) => any;
        WiaItem: any /*VT_UNKNOWN*/;
    }

    interface Items {
        Add: (Name: string, Flags: number) => void;
        Count: number;
        Item: (Index: number) => Item;
        Remove: (Index: number) => void;
    }

    interface Properties {
        Count: number;
        Exists: (Index: any) => boolean;
        Item: (Index: any) => Property;
    }

    interface Property {
        IsReadOnly: boolean;
        IsVector: boolean;
        Name: string;
        PropertyID: number;
        SubType: WiaSubType;
        SubTypeDefault: any;
        SubTypeMax: number;
        SubTypeMin: number;
        SubTypeStep: number;
        SubTypeValues: Vector;
        Type: number;
        Value: any;
    }

    interface Rational {
        Denominator: number;
        Numerator: number;
        Value: number;
    }

    interface Vector {
        Add: (Value: any, Index?: number) => void;
        BinaryData: any;
        Clear: () => void;
        Count: number;
        Date: VarDate;
        ImageFile: (Width?: number, Height?: number) => ImageFile;
        Item: (Index: number) => any;   //Also has setter with parameters
        Picture: (Width?: number, Height?: number) => any;
        Remove: (Index: number) => any;
        SetFromString: (Value: string, Resizable?: boolean, Unicode?: boolean) => void;
        String: (Unicode?: boolean) => string;
    }

}

interface ActiveXObject {
    new (progID: 'WIA.Rational'): WIA.Rational;
    new (progID: 'WIA.Vector'): WIA.Vector;
    new (progID: 'WIA.ImageFile'): WIA.ImageFile;
    new (progID: 'WIA.ImageProcess'): WIA.ImageProcess;
    new (progID: 'WIA.CommonDialog'): WIA.CommonDialog;
    new (progID: 'WIA.DeviceManager'): WIA.DeviceManager;
}

