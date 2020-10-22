import React from "react";
import RehypeReact from "rehype-react";

const htmlAst = {
    type: "element",
    tagName: "button"
};

const { Compiler: compile } = new RehypeReact({
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: {
        button: () => {
            return <button />;
        }
    }
});

compile(htmlAst);
