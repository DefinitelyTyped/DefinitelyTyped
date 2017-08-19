import * as Mailgen from "mailgen";

const generator: Mailgen = new Mailgen({
    theme: "default",
    product: {
                name: "test",
                link: "http://localhost",
            }
});

const content: Mailgen.Content = {
    body: {
        name: "Hi",
        intro: "test",
        outro: "test",
    },
};

let html = generator.generate(content);
html = generator.generatePlaintext(content);
