import type { Config } from "tailwindcss";
import type plugin = require("tailwindcss/plugin");
import nightwind = require("nightwind");

const config: Config = {
  content:[],
    plugins: [
        nightwind,
    ],
};
