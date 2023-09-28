import { Location, Map } from "@svg-maps/common";

const SVGLocation: Location = {
    path: "path",
    id: "id",
    name: "name",
};
const SVGMapContainer: Map = {
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

const SVGMapContainerNoOptional: Map = {
    viewBox: "vieweBox",
    locations: [
        {
            path: "path",
            id: "id",
        },
    ],
};

declare const Atlantis: Map;

Atlantis.label; // $ExpectType string | undefined
Atlantis.locations[0].id; // $ExpectType string
Atlantis.locations[0].path; // $ExpectType string
Atlantis.locations[0].name; // $ExpectType string | undefined
Atlantis.viewBox; // $ExpectType string
