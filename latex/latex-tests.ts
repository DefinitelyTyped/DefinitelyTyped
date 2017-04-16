/// <reference path="latex.d.ts" />

var latexDocument = "\\documentclass[a4paper, 12pt]{article} " +
    "\\begin{document} Report! \\end{document}";

var latexDocumentArray = [
    "\\documentclass[a4paper, 12pt]{article}",
    "\\begin{document}",
    "Report!",
    "\\end{document}"
];

latex(latexDocument)
    .on("error", function(err: Error): void { });

latex(latexDocumentArray, {command: "pdflatex", format: "pdf"});
