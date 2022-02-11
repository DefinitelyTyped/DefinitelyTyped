import type * as mdast from "mdast";
import RelateUrl from "relateurl";
import { lintRule } from "unified-lint-rule";
import type * as unist from "unist";
import type { VFile } from "vfile";

interface Options {
  base: string;
  form?: "relative" | "absolute";
  fix: boolean;
}

type Child<T> = T extends unist.Parent<infer U> ? U : never;
//type DescendantOrSelf<T> = T | DescendantOrSelf<Child<T>>;
type DescendantOrSelf<T> = T | Child<T>;

// Walk Markdown trees, normalize URLs -> either relative or absolute
// forms and report or update them (if fix is true).
export default lintRule(
  {
    origin: "normalize-links",
    url: "https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/scripts/normalize-links.ts",
  },
  rule
);

function rule(tree: mdast.Root, file: VFile, options: Options) {
  options = { form: "relative", ...options };
  const from = new URL(file.path!, options.base);
  visit(tree);

  function visit(
    node: DescendantOrSelf<mdast.Root> & Partial<mdast.Parent & mdast.Resource>
  ) {
    for (const child of node.children || []) visit(child);
    if (!node.url) return;
    const normalized = RelateUrl.relate(String(from), node.url, {
      output:
        options.form === "absolute" ||
        // Only make descendants of base relative.
        // Descendants don't start with ../ (relative to base).
        RelateUrl.relate(options.base, String(new URL(node.url, from)), {
          output: "pathRelative",
        }).startsWith("../")
          ? "absolute"
          : "pathRelative",
      schemeRelative: false,
    });
    if (options.fix) {
      node.url = normalized;
    } else if (node.url !== normalized) {
      file.message(`Use ${options.form} URLs: ${normalized}`, node);
    }
  }
}
