/// <reference types="windows-script-host" />

const collectionToArray = <T>(col: { Item(key: any): T }): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

const toConnectionString = (o: { [index: string]: any }) => {
    o.Provider = o.Provider || 'sqloledb';
    o['Data Source'] = o['Data Source'] || 'Server';
    o['Integrated Security'] = o['Integrated Security'] || 'SSPI';

    const parts: string[] = [];
    for (const key in o) {
        let val = o[key];
        if (typeof val === 'string') { val = `'${val}'`; }
        parts.push(`${key}=${val}`);
    }
    return parts.join(';');
};

const connectionString = toConnectionString({
    Provider: 'Microsoft.Jet.OLEDB.4.0',
    'Data Source': 'c:\\Program Files\\Microsoft Office\\Office\\Samples\\Northwind.mdb'
});
const connectionStringWithSys = toConnectionString({
    Provider: 'Microsoft.Jet.OLEDB.4.0',
    'Data Source': 'c:\\Program Files\\Microsoft Office\\Office\\Samples\\Northwind.mdb',
    'jet oledb:system database': 'c:\\Program Files\\Microsoft Office\\Office\\system.mdw'
});

const adPermObjTable = ADOX.ObjectTypeEnum.adPermObjTable;
const adRightFull = ADOX.RightsEnum.adRightFull;

const adInteger = ADODB.DataTypeEnum.adInteger;
const adVarWChar = ADODB.DataTypeEnum.adVarWChar;
const adVarChar = ADODB.DataTypeEnum.adVarChar;

const adOpenKeyset = ADODB.CursorTypeEnum.adOpenKeyset;
const adLockOptimistic = ADODB.LockTypeEnum.adLockOptimistic;

const tryClose = (obj: { State: ADODB.ObjectStateEnum, Close(): void } | null) => {
    // TODO State could also be a combination of multiple values in this enum
    if (obj && obj.State === ADODB.ObjectStateEnum.adStateOpen) {
        obj.Close();
    }
    return null;
};

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/columns-and-tables-append-methods-name-property-example-vb
{
    let cat: ADOX.Catalog | null = null;
    let tbl: ADOX.Table | null = null;
    try {
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        tbl = new ActiveXObject('ADOX.Table');
        tbl.Name = 'MyTable';
        tbl.Columns.Append('Column1', adInteger);
        tbl.Columns.Append('Column2', adInteger);
        tbl.Columns.Append('Column3', adVarChar, 50);
        cat.Tables.Append(tbl);
        WScript.Echo('Table "MyTables" is added.');

        cat.Tables.Delete(tbl.Name);
        WScript.Echo('Table "MyTable" is deleted');

        cat.ActiveConnection = null;
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) {
            cat.ActiveConnection = null;
        }
        cat = null;
        tbl = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/connection-close-method-table-type-property-example-vb
{
    let conn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    try {
        conn = new ActiveXObject('ADODB.Connection');
        conn.Open(connectionString);
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = conn;
        const tbl = cat.Tables(0);
        WScript.Echo(tbl.Type); // Cache tbl.Type info
        cat.ActiveConnection = null; // tbl is orphaned

        // The following two lines will succeed only if the information was cached
        WScript.Echo(tbl.Type);
        WScript.Echo(tbl.Columns(0).DefinedSize);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        // Clean up
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
        conn = tryClose(conn);
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/create-method-example-vb
{
    let cat: ADOX.Catalog | null = null;
    try {
        cat = new ActiveXObject('ADOX.Catalog');
        cat.Create("Provider='Microsoft.Jet.OLEDB.4.0';Data Source='new.mdb'");
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/getobjectowner-and-setobjectowner-methods-example-vb
{
    const cat = new ActiveXObject('ADOX.Catalog');
    cat.ActiveConnection = connectionStringWithSys;

    // Print the original owner of Categories
    const strOwner = cat.GetObjectOwner('Categories', adPermObjTable);
    WScript.Echo(`Ower of Categories: ${strOwner}`);

    // Set the owner of Categories to Accounting
    cat.SetObjectOwner('Categories', adPermObjTable, 'Accounting');

    for (const tblLoop of collectionToArray(cat.Tables)) {
        WScript.Echo(`
Table: ${tblLoop.Name}
Owner: ${cat.GetObjectOwner(tblLoop.Name, adPermObjTable)}
        `.trim());
    }

    // Restore the original owner of Categories
    cat.SetObjectOwner('Categories', adPermObjTable, strOwner);
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/getpermissions-and-setpermissions-methods-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    try {
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Provider = 'Microsoft.Jet.OLEDB.4.0';
        cnn.Open("Data Source='Northwind.mdb';jet oledb:system database='system.mdw'");

        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        const displayPermissions = (title: string) =>
            WScript.Echo(`${title}: ${cat!.Users('admin').GetPermissions('Orders', adPermObjTable)}`);

        // Retrieve original permissions
        const perm = cat.Users('admin').GetPermissions('Orders', adPermObjTable);
        WScript.Echo(`Permissions: ${perm}`);

        // Revoke all permissions
        cat.Users('admin').SetPermissions('Orders', adPermObjTable, ADOX.ActionEnum.adAccessRevoke, adRightFull);
        displayPermissions('Revoked permissions');

        // Give the Admin user full rights on the orders object
        cat.Users('admin').SetPermissions('Orders', adPermObjTable, ADOX.ActionEnum.adAccessSet, adRightFull);
        displayPermissions('Full permissions');

        // Restore original permissions
        cat.Users('admin').SetPermissions('Orders', adPermObjTable, ADOX.ActionEnum.adAccessSet, perm);
        displayPermissions('Final permissions');
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
        cnn = tryClose(cnn);
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/groups-and-users-append-changepassword-methods-example-vb
{
    let cat: ADOX.Catalog | null = null;
    let usrNew: ADOX.User | null = null;
    let usrLoop: ADOX.User | null;
    let grpLoop: ADOX.Group | null;
    let user: ADOX.User | null;
    let group: ADOX.Group | null;
    try {
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionStringWithSys;

        // Create and append a new group with a string
        cat.Groups.Append('Accounting');

        // Create and append a new user with an object
        usrNew = new ActiveXObject('ADOX.User');
        usrNew.Name = 'Pat Smith';
        usrNew.ChangePassword('', 'Password1');
        cat.Users.Append(usrNew);

        // Make the user Pat Smith a member of the
        // Accounting group by creating and adding the
        // appropriate Group object to the user's Groups
        // collection. The same is accomplished if a User
        // object representing Pat Smith is created and
        // appended to the Accounting group Users collection
        usrNew.Groups.Append('Accounting');

        // Enumerate all User objects in the catalog's Users collection.
        for (usrLoop of collectionToArray(cat.Users)) {
            WScript.Echo(`${usrLoop.Name} belongs to the following groups:`);

            // Enumerate all Group objects in each User object's Groups collection
            const groups = collectionToArray(usrLoop.Groups);
            if (groups.length !== 0) {
                for (group of groups) {
                    WScript.Echo(`\t\t${group.Name}`);
                }
            } else {
                WScript.Echo('\t[None]');
            }
        }

        // Enumerate all Group objects in the default workspace's Groups collection
        for (grpLoop of collectionToArray(cat.Groups)) {
            WScript.Echo(`${grpLoop.Name} has as its members:`);

            // Enumerate all User objects in each Group object's User collection
            const users = collectionToArray(grpLoop.Users);
            if (users.length !== 0) {
                for (user of users) {
                    WScript.Echo(`\t\t${user.Name}`);
                }
            } else {
                WScript.Echo('\t[None]');
            }
        }

        // Delete new User and Group objects because this is only a demonstration
        cat.Users.Delete('Pat Smith');
        cat.Groups.Delete('Accounting');
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
        usrNew = null;
        usrLoop = null;
        grpLoop = null;
        user = null;
        group = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/indexes-append-method-example-vb
{
    let cat: ADOX.Catalog | null = null;
    let tbl: ADOX.Table | null = null;
    let idx: ADOX.Index | null = null;
    try {
        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Define the table and append it to the catalog
        tbl = new ActiveXObject('ADOX.Table');
        tbl.Name = 'MyTable';
        tbl.Columns.Append('Column1', adInteger);
        tbl.Columns.Append('Column2', adInteger);
        tbl.Columns.Append('Column3', adVarChar, 50);
        cat.Tables.Append(tbl);
        WScript.Echo('Table "MyTables" is added.');

        // Define a multi-column index
        idx = new ActiveXObject('ADOX.Index');
        idx.Name = 'multicolidx';
        idx.Columns.Append('Column1');
        idx.Columns.Append('Column2');

        // Append the index to the table
        tbl.Indexes.Append(idx);
        WScript.Echo('The index is appended to table "MyTable".');

        // Delete the table as this is a demonstration
        cat.Tables.Delete(tbl.Name);
        WScript.Echo('Table "MyTable" is deleeted.');
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
        tbl = null;
        idx = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/keys-append-method-key-type-relatedcolumn-relatedtable-example-vb
{
    let cat: ADOX.Catalog | null = null;
    let kyForeign: ADOX.Key | null = null;
    try {
        // Connect to the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Define the foreign key
        kyForeign = new ActiveXObject('ADOX.Key');
        kyForeign.Name = 'CustOrder';
        kyForeign.Type = ADOX.KeyTypeEnum.adKeyForeign;
        kyForeign.RelatedTable = 'Customers';
        kyForeign.Columns.Append('CustomerId');
        kyForeign.Columns('CustomerId').RelatedColumn = 'CustomerID';
        kyForeign.UpdateRule = ADOX.RuleEnum.adRICascade;

        // Append the foreign key to the keys collection
        cat.Tables('Orders').Keys.Append(kyForeign);

        // Delete the key to demonstrate the Detele method
        cat.Tables('Orders').Keys.Delete(kyForeign.Name);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
        kyForeign = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/procedures-append-method-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cmd: ADODB.Command | null = null;
    let cat: ADOX.Catalog | null = null;
    try {
        // Open the Connection
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);

        // Create the parameterized command (Microsoft Jet specific)
        cmd = new ActiveXObject('ADODB.Command');
        cmd.ActiveConnection = cnn;
        cmd.CommandText = `
            PARAMETERS [CustId] TEXT;
            SELECT * FROM Customers WHERE CustomerId = [CustId]
        `;

        // Open the Catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        // Create the new Procedure
        cat.Procedures.Append('CustomerById', cmd);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
        cmd = null;
        cnn = tryClose(cnn);
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/procedures-delete-method-example-vb
{
    let cat: ADOX.Catalog | null = null;
    try {
        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Delete the procedure
        cat.Procedures.Delete('CustomerById');
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/procedures-refresh-method-example-vb
{
    let cat: ADOX.Catalog | null = null;
    try {
        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Refresh the Procedures collection
        cat.Procedures.Refresh();
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/views-append-method-example-vb
{
    let cat: ADOX.Catalog | null = null;
    let cmd: ADODB.Command | null = null;
    try {
        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Create the command representing the view.
        cmd = new ActiveXObject('ADODB.Command');
        cmd.CommandText = 'SELECT * FROM Customers';

        // Create the new View
        cat.Views.Append('All Customers', cmd);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
        cmd = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/views-delete-method-example-vb
{
    let cat: ADOX.Catalog | null = null;
    try {
        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Delete the View
        cat.Views.Delete('All Customers');
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/views-refresh-method-example-vb
{
    let cat: ADOX.Catalog | null = null;
    try {
        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Refresh the Views collection
        cat.Views.Refresh();
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/attributes-property-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    let tblEmp: ADOX.Table | null = null;
    let colTemp: ADOX.Column | null = null;
    let rstEmployees: ADODB.Recordset | null = null;
    try {
        // Connect the catalog
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        tblEmp = cat.Tables('Employees');

        // Create a new Field object and append it to the Field collection of the Employees table
        colTemp = new ActiveXObject('ADOX.Column');
        colTemp.Name = 'FaxPhone';
        colTemp.Type = adVarWChar;
        colTemp.DefinedSize = 24;
        colTemp.Attributes = ADOX.ColumnAttributesEnum.adColNullable;
        tblEmp.Columns.Append(colTemp.Name, ADODB.DataTypeEnum.adWChar, 24);

        // Open the Employees table for updating as a Recordset
        rstEmployees = new ActiveXObject('ADODB.Recordset');
        rstEmployees.Open('Employees', cnn, adOpenKeyset, adLockOptimistic, ADODB.CommandTypeEnum.adCmdTable);

        // Get user input
        WScript.Echo(`
Enter fax number for ${rstEmployees('FirstName')} ${rstEmployees('LastName')}.
[? - unknown, X - has no fax]
        `.trim());
        const strInput = WScript.StdIn.ReadLine().toUpperCase().trim();
        if (strInput) {
            let newValue: string | null;
            if (strInput === '?') {
                newValue = null;
            } else if (strInput === 'X') {
                newValue = '';
            } else {
                newValue = strInput;
            }
            rstEmployees('FaxPhone').Value = newValue;
            rstEmployees.Update();

            // Print report
            const faxValue = rstEmployees('FaxPhone').Value;
            let faxDisplayString: string;
            if (faxValue === null) {
                faxDisplayString = '[Unkown]';
            } else if (faxValue === '') {
                faxDisplayString = '[Has no fax]';
            } else {
                faxDisplayString = faxValue;
            }
            WScript.Echo(`
Name\t\tFax number
${rstEmployees('FirstName')} ${rstEmployees('LastName')}\t\t${faxDisplayString}
            `.trim());
        }
    } catch (error) {
        WScript.Echo(error);
    } finally {
        rstEmployees = tryClose(rstEmployees);
        if (tblEmp) {
            tblEmp.Columns.Delete(colTemp!.Name);
        }
        cnn = tryClose(cnn);
        cat = null;
        colTemp = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/catalog-activeconnection-property-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    try {
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;
        WScript.Echo(cat.Tables(0).Type);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
        cnn = tryClose(cnn);
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/clustered-property-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    let tblLoop: ADOX.Table | null;
    let idxLoop: ADOX.Index | null;
    try {
        // Connect to the catalog
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        // Enumerate the tables
        for (tblLoop of collectionToArray(cat.Tables)) {
            // Enumerate the indexes
            for (idxLoop of collectionToArray(tblLoop.Indexes)) {
                WScript.Echo(`${tblLoop.Name} ${idxLoop.Name} ${idxLoop.Clustered}`);
            }
        }
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
        cnn = tryClose(cnn);
        tblLoop = null;
        idxLoop = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/command-and-commandtext-properties-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    let cmd: ADODB.Command | null = null;
    try {
        // Open the connection
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);

        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        // Get the command
        cmd = new ActiveXObject('ADODB.Command');
        cmd = cat.Procedures('CustomerById').Command;

        // Update the CommandText
        cmd.CommandText = `
            SELECT CustomerID, CompanyName ContactName
            FROM Customers
            WHERE CustomerId = [CustId]
        `.trim();

        // Update the procedure
        cat.Procedures('CustomerById').Command = cmd;
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cnn = tryClose(cnn);
        cat = null;
        cmd = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/parameters-collection-command-property-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    let cmd: ADODB.Command | null = null;
    let prm: ADODB.Parameter | null;
    try {
        // Open the connection
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);

        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        // Get the command
        cmd = cat.Procedures('CustomerById').Command;

        // Retreive Parameter information
        cmd.Parameters.Refresh();
        for (prm of collectionToArray(cmd.Parameters)) {
            WScript.Echo(`${prm.Name}: ${prm.Type}`);
        }
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
        cmd = null;
        cnn = tryClose(cnn);
        prm = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/views-collection-commandtext-property-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null = null;
    let cmd: ADODB.Command | null = null;
    try {
        // Open the connection
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);

        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        // Get the command
        cmd = cat.Views('AllCustomers').Command;

        // Update the CommandText of the command
        cmd.CommandText = 'SELECT CustomerId, CompanyName, ContactName FROM Customers';

        // Update the view
        cat.Views('AllCustomers').Command = cmd;
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
        cmd = null;
        cnn = tryClose(cnn);
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/datecreated-and-datemodified-properties-example-vb
{
    const dateOutput = (caption: string, tbl: ADOX.Table) => {
        // Print DateCreated and DateModified information about specified Table object
        WScript.Echo(caption);
        WScript.Echo(`\tTable: ${tbl.Name}`);
        WScript.Echo(`\t\t${new Date(tbl.DateCreated).toString()}`);
        WScript.Echo(`\t\t${new Date(tbl.DateModified).toString()}`);
        WScript.Echo('');
    };

    let cat: ADOX.Catalog | null = null;
    try {
        // Connect to the catalog.
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;
        const tblEmployees = cat.Tables('Employees');

        // Print current information about the Employees table
        dateOutput('Current properties', tblEmployees);

        // Create and append column to the Employees table.
        tblEmployees.Columns.Append('NewColumn', adInteger);
        cat.Tables.Refresh();

        // Print new information about the Employees table.
        dateOutput('After creating a new column', tblEmployees);

        // Delete new column because this is a demonstration
        tblEmployees.Columns.Delete('NewColumn');

        // Create and append new Table object to the Northwind database
        const tblNewTable = new ActiveXObject('ADOX.Table');
        tblNewTable.Name = 'NewTable';
        tblNewTable.Columns.Append('NewColumn', adInteger);
        cat.Tables.Append(tblNewTable);
        cat.Tables.Refresh();

        // Print information about the new Table object
        dateOutput('After creating a new table', cat.Tables('NewTable'));

        // Delete new Table object because this is a demonstration
        cat.Tables.Delete(tblNewTable.Name);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/definedsize-property-example-vb
{
    let rstEmployees: ADODB.Recordset | null = null;
    let catNorthwind: ADOX.Catalog | null;
    let colFirstname: ADOX.Column | null;
    let colNewFirstName: ADOX.Column | null;
    try {
        // Open a Recordset for the Employees table.
        rstEmployees = new ActiveXObject('ADODB.Recordset');
        rstEmployees.Open('Employees', connectionString, adOpenKeyset, undefined, ADODB.CommandTypeEnum.adCmdTable);

        // Open a Catalog for the Northwind database, using same connection as rstEmployees
        catNorthwind = new ActiveXObject('ADOX.Catalog');
        catNorthwind.ActiveConnection = rstEmployees.ActiveConnection;

        // Loop through the recordset displaying the contents of the FirstName field, the field's defined size,
        // and its actual size. Also store FirstName values in aryFirstName array.
        rstEmployees.MoveFirst();
        WScript.Echo('');
        WScript.Echo('Original Defined Size and Actual Size');
        const firstnames: string[] = [];
        for (let i = 0; !rstEmployees.EOF; i++) {
            const firstField = rstEmployees('FirstName');
            const [firstname, lastname] = [firstField.Value as string, rstEmployees('LastName').Value as string];
            WScript.Echo(`Employee name: ${firstname} ${lastname}`);
            WScript.Echo(`\tFirstName Defined size: ${firstField.DefinedSize}`);
            WScript.Echo(`\tFirstName Actual size: ${firstField.ActualSize}`);
            firstnames[i] = firstname; // we don't check for null, because null is better than undefined when putting the first names back
            rstEmployees.MoveNext();
        }
        rstEmployees.Close();

        // Redefine the DefinedSize of FirstName in the catalog
        colFirstname = catNorthwind.Tables('Employees').Columns('FirstName');
        colNewFirstName = new ActiveXObject('ADOX.Column');
        colNewFirstName.Name = colFirstname.Name;
        colNewFirstName.Type = colFirstname.Type;
        colNewFirstName.DefinedSize = colFirstname.DefinedSize + 1;

        // Append new FirstName column to catalog
        catNorthwind.Tables('Employees').Columns.Delete(colFirstname.Name);
        catNorthwind.Tables('Employees').Columns.Append(colNewFirstName);

        // Open Employee table in Recordset for updating
        rstEmployees.Open('Employees', catNorthwind.ActiveConnection!, adOpenKeyset, adLockOptimistic, ADODB.CommandTypeEnum.adCmdTable);

        // Loop through the recordset displaying the contents of the FirstName field, the field's defined size,
        // and its actual size. Also restore FirstName values from aryFirstName.
        rstEmployees.MoveFirst();
        WScript.Echo('');
        WScript.Echo('Original Defined Size and Actual Size');
        for (let i = 0; !rstEmployees.EOF; i++) {
            const firstField = rstEmployees('FirstName');
            firstField.Value = firstnames[i];
            WScript.Echo(`Employee name: ${firstField.Value} ${rstEmployees('LastName').Value}`);
            WScript.Echo(`\tFirstName Defined size: ${firstField.DefinedSize}`);
            WScript.Echo(`\tFirstName Actual size: ${firstField.ActualSize}`);
            rstEmployees.MoveNext();
        }
        rstEmployees.Close();

        // Restore original FirstName column to catalog
        catNorthwind.Tables('Employees').Columns.Delete(colNewFirstName.Name);
        catNorthwind.Tables('Employees').Columns.Append(colFirstname);

        // Restore original FirstName values to Employees table
        rstEmployees.Open('Employees', catNorthwind.ActiveConnection!, adOpenKeyset, adLockOptimistic, ADODB.CommandTypeEnum.adCmdTable);
        rstEmployees.MoveFirst();
        for (let i = 0; !rstEmployees.EOF; i++) {
            rstEmployees('FirstName').Value = firstnames[i];
            rstEmployees.MoveNext();
        }
        rstEmployees.Close();
    } catch (error) {
        WScript.Echo(error);
    } finally {
        catNorthwind = null;
        colNewFirstName = null;
        colFirstname = null;
        rstEmployees = tryClose(rstEmployees);
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/deleterule-property-example-vb
{
    let cat: ADOX.Catalog | null = null;
    let tblNew: ADOX.Table | null;
    let kyPrimary: ADOX.Key | null;
    try {
        // Connect the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = connectionString;

        // Name new table
        tblNew = new ActiveXObject('ADOX.Table');
        tblNew.Name = 'NewTable';

        // Append a numeric and a text field to new table.
        tblNew.Columns.Append('NumField', adInteger, 20);
        tblNew.Columns.Append('TextField', adVarChar, 20);

        // Append the new table
        cat.Tables.Append(tblNew);

        // Define the Primary key
        kyPrimary = new ActiveXObject('ADOX.Key');
        kyPrimary.Name = 'NumField';
        kyPrimary.Type = ADOX.KeyTypeEnum.adKeyPrimary;
        kyPrimary.RelatedTable = 'Customers';
        kyPrimary.Columns.Append('NumField');
        kyPrimary.Columns('NumField').RelatedColumn = 'CustomerId';
        kyPrimary.DeleteRule = ADOX.RuleEnum.adRICascade;

        // Append the primary key
        cat.Tables('NewTable').Keys.Append(kyPrimary);
        WScript.Echo('The primary key is appended.');

        // Delete the table as this is a demonstration.
        cat.Tables.Delete(tblNew.Name);
        WScript.Echo('The primary key is deleted.');
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (cat) { cat.ActiveConnection = null; }
        cat = null;
        kyPrimary = null;
        tblNew = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/indexnulls-property-example-vb
{
    // Connect the catalog.
    const cnn = new ActiveXObject('ADODB.Connection');
    cnn.Open(connectionString);

    let catNorthwind: ADOX.Catalog | null = new ActiveXObject('ADOX.Catalog');
    catNorthwind.ActiveConnection = cnn;

    // Append Country column to new index
    const idxNew = new ActiveXObject('ADOX.Index');
    idxNew.Columns.Append('Country');
    idxNew.Name = 'NewIndex';

    // Set IndexNulls based on user selection
    WScript.Echo('Allow nulls Y/N (Y to allow, N to ignore)?');
    const input = WScript.StdIn.ReadLine().toUpperCase();
    switch (input) {
        case 'Y':
            idxNew.IndexNulls = ADOX.AllowNullsEnum.adIndexNullsAllow;
            break;
        case 'N':
            idxNew.IndexNulls = ADOX.AllowNullsEnum.adIndexNullsIgnore;
            break;
    }

    // Append new index to Employees table
    catNorthwind.Tables('Employees').Indexes.Append(idxNew);

    const rstEmployees = new ActiveXObject('ADODB.Recordset');
    rstEmployees.Index = idxNew.Name;
    rstEmployees.Open('Employees', cnn, adOpenKeyset, adLockOptimistic, ADODB.CommandTypeEnum.adCmdTableDirect);

    // Add a new record to the Employees table.
    rstEmployees.AddNew();
    rstEmployees('FirstName').Value = 'Gary';
    rstEmployees('LastName').Value = 'Haarsager';
    rstEmployees.Update();

    // Bookmark the newly added record
    const bookmark = rstEmployees.Bookmark;

    // Use the new index to set the order of the records.
    rstEmployees.MoveFirst();

    WScript.Echo(`Index = ${rstEmployees.Index}, IndexNulls = ${idxNew.IndexNulls}`);
    WScript.Echo('\tCountry - Name');

    // Enumerate the Recordset. The value of the IndexNulls property will determine if the newly added record appears in the output.
    while (!rstEmployees.EOF) {
        const country = rstEmployees('Country').Value as string | null || '[NULL]';
        WScript.Echo(`\t${country} - ${rstEmployees('FirstName').Value} ${rstEmployees('LastName').Value}`);
        rstEmployees.MoveNext();
    }

    // Delete new record because this is a demonstration.
    rstEmployees.Bookmark = bookmark;
    rstEmployees.Delete();

    rstEmployees.Close();

    catNorthwind.Tables('Employees').Indexes.Delete(idxNew.Name);
    catNorthwind = null;
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/adox-code-example-numericscale-and-precision-properties-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null;
    let colLoop: ADOX.Column | null;
    try {
        // Connect the catalog.
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        // Retrieve the Order Details table
        const tblOD = cat.Tables('Order Details');

        // Display numeric scale and precision of small integer fields.
        for (colLoop of collectionToArray(tblOD.Columns)) {
            if (colLoop.Type === ADODB.DataTypeEnum.adSmallInt) {
                WScript.Echo(`
Column: ${colLoop.Name}
Numeric scale: ${colLoop.NumericScale}
Precision: ${colLoop.Precision}
                `.trim());
            }
        }
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cat = null;
        cnn = tryClose(cnn);
        colLoop = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/parentcatalog-property-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null;
    let tbl: ADOX.Table | null;
    try {
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        tbl = new ActiveXObject('ADOX.Table');
        tbl.Name = 'MyContacts';
        tbl.ParentCatalog = cat;

        // Create fields and append them to the new Table object.
        tbl.Columns.Append('ContactId', adInteger);
        tbl.Columns.Append('CustomerID', adVarWChar);
        tbl.Columns.Append('FirstName', adVarWChar);
        tbl.Columns.Append('LastName', adVarWChar);
        tbl.Columns.Append('Phone', adVarWChar, 20);
        tbl.Columns.Append('Notes', ADODB.DataTypeEnum.adLongVarWChar);

        // Make the ContactId column an auto incrementing column
        tbl.Columns('ContactId').Properties('AutoIncrement').Value = true;

        cat.Tables.Append(tbl);
        WScript.Echo(`Table 'MyContacts' is added.`);

        // Delete the table as this is a demonstration.
        cat.Tables.Delete(tbl.Name);
        WScript.Echo(`Table 'MyContacts' is deleted.`);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cnn = tryClose(cnn);
        cat = null;
        tbl = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/primarykey-and-unique-properties-example-vb
{
    let catNorthwind: ADOX.Catalog | null = null;
    let tblNew: ADOX.Table | null;
    let idxNew: ADOX.Index | null;
    let idxLoop: ADOX.Index | null;
    try {
        // Connect the catalog
        catNorthwind = new ActiveXObject('ADOX.Catalog');
        catNorthwind.ActiveConnection = connectionString;

        // Name new table
        tblNew = new ActiveXObject('ADOX.Table');
        tblNew.Name = 'NewTable';

        // Append a numeric and a text field to new table.
        tblNew.Columns.Append('NumField', adInteger, 20);
        tblNew.Columns.Append('TextField', adVarWChar, 20);

        // Append new Primary Key index on NumField column to new table
        idxNew = new ActiveXObject('ADOX.Index');
        idxNew.Name = 'NumIndex';
        idxNew.Columns.Append('NumField');
        idxNew.PrimaryKey = true;
        idxNew.Unique = true;
        tblNew.Indexes.Append(idxNew);

        // Append an index on Textfield to new table..
        // Note the different technique: Specifying index and column name as parameters of the Append method
        tblNew.Indexes.Append('TextIndex', 'TextField');

        // Append the new table
        catNorthwind.Tables.Append(tblNew);

        WScript.Echo(`${tblNew.Indexes.Count} indexes in '${tblNew.Name}' table`);

        // Enumerate Indexes collection.
        for (idxLoop of collectionToArray(tblNew.Indexes)) {
            WScript.Echo(`
Index ${idxLoop.Name}
    Primary key = ${idxLoop.PrimaryKey}
    Unique = ${idxLoop.Unique}
    Columns = ${collectionToArray(idxLoop.Columns).map(colLoop => colLoop.Name).join(', ')}
            `.trim());
        }

        // Delete new table as this is a demonstration.
        catNorthwind.Tables.Delete(tblNew.Name);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        if (catNorthwind) { catNorthwind.ActiveConnection = null; }
        catNorthwind = null;
        tblNew = null;
        idxNew = null;
        idxLoop = null;
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/sortorder-property-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let catNorthwind: ADOX.Catalog | null;
    let idxAscending: ADOX.Index | null;
    let rstEmployees: ADODB.Recordset | null = null;
    let idxDescending: ADOX.Index | null;

    try {
        // Connect to the catalog.
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);
        catNorthwind = new ActiveXObject('ADOX.Catalog');
        catNorthwind.ActiveConnection = cnn;

        const enumerateRecordset = (indexName: string) => {
            rstEmployees = new ActiveXObject('ADODB.Recordset');
            rstEmployees.Index = indexName;
            rstEmployees.Open('Employees', cnn!, adOpenKeyset, adLockOptimistic, ADODB.CommandTypeEnum.adCmdTableDirect);

            rstEmployees.MoveFirst();
            WScript.Echo(`Index = ${rstEmployees.Index}`);
            WScript.Echo('\tCountry - Name');

            // Enumerate the Recordset. The value of the IndexNulls property will determine if the newly added record appears in the output.
            while (!rstEmployees.EOF) {
                WScript.Echo(`\t${rstEmployees('Country').Value} - ${rstEmployees('FirstName').Value} ${rstEmployees('LastName').Value}`);
                rstEmployees.MoveNext();
            }

            rstEmployees.Close();
        };

        // Append Country column to new index.
        idxAscending = new ActiveXObject('ADOX.Index');
        idxAscending.Columns.Append('Country');
        idxAscending.Columns('Country').SortOrder = ADOX.SortOrderEnum.adSortAscending;
        idxAscending.Name = 'Ascending';
        idxAscending.IndexNulls = ADOX.AllowNullsEnum.adIndexNullsAllow;

        // Append new index to Employees table.
        catNorthwind.Tables('Employees').Indexes.Append(idxAscending);

        enumerateRecordset(idxAscending.Name);

        // Append Country column to new index.
        idxDescending = new ActiveXObject('ADOX.Index');
        idxDescending.Columns.Append('Country');
        idxDescending.Columns('Country').SortOrder = ADOX.SortOrderEnum.adSortDescending;
        idxDescending.Name = 'Descending';
        idxDescending.IndexNulls = ADOX.AllowNullsEnum.adIndexNullsAllow;

        // Append descending index to Employees table.
        catNorthwind.Tables('Employees').Indexes.Append(idxDescending);

        enumerateRecordset(idxDescending.Name);

        // Delete new indexes because this is a demonstration.
        catNorthwind.Tables('Employees').Indexes.Delete(idxAscending.Name);
        catNorthwind.Tables('Employees').Indexes.Delete(idxDescending.Name);
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cnn = tryClose(cnn);
        catNorthwind = null;
        idxAscending = null;
        idxDescending = null;
        rstEmployees = tryClose(rstEmployees);
    }
}

// https://docs.microsoft.com/en-us/sql/ado/reference/adox-api/views-and-fields-collections-example-vb
{
    let cnn: ADODB.Connection | null = null;
    let cat: ADOX.Catalog | null;
    let rst: ADODB.Recordset | null = null;
    let fld: ADODB.Field | null;
    try {
        // Open the Connection
        cnn = new ActiveXObject('ADODB.Connection');
        cnn.Open(connectionString);

        // Open the catalog
        cat = new ActiveXObject('ADOX.Catalog');
        cat.ActiveConnection = cnn;

        // Set the Source for the Recordset
        rst = new ActiveXObject('ADODB.Recordset');
        rst.Source = cat.Views('AllCustomers').Command;

        // Retrieve Field information
        rst.Fields.Refresh();

        for (fld of collectionToArray(rst.Fields)) {
            WScript.Echo(`${fld.Name}.${fld.Type}`);
        }
    } catch (error) {
        WScript.Echo(error);
    } finally {
        cnn = tryClose(cnn);
        cat = null;
        rst = tryClose(rst);
        fld = null;
    }
}

const flatten = <T>(arr: T[][], result: T[] = []) => {
    for (let i = 0, length = arr.length; i < length; i++) {
        const value: T | any[] = arr[i]; // any in this context is because the array might have an arbitrary depth
        if (Array.isArray(value)) {
            flatten(value, result);
        } else {
            result.push(value);
        }
    }
    return result;
};

// List indexes with multiple columns
{
    interface TableIndex {
        tbl: ADOX.Table;
        idx: ADOX.Index;
    }

    const cat = new ActiveXObject('ADOX.Catalog');
    cat.ActiveConnection = connectionString;

    let multicolumnIndexes = flatten(
        collectionToArray(cat.Tables).map(tbl =>
            collectionToArray(tbl.Indexes).map<TableIndex>(idx =>
                ({ tbl, idx })
            )
        )
    ).filter(x => x.idx.Columns.Count > 1);
    for (const x of multicolumnIndexes) {
        const columns = collectionToArray(x.idx.Columns).map(col => col.Name).join(', ');
        WScript.Echo(`${x.tbl.Name}.${x.idx.Name} -- ${columns}`);
    }
    multicolumnIndexes = [];
}
