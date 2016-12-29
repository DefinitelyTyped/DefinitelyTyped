/// <reference path="index.d.ts" />
/// <reference path="../jquery/index.d.ts" />

var pattern = GeoPattern.generate('GitHub');
pattern.toDataUrl();

$('#geopattern').geopattern('GitHub');
