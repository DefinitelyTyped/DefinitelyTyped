import { Linter } from "eslint";
import { processors } from "eslint-plugin-markdown";

export const remark: Linter.Processor = {
    preprocess(text, filename) {
        return [text, ...processors.markdown.preprocess!(text, filename)];
    },
    postprocess([mdxMessages, ...markdownMessages], filename) {
        return [...mdxMessages, ...processors.markdown.postprocess!(markdownMessages, filename)];
    },
    supportsAutofix: processors.markdown.supportsAutofix,
};
