var container = document.createElement("galleria");

var gOptions: GalleriaJS.GalleriaOptions;

gOptions.lightbox = true;
gOptions.autoplay = true;

Galleria.run("galleria", gOptions);

gOptions.lightbox = false;

Galleria.ready(function() {
    this.configure(gOptions).refreshImage();
    });

Galleria.run("galleria");

gOptions.autoplay = false;

Galleria.run();
