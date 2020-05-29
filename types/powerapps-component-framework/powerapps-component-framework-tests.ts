interface TInputs { inputString?: string; }
interface TOutputs { testString: string; }

class TestControl implements ComponentFramework.StandardControl<TInputs, TOutputs> {
    init(context: ComponentFramework.Context<TInputs>, notifyOutputChanged?: () => void, state?: ComponentFramework.Dictionary, container?: HTMLDivElement) {
    }
    updateView(context: ComponentFramework.Context<TInputs>) {
    }
    destroy() {
    }
    getOutputs() {
        return {
            testString: '',
        };
    }
}

const clientTest: ComponentFramework.Client = {
    disableScroll: false,
    getFormFactor: () => 1,
    getClient: () => '',
    isOffline: () => false
};

const tmpFile: ComponentFramework.FileObject = { fileContent: '', fileName: '', fileSize: 0, mimeType: '' };
const deviceTest: ComponentFramework.Device = {
    captureAudio: () => Promise.resolve(tmpFile),
    captureImage: () => Promise.resolve(tmpFile),
    captureVideo: () => Promise.resolve(tmpFile),
    getBarcodeValue: () => Promise.resolve(''),

    getCurrentPosition: () =>
        Promise.resolve({
            coords: {
                latitude: 0,
                longitude: 0,
                accuracy: 0,
                altitude: 0,
                heading: 0,
                speed: 0,
                altitudeAccuracy: 0,
            },
            timestamp: new Date(0),
        }),

    pickFile: () => Promise.resolve([tmpFile]),
};

const formattingTest: ComponentFramework.Formatting = {
    formatCurrency: (value: number) => value.toString(),
    formatDecimal: (value: number) => value.toString(),
    formatDateAsFilterStringInUTC: (value: Date) => value.toString(),
    formatDateLong: (value: Date) => value.toString(),
    formatDateLongAbbreviated: (value: Date) => value.toString(),
    formatDateShort: (value: Date) => value.toString(),
    formatDateYearMonth: (value: Date) => value.toString(),
    formatInteger: (value: number) => value.toString(),
    formatLanguage: (value: number) => value.toString(),
    formatTime: (value: Date, behavior: ComponentFramework.FormattingApi.Types.DateTimeFieldBehavior) => value.toString(),
    getWeekOfYear: (value: Date) => 0,
};

const modeTest: ComponentFramework.Mode = {
    allocatedHeight: -1,
    allocatedWidth: -1,
    isControlDisabled: false,
    isVisible: true,
    label: '',
    setControlState: (state: ComponentFramework.Dictionary) => false,
    setFullScreen: (value: boolean) => null,
    trackContainerResize: (value: boolean) => null
};

const resourcesTest: ComponentFramework.Resources = {
    getResource: (id: string, success: (data: string) => void, failure: () => void) => {},
    getString: (id: string) => ''
};

const dictionary: ComponentFramework.Dictionary = { testKey: '' };

const dataSetApiColumn: ComponentFramework.PropertyHelper.DataSetApi.Column = {
    name: '',
    displayName: '',
    dataType: '',
    alias: '',
    order: 1,
    visualSizeFactor: 1,
    isHidden: false,
    isPrimary: true,
    disableSorting: false
};

const linkEntityExposeExpression: ComponentFramework.PropertyHelper.DataSetApi.LinkEntityExposedExpression = {
    name: '',
    from: '',
    to: '',
    linkType: '',
    alias: ''
};

enum ImeMode {
    Auto = 0,
    Inactive = 1,
    Active = 2,
    Disabled = 3,
}

enum DateTimeFieldBehavior {
    None = 0,
    UserLocal = 1,
    TimeZoneIndependent = 3,
}

const stringMetadataTest: ComponentFramework.PropertyHelper.FieldPropertyMetadata.DateTimeMetadata = {
    DisplayName: '',
    LogicalName: '',
    RequiredLevel: 0,
    IsSecured: false,
    SourceType: 0,
    Description: '',
    ImeMode: ImeMode.Inactive,
    Format: '',
    Behavior: DateTimeFieldBehavior.TimeZoneIndependent,
};

const EntityReferenceTest: ComponentFramework.EntityReference = {
    id: { guid: '' },
    etn: '',
    name: '',
};

const metadataTest: ComponentFramework.PropertyHelper.FieldPropertyMetadata.Metadata = {
    DisplayName: '',
    LogicalName: '',
    RequiredLevel: -1,
    IsSecured: false,
    SourceType: 0,
    Description: '',
};

const propertyTest: ComponentFramework.PropertyTypes.Property = {
    error: false,
    errorMessage: '',
    formatted: '',
    raw: '',
    type: '',
    attributes: metadataTest,
};
