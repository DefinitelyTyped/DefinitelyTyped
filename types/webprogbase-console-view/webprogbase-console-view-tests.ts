import { ConsoleBrowser, ServerApp, InputForm } from 'webprogbase-console-view';

const students = ['First', 'Second', 'Third'];

const app = new ServerApp();

app.use("/", (_req, res) => {
    const links = {
        f: "Form sample",
        f2: "Form sample many fields",
        n: "Just a state",
        e: "No handler error",
        t: "Response timeout",
        r: "Redirect to n"
    };
    res.send("Hello!", links);
});

app.use("f", (_req, res) => {
    let studentsListStr = "";
    students.forEach((st, i) => {
        studentsListStr += `${i}. ${st}\n`;
    });
    const text = `Select student index:\n\n${studentsListStr}`;
    const indexForm = new InputForm("formaccept", {
        index: "Index of student"
    });
    res.send(text, indexForm);
});

app.use("f2", (_req, res) => {
    const text = 'Hello!';
    const form = new InputForm("formaccept", {
        index: "Just",
        name:  "Student name",
        score: "Hmmmm"
    });
    res.send(text, form);
});

app.use("n", (_req, res) => {
    res.send("Next, please");
});

app.use("r", (_req, res) => {
    res.redirect("n");
});

app.use("t", (_req, res) => {
    void res;  // unused
    // error: no response
});

app.use("formaccept", (req, res) => {
    const index = parseInt(req.data!.index, 10);
    if ((!index && index !== 0) || (index < 0 || index >= students.length)) {
        res.send(`Invalid student index input: ${req.data!.index}`);
    } else {
        res.send(`Data:\n${
            JSON.stringify(req.data, null, 4)
        }\nYou've selected student: ${students[index]}`);
    }
});

app.listen(80);

const browser = new ConsoleBrowser();
browser.open(80);
