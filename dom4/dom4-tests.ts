function testDocument() {
    document.query(".container-a").classList;
    document.queryAll(".container-b")[0].className;
    document.queryAll(".container-c").childElementCount;
}

function testElement(el: Element) {
    let isInDocument: boolean = el.closest("document") != null;
    let isButton: boolean = el.matches("button");

    el.firstElementChild.getAttribute("foo");
    el.lastElementChild.getAttribute("bar");
}

