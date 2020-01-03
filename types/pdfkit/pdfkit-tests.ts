import PDFGradient = require('pdfkit/js/gradient');

var PDFRadialGradiant = PDFGradient.PDFRadialGradiant;
var PDFLinearGradient = PDFGradient.PDFLinearGradient;

import mtext = require('pdfkit/js/mixins/text');

import PDFDocument = require('pdfkit');

import font = require('pdfkit/js/mixins/fonts');
import pdfData = require('pdfkit/js/data');
import text = require('pdfkit/js/mixins/text');

font.registerFont('Arial');
text.widthOfString('Kila', { ellipsis: true });

var doc = new PDFDocument({
    compress: false,
    size: [526, 525],
    autoFirstPage: true,
    ownerPassword: 'ownerPassword',
    permissions: {
        modifying: true,
        annotating: false,
        printing: 'lowResolution'
    }
});

doc.addPage({
    margin: 50,
});

doc.addPage({
    margins: {
        top: 50,
        bottom: 50,
        left: 72,
        right: 72,
    },
});

doc.addPage({
    layout: 'landscape',
});

doc.info.Title = 'Sample';
doc.info.Author = 'kila Mogrosso';

// Create basic shapes
doc.moveTo(0, 20)
    .lineTo(100, 160)
    .quadraticCurveTo(130, 200, 150, 120)
    .lineTo(400, 90)
    .strokeColor([255, 0, 0], 1)
    .strokeColor([255, 0, 0])
    .stroke();

//SVG Paths
doc.path('M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90').stroke();

//Rectangle shape helper sample
doc.rect(100, 200, 100, 100);
// Rounded rectangle
doc.roundedRect(150, 250, 150, 150, 10);

//polygon
doc.polygon([100, 0], [50, 100], [50, 100]);

doc.lineWidth(25);
doc.lineCap('butt')
    .moveTo(50, 20)
    .lineTo(100, 20)
    .stroke();
doc.lineCap('round')
    .moveTo(150, 20)
    .lineTo(200, 20)
    .stroke();
doc.lineCap('square')
    .moveTo(250, 20)
    .circle(275, 30, 15)
    .stroke();
doc.lineJoin('miter')
    .rect(50, 100, 50, 50)
    .stroke();
doc.lineJoin('round')
    .rect(150, 100, 50, 50)
    .stroke();
doc.lineJoin('bevel')
    .rect(250, 100, 50, 50)
    .stroke();

doc.circle(100, 50, 50)
    .lineWidth(3)
    .fillOpacity(0.8)
    .fillAndStroke('red', '#900');

var grad = doc
    .linearGradient(50, 0, 150, 100)
    .stop(0, 'green')
    .stop(1, 'red');

doc.rect(50, 0, 100, 100).fill(grad);

doc.rect(150, 0, 25, 25).fill();

doc.circle(100, 50, 50)
    .dash(5, {
        space: 10,
    })
    .stroke();

var rgrad = doc.radialGradient(300, 50, 0, 300, 50, 50);
rgrad.stop(0, 'orange', 0).stop(1, 'orange', 1);
doc.circle(300, 50, 50).fill(rgrad);

doc.fillColor('red')
    .translate(-100, -50)
    .scale(0.8);

doc.path('M 250,75 L 323,301 131,161 369,161 177,301 z').fill('non-zero');

doc.translate(280, 0)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('even-odd');

doc.circle(100, 100, 100).clip();

doc.fontSize(25)
    .fillColor('blue')
    .text('This is a link!', 20, 0);

var width = doc.widthOfString('This is a link!');

var height = doc.currentLineHeight();

doc.underline(20, 0, width, height, {
    color: 'blue',
}).link(20, 0, width, height, 'http://google.com/');

doc.moveDown()
    .fillColor('black')
    .highlight(20, doc.y, doc.widthOfString('This text is highlighted!'), height)
    .text('This text is highlighted!');

doc.moveDown()
    .strike(20, doc.y, doc.widthOfString('STRIKE!'), height)
    .text('STRIKE!');

doc.image('images/test.jpeg', 0, 15, {
    width: 300,
}).text('Proprotional to width', 0, 0);

doc.image('images/test.jpeg', 320, 15, {
    fit: [100, 100],
})
    .rect(320, 15, 100, 100)
    .stroke()
    .text('Fit', 320, 0);

doc.image('images/test.jpeg', 320, 145, {
    width: 200,
    height: 100,
}).text('Stretch', 320, 130);

doc.image('images/test.jpeg', 320, 280, {
    scale: 0.25,
}).text('Scale', 320, 265);

doc.image(
    {
        /* something like a buffer */
    },
    {
        scale: 0.25,
    },
).text('Scale', 320, 265);

doc.text('Scale', { align: 'justify' });

doc.text('Baseline - string literal', { baseline: 'alphabetic' });

doc.text('Baseline - numeric', { baseline: 10 });

doc.text('Text with features', { features: [ "kern" ] });

doc.goTo(0, 0, 0, 0, 'lorem');

doc.image('path/to/image.png', {
    fit: [250, 300],
    align: 'center',
    valign: 'center',
});

doc.image('path/to/image.png', {
    cover: [250, 300],
});

doc.image('path/to/image.png', {
    link: {},
    goTo: {},
    destination: 'lorem',
});


// Subclassing
class SubPDFDocument extends PDFDocument {
    constructor(options:PDFKit.PDFDocumentOptions) {
        super(options);
    }

    // override
    text(text: string | number, x?:number | PDFKit.Mixins.TextOptions, y?:number, options?:PDFKit.Mixins.TextOptions):this {
        if (typeof text === "string") {
            return super.text(text, options);
        }
        else {
            return super.text(text + "", options);
        }
    }

    // new method
    segment(xa:number, ya:number, xb:number, yb:number):this {
        this.moveTo(xa, ya);
        this.lineTo(xb, yb);
        return this;
    }
}

var subDoc = new SubPDFDocument({});

subDoc.moveTo(subDoc.page.width / 2, subDoc.page.height / 2).text(10);
subDoc.lineWidth(3).segment(10, subDoc.page.width - 10, subDoc.page.height - 10, 10).stroke("#00FFFF");
