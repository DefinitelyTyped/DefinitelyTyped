import * as progressbar from "electron-progressbar";

const progressBar = new progressbar.ProgressBar(); // Returns TS2554: Expected 1-2 arguments, but got 0.

const progress = new progressbar.ProgressBar({
    title: 'Hi'
}); // Works

progress.on('j') // Won't work because not a valid event also because I don't have a function

progress.close(); // Works

progress.value = 0;
progress.value = 'Hello'; // Won't work because you can't assign a string to type number

progress.getOptions().name; // Returns TS2339: Property 'name' does not exist on type 'ProgressBarOptions'.
