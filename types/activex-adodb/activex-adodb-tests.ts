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
cmd.CommandText = 'SELECT DISTINCT LastName, CityName FROM [Sheet1$]';
// get a Recordset
let rs = cmd.Execute();
// build a string from the Recordset
let s = rs.GetString(ADODB.StringFormatEnum.adClipString, -1, '\t', '\n', '(NULL)');
rs.Close();
WScript.Echo(s);
