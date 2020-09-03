import * as L from 'leaflet';
import 'leaflet.icon.glyph';

// Show a glyph from a "normal" font (e.g. an "A")
const markerDefaultFont = L.marker([48.8588376, 2.276849], {
    icon: L.icon.glyph({
        prefix: '',
        glyph: 'A',
    }),
});

// Show a glyph from material icons font (e.g. "package")
const markerIconFont = L.marker([48.8588376, 2.276849], {
    icon: L.icon.glyph({
        prefix: 'mdi',
        glyph: 'package',
    }),
});

// Show a glyph from material icons font (e.g. "package") with custom icon
const markerIconFontWIthIconUrl = L.marker([48.8588376, 2.276849], {
    icon: L.icon.glyph({
        iconUrl: 'leaflet/marker-icon.png',
        prefix: 'mdi',
        glyph: 'package',
    }),
});
