

// From: https://mrrio.github.io/jsPDF/examples/basic.html

import * as jsPDF from 'jspdf';

function test_simple_two_page_document() {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');
    doc.save('Test.pdf');
}

function test_add_pages_with_different_format() {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.addPage('a5', 'l');
    doc.text(20, 20, 'Do you like that?');
    doc.addPage('c6');
    doc.text(20, 20, 'Do you like that?');
    doc.addPage([595.28, 841.89]);
    doc.text(20, 20, 'Do you like that?');
    doc.save('Test.pdf');
}

function test_landscape() {
    var doc = new jsPDF('landscape');
    doc.text(20, 20, 'Hello landscape world!');
    doc.save('Test.pdf');
}

function test_metadata() {
    var doc = new jsPDF();
    doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
    doc.setProperties({
        title: 'Title',
        subject: 'This is the subject',
        author: 'James Hall',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'MEEE'
    });
    doc.save('Test.pdf');
}

function test_user_input() {
    var doc = new jsPDF();
    doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
    doc.setProperties({
        title: 'Title',
        subject: 'This is the subject',
        author: 'James Hall',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'MEEE'
    });
    doc.save('Test.pdf');
}

function test_font_sizes() {
    var doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(20, 20, 'This is a title');
    doc.setFontSize(16);
    doc.text(20, 30, 'This is some normal sized text underneath.');
    doc.save('Test.pdf');
}

function test_font_types() {
    var doc = new jsPDF();
    doc.text(20, 20, 'This is the default font.');
    doc.setFont("courier");
    doc.text(20, 30, 'This is courier normal.');
    doc.setFont("times");
    doc.setFontType("italic");
    doc.text(20, 40, 'This is times italic.');
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.text(20, 50, 'This is helvetica bold.');
    doc.setFont("courier");
    doc.setFontType("bolditalic");
    doc.text(20, 60, 'This is courier bolditalic.');
    doc.save('Test.pdf');
}

function test_text_colors() {
    var doc = new jsPDF();
    doc.setTextColor(100);
    doc.text(20, 20, 'This is gray.');
    doc.setTextColor(150);
    doc.text(20, 30, 'This is light gray.');
    doc.setTextColor(255, 0, 0);
    doc.text(20, 40, 'This is red.');
    doc.setTextColor(0, 255, 0);
    doc.text(20, 50, 'This is green.');
    doc.setTextColor(0, 0, 255);
    doc.text(20, 60, 'This is blue.');
    doc.setTextColor('#FF0000');
    doc.text(20, 60, 'This is red.');
    doc.save('Test.pdf');
}

function test_font_metrics_based_line_sizing_split() {
    var pdf = new jsPDF('p', 'in', 'letter');
    var sizes:number[] = [12, 16, 20];
    var fonts = [['Times', 'Roman'], ['Helvetica', ''], ['Times', 'Italic']];
    var font:string[];
    var size:number;
    var lines:any[];
    var verticalOffset = 0.5; // inches on a 8.5 x 11 inch sheet.
    var loremipsum = 'Lorem ipsum dolor sit amet, ...';
    for (var i in fonts) {
        if (fonts.hasOwnProperty(i)) {
            font = fonts[i];
            size = sizes[i];
            lines = pdf.setFont(font[0], font[1])
                .setFontSize(size)
                .splitTextToSize(loremipsum, 7.5);
            pdf.text(0.5, verticalOffset + size / 72, lines);
            verticalOffset += (lines.length + 0.5) * size / 72
        }
    }
    pdf.save('Test.pdf');
}

function test_simple_custom_size_document() {
    var doc = new jsPDF('l', 'px', [500, 200]);
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');
    doc.save('Test.pdf');
}

function test_from_html() {
    var pdf = new jsPDF('p', 'pt', 'letter')
        , source = document.getElementById('#fromHTMLtestdiv')
        , specialElementHandlers = {
        '#bypassme': function (element:HTMLElement, renderer:any) {
            return true
        }
    };
    var margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };

    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , margins.left // x coord
        , margins.top // y coord
        , {
            'width': margins.width // max width of content on PDF
            , 'elementHandlers': specialElementHandlers
        },
        function (dispose:any) {
            pdf.save('Test.pdf');
        },
        margins
    )
}

function test_rect_squares() {
    var doc = new jsPDF();
    doc.rect(20, 20, 10, 10); // empty square
    doc.rect(40, 20, 10, 10, 'F'); // filled square
    doc.setDrawColor(255, 0, 0);
    doc.rect(60, 20, 10, 10); // empty red square
    doc.setDrawColor(255, 0, 0);
    doc.rect(80, 20, 10, 10, 'FD'); // filled square with red borders
    doc.setDrawColor(0);
    doc.setFillColor(255, 0, 0);
    doc.rect(100, 20, 10, 10, 'F'); // filled red square
    doc.setDrawColor(0);
    doc.setFillColor(255, 0, 0);
    doc.rect(120, 20, 10, 10, 'FD'); // filled red square with black borders
    doc.setDrawColor('#000');
    doc.setFillColor('#FFFFFF');
    doc.roundedRect(140, 20, 10, 10, 3, 3, 'FD'); //  Black square with rounded corners
    doc.save('Test.pdf');
}

function test_lines() {
    var doc = new jsPDF();
    doc.line(20, 20, 60, 20); // horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 25, 60, 25);
    doc.setLineWidth(1);
    doc.line(20, 30, 60, 30);
    doc.setLineWidth(1.5);
    doc.line(20, 35, 60, 35);
    doc.setDrawColor(255, 0, 0); // draw red lines
    doc.setLineWidth(0.1);
    doc.line(100, 20, 100, 60); // vertical line
    doc.setLineWidth(0.5);
    doc.line(105, 20, 105, 60);
    doc.setLineWidth(1);
    doc.line(110, 20, 110, 60);
    doc.setLineWidth(1.5);
    doc.line(115, 20, 115, 60);
    doc.save('Test.pdf');
}

function test_circles_ellipses() {
    var doc = new jsPDF();
    doc.ellipse(40, 20, 10, 5);
    doc.setFillColor(0, 0, 255);
    doc.ellipse(80, 20, 10, 5, 'F');
    doc.setLineWidth(1);
    doc.setDrawColor(0);
    doc.setFillColor(255, 0, 0);
    doc.circle(120, 20, 5, 'FD');
    doc.save('Test.pdf');
}

function test_triangles() {
    var doc = new jsPDF();
    doc.triangle(60, 100, 60, 120, 80, 110, 'FD');
    doc.setLineWidth(1);
    doc.setDrawColor(255, 0, 0);
    doc.setFillColor(0, 0, 255);
    doc.triangle(100, 100, 110, 100, 120, 130, 'FD');
    doc.save('My file.pdf');
}

function test_images() {
    var getImageFromUrl = function (url:string, callback:Function) {
        var img = new Image();
        img.onerror = function () {
            alert('Cannot load image: "' + url + '"');
        };
        img.onload = function () {
            callback(img);
        };
        img.src = url;
    };

    var createPDF = function (imgData:string) {
        var doc = new jsPDF();
        doc.addImage(imgData, 'JPEG', 10, 10, 50, 50, 'monkey'); // Cache the image using the alias 'monkey'
        doc.addImage('monkey', 70, 10, 100, 120); // use the cached 'monkey' image, JPEG is optional regardless
        doc.addImage({
            imageData: imgData,
            angle: -20,
            x: 10,
            y: 78,
            w: 45,
            h: 58
        });
        doc.output('datauri');
    };
    getImageFromUrl('thinking-monkey.jpg', createPDF);
}

function test_add_html() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(document.body, function () {
        var string = pdf.output('datauristring');
        document.getElementsByClassName('preview-pane')[0].setAttribute('src', string);
    });
}
