// The declarations are code generated in the Deno repo at
// https://github.com/denoland/deno/blob/main/tools/generate_types_deno.ts
// so this this file contains only basic tests to ensure the `Deno` global
// exists.

Deno.mkdirSync("dir"); // $ExpectType void
Deno.readTextFileSync("dir/file.txt"); // $ExpectType string
new Deno.errors.NotFound(); // $ExpectType NotFound
Deno.jupyter.broadcast("type", { "data": 5 }); // $ExpectType Promise<void>
