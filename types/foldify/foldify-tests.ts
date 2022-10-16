import fold from "foldify";

const modules = fold(process.cwd(), {recursive: true});

console.log(modules);