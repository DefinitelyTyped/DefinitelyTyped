import gaze = require('gaze');

gaze('**/*.js', null, (err, watcher) => {
    watcher.watched();
    watcher.relative('./', false);
});
gaze(['stylesheets/*.css', 'images/**/*.png'], {
    interval: 5,
    debounceDelay: 10,
    mode: "auto",
    cwd: './'
}, (err, watcher) => {
    watcher.add(['js/*.js']);
});

const gazeInstance = new gaze.Gaze('**/*.js', null, (err, watcher) => {
    watcher.add('file.js');
    watcher.close();
    watcher.emit('ready');
    watcher.remove('file.js');
    watcher.watched();
    watcher.relative('.', true);
});
gazeInstance.add('file.js');
gazeInstance.close();
gazeInstance.emit('ready');
gazeInstance.remove('file.js');
gazeInstance.watched();
gazeInstance.relative('.', true);
