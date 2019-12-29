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

const dbOpenSnapshot = DAO.RecordsetTypeEnum.dbOpenSnapshot;

let engine = new ActiveXObject('DAO.DBEngine');
let dbsNorthwind = engine.OpenDatabase('c:\\path\\to\\northwind.mdb');

// https://msdn.microsoft.com/VBA/Access-VBA/articles/add-a-record-to-a-dao-recordset
{
    // adding a record to a recordset
    const rstShippers = dbsNorthwind.OpenRecordset('Shippers');
    rstShippers.AddNew();
    rstShippers('CompanyName').Value = 'Global Parcel Service';
    // Set remaining fields
    rstShippers.Update();
    rstShippers.Close();
}

// https://msdn.microsoft.com/VBA/Access-VBA/articles/build-sql-statements-that-include-variables-and-controls
{
    // create a QueryDef with the given SQL
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
    WScript.Echo(`Field names: ${collectionToArray(qdf.Fields).map(fld => fld.Name).join(', ')}`);
}

// https://msdn.microsoft.com/VBA/Access-VBA/articles/count-the-number-of-records-in-a-dao-recordset
/** Count the number of records in a Recordset */
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

// https://msdn.microsoft.com/VBA/Access-VBA/articles/delete-a-record-from-a-dao-recordset
{
    // delete records from a Recordset
    const rstShippers = dbsNorthwind.OpenRecordset('SELECT * FROM Shippers ORDER BY CompanyName, ShipperID', DAO.RecordsetTypeEnum.dbOpenDynaset);
    if (!rstShippers.EOF) {
        let name = rstShippers('CompanyName').Value;
        rstShippers.MoveNext();
        while (!rstShippers.EOF) {
            const recordName: string = rstShippers('CompanyName').Value;
            if (recordName === name) {
                rstShippers.Delete();
            } else {
                name = recordName;
            }
            rstShippers.MoveNext();
        }
    }
    rstShippers.Close();
}

// https://msdn.microsoft.com/VBA/Access-VBA/articles/extract-data-from-a-record-in-a-dao-recordset
{
    // copy entire records to an array
    const rstEmployees = dbsNorthwind.OpenRecordset('SELECT FirstName, LastName, Title FROM Employees', dbOpenSnapshot);
    const records = new VBArray<string>(rstEmployees.GetRows(3));
    const recordCount = records.ubound(2) + 1;
    const columnCount = records.ubound(1) + 1;
    for (let row = 0; row < recordCount; row += 1) {
        for (let column = 0; column < columnCount; column += 1) {
            WScript.Echo(records.getItem(column, row));
        }
    }
    if (rstEmployees.EOF) { WScript.Echo('At end of recordset'); }
    rstEmployees.Close();
}

// find a record in a dynaset-type or snapshot-type DAO Recordset -- https://msdn.microsoft.com/en-us/vba/access-vba/articles/find-a-record-in-a-dynaset-type-or-snapshot-type-dao-recordset
{
    const orders: number[] = [];
    const rstOrders = dbsNorthwind.OpenRecordset('SELECT * FROM Orders ORDER BY OrderID', dbOpenSnapshot);
    const rstOrderDetails = dbsNorthwind.OpenRecordset('SELECT * FROM [Order Details] ORDER BY OrderID', dbOpenSnapshot);

    if (!rstOrders.EOF && !rstOrderDetails.EOF) {
        while (!rstOrders.EOF) {
            const orderID = rstOrders('OrderID').Value;
            rstOrderDetails.FindFirst(`OrderID=${orderID}`);
            if (rstOrderDetails.NoMatch) {
                orders.push(orderID);
            }
            rstOrders.MoveNext();
        }
    }

    rstOrders.Close();
    rstOrderDetails.Close();

    WScript.Echo(orders.join('\n'));
}

// https://msdn.microsoft.com/VBA/Access-VBA/articles/find-a-record-in-a-table-type-dao-recordset
/** Find a record in a table-type DAO Recordset */
const getHireDate = (employeeID: number) => {
    let hireDate: Date | undefined;
    const rstEmployees = dbsNorthwind.OpenRecordset('Employees');
    rstEmployees.Index = 'PrimaryKey';
    rstEmployees.Seek('=', employeeID);
    if (!rstEmployees.NoMatch) {
        hireDate = new Date(rstEmployees('HireDate').Value as VarDate);
    }
    return hireDate;
};

// https://msdn.microsoft.com/VBA/Access-VBA/articles/manipulate-multivalued-fields-with-dao
{
    // manipulate multiple fields with DAO
    const rs = dbsNorthwind.OpenRecordset('Tasks');
    rs.MoveFirst();
    while (!rs.EOF) {
        WScript.Echo(rs('TaskName').Value);
        const childRs = rs('AssignedTo').Value as DAO.Recordset;
        if (childRs.EOF) { continue; }
        childRs.MoveFirst();
        while (!childRs.EOF) {
            WScript.Echo('\t' + childRs('Value').Value);
        }
    }
}

// https://msdn.microsoft.com/VBA/Access-VBA/articles/modify-an-existing-record-in-a-dao-recordset
{
    // modifying an existing record in a DAO Recordset
    const rstEmployees = dbsNorthwind.OpenRecordset('Employees');
    while (!rstEmployees.EOF) {
        if (rstEmployees('Title').Value === 'Sales Representative') {
            rstEmployees.Edit();
            rstEmployees('Title').Value = 'Account Executive';
            rstEmployees.Update();
        }
        rstEmployees.MoveNext();
    }
    rstEmployees.Close();
}

// https://msdn.microsoft.com/VBA/Access-VBA/articles/use-transactions-in-a-dao-recordset
/** using transactions in a DAO Recordset */
const changeTitleWithTransaction = (commitTransaction: boolean) => {
    const currentWorkspace = engine.Workspaces(0);
    const rstEmployees = dbsNorthwind.OpenRecordset('Employees');
    currentWorkspace.BeginTrans();
    while (!rstEmployees.EOF) {
        if (rstEmployees('Title').Value === 'Sales Representative') {
            rstEmployees.Edit();
            rstEmployees('Title').Value = 'Account Executive';
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
