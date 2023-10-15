import { Kernel } from "inversify";
import render from "inversify-devtools";

let connectKernel = render("root");
let kernel = new Kernel();
connectKernel(kernel);
