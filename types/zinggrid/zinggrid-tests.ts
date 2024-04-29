// Object instantiation
let config: ZSoft.ZingGridConfig = {
    caption: "My test grid",
    data: [
        { first: "Maria", last: "John", number: 123 },
        { first: "David", last: "Smith", number: 456 },
        { first: "Felicity", last: "Snow", number: 789 },
    ],
    filter: true,
    pager: true,
};

let ref = document.createElement("div");
let zgRef = new ZingGrid(config, ref);

// Component instantiation
let zgRef2 = document.querySelector("zing-grid")!;
zgRef2.caption = "Hello world";
zgRef2.addEventListener("grid:beforerender", () => {
    zgRef.setLayout("row");
});
