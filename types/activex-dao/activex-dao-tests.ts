let engine = new ActiveXObject('DAO.DBEngine.120');
let dbsNorthwind = engine.OpenDatabase('c:\\path\\to\\northwind.mdb');

// adding a record to a recordset -- https://msdn.microsoft.com/VBA/Access-VBA/articles/add-a-record-to-a-dao-recordset
let rstShippers = dbsNorthwind.OpenRecordset('Shippers');
rstShippers.AddNew();
rstShippers.Fields.Item('CompanyName').Value = 'Global Parcel Service';
// Set remaining fields
rstShippers.Update();
rstShippers.Close();

// create a QueryDef with the given SQL -- https://msdn.microsoft.com/VBA/Access-VBA/articles/build-sql-statements-that-include-variables-and-controls
let sql = 'SELECT * FROM Orders WHERE OrderDate > #3-31-2006#';
let qdf = dbsNorthwind.CreateQueryDef('Second quarter', sql);
// using parameters
sql = `
    PARAMETERS QuarterStart DATETIME
    SELECT *
    FROM Orders
    WHERE OrderDate > QuarterStart
`;
qdf = dbsNorthwind.CreateQueryDef('Second quarter (parameters)', sql);

// count the number of records in a Recordset -- https://msdn.microsoft.com/VBA/Access-VBA/articles/count-the-number-of-records-in-a-dao-recordset
const findRecordCount = (dbs: DAO.Database, sql: string) => {
    let count = 0;
    const rstRecords = dbs.OpenRecordset(sql);
    if (!rstRecords.EOF) {
        rstRecords.MoveLast();
        count = rstRecords.RecordCount;
    }
    rstRecords.Close();
    return count;
};

// delete records from a Recordset -- https://msdn.microsoft.com/VBA/Access-VBA/articles/delete-a-record-from-a-dao-recordset
rstShippers = dbsNorthwind.OpenRecordset('SELECT * FROM Shippers ORDER BY CompanyName, ShipperID', DAO.RecordsetTypeEnum.dbOpenDynaset);
if (!rstShippers.EOF) {
    let name = rstShippers.Fields.Item('CompanyName').Value;
    rstShippers.MoveNext();
    while (!rstShippers.EOF) {
        const recordName: string = rstShippers.Fields.Item('CompanyName').Value;
        if (recordName === name) {
            rstShippers.Delete();
        } else {
            name = recordName;
        }
        rstShippers.MoveNext();
    }
}
rstShippers.Close();

// copy entire records to an array -- https://msdn.microsoft.com/VBA/Access-VBA/articles/extract-data-from-a-record-in-a-dao-recordset
let rstEmployees = dbsNorthwind.OpenRecordset('SELECT FirstName, LastName, Title FROM Employees', DAO.RecordsetTypeEnum.dbOpenSnapshot);
let records = new VBArray<string>(rstEmployees.GetRows(3));
let recordCount = records.ubound(2) + 1;
let columnCount = records.ubound(1) + 1;
for (let row = 0; row < recordCount; row += 1) {
    for (let column = 0; column < columnCount; column += 1) {
        WScript.Echo(records.getItem(column, row));
    }
}
if (rstEmployees.EOF) { WScript.Echo('At end of recordset'); }
rstEmployees.Close();

// find a record in a dynaset-type or snapshot-type DAO Recordset -- https://msdn.microsoft.com/en-us/vba/access-vba/articles/find-a-record-in-a-dynaset-type-or-snapshot-type-dao-recordset
const findOrdersWithoutDetails = () => {
    const orders: number[] = [];
    const rstOrders = dbsNorthwind.OpenRecordset('SELECT * FROM Orders ORDER BY OrderID', DAO.RecordsetTypeEnum.dbOpenSnapshot);
    const rstOrderDetails = dbsNorthwind.OpenRecordset('SELECT * FROM [Order Details] ORDER BY OrderID', DAO.RecordsetTypeEnum.dbOpenSnapshot);

    const closeRecordsets = () => {
        rstOrders.Close();
        rstOrderDetails.Close();
    };
    if (rstOrders.EOF || rstOrderDetails.EOF) {
        closeRecordsets();
        return;
    }

    while (!rstOrders.EOF) {
        const orderID = rstOrders.Fields.Item('OrderID').Value;
        rstOrderDetails.FindFirst(`OrderID=${orderID}`);
        if (rstOrderDetails.NoMatch) {
            orders.push(orderID);
        }
        rstOrders.MoveNext();
    }
    closeRecordsets();
    return orders;
};

// find a record in a table-type DAO Recordset -- https://msdn.microsoft.com/VBA/Access-VBA/articles/find-a-record-in-a-table-type-dao-recordset
const getHireDate = (employeeID: number) => {
    let hireDate: Date | undefined;
    const rstEmployees = dbsNorthwind.OpenRecordset('Employees');
    rstEmployees.Index = 'PrimaryKey';
    rstEmployees.Seek('=', employeeID);
    if (!rstEmployees.NoMatch) {
        hireDate = new Date(rstEmployees.Fields.Item('HireDate').Value as VarDate);
    }
    return hireDate;
};

// manipulate multiple fields with DAO -- https://msdn.microsoft.com/VBA/Access-VBA/articles/manipulate-multivalued-fields-with-dao
const browseMultiValueField = () => {
    const rs = dbsNorthwind.OpenRecordset('Tasks');
    rs.MoveFirst();
    while (!rs.EOF) {
        WScript.Echo(rs.Fields.Item('TaskName').Value);
        const childRs = rs.Fields.Item('AssignedTo').Value as DAO.Recordset;
        if (childRs.EOF) { continue; }
        childRs.MoveFirst();
        while (!childRs.EOF) {
            WScript.Echo('\t' + childRs.Fields.Item('Value').Value);
        }
    }
};

// modifying an existing record in a DAO Recordset -- https://msdn.microsoft.com/VBA/Access-VBA/articles/modify-an-existing-record-in-a-dao-recordset
const changeTitleWithoutTransaction = () => {
    rstEmployees = dbsNorthwind.OpenRecordset('Employees');
    while (!rstEmployees.EOF) {
        if (rstEmployees.Fields.Item('Title').Value === 'Sales Representative') {
            rstEmployees.Edit();
            rstEmployees.Fields.Item('Title').Value = 'Account Executive';
            rstEmployees.Update();
        }
        rstEmployees.MoveNext();
    }
    rstEmployees.Close();
};

// using transactions in a DAO Recordset -- https://msdn.microsoft.com/VBA/Access-VBA/articles/use-transactions-in-a-dao-recordset
const changeTitleWithTransaction = (commitTransaction: boolean) => {
    const currentWorkspace = engine.Workspaces.Item(0);
    rstEmployees = dbsNorthwind.OpenRecordset('Employees');
    currentWorkspace.BeginTrans();
    while (!rstEmployees.EOF) {
        if (rstEmployees.Fields.Item('Title').Value === 'Sales Representative') {
            rstEmployees.Edit();
            rstEmployees.Fields.Item('Title').Value = 'Account Executive';
            rstEmployees.Update();
        }
        rstEmployees.MoveNext();
    }
    if (commitTransaction) {
        currentWorkspace.CommitTrans();
    } else {
        currentWorkspace.Rollback();
    }
    rstEmployees.Close();
    currentWorkspace.Close();
};
