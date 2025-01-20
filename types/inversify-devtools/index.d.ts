import * as inversify from "inversify";

interface ConnectKernel extends Function {
    (kernel: inversify.interfaces.Kernel): void;
}

export default function render(container: string): ConnectKernel;
