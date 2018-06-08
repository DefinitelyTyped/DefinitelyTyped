// Note -- running these tests under cscript requires some ES5 polyfills

/// <reference types="windows-script-host" />
/// <reference types="activex-scripting" />

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

const toSafeArray = <T>(...items: T[]): SafeArray<T> => {
    const dict: Scripting.Dictionary<number, T> = new ActiveXObject('Scripting.Dictionary');
    items.forEach((x, index) => dict.Add(index, x));
    return dict.Items();
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

const printLine = () => WScript.Echo(new Array(26).join('-'));

{
    // open connection to an Excel file
    const pathToExcelFile = 'C:\\path\\to\\excel\\file.xlsx';
    const conn = new ActiveXObject('ADODB.Connection');
    conn.ConnectionString = toConnectionString({
        Provider: 'Microsoft.ACE.OLEDB.12.0',
        'Data Source': pathToExcelFile,
        'Extended Properties': "Excel 12.0;HDR=Yes"
    });
    conn.Open();

    // create a Command to access the data
    const cmd = new ActiveXObject('ADODB.Command');
    cmd.ActiveConnection = conn;
    cmd.CommandText = 'SELECT DISTINCT LastName, CityName FROM [Sheet1$]';
    // get a Recordset
    const rs = cmd.Execute() as ADODB.Recordset;
    // build a string from the Recordset
    const s = rs.GetString(ADODB.StringFormatEnum.adClipString, -1, '\t', '\n', '(NULL)');
    rs.Close();
    WScript.Echo(s);
}

// create a disconnected recordset -- https://support.microsoft.com/en-us/help/184397/how-to-create-ado-disconnected-recordsets-in-vba-c-java
{
    const conn = new ActiveXObject('ADODB.Connection');
    conn.Open(); // pass connection details here

    const rs = new ActiveXObject('ADODB.Recordset');
    rs.CursorLocation = ADODB.CursorLocationEnum.adUseClient;
    rs.Open('SELECT * FROM Table1', conn, ADODB.CursorTypeEnum.adOpenForwardOnly, ADODB.LockTypeEnum.adLockBatchOptimistic);
    rs.ActiveConnection = null;

    const v = rs(0).Value;
    conn.Close();
}

// update with SafeArray
{
    const rs = new ActiveXObject('ADODB.Recordset');
    rs.Open(); // missing connection details here
    const fields = toSafeArray('FirstName', 'LastName', 'DOB');
    const values = toSafeArray<any>('Plony', 'Almony', new Date(1980, 1, 1).getVarDate());
    rs.Update(fields, values);
    rs.Close();
}

const withConnection = (initialCatalog: string, fn: (conn: ADODB.Connection) => void) => {
    let conn: ADODB.Connection | null = new ActiveXObject('ADODB.Connection');
    const connectionString = toConnectionString({
        'Initial Catalog': initialCatalog
    });
    try {
        conn.Open(connectionString);
        fn(conn);
    } catch (e) {
        WScript.Echo(e.message);
    } finally {
        if (conn.State === ADODB.ObjectStateEnum.adStateOpen) {
            conn.Close();
        }
        conn = null;
    }
};

const withRs = (catalogOrConnection: string | ADODB.Connection, tableOrCommand: string | ADODB.Command, fn: (rs: ADODB.Recordset) => void,
    type: ADODB.CursorTypeEnum = ADODB.CursorTypeEnum.adOpenUnspecified,
    location: ADODB.CursorLocationEnum = ADODB.CursorLocationEnum.adUseNone,
    lockType: ADODB.LockTypeEnum = ADODB.LockTypeEnum.adLockOptimistic
) => {
    let connection = catalogOrConnection;
    if (typeof connection === 'string') {
        // expand catalog to full connection string
        connection = toConnectionString({
            'Initial Catalog': connection
        });
    }

    let rs: ADODB.Recordset | null = null;
    try {
        if (typeof tableOrCommand === 'string') {
            rs = new ActiveXObject('ADODB.Recordset');
            rs.CursorLocation = location;
            rs.LockType = lockType;
            rs.Open(tableOrCommand, connection, type, lockType, ADODB.CommandTypeEnum.adCmdTable);
        } else {
            tableOrCommand.ActiveConnection = connection;
            rs = tableOrCommand.Execute() as ADODB.Recordset;
        }
        fn(rs);
    } catch (e) {
        WScript.Echo(e.message);
    } finally {
        if (rs && rs.State === ADODB.ObjectStateEnum.adStateOpen) {
            rs.Close();
        }
        rs = null;
    }
};

const withEmployees = (fn: (rs: ADODB.Recordset) => void, type: ADODB.CursorTypeEnum) =>
    withRs('Northwind', 'Employees', fn, type, ADODB.CursorLocationEnum.adUseClient);

// https://msdn.microsoft.com/en-us/library/jj249882.aspx
{
    withConnection('Northwind', conn => {
        withEmployees(rs => {
            const FName = 'first name';
            const LName = 'last name';

            rs.AddNew();
            rs('FirstName').Value = FName;
            rs('LastName').Value = LName;
            rs.Update();
            WScript.Echo('New record added.');
        }, ADODB.CursorTypeEnum.adOpenKeyset);
    });
}

// https://msdn.microsoft.com/en-us/library/jj249434.aspx
{
    withConnection('Northwind', conn => {
        withEmployees(rs => {
            // Set PageSize to five to display names and hire dates of five employees at a time
            rs.PageSize = 5;
            const pageCount = rs.PageCount;

            WScript.Echo(`There are ${pageCount} pages, each containing ${rs.PageSize} or fewer records`.trim());

            for (let i = 1; i <= pageCount; i++) {
                rs.AbsolutePage = i;

                for (let iRecord = 1; iRecord <= rs.PageSize; iRecord++) {
                    // First column in row contains page number on
                    // first record of each page. Otherwise, the column
                    // contains a non-breaking space.
                    const page = iRecord === 1 ? `Page ${i} of ${rs.PageCount}` : '';

                    // First and last name are in first column.
                    const name = `${rs('FirstName')} ${rs('LastName')}`;

                    // Hire date in second column.
                    const hireDate = new Date(rs('HireDate').Value as VarDate).toString();

                    // Write the row
                    WScript.Echo([page, name, hireDate].join('\t'));

                    // Get next record.
                    rs.MoveNext();

                    if (rs.EOF) { break; }
                }
            }
        }, ADODB.CursorTypeEnum.adOpenStatic);
    });
}

// https://msdn.microsoft.com/en-us/library/jj250117.aspx
{
    withConnection('Northwind', conn => {
        withEmployees(rs => {
            WScript.Echo(['AbsolutePosition', 'Name', 'Hire Date'].join('\t'));

            while (!rs.EOF) {
                // First column in row contains AbsolutePosition value.
                const recordCount = `${rs.AbsolutePosition} of ${rs.RecordCount}`;

                // First and last name are in first column.
                const name = `${rs('FirstName')} ${rs('LastName')}`;

                // Hire date in second column.
                const hireDate = new Date(rs('HireDate').Value as VarDate).toString();

                WScript.Echo([recordCount, name, hireDate].join('\t'));
            }
        }, ADODB.CursorTypeEnum.adOpenStatic);
    });
}

// https://msdn.microsoft.com/en-us/library/jj249824.aspx
{
    withConnection('Northwind', conn => {
        WScript.Echo('Enter city name, and press ENTER:');
        const cityName = WScript.StdIn.ReadLine();

        const cmdContact = new ActiveXObject('ADODB.Command');
        cmdContact.CommandText = 'SELECT ContactName FROM Customers WHERE City = ?';
        cmdContact.ActiveConnection = conn;

        // create parameter and insert variable value
        const param = cmdContact.CreateParameter('CityName', ADODB.DataTypeEnum.adChar, ADODB.ParameterDirectionEnum.adParamInput, 30, cityName);
        cmdContact.Parameters.Append(param);

        let rsContact: ADODB.Recordset | null = null;
        try {
            // Open a recordset using the command object
            rsContact = cmdContact.Execute() as ADODB.Recordset;

            while (!rsContact.EOF) {
                WScript.Echo(rsContact('ContactName'));
                rsContact.MoveNext();
            }
        } catch (e) {
            WScript.Echo(e.message);
        } finally {
            if (rsContact && rsContact.State === ADODB.ObjectStateEnum.adStateOpen) {
                rsContact.Close();
            }
        }
    });
}

// https://msdn.microsoft.com/en-us/library/jj249056.aspx
// https://msdn.microsoft.com/en-us/library/jj249494.aspx
{
    WScript.Echo('Enter royalty value, and press ENTER:');
    const iRoyalty = parseInt(WScript.StdIn.ReadLine(), 10);
    if (iRoyalty > -1) {
        withConnection('pubs', conn => {
            const cmdByRoyalty = new ActiveXObject('ADODB.Command');
            cmdByRoyalty.CommandText = 'byroyalty';
            cmdByRoyalty.CommandType = ADODB.CommandTypeEnum.adCmdStoredProc;
            cmdByRoyalty.CommandTimeout = 15;

            // The stored procedure called above is as follows:
            /*
            CREATE PROCEDURE byroyalty
                @percentage int
            AS
                SELECT au_id from titleauthor
                WHERE titleauthor.royaltyper = @percentage
            GO
            */

            const prmByRoyalty = new ActiveXObject('ADODB.Parameter');
            prmByRoyalty.Type = ADODB.DataTypeEnum.adInteger;
            prmByRoyalty.Size = 3;
            prmByRoyalty.Direction = ADODB.ParameterDirectionEnum.adParamInput;
            prmByRoyalty.Value = iRoyalty;
            cmdByRoyalty.Parameters.Append(prmByRoyalty);

            // open byRoyalty recordset via Command
            withRs(conn, cmdByRoyalty, rsByRoyalty => {
                // open authors recordset directly
                withRs(conn, 'Authors', rsAuthor => {
                    while (!rsByRoyalty.EOF) {
                        // set filter
                        rsAuthor.Filter = `au_id='${rsByRoyalty('au_id')}'`;

                        // write author name
                        WScript.Echo(`${rsAuthor('au_fname')} ${rsAuthor('au_lname')}`);
                    }

                    // get next record
                    rsByRoyalty.MoveNext();
                });
            });
        });
    }
}

// https://msdn.microsoft.com/en-us/library/jj250032.aspx
{
    withRs('Northwind', 'Suppliers', rsSuppliers => {
        WScript.Echo(['Field Value', 'Defined Size', 'Actual Size'].join('\t'));
        while (!rsSuppliers.EOF) {
            const fld = rsSuppliers('CompanyName');
            WScript.Echo([fld.Value, fld.DefinedSize, fld.ActualSize].join('\t'));
        }
        rsSuppliers.MoveNext();
    });
}

// https://msdn.microsoft.com/en-us/library/jj249928.aspx
{
    withRs('Northwind', 'Customers', rs => {
        const loop20 = () => {
            const start = new Date().getTime();

            // loop through the recordset 20 times
            for (let i = 0; i < 20; i++) {
                rs.MoveFirst();
                while (!rs.EOF) {
                    // do something with the record
                    const strTemp = rs('CompanyName').Value as string;
                    rs.MoveNext();
                }
            }

            const end = new Date().getTime();
            return end - start;
        };

        const noCache = loop20();

        // cache records in groups of 30
        rs.MoveFirst();
        rs.CacheSize = 30;

        const cache = loop20();

        WScript.Echo(`No cache: ${noCache}; with cache: ${cache}`);
    }, ADODB.CursorTypeEnum.adOpenUnspecified, ADODB.CursorLocationEnum.adUseClient);
}

// https://msdn.microsoft.com/en-us/library/jj249157.aspx
{
    const printAuthorRecordset = (caption: string, rs: ADODB.Recordset) => {
        printLine();
        WScript.Echo(`**${caption}**`);
        while (!rs.EOF) {
            // write current row's data
            const name = `${rs('au_fname')} ${rs('au_lname')}`;
            WScript.Echo(name);

            // get next record
            rs.MoveNext;
        }
    };

    WScript.Echo('Enter last name of author to find (e.g., Ringer) and then press ENTER:');
    const lastName = WScript.StdIn.ReadLine() || '';
    if (lastName.length > 0) {
        withConnection('pubs', conn => {
            // command object parameters
            const cmdAuthor = new ActiveXObject('ADODB.Command');
            cmdAuthor.CommandText = 'SELECT * FROM Authors WHERE au_name = ?';
            const lastNameParameter = cmdAuthor.CreateParameter('Last Name', ADODB.DataTypeEnum.adChar, ADODB.ParameterDirectionEnum.adParamInput, 20, lastName);
            cmdAuthor.Parameters.Append(lastNameParameter);
            cmdAuthor.ActiveConnection = conn;

            // recordset from command.execute
            const rsAuthor = cmdAuthor.Execute() as ADODB.Recordset;

            // recordset from connection.execute
            const rsAuthor2 = conn.Execute('SELECT * FROM Authors') as ADODB.Recordset;

            const errs = collectionToArray(conn.Errors);
            if (errs.length > 0) {
                for (const err of errs) {
                    WScript.Echo(err);
                }
            }
            conn.Errors.Clear();

            printAuthorRecordset('Command.Execute results', rsAuthor);
            printAuthorRecordset('Connection.Execute results', rsAuthor2);
        });
    }
}

// https://msdn.microsoft.com/en-us/library/jj249466.aspx
{
    withConnection('Northwind', conn => {
        const sql = 'SELECT * FROM Customers';
        withRs(conn, sql, rs => {
            rs.MoveFirst();
            if (rs.RecordCount === 0) {
                WScript.Echo(`No records matched for '${sql}'`);
                return;
            }

            // print headings for each field name
            WScript.Echo(collectionToArray(rs.Fields).map(fld => fld.Name).join('\t'));

            // JScript doesn't support multi-dimensional arrays
            // so we'll convert the returned array to a single
            // dimensional JScript array and then display the data.
            const safeArray = rs.GetRows();
            const data = new VBArray(safeArray).toArray();

            const fieldCount = rs.Fields.Count;

            data.forEach((cellValue, index) => {
                const currentField = index % fieldCount;

                // don't print tab character for first and last columns
                if (currentField > 0 && currentField < fieldCount - 1) {
                    WScript.StdOut.Write('\t');
                }

                const displayValue = cellValue === null ? '-null-' : cellValue;
                if (currentField === fieldCount - 1) {
                    WScript.StdOut.WriteLine(displayValue);
                } else {
                    WScript.StdOut.Write(displayValue);
                }
            });
        }, ADODB.CursorTypeEnum.adOpenKeyset, ADODB.CursorLocationEnum.adUseClient, ADODB.LockTypeEnum.adLockOptimistic);
    });
}
