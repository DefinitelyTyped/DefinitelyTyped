import * as root from "window-or-global";

if ('location' in root) {
    const location: Location = root.location;
    root.addEventListener("click", () => console.log("Hi!"));
} else {
    const process: NodeJS.Process = root.process;
}
