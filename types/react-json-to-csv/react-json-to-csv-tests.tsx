import * as React from "react";
import CsvDownload from "react-json-to-csv";

const testDataArray = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
];

const TestOnlyRequired = () => <CsvDownload data={testDataArray} />;

const TestComponent = () => (
    <CsvDownload
        data={testDataArray}
        filename="test.csv"
        delimiter="\t"
        headers={["foo", "bar"]}
        className="btn btn-primary"
    >
        Download CSV
    </CsvDownload>
);
