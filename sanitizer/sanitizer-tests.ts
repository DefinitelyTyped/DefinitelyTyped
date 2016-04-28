
import sanitizer = require('sanitizer');

// example copied from the tests https://github.com/theSmaw/Caja-HTML-Sanitizer/blob/master/test/test-sanitizer.js#L346
var events:any[] = [];
var addTextEvent = function(type:string, text:string, param:any) {
  var n = events.length;

  if (events[n - 3] === type && events[n - 1] === param) {
    events[n - 2] += text;
  } else {
    events.push(type, text, param);
  }
};

sanitizer.makeSaxParser({
  startTag: function(name, attribs, param) {
    events.push('startTag', name + '[' + attribs.join(';') + ']', param);
  },

  endTag: function(name, param) {
    events.push('endTag', name, param);
  },

  pcdata: function(text, param) {
    addTextEvent('pcdata', text, param);
  },

  cdata: function(text, param) {
    addTextEvent('cdata', text, param);
  },

  rcdata: function(text, param) {
    addTextEvent('rcdata', text, param);
  },

  comment: function(text, param) {
    events.push('comment', text, param);
  },

  startDoc: function(param) {
    events.push('startDoc', '', param);
  },

  endDoc: function(param) {
    events.push('endDoc', '', param);
  }
});
sanitizer.escape('<script>alert("hi")</script>');
sanitizer.sanitize('<script>alert("hi")</script>');
sanitizer.normalizeRCData('<script>alert("hi")</script>');
sanitizer.unescapeEntities('<script>alert("hi")</script>');
