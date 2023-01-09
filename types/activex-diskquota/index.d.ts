// Type definitions for non-npm package DiskQuotaTypeLibrary 1.0
// Project: https://msdn.microsoft.com/en-us/library/windows/desktop/bb773938(v=vs.85).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="activex-interop" />

declare namespace DiskQuotaTypeLibrary {
    // eslint-disable-next-line no-const-enum
    const enum AccountStatusConstants {
        dqAcctDeleted = 2,
        dqAcctInvalid = 3,
        dqAcctResolved = 0,
        dqAcctUnavailable = 1,
        dqAcctUnknown = 4,
        dqAcctUnresolved = 5,
    }

    // eslint-disable-next-line no-const-enum
    const enum QuotaStateConstants {
        dqStateDisable = 0,
        dqStateEnforce = 2,
        dqStateTrack = 1,
    }

    // eslint-disable-next-line no-const-enum
    const enum UserNameResolutionConstants {
        dqResolveAsync = 2,
        dqResolveNone = 0,
        dqResolveSync = 1,
    }

    /** Automation interface for DiskQuotaUser */
    class DIDiskQuotaUser {
        private 'DiskQuotaTypeLibrary.DIDiskQuotaUser_typekey': DIDiskQuotaUser;
        private constructor();

        /** Name of user's account container */
        readonly AccountContainerName: string;

        /** Status of user's account */
        readonly AccountStatus: AccountStatusConstants;

        /** User's display name */
        readonly DisplayName: string;

        /** Unique ID number */
        readonly ID: number;

        /** Invalidate data cached in user object */
        Invalidate(): void;

        /** User's logon account name */
        readonly LogonName: string;

        /** User's quota limit (bytes) */
        QuotaLimit: number;

        /** User's quota limit (text) */
        readonly QuotaLimitText: string;

        /** User's quota warning threshold (bytes) */
        QuotaThreshold: number;

        /** User's quota warning threshold (text) */
        readonly QuotaThresholdText: string;

        /** Quota charged to user (bytes) */
        readonly QuotaUsed: number;

        /** Quota charged to user (text) */
        readonly QuotaUsedText: string;
    }

    /** Microsoft Disk Quota */
    class DiskQuotaControl {
        private 'DiskQuotaTypeLibrary.DiskQuotaControl_typekey': DiskQuotaControl;
        private constructor();

        /** Add a user quota entry by Name */
        AddUser(LogonName: string): DIDiskQuotaUser;

        /** Default quota limit applied to new volume users (byte value) */
        DefaultQuotaLimit: number;

        /** Default quota limit applied to new volume users (text string) */
        readonly DefaultQuotaLimitText: string;

        /** Default warning threshold applied to new volume users (byte value) */
        DefaultQuotaThreshold: number;

        /** Default warning threshold applied to new volume users (text string) */
        readonly DefaultQuotaThresholdText: string;

        /** Delete a user quota entry */
        DeleteUser(pUser: DIDiskQuotaUser): void;

        /** Find a user quota entry by Name */
        FindUser(LogonName: string): DIDiskQuotaUser;

        /** Promote a user quota entry to the head of the name resolution queue */
        GiveUserNameResolutionPriority(pUser: DIDiskQuotaUser): void;

        /** Initialize the quota control object for a specified volume */
        Initialize(path: string, bReadWrite: boolean): void;

        /** Invalidate the cache of user name information */
        InvalidateSidNameCache(): void;

        /** Write event log entry when user exceeds quota limit */
        LogQuotaLimit: boolean;

        /** Write event log entry when user exceeds quota warning threshold */
        LogQuotaThreshold: boolean;

        /** Indicates if quota information is out of date */
        readonly QuotaFileIncomplete: boolean;

        /** Indicates if quota information is being rebuilt */
        readonly QuotaFileRebuilding: boolean;

        /** State of the volume's disk quota system */
        QuotaState: QuotaStateConstants;

        /** Terminate the user name resolution thread */
        ShutdownNameResolution(): void;

        /** Translates a user logon name to a security ID */
        TranslateLogonNameToSID(LogonName: string): string;

        /** Control the resolution of user Security IDs to user Names */
        UserNameResolution: UserNameResolutionConstants;
    }
}

interface ActiveXObject {
    on(
        obj: DiskQuotaTypeLibrary.DiskQuotaControl, event: 'OnUserNameChanged', argNames: ['pUser'], handler: (
            this: DiskQuotaTypeLibrary.DiskQuotaControl, parameter: {readonly pUser: DiskQuotaTypeLibrary.DIDiskQuotaUser}) => void): void;
}

interface ActiveXObjectNameMap {
    'Microsoft.DiskQuota': DiskQuotaTypeLibrary.DiskQuotaControl;
}

interface EnumeratorConstructor {
    new(col: DiskQuotaTypeLibrary.DiskQuotaControl): Enumerator<DiskQuotaTypeLibrary.DIDiskQuotaUser>;
}
