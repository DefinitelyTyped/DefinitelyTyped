import piexif = require("piexifjs");

var zeroth: { [key: number]: string | number[] } = {};
var exif: { [key: number]: string | number | number[][] } = {};
var gps: { [key: number]: string | number[] } = {};

zeroth[piexif.ImageIFD.Make] = "Make";
zeroth[piexif.ImageIFD.XResolution] = [777, 1];
zeroth[piexif.ImageIFD.YResolution] = [777, 1];
zeroth[piexif.ImageIFD.Software] = "Piexifjs";

exif[piexif.ExifIFD.DateTimeOriginal] = "2010:10:10 10:10:10";
exif[piexif.ExifIFD.LensMake] = "LensMake";
exif[piexif.ExifIFD.Sharpness] = 777;
exif[piexif.ExifIFD.LensSpecification] = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
];

gps[piexif.GPSIFD.GPSVersionID] = [7, 7, 7, 7];
gps[piexif.GPSIFD.GPSDateStamp] = "1999:99:99 99:99:99";
var exifObj = {
    "0th": zeroth,
    Exif: exif,
    GPS: gps,
};
var exifStr = piexif.dump(exifObj);
piexif.insert(exifStr, "");
