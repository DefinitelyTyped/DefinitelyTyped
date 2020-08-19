import * as ffprobe from 'ffprobe';

(async () => {
    const result = await ffprobe('/path/to/movie.avi');
    result; // $ExpectType IFFProbeResult
})();
