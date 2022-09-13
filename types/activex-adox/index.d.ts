// Type definitions for non-npm package Microsoft ADO Extensions 6.0 for DDL and Security - ADOX 6.0
// Project: https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/adox-object-model
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="activex-interop" />
/// <reference types="activex-adodb" />

declare namespace ADOX {
    const enum ActionEnum {
        adAccessDeny = 3,
        adAccessGrant = 1,
        adAccessRevoke = 4,
        adAccessSet = 2,
    }

    const enum AllowNullsEnum {
        adIndexNullsAllow = 0,
        adIndexNullsDisallow = 1,
        adIndexNullsIgnore = 2,
        adIndexNullsIgnoreAny = 4,
    }

    const enum ColumnAttributesEnum {
        adColFixed = 1,
        adColNullable = 2,
    }

    const enum InheritTypeEnum {
        adInheritBoth = 3,
        adInheritContainers = 2,
        adInheritNone = 0,
        adInheritNoPropogate = 4,
        adInheritObjects = 1,
    }

    const enum KeyTypeEnum {
        adKeyForeign = 2,
        adKeyPrimary = 1,
        adKeyUnique = 3,
    }

    const enum ObjectTypeEnum {
        adPermObjColumn = 2,
        adPermObjDatabase = 3,
        adPermObjProcedure = 4,
        adPermObjProviderSpecific = -1,
        adPermObjTable = 1,
        adPermObjView = 5,
    }

    const enum RightsEnum {
        adRightCreate = 16384,
        adRightDelete = 65536,
        adRightDrop = 256,
        adRightExclusive = 512,
        adRightExecute = 536870912,
        adRightFull = 268435456,
        adRightInsert = 32768,
        adRightMaximumAllowed = 33554432,
        adRightNone = 0,
        adRightRead = -2147483648,
        adRightReadDesign = 1024,
        adRightReadPermissions = 131072,
        adRightReference = 8192,
        adRightUpdate = 1073741824,
        adRightWithGrant = 4096,
        adRightWriteDesign = 2048,
        adRightWriteOwner = 524288,
        adRightWritePermissions = 262144,
    }

    const enum RuleEnum {
        adRICascade = 1,
        adRINone = 0,
        adRISetDefault = 3,
        adRISetNull = 2,
    }

    const enum SortOrderEnum {
        adSortAscending = 1,
        adSortDescending = 2,
    }

    class Catalog {
        private constructor();
        private 'ADOX.Catalog_typekey': Catalog;

        /** Can be set to a Connection object or a string. Returns the active Connection object, or `null` */
        ActiveConnection: string | ADODB.Connection | null;

        /**
         * The **Create** method creates and opens a new ADO Connection to the data source specified in _ConnectString_. If successful, the new **Connection** object is assigned to the **ActiveConnection** property.
         *
         * An error will occur if the provider does not support creating new catalogs.
         *
         * @param ConnectString Connection string
         */
        Create(ConnectString: string): void;

        /**
         * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification
         */
        GetObjectOwner(ObjectName: string, ObjectType: ObjectTypeEnum.adPermObjProviderSpecific, ObjectTypeId: any): string;
        GetObjectOwner(ObjectName: string, ObjectType: ObjectTypeEnum): string;
        readonly Groups: Groups;
        readonly Procedures: Procedures;

        /**
         * @param UserName Specifies the name of the **User** or **Group** to own the object
         * @param ObjectTypeId Specifies the GUID for a provider object type that is not defined by the OLE DB specification
         */
        SetObjectOwner(ObjectName: string, ObjectType: ObjectTypeEnum.adPermObjProviderSpecific, UserName: string, ObjectTypeId: any): void;
        SetObjectOwner(ObjectName: string, ObjectType: ObjectTypeEnum, UserName: string): void;
        readonly Tables: Tables;
        readonly Users: Users;
        readonly Views: Views;
    }

    class Column {
        private constructor();
        private 'ADOX.Column_typekey': Column;
        Attributes: ColumnAttributesEnum;
        DefinedSize: number;
        Name: string;
        NumericScale: number;
        ParentCatalog: Catalog;
        Precision: number;
        readonly Properties: ADODB.Properties;
        RelatedColumn: string;
        SortOrder: SortOrderEnum;
        Type: ADODB.DataTypeEnum;
    }

    interface Columns {
        /**
         * @param Type [Type=202]
         * @param DefinedSize [DefinedSize=0]
         */
        Append(Item: Column | string, Type?: ADODB.DataTypeEnum, DefinedSize?: number): void;
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): Column;
        Refresh(): void;
        (Item: string | number): Column;
    }

    class Group {
        private constructor();
        private 'ADOX.Group_typekey': Group;

        /**
         * @param Name Specifies the name of the object for which to set permissions. Pass `null` if you want to get the permissions for the object container.
         * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
         */
        GetPermissions(Name: string | null, ObjectType: ObjectTypeEnum.adPermObjProviderSpecific, ObjectTypeId: any): RightsEnum;
        GetPermissions(Name: string | null, ObjectType: ObjectTypeEnum): RightsEnum;
        Name: string;
        ParentCatalog: Catalog;
        readonly Properties: ADODB.Properties;

        /**
         * @param Rights A bitmask of one or more of the **RightsEnum** constants, that indicates the rights to set.
         * @param Inherit [Inherit=0]
         * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
         */
        SetPermissions(Name: string, ObjectType: ObjectTypeEnum.adPermObjProviderSpecific, Action: ActionEnum, Rights: RightsEnum, Inherit: InheritTypeEnum, ObjectTypeId: any): void;
        SetPermissions(Name: string, ObjectType: ObjectTypeEnum, Action: ActionEnum, Rights: RightsEnum, Inherit?: InheritTypeEnum): void;
        readonly Users: Users;
    }

    interface Groups {
        Append(Item: Group | string): void;
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): Group;
        Refresh(): void;
        (Item: string | number): Group;
    }

    class Index {
        private constructor();
        private 'ADOX.Index_typekey': Index;
        Clustered: boolean;
        readonly Columns: Columns;
        IndexNulls: AllowNullsEnum;
        Name: string;
        PrimaryKey: boolean;
        readonly Properties: ADODB.Properties;
        Unique: boolean;
    }

    interface Indexes {
        Append(Item: Index | string, Columns?: string | SafeArray<string>): void; // is this actually two overloads, one with [Index] and one with [string,string | SafeArray<string>]?
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): Index;
        Refresh(): void;
        (Item: string | number): Index;
    }

    class Key {
        private constructor();
        private 'ADOX.Key_typekey': Key;
        readonly Columns: Columns;
        DeleteRule: RuleEnum;
        Name: string;
        RelatedTable: string;
        Type: KeyTypeEnum;
        UpdateRule: RuleEnum;
    }

    interface Keys {
        /**
         * @param Type [Type=1]
         * @param RelatedTable [RelatedTable='']
         * @param RelatedColumn [RelatedColumn='']
         */
        Append(Item: Key | string, Type?: KeyTypeEnum, Column?: string | SafeArray<string>, RelatedTable?: string, RelatedColumn?: string): void;
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): Key;
        Refresh(): void;
        (Item: string | number): Key;
    }

    class Procedure {
        private constructor();
        private 'ADOX.Procedure_typekey': Procedure;
        Command: ADODB.Command;
        readonly DateCreated: VarDate | null;
        readonly DateModified: VarDate | null;
        readonly Name: string;
    }

    interface Procedures {
        Append(Name: string, Command: ADODB.Command): void;
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): Procedure;
        Refresh(): void;
        (Item: string | number): Procedure;
    }

    class Table {
        private constructor();
        private 'ADOX.Table_typekey': Table;
        readonly Columns: Columns;
        readonly DateCreated: VarDate;
        readonly DateModified: VarDate;
        readonly Indexes: Indexes;
        readonly Keys: Keys;
        Name: string;
        ParentCatalog: Catalog;
        readonly Properties: ADODB.Properties;
        readonly Type: string;
    }

    interface Tables {
        Append(Item: Table | string): void;
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): Table;
        Refresh(): void;
        (Item: string | number): Table;
    }

    class User {
        private constructor();
        private 'ADOX.User_typekey': User;
        ChangePassword(OldPassword: string, NewPassword: string): void;

        /**
         * @param Name Specifies the name of the object for which to set permissions. Pass `null` if you want to get the permissions for the object container.
         * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
         */
        GetPermissions(Name: string | null, ObjectType: ObjectTypeEnum.adPermObjProviderSpecific, ObjectTypeId: any): RightsEnum;
        GetPermissions(Name: string | null, ObjectType: ObjectTypeEnum): RightsEnum;
        readonly Groups: Groups;
        Name: string;
        ParentCatalog: Catalog;
        readonly Properties: ADODB.Properties;

        /**
         * @param Rights A bitmask of one or more of the **RightsEnum** constants, that indicates the rights to set.
         * @param Inherit [Inherit=0]
         * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification.
         */
        SetPermissions(Name: string, ObjectType: ObjectTypeEnum.adPermObjProviderSpecific, Action: ActionEnum, Rights: RightsEnum, Inherit: InheritTypeEnum, ObjectTypeId: any): void;
        SetPermissions(Name: string, ObjectType: ObjectTypeEnum, Action: ActionEnum, Rights: RightsEnum, Inherit?: InheritTypeEnum): void;
    }

    interface Users {
        /** @param Password [Password=''] */
        Append(Item: User | string, Password?: string): void;
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): User;
        Refresh(): void;
        (Item: string | number): User;
    }

    class View {
        private constructor();
        private 'ADOX.View_typekey': View;
        Command: ADODB.Command;
        readonly DateCreated: VarDate;
        readonly DateModified: VarDate;
        readonly Name: string;
    }

    interface Views {
        Append(Name: string, Command: ADODB.Command): void;
        readonly Count: number;
        Delete(Item: string | number): void;
        Item(Item: string | number): View;
        Refresh(): void;
        (Item: string | number): View;
    }
}

interface ActiveXObjectNameMap {
    'ADOX.Catalog': ADOX.Catalog;
    'ADOX.Column': ADOX.Column;
    'ADOX.Group': ADOX.Group;
    'ADOX.Index': ADOX.Index;
    'ADOX.Key': ADOX.Key;
    'ADOX.Table': ADOX.Table;
    'ADOX.User': ADOX.User;
}
