import { fixTypos } from "typopo";

const text = ` ” I can't explain myself , I'm afraid, sir" said Alice, “because I'm not myself, you see“`;

fixTypos(text);

fixTypos(text, "cs");
fixTypos(text, "de-de");
fixTypos(text, "en-us");
fixTypos(text, "rue");
fixTypos(text, "sk");

fixTypos(text, "cs", {
    removeLines: true,
    removeWhitespacesBeforeMarkdownList: true,
    keepMarkdownCodeBlocks: true,
});
