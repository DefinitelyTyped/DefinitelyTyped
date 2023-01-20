import exifReader = require("exif-reader");

const buf = Buffer.from("some-exif-data");

const result = exifReader(buf);
console.log(result.exif);
console.log(result.gps);
console.log(result.image);
console.log(result.interoperability);
console.log(result.thumbnail);

// These records contain a variety of tags
console.log(result.gps?.GPSVersionID);

// But the list of valid tags is not provided in these typings
console.log(result.exif?.ThisTagDoesNotExist); // should pass
