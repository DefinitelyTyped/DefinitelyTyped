import Image = require('@11ty/eleventy-img');

Image.concurrency = 4;

(async () => {
  const url = "https://images.unsplash.com/photo-1608178398319-48f814d0750c";
  let stats: Image.Metadata = await Image(url, {
    widths: [300]
  });

  stats = await Image(url, {
    widths: [200, null],
    formats: ['avif', 'webp', 'svg', null],
    urlPath: "/img/",
    outputDir: "./img/",
    svgShortCircuit: true,
    svgAllowUpscale: false,
    cacheOptions: {
      duration: "1d",
      directory: ".cache",
      removeUrlQueryParams: false,
    },
    filenameFormat(id, src, width, format, options) {
      return `${id}-${width}.${format}`;
    },
    urlFormat({ src, width, format }) {
      return `https://sample-image-service.11ty.dev/${encodeURIComponent(src)}/${width}/${format}/`;
    },
    remoteImageMetadata: {
      width: 300,
      height: 300,
    },
    hashLength: 8,
  });

  stats = Image.statsSync(url, {
    formats: ['jpg', 'svg+xml', 'auto'],
    sharpOptions: {
      animated: true
    }
  });

  return Image.generateHTML(stats, {
    alt: '',
    sizes: '100vw',
    loading: "lazy",
    decoding: "async",
  }, {
    whitespaceMode: "inline"
  });
})();
