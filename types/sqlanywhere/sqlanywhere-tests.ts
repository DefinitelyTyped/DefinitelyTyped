import sqlanywhere = require("sqlanywhere");

const connection: sqlanywhere.SybaseConnection = sqlanywhere.createConnection();
connection.connect(
    {
        Host: "test",
        UserId: "Test",
        Password: "Test",
        Server: "Test"
    },
    err => err
);
connection.exec("SELECT * FROM TEST", (err, res) => res);
