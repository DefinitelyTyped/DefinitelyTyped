import EXIF from "exif-js";

EXIF.getData("image.png", function() {
    const allMetaData = EXIF.getAllTags(this);
    console.log(allMetaData);
});
