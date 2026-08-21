// test global script usage

const modal = new bootstrap.Modal("#myModal");
const dropdown = new bootstrap.Dropdown("[data-bs-toggle=\"dropdown\"]");

// ctor
new bootstrap.Alert("#alert");
new bootstrap.Alert(document.querySelector("#alert")!);
new bootstrap.Modal("#myModal", {});
new bootstrap.Modal(document.querySelector("#myModal")!, {});

const element = new Element();

element.addEventListener("show.bs.modal", event => {
    event.target; // $ExpectType HTMLElement
    event.relatedTarget; // $ExpectType HTMLElement | undefined
});

element.addEventListener("slid.bs.carousel", event => {
    event.direction; // $ExpectType Direction
    event.relatedTarget; // $ExpectType Element
    event.from; // $ExpectType number
    event.to; // $ExpectType number
});
