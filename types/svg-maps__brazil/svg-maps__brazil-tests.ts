import * as brazil from "@svg-maps/brazil";

const SVGMapContainer: brazil.Map = {
    viewBox: "viewBox",
    locations: [
        {
            path: "path",
            id: "id",
            name: "name",
        },
    ],
    label: "label",
};

const SVGMapContainerNoOptional: brazil.Map = {
    viewBox: "viewBox",
    locations: [
        {
            path: "path",
            id: "id",
        },
    ],
};
