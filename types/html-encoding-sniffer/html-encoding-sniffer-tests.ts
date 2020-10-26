import sniffHTMLEncoding = require('html-encoding-sniffer');
import whatwgEncoding = require('whatwg-encoding');
import MIMEType = require('whatwg-mimetype');

// https://github.com/jsdom/jsdom/blob/59fa79518da02dc2f098e989cfae3bdb24449f66/lib/api.js#L290-L310
function normalizeHTML(
    html: string | ArrayBufferView | ArrayBuffer | Buffer = '',
    mimeType: MIMEType,
): {
    html: string;
    encoding: string;
} {
    let encoding = 'UTF-8';

    if (ArrayBuffer.isView(html)) {
        html = Buffer.from(html.buffer, html.byteOffset, html.byteLength);
    } else if (html instanceof ArrayBuffer) {
        html = Buffer.from(html);
    }

    if (Buffer.isBuffer(html)) {
        encoding = sniffHTMLEncoding(html, {
            defaultEncoding: mimeType.isXML() ? 'UTF-8' : 'windows-1252',
            transportLayerEncodingLabel: mimeType.parameters.get('charset'),
        });
        html = whatwgEncoding.decode(html, encoding);
    } else {
        html = String(html);
    }

    return { html, encoding };
}
