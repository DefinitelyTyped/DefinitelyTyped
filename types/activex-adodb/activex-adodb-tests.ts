let obj0 = new ActiveXObject('ADODB.Command');

let obj1 = new ActiveXObject('ADODB.Connection');

let obj2 = new ActiveXObject('ADODB.Parameter');

let obj3 = new ActiveXObject('ADODB.Record');

let obj4 = new ActiveXObject('ADODB.Recordset');

let obj5 = new ActiveXObject('ADODB.Stream');

// open connection to an Excel file
let pathToExcelFile = 'C:\\path\\to\\excel\\file.xlsx';
let conn = new ActiveXObject('ADODB.Connection');
conn.Provider = 'Microsoft.ACE.OLEDB.12.0';
conn.ConnectionString = `Data Source="${pathToExcelFile}";Extended Properties="Excel 12.0;HDR=Yes"`;
conn.Open();

// create a Command to access the data
let cmd = new ActiveXObject('ADODB.Command');
cmd.ActiveConnection = conn;
cmd.CommandText = 'SELECT DISTINCT LastName, CityName FROM [Sheet1$]';
// get a Recordset
let rs = cmd.Execute();
// build a string from the Recordset
let s = rs.GetString(ADODB.StringFormatEnum.adClipString, -1, '\t', '\n', '(NULL)');
rs.Close();
WScript.Echo(s);

// create a disconnected recordset -- https://support.microsoft.com/en-us/help/184397/how-to-create-ado-disconnected-recordsets-in-vba-c-java
(() => {
    conn = new ActiveXObject('ADODB.Connection');
    conn.Open(); // pass connection details here

    rs = new ActiveXObject('ADODB.Recordset');
    rs.CursorLocation = ADODB.CursorLocationEnum.adUseClient;
    rs.Open('SELECT * FROM Table1', conn, ADODB.CursorTypeEnum.adOpenForwardOnly, ADODB.LockTypeEnum.adLockBatchOptimistic);
    rs.ActiveConnection = null;

    const v = rs.Fields.Item(0).Value;
    conn.Close();
})();

// helper function
const toSafeArray = <T>(...items: T[]): SafeArray<T> => {
    const dict = new ActiveXObject('Scripting.Dictionary');
    items.forEach((x, index) => dict.Add(index, x));
    return dict.Items() as SafeArray<T>;
};

// update with SafeArray
(() => {
    const fields = toSafeArray('FirstName', 'LastName', 'DOB');
    const values = toSafeArray<any>('Plony', 'Almony', new Date(1980, 1, 1).getVarDate());
    rs.Update(fields, values);
})();
