import * as resolver from "table-resolver";

const result = resolver.resolve({
    columns: [{
        id: "testid1",
        title: "test title 1",
    }, {
        id: "testid2",
        title: "test title 2"
    }],
    method: (item) => item.column
});

export default result;
