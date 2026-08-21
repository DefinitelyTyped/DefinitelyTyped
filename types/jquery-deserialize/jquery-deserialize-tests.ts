import $ = require("jquery");
import "jquery-deserialize";

const $form = $("form");
const data = $form.serialize();

// basic usage
$form.deserialize(data);

// filter on selector
$form.deserialize(data, { filter: ":input" });

// filter on function
$form.deserialize(data, { filter: (index: number, element: HTMLInputElement) => false });

// filter on element
$form.deserialize(data, { filter: document.getElementById("#test") as HTMLInputElement });

// filter on selection
$form.deserialize(data, { filter: $(".test") });

// with change
$form.deserialize(data, { change: (x: Element, value) => {} });

// with complete
function complete($form: JQuery<HTMLFormElement>) {
    console.log("deserialize completed!");
}
$form.deserialize(data, { complete });

// with complete function as second argument (legacy)
$form.deserialize(data, complete);
