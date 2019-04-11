import * as mapnik from "mapnik";
import * as fs from "fs";
import * as path from "path";

mapnik.register_default_fonts();
mapnik.register_default_input_plugins();

const map: mapnik.Map = new mapnik.Map(256, 256);
map.load('./test/stylesheet.xml', function xx(err: Error, map: mapnik.Map) {
  if (err) throw err;
  map.zoomAll();
  const im: mapnik.Image = new mapnik.Image(256, 256);
  map.render(im, function xxx(err: Error, im: mapnik.Image) {
    if (err) throw err;
    im.encode('png', function xxxx(err: Error, buffer: Buffer) {
      if (err) throw err;
      fs.writeFile('map.png', buffer, function xxxxx(err: Error) {
        if (err) throw err;
        console.log('saved map image to map.png');
      });
    });
  });
});

// new mapnik.Image.open("xxx").save("xx");

mapnik.register_datasource(path.join(mapnik.settings.paths.input_plugins, 'shape.input'));
const ds: mapnik.Datasource = new mapnik.Datasource({type: 'shape', file: 'test/data/world_merc.shp'});
const featureset: mapnik.Featureset = ds.featureset();
const geojson: any = {
  type: "FeatureCollection",
  features: [
  ]
};
let feat: mapnik.FeaturesetNext = featureset.next();
while (feat) {
  geojson.features.push(JSON.parse(feat.toJSON()));
  feat = featureset.next();
}
fs.writeFileSync("output.geojson", JSON.stringify(geojson, null, 2));
