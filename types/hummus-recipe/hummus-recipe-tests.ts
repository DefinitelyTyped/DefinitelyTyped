import Recipe = require("hummus-recipe");

// $ExpectType Recipe
const pdf = new Recipe("new", "test.pdf", {
    version: 1.6,
    author: "John Doe",
    title: "Hummus Recipe",
    subject: "A brand new PDF"
});

// $ExpectType Recipe
pdf.createPage(595, 842)
    .text("Memento Mori", 100, 100)
    .endPage()
    .endPDF();

// $ExpectError
pdf.createPage("A4")
    .text("Memento Mori", 100, 100)
    .endPage()
    .endPDF();
