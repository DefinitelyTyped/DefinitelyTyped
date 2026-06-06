import { Block, torchlight } from "@torchlight-api/torchlight-cli";

// @ts-expect-error
torchlight.config("");

// @ts-expect-error
torchlight.config("host", 0);

torchlight.config("host", "https://api.torchlight.dev/");

torchlight.init(
    {
        token: "asdfasdf",
        host: "https://",
        options: {},
        theme: "dracula",
    },
    false,
);

// @ts-expect-error
torchlight.init({});

torchlight.init(
    {
        // @ts-expect-error
        theme: "asdf",
    },
    false,
);

// @ts-expect-error
torchlight.init();

new Block({
    language: "javascript",
    code: "const hello = 'world'",
});

// @ts-expect-error
new Block();
