import { ConsoleBrowser, ServerApp, InputForm } from 'webprogbase-console-view';

const students = ['First', 'Second', 'Third'];

const app = new ServerApp();

app.use("/", (req, res) => {
    const links = {
        f:  "Form sample",
        f2: "Form sample many fields",
        f3: "Form sample many fields with default and value",
        fe: "Form with field error",
        n:  "Just a state",
        e:  "No handler error",
        t:  "Response timeout",
        r:  "Redirect to n",
        d: {
            description: "state link with data",
            data: {
                userId: 13,
                x: "Y",
            }
        },
        rd:   "Redirect to d with data",
        rde:  "Redirect to d with invalid data",
        rde2: "Redirect to d with invalid data (circular structure)",
    };
    res.send("Hello!", links);
});

app.use("f", (req, res) => {
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

app.use("f2", (req, res) => {
    const text = 'Hello!';
    const form = new InputForm("formaccept", {
        index: "Just",
        name:  "Student name",
        score: "Hmmmm"
    });
    res.send(text, form);
});

app.use("f3", (req, res) => {
    const text = 'Hello!';
    const form = new InputForm("formaccept", {
        id: {
            description: "Enter id",
            auto: "1",
        },
        id2: {
            description: "Enter id2",
            auto: "2",
        },
        index: "Just",
        name: {
            description: "Enter student name",
            default: "New Student",
        },
        score: {
            description: "Enter score (int)",
            auto: "100",
        },
        x: "Test",
    });
    res.send(text, form);
});

app.use("fe", (req, res) => {
    const text = 'Hello!';
    const form = new InputForm("formaccept", {
        id: {
            description: "Enter id",
            auto: 22 as any, // generating exception (typeof auto must be 'string')
        },
    });
    res.send(text, form);
});

app.use("n", (req, res) => {
    res.send("Next, please");
});

app.use("r", (req, res) => {
    res.redirect("n");
});

app.use("t", (req, res) => {
    void res;  // unused
    // error: no response
});

app.use("rd", (req, res) => {
    res.redirect("d", {some: "Data in redirect"});
});

app.use("rde", (req, res) => {
    res.redirect("d", "Invalid data here" as any); // generating exception here
});

app.use("rde2", (req, res) => {
    interface Circular {
        self?: Circular;
    }
    const co: Circular = {};
    co.self = co;
    res.redirect("d", co);
});

app.use("d", (req, res) => {
    res.send(`Got some data with request ${JSON.stringify(req.data)}`);
});

app.use("formaccept", (req, res) => {
    const index = parseInt(req.data!.index, 10);
    if ((!index && index !== 0) || (index < 0 || index >= students.length)) {
        res.send(`Invalid student index input: ${req.data!.index}`);
    } else {
        res.send(`Data:\n${JSON.stringify(req.data, null, 4)}\nYou've selected student: ${students[index]}`);
    }
});

app.listen(80);

//

const browser = new ConsoleBrowser();
browser.open(80);
