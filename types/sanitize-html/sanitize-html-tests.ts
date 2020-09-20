import sanitize = require('sanitize-html');

const options: sanitize.IOptions = {
  allowedTags: sanitize.defaults.allowedTags.concat('h1', 'h2', 'img'),
  allowedAttributes: {
    a: sanitize.defaults.allowedAttributes['a'].concat('rel'),
    img: ['src', 'height', 'width', 'alt', 'style']
  },
  allowedClasses: {
    a: ['className'],
    p: false,
  },
  allowedStyles: {
    '*': {
        color: [/^red$/],
        background: [/^green$/],
        'background-color': [/^#0000FF$/]
      }
  },
  allowedIframeDomains: ['zoom.us'],
  allowedIframeHostnames: ['www.youtube.com'],
  allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
    transformTags: {
    a: sanitize.simpleTransform('a', { rel: 'nofollow' }),
    img: (tagName: string, attribs: sanitize.Attributes) => {
      const img = { tagName, attribs };
      img.attribs['alt'] = 'transformed' ;
      return img;
    }
  },
  textFilter: (text, _) => text,
  allowIframeRelativeUrls: false,
  allowVulnerableTags: true,
  exclusiveFilter(frame: sanitize.IFrame) {
    return frame.tag === 'a' && !frame.text.trim();
  },
  allowedSchemesByTag: {
    a: ['http', 'https']
  },
  allowProtocolRelative: false,
  disallowedTagsMode: 'escape',
  enforceHtmlBoundary: true,
};

sanitize.defaults.allowedAttributes; // $ExpectType { [index: string]: AllowedAttribute[]; }
sanitize.defaults.allowedSchemes; // $ExpectType string[]
sanitize.defaults.allowedSchemesAppliedToAttributes; // $ExpectType string[]
sanitize.defaults.allowedSchemesByTag; // $ExpectType { [index: string]: string[]; }
sanitize.defaults.allowedTags; // $ExpectType string[]
sanitize.defaults.allowProtocolRelative; // $ExpectType boolean
sanitize.defaults.disallowedTagsMode; // $ExpectType string
sanitize.defaults.enforceHtmlBoundary; // $ExpectType boolean
sanitize.defaults.selfClosing; // $ExpectType string[]

const unsafe = '<div><script>alert("hello");</script></div>';

let safe = sanitize(unsafe, options);

options.parser = {
    decodeEntities: true
};

safe = sanitize(unsafe, options);
