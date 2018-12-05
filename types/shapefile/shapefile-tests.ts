import { open, openDbf, openShp, read } from 'shapefile';

open('./example.shp', new ArrayBuffer(123))
    .then(source => {
        source.bbox;
        source.read()
            .then(result => {
                result.value.geometry;
                result.done;
        });
    });

openDbf('./example.dbf', {encoding: "utf8"})
    .then(source => {
        source.bbox;
        source.read()
            .then(result => {
                result.value;
                result.done;
        });
    });

openShp('./example.shp', {highWaterMark: 0xabad1dea})
    .then(source => {
        source.bbox;
        source.read()
            .then(result => {
                result.value;
                result.done;
        });
    });

read("example.shp")
    .then(result => {
        result.bbox;
        result.features;
        result.type;
    });
