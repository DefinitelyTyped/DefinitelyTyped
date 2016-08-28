/// <reference path="./inversify-devtools.d.ts" />

import render from "inversify-devtools";
import { Kernel } from "inversify";

let connectKernel = render("root");
let kernel = new Kernel();
connectKernel(kernel);
