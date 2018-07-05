function testDocument() {
    document.querySelector(".container-a").classList;
    document.querySelectorAll(".container-b")[0].className;
    document.querySelector(".container-c").append("foo", document.createElement("button"));
}

function testElement(el: Element) {
    let isInDocument: boolean = el.closest("document") != null;
    let isButton: boolean = el.matches("button");

    el.firstElementChild.getAttribute("foo");
    el.lastElementChild.getAttribute("bar");
}

