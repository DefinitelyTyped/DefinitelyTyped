// Type definitions for storybook-readme 3.3
// Project: https://github.com/storybooks/storybook
// Definitions by: Taeheon Kim  <https://github.com/lonyele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { WithReadme } from "./src/withReadme";
import { WithDocs } from "./src/withDocs";
import { Doc } from "./src/doc";

export const withDocs: WithDocs;
export const withReadme: WithReadme;
export const doc: Doc;

// I'm not sure how to write subfolder's declaration
// This worked for my local testing environment. It doesn't look right with DefinitelyTyped.
// I think It would be better If I can just import at the top level such as withReadme, withDocs, or doc.
// declare module "storybook-readme/components/Marked" {
//     function Marked(props: { md: string }): JSX.Element;
// }
