import * as engine from "ckeditor__ckeditor5-engine";

declare let pattern: engine.view.MatcherPattern;

pattern = {name: /^p/};

pattern = {
    attributes: {
        title: "foobar",
        foo: /^\w+/,
        bar: true,
    }
};

pattern = {
    classes: "foobar"
};

pattern = {
    classes: /foo.../
};

pattern = {
    classes: ["baz", "bar", /foo.../]
};

pattern = {
    styles: {
        position: "absolute",
        color: /^\w*blue$/
    }
};

pattern = {
    name: "span",
    styles: {
        "font-weight": "bold"
    },
    classes: "highlighted"
};

pattern = (element: engine.view.Element) => {
    if (element.name === "div" && element.childCount > 0) {
        return {name: true};
    }

    return null;
};

pattern = (element: engine.view.Element) => {
    if (element.name === "p") {
        const fontSize = element.getStyle("font-size")!;
        const size = fontSize.match(/(\d+)/px);

        if (size && Number(size[1]) > 26) {
            return {name: true, attribute: ["font-size"]};
        }
    }

    return null;
};

declare let viewDefinition: engine.view.ElementDefinition;

viewDefinition = "p";

viewDefinition = {
    name: "h1",
    classes: ["foo", "bar"],
};

viewDefinition = {
    name: "span",
    styles: {
        "font-size": "12px",
        "font-weight": "bold",
    },
    attributes: {
        "data-id": "123",
    }
};
