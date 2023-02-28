import * as React from "react";
import { render } from "react-dom";
import { CSVLink, CSVDownload } from "react-csv";

const headers = [
    { label: "First Name", key: "details.firstName" },
    { label: "Last Name", key: "details.lastName" },
    { label: "Job", key: "job" }
];

const headersStrings = ["foo", "bar"];

const data = [
    { details: { firstName: "Ahmed", lastName: "Tomi" }, job: "manager" },
    { details: { firstName: "John", lastName: "Jones" }, job: "developer" }
];

const dataFunction = () => data;

const dataString = `firstname,lastname
Ahmed,Tomi
Raed,Labes
Yezzi,Min l3b
`;

const syncOnClickReturn = (
    event: React.MouseEventHandler<HTMLAnchorElement>
) => {
    window.console.log(event);
    return true;
};
const syncOnClickVoid = (event: React.MouseEventHandler<HTMLAnchorElement>) =>
    window.console.log(event);
const asyncOnClickReturn = (
    event: React.MouseEventHandler<HTMLAnchorElement>,
    done: (proceed?: boolean) => void
) => {
    window.console.log(event);
    done(true);
};
const asyncOnClickVoid = (
    event: React.MouseEventHandler<HTMLAnchorElement>,
    done: (proceed?: boolean) => void
) => {
    window.console.log(event);
    done();
};

const node = document.getElementById("main");

render(<CSVLink data={dataString} />, node);
render(<CSVLink data={dataString} headers={headersStrings} />, node);
render(<CSVLink data={data} />, node);
render(<CSVLink data={data} headers={headers} />, node);
render(<CSVLink data={data} headers={headers} />, node);
render(<CSVLink data={data} headers={headers} separator={","} />, node);
render(
    <CSVLink
        data={data}
        headers={headers}
        separator={","}
        filename={"bob.csv"}
    />,
    node
);
render(
    <CSVLink
        data={data}
        headers={headers}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
    />,
    node
);
render(
    <CSVLink
        data={data}
        headers={headers}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        enclosingCharacter={`'`}
    />,
    node
);
render(
    <CSVLink
        data={data}
        headers={headers}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        enclosingCharacter={`'`}
        onClick={syncOnClickReturn}
    />,
    node
);
render(
    <CSVLink
        data={data}
        headers={headers}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        enclosingCharacter={`'`}
        onClick={syncOnClickVoid}
    />,
    node
);
render(
    <CSVLink
        data={data}
        headers={headers}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        enclosingCharacter={`'`}
        onClick={asyncOnClickReturn}
        asyncOnClick={true}
    />,
    node
);
render(
    <CSVLink
        data={data}
        headers={headers}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        enclosingCharacter={`'`}
        onClick={asyncOnClickVoid}
        asyncOnClick={true}
    />,
    node
);
render(
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
    />,
    node
);

render(<CSVDownload data={dataString} />, node);
render(<CSVDownload data={dataString} headers={headersStrings} />, node);
render(<CSVDownload data={data} />, node);
render(<CSVDownload data={data} headers={headers} />, node);
render(<CSVDownload data={data} headers={headers} target={"_blank"} />, node);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
    />,
    node
);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
        filename={"bob.csv"}
    />,
    node
);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
    />,
    node
);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
    />,
    node
);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        onClick={syncOnClickReturn}
    />,
    node
);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        onClick={syncOnClickVoid}
    />,
    node
);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        onClick={asyncOnClickReturn}
        asyncOnClick={true}
    />,
    node
);
render(
    <CSVDownload
        data={data}
        headers={headers}
        target={"_blank"}
        separator={","}
        filename={"bob.csv"}
        uFEFF={true}
        onClick={asyncOnClickVoid}
        asyncOnClick={true}
    />,
    node
);
render(
    <CSVDownload
        data={dataFunction}
        headers={headers}
        target="_blank"
        separator=","
        filename="bob.csv"
        uFEFF
        onClick={asyncOnClickVoid}
        asyncOnClick
    />,
    node
);
