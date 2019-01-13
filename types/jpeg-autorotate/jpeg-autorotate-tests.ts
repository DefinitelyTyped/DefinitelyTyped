import * as jo from "jpeg-autorotate";

jo.rotate("img.jpg");
jo.rotate(new Buffer(""));
jo.rotate(new Buffer(""), { quality: 50 });
jo.rotate("img.jpg", { quality: 100 }, (error, buffer, orientation, dimensions) => {
    if (error && error.code === jo.errors.correct_orientation) {
        console.log("The orientation of this image is already correct!");
    }

    if (orientation) {
        console.log("Orientation was: " + orientation);
    }

    if (dimensions) {
        console.log("Height after rotation: " + dimensions.height);
        console.log("Width after rotation: " + dimensions.width);
    }

    if (buffer) {
        buffer.readInt8(0);
    }
});
