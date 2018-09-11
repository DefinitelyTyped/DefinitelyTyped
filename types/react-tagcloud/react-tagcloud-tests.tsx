// simple cloud
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TagCloud, DefaultRenderer } from "react-tagcloud";

let data = [
    { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
    { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
    { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 }
];

ReactDOM.render(
    // minSize, maxSize - font size in px
    // tags - array of objects with properties value and count
    // shuffle - indicates if data should be shuffled (true by default)
    // onClick event handler has `tag` and `event` parameter
    <TagCloud minSize={12}
              maxSize={35}
              tags={data}
              shuffle={false}
              disableRandomColor={false}
              onClick={(tag:string) => console.log("clicking on tag:", tag)} />,
    document.getElementById("simple-cloud")
);



// default-renderer

// DefaultRenderer creates default renderer implementation with custom options
// usage of tagRenderer option is described in ./custom-tag-renderer.js

// custom props will be applied on each tag component
const props = {
    style: {border: "1px solid silver", padding: "5px"},
    className: "my-tag-class"
};

// custom random color options
// see randomColor package: https://github.com/davidmerfield/randomColor
const colorOptions = {
    luminosity: "light",
    hue: "blue"
};

let customizedDefaultRenderer = new DefaultRenderer({ props, colorOptions });

ReactDOM.render(
    <TagCloud minSize={12}
              maxSize={35}
              tags={data}
              renderer={customizedDefaultRenderer} />,
    document.getElementById("default-renderer")
);
//
// custom-renderer.js
// using custom renderer the default renderer will be overriden

// custom renderer is function which takes tag, computed font size and
// elemnt key as arguments, and returns react component
let customRenderer2 = (tag: any, size: number, key: string|number) => {
    return <span key={key} className={`tag-${size}`}>{tag.value}</span>;
};

ReactDOM.render(
    <TagCloud tags={data}
              minSize={1}
              maxSize={5}
              renderer={customRenderer2} />,
    document.getElementById("custom-renderer")
);


// example from custom-tag-renderer.js
let data2 = [
    { value: { name: "google", link: "http://google.com" }, count: 25 },
    { value: { name: "yahoo", link: "http://yahoo.com" }, count: 18 },
    { value: { name: "facebook", link: "http://facebook.com" }, count: 38 },
    { value: { name: "twitter", link: "http://twitter.com" }, count: 30 },
    { value: { name: "github", link: "https://github.com" }, count: 28 },
    { value: { name: "npmjs", link: "http://npmjs.com" }, count: 25 },
    { value: { name: "stackoverflow", link: "http://stackoverflow.com" }, count: 33 }
];

// with tagRenderer option it is possible to customize rendering of each tag
// tagRender is a function which takes tag as argument and returns react component or simple string
const tagRenderer = (tag: any) => (<a href={tag.value.link}>{tag.value.name}</a>);

const customizedDefaultRenderer4 = new DefaultRenderer({ tagRenderer });

ReactDOM.render(
    <TagCloud minSize={12}
              maxSize={35}
              tags={data2}
              renderer={customizedDefaultRenderer4} />,
    document.getElementById("custom-tag-renderer")
);
