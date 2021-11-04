import * as jo from "jpeg-autorotate";

jo.rotate("img.jpg", {});
jo.rotate(new Buffer(""), {});
jo.rotate(new Buffer(""), { quality: 50 });
jo.rotate("img.jpg", { quality: 100 }, (error, buffer, orientation, dimensions, quality) => {
    if (error && error.code === jo.errors.correct_orientation) {
        console.log("The orientation of this image is already correct!");
    }

    if (orientation) {
        console.log(`Orientation was: ${orientation}`);
    }

    if (dimensions) {
        console.log(`Dimensions after rotation: ${dimensions.width}x${dimensions.height}`);
    }

    if (quality) {
        console.log(`Quality: ${quality}`);
    }

    buffer.readInt8(0);
});

jo.rotate("img.jpg", { quality: 100 })
    .then(({ buffer, orientation, dimensions, quality }) => {
        console.log(`Orientation was: ${orientation}`);
        console.log(`Dimensions after rotation: ${dimensions.width}x${dimensions.height}`);
        console.log(`Quality: ${quality}`);

        buffer.readInt8(0);
    })
    .catch((error: jo.CustomError) => {
        if (error && error.code === jo.errors.correct_orientation) {
            console.log("The orientation of this image is already correct!");
        }
    });
