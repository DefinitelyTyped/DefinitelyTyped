import * as globBase from "glob-base";

const result = globBase("**/*.ts");

const isGlob = result.isGlob;
const glob = result.glob;
const base = result.base;
