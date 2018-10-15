import RewritingStream from 'parse5-html-rewriting-stream';

const rewritingStream = new RewritingStream();
rewritingStream.on('startTag', (startTag, rawHtml) => {
  startTag.tagName; // $ExpectType string
  startTag.selfClosing; // $ExpectType boolean
  rawHtml; // $ExpectType string

  rewritingStream.emitStartTag(startTag); // $ExpectType void
});
