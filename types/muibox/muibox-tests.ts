import * as muibox from "muibox";

const dialog = muibox.useDialog();

dialog.alert("Hello world").then(() => "bye");
dialog
    .alert({ message: "Hello world", ok: "Close", title: "Salutation" })
    .then(() => "bye");

dialog
    .confirm("Are you sure?")
    .then(() => "do it")
    .catch(() => "don't do it");

dialog
    .confirm({
        message: "Are you sure?",
        title: "Confirmation",
        ok: "Sure",
        cancel: "No"
    })
    .then(() => "do it")
    .catch(() => "don't do it");

dialog
    .prompt("What is your name?")
    .then(name => `Hello ${name}`)
    .catch(() => "canceled");

dialog
    .prompt({
        message: "What is your name?",
        title: "Salutation",
        ok: "Proceed",
        cancel: "Quit",
        defaultValue: "Joe",
        required: true
    })
    .then(name => `Hello ${name}`)
    .catch(() => "canceled");
