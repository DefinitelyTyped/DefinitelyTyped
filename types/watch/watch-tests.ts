import watch = require('watch');
import fs = require('fs');

watch.watchTree('/some_path', (f: any, curr: fs.Stats, prev: fs.Stats) => {
});

watch.watchTree('/home/mikeal', (f, curr, prev) => {
    if (typeof f === "object" && prev === null && curr === null) {
        // Finished walking the tree
    } else if (prev === null) {
        // f is a new file
    } else if (curr.nlink === 0) {
        // f was removed
    } else {
        // f was changed
    }
});

watch.unwatchTree('/some_path');
watch.createMonitor('/home/mikeal', (monitor) => {
    monitor.files['/home/mikeal/.zshrc']; // Stat object for my zshrc.
    monitor.on("created", (f, stat) => {
        // $ExpectType string
        f;
        // Handle new files
    });
    monitor.on("changed", (f, curr, prev) => {
        // $ExpectType string
        f;
        // Handle file changes
    });
    monitor.on("removed", (f, stat) => {
        // $ExpectType string
        f;
        // Handle removed files
    });
    monitor.stop(); // Stop watching
});

watch.createMonitor('/some/path', {
    ignoreDotFiles: true
}, (monitor: watch.Monitor) => {
});

watch.walk('/some/path', (err, files) => {});
watch.walk('/some/path', {
    ignoreDirectoryPattern: /ignore/
}, (err, files) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Files | undefined
    files;
});
