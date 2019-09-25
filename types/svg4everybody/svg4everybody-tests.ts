svg4everybody();

svg4everybody({
  fallback(src, svg, use) {
    return 'fallback.png';
  }
});

svg4everybody({
  validate(src, svg, use) {
    return true;
  }
});

svg4everybody({
  attributeName: 'data-href',
  nosvg: true,
  polyfill: true
});
