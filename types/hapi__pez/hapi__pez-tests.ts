import Content from "@hapi/content";
import Pez from "@hapi/pez";

const contentType = Content.type("application/json; charset=utf-8");

const minDispenser = new Pez.Dispenser({ boundary: "AaB03x" });
const maxBytesDispenser = new Pez.Dispenser({
    boundary: "AaB03x",
    maxBytes: 4096 - 1,
    maxParts: 1,
});

// Example with Node Stream Options type
const nodeOptionDispenser = new Pez.Dispenser({
    boundary: "AaB03x",
    maxBytes: 50e6,
    ...contentType,
});
