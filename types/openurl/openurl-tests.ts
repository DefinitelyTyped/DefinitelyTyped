const openurl = require("openurl");
openurl.open("http://rauschma.de", (e) => {
    console.log(e);
})
openurl.matilto(
    ["john@example.com", "jane@example.com"],
    { subject: "Hello!", body: "This is\nan automatically sent email!\n" }
)