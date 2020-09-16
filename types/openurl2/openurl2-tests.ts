import { open, mailto } from "openurl2";
open("http://rauschma.de", (e) => {
    console.log(e.message);
});
mailto(
    ["john@example.com", "jane@example.com"],
    { subject: "Hello!", body: "This is\nan automatically sent email!\n" }
);
