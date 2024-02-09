import { unified } from "unified";
import rlc = require("remark-link-card");
import { Options } from "remark-link-card";

unified().use(rlc); // $ExpectType Processor<undefined, Root, Root, undefined, undefined>

unified().use(rlc, { shortenUrl: true, cache: true }); // $ExpectType Processor<undefined, Root, Root, undefined, undefined>

const options: Options = {
    shortenUrl: false,
    cache: true,
};

rlc(options); // $ExpectType (tree: Root) => Promise<Root>

// @ts-expect-error
unified().use(rlc, { cache: "true" });
