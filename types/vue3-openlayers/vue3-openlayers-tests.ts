import { createApp, inject } from 'vue';
import vue3lo from 'vue3-openlayers';

const app = createApp({});
app.use(vue3lo);

inject('ol-feature').length;
inject('ol-geom').Circle;
inject('ol-animations').easeIn;
inject('ol-format').WFS;
inject('ol-loadingstrategy').all;
inject('ol-selectconditions').all;
inject('ol-extent').buffer;
