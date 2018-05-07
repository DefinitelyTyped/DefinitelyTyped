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
  nosvg: true,
  polyfill: true
});
