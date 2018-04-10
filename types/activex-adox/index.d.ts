// Type definitions for Microsoft ADO Extensions 6.0 for DDL and Security - ADOX 6.0
// Project: https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/adox-object-model
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

    const enum DataTypeEnum {
        adBigInt = 20,
        adBinary = 128,
        adBoolean = 11,
        adBSTR = 8,
        adChapter = 136,
        adChar = 129,
        adCurrency = 6,
        adDate = 7,
        adDBDate = 133,
        adDBTime = 134,
        adDBTimeStamp = 135,
        adDecimal = 14,
        adDouble = 5,
        adEmpty = 0,
        adError = 10,
        adFileTime = 64,
        adGUID = 72,
        adIDispatch = 9,
        adInteger = 3,
        adIUnknown = 13,
        adLongVarBinary = 205,
        adLongVarChar = 201,
        adLongVarWChar = 203,
        adNumeric = 131,
        adPropVariant = 138,
        adSingle = 4,
        adSmallInt = 2,
        adTinyInt = 16,
        adUnsignedBigInt = 21,
        adUnsignedInt = 19,
        adUnsignedSmallInt = 18,
        adUnsignedTinyInt = 17,
        adUserDefined = 132,
        adVarBinary = 204,
        adVarChar = 200,
        adVariant = 12,
        adVarNumeric = 139,
        adVarWChar = 202,
        adWChar = 130,
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
         * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification. This parameter is required if _ObjectType_ is set to **adPermObjProviderSpecific**; otherwise, it is not used.
         */
        GetObjectOwner(ObjectName: string, ObjectType: ObjectTypeEnum.adPermObjProviderSpecific, ObjectTypeId: any): string;
        GetObjectOwner(ObjectName: string, ObjectType: ObjectTypeEnum): string;
        readonly Groups: Groups;
        readonly Procedures: Procedures;

        /**
         * @param UserName Specifies the name of the **User** or **Group** to own the object
         * @param ObjectTypeId Specifies the GUID for a provider object type that is not defined by the OLE DB specification. This parameter is required if _ObjectType_ is set to **adPermObjProviderSpecific**; otherwise, it is not used.
         */
        SetObjectOwner(ObjectName: string, ObjectType: ObjectTypeEnum, UserName: string, ObjectTypeId?: any): void;
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
        readonly Properties: Properties;
        RelatedColumn: string;
        SortOrder: SortOrderEnum;
        Type: DataTypeEnum;
    }

    interface Columns {
        /**
         * @param Type [Type=202]
         * @param DefinedSize [DefinedSize=0]
         */
        Append(Item: Column | string, Type?: DataTypeEnum, DefinedSize?: number): void;
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
         * @param ObjectTypeId Specifies the GUID for a provider object type not defined by the OLE DB specification. This parameter is required if _ObjectType_ is set to **adPermObjProviderSpecific**; otherwise, it is not used.
         */
        GetPermissions(Name: string | null, ObjectType: ObjectTypeEnum, ObjectTypeId?: any): RightsEnum;
        Name: string;
        ParentCatalog: Catalog;
        readonly Properties: Properties;

        /** @param Inherit [Inherit=0] */
        SetPermissions(Name: any, ObjectType: ObjectTypeEnum, Action: ActionEnum, Rights: RightsEnum, Inherit?: InheritTypeEnum, ObjectTypeId?: any): void;
        readonly Users: Users;
    }

    interface Groups {
        Append(Item: any): void;
        readonly Count: number;
        Delete(Item: any): void;
        Item(Item: any): Group;
        Refresh(): void;
        (Item: any): Group;
    }

    class Index {
        private constructor();
        private 'ADOX.Index_typekey': Index;
        Clustered: boolean;
        readonly Columns: Columns;
        IndexNulls: AllowNullsEnum;
        Name: string;
        PrimaryKey: boolean;
        readonly Properties: Properties;
        Unique: boolean;
    }

    // tslint:disable-next-line:interface-name
    interface Indexes {
        Append(Item: any, Columns?: any): void;
        readonly Count: number;
        Delete(Item: any): void;
        Item(Item: any): Index;
        Refresh(): void;
        (Item: any): Index;
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
        Append(Item: any, Type?: KeyTypeEnum, Column?: any, RelatedTable?: string, RelatedColumn?: string): void;
        readonly Count: number;
        Delete(Item: any): void;
        Item(Item: any): Key;
        Refresh(): void;
        (Item: any): Key;
    }

    class Procedure {
        private constructor();
        private 'ADOX.Procedure_typekey': Procedure;
        Command: any;
        readonly DateCreated: any;
        readonly DateModified: any;
        readonly Name: string;
    }

    interface Procedures {
        Append(Name: string, Command: any): void;
        readonly Count: number;
        Delete(Item: any): void;
        Item(Item: any): Procedure;
        Refresh(): void;
        (Item: any): Procedure;
    }

    interface Properties {
        readonly Count: number;
        Item(Item: any): Property;
        Refresh(): void;
        (Item: any): Property;
    }

    class Property {
        private constructor();
        private 'ADOX.Property_typekey': Property;
        Attributes: number;
        readonly Name: string;
        readonly Type: DataTypeEnum;
        Value: any;
    }

    class Table {
        private constructor();
        private 'ADOX.Table_typekey': Table;
        readonly Columns: Columns;
        readonly DateCreated: any;
        readonly DateModified: any;
        readonly Indexes: Indexes;
        readonly Keys: Keys;
        Name: string;
        ParentCatalog: Catalog;
        readonly Properties: Properties;
        readonly Type: string;
    }

    interface Tables {
        Append(Item: any): void;
        readonly Count: number;
        Delete(Item: any): void;
        Item(Item: any): Table;
        Refresh(): void;
        (Item: any): Table;
    }

    class User {
        private constructor();
        private 'ADOX.User_typekey': User;
        ChangePassword(OldPassword: string, NewPassword: string): void;
        GetPermissions(Name: any, ObjectType: ObjectTypeEnum, ObjectTypeId?: any): RightsEnum;
        readonly Groups: Groups;
        Name: string;
        ParentCatalog: Catalog;
        readonly Properties: Properties;

        /** @param Inherit [Inherit=0] */
        SetPermissions(Name: any, ObjectType: ObjectTypeEnum, Action: ActionEnum, Rights: RightsEnum, Inherit?: InheritTypeEnum, ObjectTypeId?: any): void;
    }

    interface Users {
        /** @param Password [Password=''] */
        Append(Item: any, Password?: string): void;
        readonly Count: number;
        Delete(Item: any): void;
        Item(Item: any): User;
        Refresh(): void;
        (Item: any): User;
    }

    class View {
        private constructor();
        private 'ADOX.View_typekey': View;
        Command: any;
        readonly DateCreated: any;
        readonly DateModified: any;
        readonly Name: string;
    }

    interface Views {
        Append(Name: string, Command: any): void;
        readonly Count: number;
        Delete(Item: any): void;
        Item(Item: any): View;
        Refresh(): void;
        (Item: any): View;
    }
}

interface ActiveXObject {
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
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
