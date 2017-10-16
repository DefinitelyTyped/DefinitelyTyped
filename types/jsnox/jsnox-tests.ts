import * as React from "react";
import * as jsnox from "jsnox";
const $ = jsnox(React);

interface PersonProps {
    firstName: string;
    lastName: string;
    age: number;
}

class Person extends React.Component<PersonProps> {
    render(): React.ReactElement<any> { return null; }
}

const PersonTag = React.createFactory(Person);

declare const clickHandler: React.MouseEventHandler<{}>;

// tests with spec string
function spec_string(): void {
    let result: React.DOMElement<React.DOMAttributes<Element>, Element>;

    // just spec string
    result = $("div");

    // no properties, just children
    result = $("div", "hello"); // one string child
    result = $("div", $("span", "world")); // one element child
    result = $("div", ["hello", $("span", "world")]); // mixed array of children

    // with html properties
    result = $("div", { onClick: clickHandler }); // no children
    result = $("div", { onClick: clickHandler }, "hello"); // one string child
    result = $("div", { onClick: clickHandler }, $("span", "world")); // one element child
    result = $("div", { onClick: clickHandler }, ["hello", $("span", "world")]); // mixed array of children
}

// tests with react component
function react_component(): void {
    let result: React.ReactElement<{}>;

    // with nothing more
    result = $(Person);

    // no properties, just children
    result = $(Person, "hello");                         // one string child
    result = $(Person, $("span", "world"));              // one element child
    result = $(Person, ["hello", $("span", "world")]);   // mixed array of children

    // with component props
    const props: PersonProps = { firstName: "Bob", lastName: "Garfield", age: 72 };
    result = $(Person, props);                           // no children
    result = $(Person, props, "hello");                  // one string child
    result = $(Person, props, $("span", "world"));       // one element child
    result = $(Person, props, ["hello", PersonTag()]);   // mixed array of children
}
