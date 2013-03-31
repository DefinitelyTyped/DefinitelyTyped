/// <reference path="azure.d.ts" />


import Azure = module("azure");

var ts = new Azure.TableService();

ts.createTable("babbsies", function (error, table) {
    ts.insertEntity(table.TableName, { PartitionKey: "Midwest", RowKey: "1", Name: "Tommy", Color: "Blue" },
        function () {
            ts.deleteEntity(table.TableName, { PartitionKey: "Midwest", RowKey: "1" });
        });
});