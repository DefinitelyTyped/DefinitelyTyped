/// <reference path='mathjax.d.ts' />
MathJax.Hub.Config({
  config: ["MMLorHTML.js"],
  jax: ["input/TeX","input/MathML","input/AsciiMath","output/HTML-CSS","output/NativeMML"],
  extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js"],
  TeX: {
    extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]
  }
});

MathJax.Hub.Config({
  config: ["MMLorHTML.js"],
  jax: ["input/TeX","input/MathML","output/HTML-CSS","output/NativeMML"],
  extensions: ["tex2jax.js","mml2jax.js","MathMenu.js","MathZoom.js"],
  TeX: {
    extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]
  },
  menuSettings: {
    zoom: "Double-Click",
    mpContext: true,
    mpMouse: true
  },
  errorSettings: { message: ["[Math Error]"] }
});

MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [ ['$','$'], ['\\(','\\)'] ]
  }
});

MathJax.Hub.Config({
  TeX: {
    Macros: {
      RR: '{\\bf R}',
      bold: ['{\\bf #1}', 1]
    }
  }
});

MathJax.Hub.Config({
  mml2jax: {
    preview: "mathml"
  }
});

MathJax.Hub.Config({
  MathML: {
    useMathMLspacing: true
  }
});

MathJax.Hub.Config({
    MMLorHTML: { prefer: { Firefox: "MML" } }
});

MathJax.Hub.Config({
  "HTML-CSS": { linebreaks: { automatic: true } },
         SVG: { linebreaks: { automatic: true } }
});