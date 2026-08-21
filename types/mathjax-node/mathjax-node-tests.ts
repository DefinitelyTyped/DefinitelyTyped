import { config, start, typeset } from "mathjax-node";

typeset({ math: "", format: "inline-TeX" }).then((res) => {
    console.log(res.errors);
});

typeset({ math: "", format: "MathML" }, (result) => {
    console.log(result.speakText);
});

typeset({ math: "", format: "TeX" }, (res, opts) => {
    console.log(res.html, opts.equationNumbers);
});

start();

config({
    MathJax: {},
});
