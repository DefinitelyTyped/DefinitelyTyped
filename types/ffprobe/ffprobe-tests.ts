import ffprobe = require('ffprobe');
import ffprobeStatic = require('ffprobe-static');

ffprobe('./file.mp4', { path: ffprobeStatic.path })
    .then(info => {
        info; // $ExpectType FFProbeResult
    })
    .catch((err: Error) => {
        err; // $ExpectType Error
    });
ffprobe('./file.mp4', { path: ffprobeStatic.path }, (err, info) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        info; // $ExpectType FFProbeResult
    }
});
(async () => {
    // $ExpectType FFProbeResult
    const result = await ffprobe('/path/to/movie.avi', { path: ffprobeStatic.path });
})();
