import mermaid from "mermaid";

const config = {
    startOnLoad: true,
    flowchart: {
        useMaxWidth: false,
        htmlLabels: true
    }
};

mermaid.initialize(config);

// mermaidAPI usage

const { mermaidAPI } = mermaid;
mermaidAPI.initialize({});

const element = document.querySelector("#graphDiv")!;

const insertSvg = (
    svgCode: string,
    bindFunctions: (element: Element) => void
) => {
    element.innerHTML = svgCode;
};

const graphDefinition = "graph TB\na-->b";
const graph = mermaidAPI.render("graphDiv", graphDefinition, insertSvg);
