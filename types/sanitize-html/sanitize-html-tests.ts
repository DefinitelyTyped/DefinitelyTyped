import sanitize = require('sanitize-html');

let options: sanitize.IOptions = {
  allowedTags: sanitize.defaults.allowedTags.concat('h1', 'h2', 'img'),
  allowedAttributes: {
    'a': sanitize.defaults.allowedAttributes['a'].concat('rel'),
    'img': ['src', 'height', 'width', 'alt', 'style']
  },
  allowedStyles: {
    '*': {
        color: [/^red$/],
        background: [/^green$/],
        'background-color': [/^#0000FF$/]
      }
  },
  allowedIframeHostnames: ['www.youtube.com'],
  allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
	transformTags: {
    'a': sanitize.simpleTransform('a', { 'rel': 'nofollow' }),
    'img': (tagName: string, attribs: sanitize.Attributes) => {
      let img = { tagName, attribs };
      img.attribs['alt'] = 'transformed' ;
      return img;
    }
  },
  exclusiveFilter: function(frame: sanitize.IFrame) {
    return frame.tag === 'a' && !frame.text.trim();
  },
  allowedSchemesByTag: {
    'a': ['http', 'https']
  },
  allowProtocolRelative: false
};

let unsafe = '<div><script>alert("hello");</script></div>';

let safe = sanitize(unsafe, options);

options.parser = {
    decodeEntities: true
};

safe = sanitize(unsafe, options);
