import ffprobe = require("ffprobe");
import ffprobeStatic = require("ffprobe-static");

const handleSideData = (side_data: ffprobe.SideData) => {
    if ("rotation" in side_data) {
        side_data.rotation;
        side_data.displaymatrix;
    } else if (side_data.side_data_type === "Spherical Mapping") {
        if (side_data.projection === "cubemap") {
            side_data.padding;
        } else if (side_data.projection === "tiled equirectangular") {
            side_data.bound_bottom;
            side_data.bound_top;
        }
    } else if (side_data.side_data_type === "Mastering display metadata") {
        if ("red_x" in side_data) {
            side_data.red_x;
            side_data.blue_x;
            side_data.green_x;
            side_data.white_point_x;

            if ("max_luminance" in side_data) {
                side_data.min_luminance;
            }
        }

        if ("min_luminance" in side_data) {
            side_data.max_luminance;

            if ("red_y" in side_data) {
                side_data.red_y;
                side_data.blue_y;
                side_data.green_y;
                side_data.white_point_y;
            }
        }
    }
};

ffprobe("./file.mp4", { path: ffprobeStatic.path })
    .then(info => {
        info; // $ExpectType FFProbeResult

        for (const stream of info.streams) {
            if (!stream.side_data_list) continue;

            for (const side_data of stream.side_data_list) {
                handleSideData(side_data);
            }
        }
    })
    .catch((err: Error) => {
        err; // $ExpectType Error
    });
ffprobe("./file.mp4", { path: ffprobeStatic.path }, (err, info) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        info; // $ExpectType FFProbeResult
    }
});
(async () => {
    // $ExpectType FFProbeResult
    const result = await ffprobe("/path/to/movie.avi", { path: ffprobeStatic.path });
})();
