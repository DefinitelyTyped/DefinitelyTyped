export declare enum StringMatchOption {
    StartsWith = 0,
    ExactMatch = 1
}
export interface TimeSpan {
    Days: number;
    Hours: number;
    Milliseconds: number;
    Minutes: number;
    Seconds: number;
    Ticks: number;
    TotalDays: number;
    TotalHours: number;
    TotalMilliseconds: number;
    TotalMinutes: number;
    TotalSeconds: number;
}
export interface ILabelMatchInfo {
    DefaultLabelOnly?: boolean;
    ExcludeKeyword?: boolean;
    Lcid?: number;
    ResultCollectionSize?: number;
    StringMatchOption?: StringMatchOption;
    TermLabel: string;
    TrimDeprecated?: boolean;
    TrimUnavailable?: boolean;
}
export declare enum ChangedItemType {
    Unknown = 0,
    Term = 1,
    TermSet = 2,
    Group = 3,
    TermStore = 4,
    Site = 5
}
export declare enum ChangedOperationType {
    Unknown = 0,
    Add = 1,
    Edit = 2,
    DeleteObject = 3,
    Move = 4,
    Copy = 5,
    PathChange = 6,
    Merge = 7,
    ImportObject = 8,
    Restore = 9
}
export interface ChangedItem {
    ChangedBy: string;
    ChangedTime: string;
    Id: string;
    ItemType: ChangedItemType;
    Operation: ChangedOperationType;
    SiteId?: string;
    TermId?: string;
    ChangedCustomProperties?: string[];
    ChangedLocalCustomProperties?: string[];
    LcidsForChangedDescriptions?: number[];
    LcidsForChangedLabels?: number[];
    TermSetId?: string;
    FromGroupId?: string;
    GroupId?: string;
    ChangedLanguage?: number;
    IsDefaultLanguageChanged?: boolean;
    IsFullFarmRestore?: boolean;
}
export interface ChangeInformation {
    ItemType?: ChangedItemType;
    OperationType?: ChangedOperationType;
    StartTime?: string;
    WithinTimeSpan?: TimeSpan;
}
