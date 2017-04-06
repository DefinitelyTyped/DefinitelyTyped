//open connection to an Excel file
var pathToExcelFile = 'C:\\path\\to\\excel\\file.xlsx';
var conn = new ActiveXObject('ADODB.Connection');
conn.Provider = 'Microsoft.ACE.OLEDB.12.0';
conn.ConnectionString =
    'Data Source="' + pathToExcelFile + '";' +
    'Extended Properties="Excel 12.0;HDR=Yes"';
conn.Open();

//create a Command to access the data
var cmd = new ActiveXObject('ADODB.Command');
cmd.CommandText = 'SELECT DISTINCT LastName, CityName FROM [Sheet1$]';
//get a Recordset
var rs = cmd.Execute();
//build a string from the Recordset
var s = rs.GetString(ADODB.StringFormatEnum.adClipString, -1, '\t', '\n', '(NULL)');
rs.Close();
WScript.Echo(s);