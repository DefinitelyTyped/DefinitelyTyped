import Azure = require("azure");

var ts = new Azure.TableService();

ts.createTable("babbsies", function (error, table) {
    ts.insertEntity(table.TableName, { PartitionKey: "Midwest", RowKey: "1", Name: "Tommy", Color: "Blue" },
        function () {
            ts.deleteEntity(table.TableName, { PartitionKey: "Midwest", RowKey: "1" });
        });
});

Azure.RoleEnvironment.on('stopping', () => {
});

Azure.RoleEnvironment.getDeploymentId((error, id) => { 
});

Azure.RoleEnvironment.isAvailable((error, available) => { 
});
