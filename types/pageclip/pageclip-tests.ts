import Pageclip from "pageclip";

const pageclip = new Pageclip("abc123ABC123abc123abc123abc12345");

pageclip.send({ some: "data" }).then((response) => {
    console.log(response.status, response.form, response.data);
});

pageclip.send([{ some: "data" }, { some: "otherdata" }]).then((response) => {
    console.log(response.status, response.form, response.data);
});

pageclip.send("mailinglist", { email: "john@omgunicorns.com" }).then((response) => {
    console.log(response.status, response.form, response.data);
});

pageclip.fetch().then((response) => {
    console.log(response.status, response.form, response.data);
});

pageclip.fetch("mailinglist").then((response) => {
    console.log(response.status, response.form, response.data);
});
