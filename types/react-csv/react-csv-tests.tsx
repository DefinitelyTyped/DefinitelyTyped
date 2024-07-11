import * as React from "react";
import { CSVDownload, CSVLink } from "react-csv";
import { toCSV } from "react-csv/lib/core";

const headers = [
    { label: "First Name", key: "details.firstName" },
    { label: "Last Name", key: "details.lastName" },
    { label: "Job", key: "job" },
];

const headersStrings = ["foo", "bar"];

const data = [
    { details: { firstName: "Ahmed", lastName: "Tomi" }, job: "manager" },
    { details: { firstName: "John", lastName: "Jones" }, job: "developer" },
];

const dataFunction = () => data;

const dataString = `firstname,lastname
Ahmed,Tomi
Raed,Labes
Yezzi,Min l3b
`;

const syncOnClickReturn = (
    event: React.MouseEventHandler<HTMLAnchorElement>,
) => {
    window.console.log(event);
    return true;
};
const syncOnClickVoid = (event: React.MouseEventHandler<HTMLAnchorElement>) => window.console.log(event);
const asyncOnClickReturn = (
    event: React.MouseEventHandler<HTMLAnchorElement>,
    done: (proceed?: boolean) => void,
) => {
    window.console.log(event);
    done(true);
};
const asyncOnClickVoid = (
    event: React.MouseEventHandler<HTMLAnchorElement>,
    done: (proceed?: boolean) => void,
) => {
    window.console.log(event);
    done();
};

<CSVLink data={dataString} />;
<CSVLink data={dataString} headers={headersStrings} />;
<CSVLink data={data} />;
<CSVLink data={data} headers={headers} />;
<CSVLink data={data} headers={headers} />;
<CSVLink data={data} headers={headers} separator={","} />;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
/>;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
/>;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    enclosingCharacter={`'`}
/>;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    enclosingCharacter={`'`}
    onClick={syncOnClickReturn}
/>;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    enclosingCharacter={`'`}
    onClick={syncOnClickVoid}
/>;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    enclosingCharacter={`'`}
    onClick={asyncOnClickReturn}
    asyncOnClick={true}
/>;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    enclosingCharacter={`'`}
    onClick={asyncOnClickVoid}
    asyncOnClick={true}
/>;

<CSVLink
    data={data}
    headers={headers}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    enclosingCharacter={`'`}
    onClick={asyncOnClickVoid}
    asyncOnClick={true}
    className="test"
    target="_blank"
/>;

<CSVDownload data={dataString} />;
<CSVDownload data={dataString} headers={headersStrings} />;
<CSVDownload data={data} />;
<CSVDownload data={data} headers={headers} />;
<CSVDownload data={data} headers={headers} target={"_blank"} />;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
/>;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
    filename={"bob.csv"}
/>;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
/>;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
/>;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    onClick={syncOnClickReturn}
/>;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    onClick={syncOnClickVoid}
/>;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    onClick={asyncOnClickReturn}
    asyncOnClick={true}
/>;

<CSVDownload
    data={data}
    headers={headers}
    target={"_blank"}
    separator={","}
    filename={"bob.csv"}
    uFEFF={true}
    onClick={asyncOnClickVoid}
    asyncOnClick={true}
/>;

<CSVDownload
    data={dataFunction}
    headers={headers}
    target="_blank"
    separator=","
    filename="bob.csv"
    uFEFF
    onClick={asyncOnClickVoid}
    asyncOnClick
/>;
toCSV(data, headers, ",", `"`);
