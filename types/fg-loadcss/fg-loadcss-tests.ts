import { loadCSS } from "fg-loadcss";

loadCSS("example.css");
loadCSS("example.css", document.body);
loadCSS("example.css", document.body, "print");
const foo = loadCSS("example.css", document.body, "print", { integrity: "sha123-abc" });

window.onloadCSS(foo, () => {
    console.log("Loaded!");
});
