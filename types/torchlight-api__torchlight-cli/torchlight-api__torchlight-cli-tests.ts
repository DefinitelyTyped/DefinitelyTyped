import { Block, torchlight } from "@torchlight-api/torchlight-cli";

// @ts-expect-error
torchlight.config("");

// @ts-expect-error
torchlight.config("host", 0);

torchlight.config("host", "https://api.torchlight.dev/");

torchlight.init({}, false);

new Block({
    language: "javascript",
    code: "const hello = 'world'",
});

// @ts-expect-error
new Block();
