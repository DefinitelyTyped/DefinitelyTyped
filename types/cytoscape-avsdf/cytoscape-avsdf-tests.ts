import cytoscape = require("cytoscape");
import avsdf = require("cytoscape-avsdf");

cytoscape.use(avsdf);

const avsdfLayoutNoOptions: avsdf.AvsdfLayoutOptions = {
    name: "avsdf",
};

const avsdfLayoutAllOptions: avsdf.AvsdfLayoutOptions = {
    name: "avsdf",
    refresh: 60,
    fit: false,
    padding: 20,
    ungrabifyWhileSimulating: true,
    animate: "during",
    animationEasing: "ease",
    animationDuration: 1000,
    nodeSeparation: 70,
};

const cy = cytoscape({
    container: document.getElementById("cy"),
    layout: avsdfLayoutNoOptions,
    elements: [
        { data: { id: "A" } },
        { data: { id: "B" } },
        { data: { id: "C" } },
        { data: { source: "A", target: "B" } },
        { data: { source: "A", target: "C" } },
    ],
});

cy.layout(avsdfLayoutAllOptions);
