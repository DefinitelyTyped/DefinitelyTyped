let Connection: JsStore.Instance;
function initConnection() {
    var Database_Name: any = "Demo";
    JsStore.isDbExist(Database_Name, function (isExist: boolean) {
        if (isExist) {
            Connection = new JsStore.Instance();
        }
        else {
            let Table: Model.ITable = <Model.ITable>{
                Name: "TableName",
                Columns: [
                    {
                        Name: 'Column_1',
                        PrimaryKey: true,
                        AutoIncrement: true
                    }
                ]
            };
            let DataBase = <Model.IDataBase>{
                Name: Database_Name,
                Tables: [Table]
            };
            Connection = new JsStore.Instance().createDb(DataBase);
        }
    }, function (err: JsStore.IError) {
        alert(err);
    });
}

function selectData() {
    let Query = <JsStore.ISelect>{
        From: "TableName"
    };

    Connection.select(Query, (results: Array<any>) => {
        console.log(results);
    });
}

function clearTableData() {
    Connection.clear("TableName", function () {
        alert('Table cleared successfully');
    });
}
