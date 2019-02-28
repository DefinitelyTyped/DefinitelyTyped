import TurnDownService from "turndown";

const turndown = new TurnDownService();

turndown.addRule("test", {
    filter: "p",
    replacement: (content, node, options) => {
        return content;
    },
});

turndown.keep("a");
turndown.keep(["em", "i"]);
turndown.keep((node, options) => node.nodeName === "div");
turndown.remove("p");
turndown.use((plugin) => plugin);

turndown.turndown("test");
