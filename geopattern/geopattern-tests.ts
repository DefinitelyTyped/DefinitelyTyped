/// <reference path="index.d.ts" />
/// <reference types="jquery" />

var pattern = GeoPattern.generate('GitHub');
pattern.toDataUrl();

$('#geopattern').geopattern('GitHub');
